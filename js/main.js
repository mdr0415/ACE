// Current time update
function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const timeString = `${hours}:${minutes}`;

    const timeElements = document.querySelectorAll('[id$="-time"], #current-time');
    timeElements.forEach(el => {
        if (el) el.textContent = timeString;
    });
}

// Update time every minute
setInterval(updateTime, 60000);
updateTime();

// Screen navigation
function showScreen(screenId) {
    // Hide all screens
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => screen.classList.remove('active'));

    // Show selected screen
    const selectedScreen = document.getElementById(screenId);
    if (selectedScreen) {
        selectedScreen.classList.add('active');
    }

    // Update button states - Remove all active classes first
    const buttons = document.querySelectorAll('.screen-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    // Find and activate the corresponding button by checking onclick attribute
    buttons.forEach(btn => {
        const onclickAttr = btn.getAttribute('onclick');
        if (onclickAttr && onclickAttr.includes(`'${screenId}'`)) {
            btn.classList.add('active');
        }
    });

    // Special case: If showing result screen, ensure results/chart are displayed
    if (screenId === 'result') {
        displayDiagnosisResult();
    }

    // Scroll to top
    if (selectedScreen) {
        selectedScreen.scrollTop = 0;
    }
}

// Category card selection
document.addEventListener('DOMContentLoaded', function () {
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', function () {
            categoryCards.forEach(c => c.classList.remove('selected'));
            this.classList.add('selected');
        });
    });
});

// Diagnosis analysis
function analyzeDiagnosis() {
    const score = parseInt(document.getElementById('topikScore').value);
    const level = document.getElementById('topikLevel').value;

    let grade = '';
    if (level === 'TOPIK I') {
        if (score >= 80) grade = '2급';
        else if (score >= 40) grade = '1급';
        else grade = '불합격';
    } else {
        if (score >= 230) grade = '6급';
        else if (score >= 190) grade = '5급';
        else if (score >= 150) grade = '4급';
        else if (score >= 120) grade = '3급';
        else grade = '불합격';
    }

    // Store result for result screen
    localStorage.setItem('diagnosisResult', JSON.stringify({
        level: level,
        grade: grade,
        score: score
    }));

    // Show result screen
    showScreen('result');
    displayDiagnosisResult();
}

// Display diagnosis result
function displayDiagnosisResult() {
    const result = JSON.parse(localStorage.getItem('diagnosisResult') || '{}');

    if (result.grade) {
        document.getElementById('resultLevel').textContent = `${result.level} - ${result.grade}`;
        document.getElementById('resultScore').textContent = `총점: ${result.score}점`;

        // Calculate progress for next level
        let currentThreshold = 0;
        let nextThreshold = 300;

        if (result.level === 'TOPIK II') {
            if (result.grade === '3급') {
                currentThreshold = 120;
                nextThreshold = 150;
            } else if (result.grade === '4급') {
                currentThreshold = 150;
                nextThreshold = 190;
            } else if (result.grade === '5급') {
                currentThreshold = 190;
                nextThreshold = 230;
            }
        }

        const pointsNeeded = nextThreshold - result.score;
        const progress = ((result.score - currentThreshold) / (nextThreshold - currentThreshold)) * 100;

        document.getElementById('nextGoal').textContent =
            pointsNeeded > 0 ? `다음 단계까지 ${pointsNeeded}점 필요` : '최고 등급 달성!';
        document.getElementById('progressFill').style.width = `${Math.min(progress, 100)}%`;
    }

    // Initialize chart
    initializeProgressChart();
}

// Initialize progress chart
function initializeProgressChart() {
    const ctx = document.getElementById('progressChart');
    if (!ctx) return;

    // Check if Chart library is loaded
    if (typeof Chart === 'undefined') {
        console.error('Chart.js library not loaded');
        return;
    }

    // Destroy existing chart if it exists
    if (window.myProgressChart instanceof Chart) {
        window.myProgressChart.destroy();
    }

    window.myProgressChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [t('month') + ' 1', t('month') + ' 2', t('month') + ' 3', t('month') + ' 4', t('month') + ' 5', t('month') + ' 6'],
            datasets: [{
                label: 'TOPIK ' + t('total_score'),
                data: [140, 155, 165, 170, 175, 180],
                borderColor: '#2a5298',
                backgroundColor: 'rgba(42, 82, 152, 0.1)',
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    min: 100,
                    max: 300
                }
            }
        }
    });
}

// Consultation submission
function submitConsultation() {
    const title = document.getElementById('consultTitle').value;
    const content = document.getElementById('consultContent').value;
    const selectedCategory = document.querySelector('.category-card.selected');

    if (!title || !content) {
        alert('제목과 내용을 입력해주세요.');
        return;
    }

    alert('상담이 접수되었습니다. 담당자가 확인 후 답변드리겠습니다.');

    // Reset form
    document.getElementById('consultTitle').value = '';
    document.getElementById('consultContent').value = '';
}

// Visa score calculation
function calculateVisaScore() {
    const age = parseInt(document.getElementById('visaAge').value);
    const education = document.getElementById('visaEducation').value;
    const topik = document.getElementById('visaTopik').value;
    const program = document.getElementById('visaProgram').checked;
    const stay = document.getElementById('visaStay').checked;

    let score = 0;

    // Age points (max 25 points)
    if (age >= 18 && age <= 24) score += 25;
    else if (age >= 25 && age <= 29) score += 20;
    else if (age >= 30 && age <= 34) score += 15;
    else if (age >= 35 && age <= 39) score += 10;

    // Education points (max 30 points)
    if (education === '박사') score += 30;
    else if (education === '석사') score += 25;
    else if (education === '학사') score += 20;
    else if (education === '고졸') score += 10;

    // TOPIK points (max 30 points)
    if (topik === '6급') score += 30;
    else if (topik === '5급') score += 25;
    else if (topik === '4급') score += 20;
    else if (topik === '3급') score += 15;
    else if (topik === '2급') score += 10;
    else if (topik === '1급') score += 5;

    // Program points
    if (program) score += 5;

    // Stay period points
    if (stay) score += 5;

    // Display result
    const passThreshold = 80;
    const scoreElement = document.getElementById('visaScoreNumber');
    const resultText = document.getElementById('visaResultText');

    scoreElement.textContent = score;

    if (score >= passThreshold) {
        resultText.innerHTML = '✅ 요건 충족!';
        resultText.style.color = '#4CAF50';
        document.getElementById('suggestionBox').style.display = 'none';
    } else {
        const pointsNeeded = passThreshold - score;
        resultText.innerHTML = `❌ ${pointsNeeded}점 부족`;
        resultText.style.color = '#f44336';

        // Generate suggestions
        generateVisaSuggestions(education, topik);
    }
}

// Generate visa improvement suggestions
function generateVisaSuggestions(currentEducation, currentTopik) {
    const suggestionsList = document.getElementById('suggestionsList');
    suggestionsList.innerHTML = '';

    // TOPIK suggestions
    const topikLevels = { '없음': 0, '1급': 5, '2급': 10, '3급': 15, '4급': 20, '5급': 25, '6급': 30 };
    const currentTopikPoints = topikLevels[currentTopik] || 0;

    if (currentTopik !== '6급') {
        const suggestions = [
            { level: '5급', points: 25, label: 'TOPIK 5급 취득' },
            { level: '6급', points: 30, label: 'TOPIK 6급 취득' }
        ];

        suggestions.forEach(sug => {
            if (topikLevels[sug.level] > currentTopikPoints) {
                const gainPoints = topikLevels[sug.level] - currentTopikPoints;
                suggestionsList.innerHTML += `
                    <div class="suggestion-item">
                        <strong>${sug.label}</strong>
                        <div style="font-size: 13px; color: #666; margin-top: 5px;">→ +${gainPoints}점 (현재 ${currentTopik})</div>
                    </div>
                `;
            }
        });
    }

    // Education suggestions
    const educationPoints = { '고졸': 10, '학사': 20, '석사': 25, '박사': 30 };
    const currentEduPoints = educationPoints[currentEducation] || 0;

    if (currentEducation !== '박사') {
        const eduSuggestions = [
            { level: '석사', points: 25, label: '석사 학위 취득' },
            { level: '박사', points: 30, label: '박사 학위 취득' }
        ];

        eduSuggestions.forEach(sug => {
            if (educationPoints[sug.level] > currentEduPoints) {
                const gainPoints = educationPoints[sug.level] - currentEduPoints;
                suggestionsList.innerHTML += `
                    <div class="suggestion-item">
                        <strong>${sug.label}</strong>
                        <div style="font-size: 13px; color: #666; margin-top: 5px;">→ +${gainPoints}점 (현재 ${currentEducation})</div>
                    </div>
                `;
            }
        });
    }
}

// Chatbot functionality
function sendChatMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();

    if (!message) return;

    // Add user message
    addChatMessage(message, 'user');
    input.value = '';

    // Simulate bot response
    setTimeout(() => {
        const response = getBotResponse(message);
        addChatMessage(response, 'bot');
    }, 1000);
}

function handleChatEnter(event) {
    if (event.key === 'Enter') {
        sendChatMessage();
    }
}

function sendQuickMessage(message) {
    document.getElementById('chatInput').value = message;
    sendChatMessage();
}

function addChatMessage(text, sender) {
    const messagesContainer = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}`;

    const bubbleDiv = document.createElement('div');
    bubbleDiv.className = 'message-bubble';
    bubbleDiv.innerHTML = text;

    messageDiv.appendChild(bubbleDiv);
    messagesContainer.appendChild(messageDiv);

    // Scroll to bottom
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function getBotResponse(message) {
    const responses = {
        '수강신청': '2026학년도 1학기 수강신청 일정은 다음과 같습니다:<br><br>📅 <strong>1차 수강신청</strong><br>2026.2.5 (월) ~ 2.7 (수)<br><br>📅 <strong>2차 수강신청</strong><br>2026.2.19 (월) ~ 2.21 (수)<br><br>외국인 유학생은 국제교류과에서 먼저 상담을 받으시기 바랍니다.',
        '학사': '학사 규정은 학교 홈페이지에서 확인하실 수 있습니다. 구체적으로 어떤 내용이 궁금하신가요?<br>• 수강신청<br>• 휴학/복학<br>• 졸업요건<br>• 성적처리',
        '장학금': '외국인 유학생을 위한 장학금 종류는 다음과 같습니다:<br><br>1️⃣ 외국인 신입생 장학금<br>2️⃣ 성적우수 장학금<br>3️⃣ TOPIK 우수자 장학금<br>4️⃣ 근로장학금<br><br>자세한 내용은 학생처 장학팀(☎ 063-xxx-xxxx)으로 문의해주세요.',
        '졸업': '졸업 요건은 다음과 같습니다:<br><br>✅ 전공학점 이수<br>✅ 교양학점 이수<br>✅ 총 이수학점 충족<br>✅ 졸업논문 또는 종합시험<br>✅ 영어졸업인증<br><br>구체적인 학점은 학과마다 다르니 소속 학과 사무실에 문의해주세요.',
        '성적': '성적은 각 학기 종강 후 2주 이내에 발표됩니다. 학교 포털 시스템에서 확인하실 수 있습니다.<br><br>성적에 이의가 있으시면 성적 공개 후 1주일 이내에 이의신청을 하실 수 있습니다.'
    };

    // Find matching response
    for (let key in responses) {
        if (message.includes(key)) {
            return responses[key];
        }
    }

    return '죄송합니다. 해당 질문에 대한 답변을 찾지 못했습니다. 😅<br>전문가 상담을 이용하시거나, 다른 질문을 해주세요.';
}

// File upload handling
document.addEventListener('DOMContentLoaded', function () {
    const fileInput = document.getElementById('fileInput');
    const uploadArea = document.getElementById('uploadArea');

    if (fileInput && uploadArea) {
        fileInput.addEventListener('change', function (e) {
            const file = e.target.files[0];
            if (file) {
                handleFileUpload(file);
            }
        });

        // Paste event
        uploadArea.addEventListener('paste', function (e) {
            const items = e.clipboardData.items;
            for (let i = 0; i < items.length; i++) {
                if (items[i].type.indexOf('image') !== -1) {
                    const blob = items[i].getAsFile();
                    handleFileUpload(blob);
                    break;
                }
            }
        });
    }
});

function handleFileUpload(file) {
    const uploadArea = document.getElementById('uploadArea');
    const reader = new FileReader();

    reader.onload = function (e) {
        uploadArea.innerHTML = `
            <div class="upload-icon">✅</div>
            <div class="upload-text" style="color: #4CAF50; font-weight: 600;">이미지 업로드 완료</div>
            <div class="upload-text" style="font-size: 12px;">${file.name}</div>
        `;
    };

    reader.readAsDataURL(file);
}

// Add smooth scroll behavior
document.querySelectorAll('.screen').forEach(screen => {
    screen.style.scrollBehavior = 'smooth';
});
