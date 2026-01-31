// Multi-language translations
const translations = {
    ko: {
        // Header
        platform_title: "ACE 플랫폼",
        platform_subtitle: "ACADEMICS · COMMUNITY · EMPLOYMENT",
        platform_description: "외국인 유학생 전주기 통합지원 시스템",

        // Navigation
        nav_home: "홈",
        nav_diagnosis: "진단",
        nav_expert: "전문가",
        nav_job: "취업",
        nav_story: "스토리",

        // Screen buttons
        screen_main: "메인",
        screen_diagnosis: "한국어 진단",
        screen_result: "진단 결과",
        screen_consultation: "전문가 상담",
        screen_chatbot: "AI 상담",
        screen_job: "취업정보",
        screen_story: "선배 스토리",
        screen_visa: "비자 계산기",

        // Main screen
        section_academics: "A-Academics (학업)",
        section_community: "C-Community (생활)",
        section_employment: "E-Employment (진로)",

        feature_korean_test: "한국어 진단",
        feature_korean_desc: "레벨 테스트",
        feature_topik: "학교생활 안내",
        feature_topik_desc: "학사 정보 안내",
        feature_consultation: "전문가 상담",
        feature_consultation_desc: "담당자 직접 상담",
        feature_ai: "한국생활 안내",
        feature_ai_desc: "주거·의료·법률",
        feature_job_info: "지역 취업정보",
        feature_job_desc: "학교가족회사",
        feature_job_public: "채용정보",
        feature_job_public_desc: "실시간 채용정보",
        feature_visa: "F-2-R 비자",
        feature_visa_desc: "점수 계산기",
        feature_story: "선배 스토리",
        feature_story_desc: "취업 성공 사례",
        feature_portfolio: "학생 창작물",
        feature_portfolio_desc: "우리의 작품집",

        // Portfolio screen
        portfolio_title: "← 학생 창작물",
        portfolio_subtitle: "우리의 작품집",
        portfolio_intro_desc: "바이브코딩으로 만든 우리들의 소중한 프로젝트를 공유하고 함께 성장하는 공간입니다.",
        upload_your_work: "나의 작품 업로드하기",
        upload_desc: "바이브코딩 프로젝트 링크를 공유해 주세요!",

        // Diagnosis screen
        diagnosis_title: "← 한국어 레벨 진단",
        diagnosis_step1: "1️⃣ 한국어 레벨 테스트 선택",
        diagnosis_step2: "2️⃣ 결과 화면 업로드",
        diagnosis_step3: "3️⃣ 정보 입력",
        goto_topik: "시작하기 →",
        test_option_topik: "TOPIK 공식 기출문제",
        test_option_topik_desc: "한국어능력시험 공식 홈페이지",
        test_option_sejong: "세종학당 레벨테스트",
        test_option_sejong_desc: "세종학당재단 공식 레벨 테스트",
        test_option_nuri: "누리-세종학당 온라인",
        test_option_nuri_desc: "온라인 한국어 레벨 테스트",
        upload_image: "이미지를 여기에 붙여넣으세요",
        upload_hint: "(Ctrl + V)",
        or_text: "또는",
        select_file: "파일 선택",
        test_type: "시험 구분",
        total_score: "총점",
        score_placeholder: "점수를 입력하세요",
        analyze_result: "결과 분석하기",

        // Result screen
        result_title: "← 진단 결과",
        current_level: "현재 한국어 수준",
        total_score_label: "총점",
        growth_timeline: "📈 성장 타임라인",
        next_goal: "💪 다음 목표까지",
        points_needed: "달성까지 {points}점 필요",
        recommended_courses: "📚 추천 강좌",
        view_schedule: "추천 시간표 보기",

        // Consultation screen
        consultation_title: "← 전문가 상담",
        select_category: "카테고리 선택",
        category_academic: "학업",
        category_life: "생활",
        category_career: "진로",
        category_emotion: "정서",
        category_admin: "행정",
        consultation_subject: "제목",
        consultation_content: "내용",
        subject_placeholder: "상담 제목을 입력하세요",
        content_placeholder: "상담 내용을 자세히 작성해주세요",
        submit: "제출하기",
        my_consultations: "내 상담 내역",
        status_completed: "✅ 답변완료",
        status_processing: "🔄 확인중",
        status_pending: "⏱️ 접수됨",

        // Chatbot screen
        chatbot_title: "← AI 상담",
        frequent_questions: "자주 묻는 질문",
        tag_registration: "📚 수강신청",
        tag_regulations: "📋 학사 규정",
        tag_scholarship: "💰 장학금",
        tag_graduation: "🎓 졸업 요건",
        tag_grades: "📝 성적 처리",
        chat_placeholder: "메시지를 입력하세요...",
        send: "전송",

        // Job screen
        job_title: "← 지역 내 취업정보",
        all_regions: "전체 지역",
        all_industries: "전체 업종",
        filter_foreign: "외국인 채용 가능만",
        filter_visa: "비자 스폰서 가능",
        job_count: "채용 공고",
        jobs_available: "건",
        foreign_friendly: "✅ 외국인 채용 가능",
        visa_sponsor: "✅ E-7 비자 스폰서",
        dormitory: "🏠 기숙사 제공",

        // Visa screen
        visa_title: "← F-2-R 비자 점수 계산기",
        basic_info: "기본 정보",
        age: "나이",
        education: "학력",
        high_school: "고졸",
        bachelor: "학사",
        master: "석사",
        doctorate: "박사",
        language_ability: "언어 능력",
        other_info: "기타",
        integration_program: "사회통합프로그램 이수",
        stay_period: "한국 체류 3년 이상",
        calculate_score: "점수 계산하기",
        current_score: "현재 점수",
        standard_score: "기준 점수: 80점",
        points_short: "점 부족",
        requirement_met: "✅ 요건 충족!",
        improvement_tips: "💡 점수 올리는 방법",

        // Story screen
        story_title: "← 선배 취업 스토리",
        success_story_hub: "🎓 Success Story Hub",
        success_story_desc: "선배들의 취업 성공 경험을 공유합니다",
        all: "전체",
        manufacturing: "제조업",
        service: "서비스업",
        it: "IT",
        my_journey: "💬 나의 취업 여정",
        preparation_timeline: "📅 준비 타임라인",
        interview_experience: "💼 면접 경험담",
        visa_process: "🛂 비자 전환 과정",
        ask_question: "💬 질문하기",
        request_mentoring: "🙋 멘토링 신청",
        recent_qa: "💬 최근 질문 & 답변",
        view_more: "더 많은 질문 보기",

        // Common
        month: "월",
        grade: "급",
        none: "없음",
        year_suffix: "학년",
        age_placeholder: "나이를 입력하세요"
    },

    en: {
        // Header
        platform_title: "ACE Platform",
        platform_subtitle: "ACADEMICS · COMMUNITY · EMPLOYMENT",
        platform_description: "Integrated Support System for International Students",

        // Navigation
        nav_home: "Home",
        nav_diagnosis: "Test",
        nav_expert: "Expert",
        nav_job: "Jobs",
        nav_story: "Stories",

        // Screen buttons
        screen_main: "Main",
        screen_diagnosis: "Korean Test",
        screen_result: "Test Result",
        screen_consultation: "Expert Consultation",
        screen_chatbot: "AI Chat",
        screen_job: "Job Info",
        screen_story: "Success Stories",
        screen_visa: "Visa Calculator",

        // Main screen
        section_academics: "A-Academics",
        section_community: "C-Community",
        section_employment: "E-Employment",

        feature_korean_test: "Korean Test",
        feature_korean_desc: "Level Assessment",
        feature_topik: "Campus Life Guide",
        feature_topik_desc: "Academic Information",
        feature_consultation: "Expert Consultation",
        feature_consultation_desc: "Direct Support",
        feature_ai: "Life in Korea",
        feature_ai_desc: "Housing·Medical·Legal",
        feature_job_info: "Local Jobs",
        feature_job_desc: "Partner Companies",
        feature_job_public: "Job Information",
        feature_job_public_desc: "Real-time Jobs",
        feature_visa: "F-2-R Visa",
        feature_visa_desc: "Score Calculator",
        feature_story: "Success Stories",
        feature_story_desc: "Alumni Success",
        feature_portfolio: "Student Creations",
        feature_portfolio_desc: "Our Portfolio",

        // Portfolio screen
        portfolio_title: "← Student Creations",
        portfolio_subtitle: "Our Portfolio",
        portfolio_intro_desc: "A space to share our projects made with Vibe Coding and grow together.",
        upload_your_work: "Upload My Work",
        upload_desc: "Please share your Vibe Coding project link!",

        // Diagnosis screen
        diagnosis_title: "← Korean Level Test",
        diagnosis_step1: "1️⃣ Select Korean Level Test",
        diagnosis_step2: "2️⃣ Upload Result Screenshot",
        diagnosis_step3: "3️⃣ Enter Information",
        goto_topik: "Start →",
        test_option_topik: "TOPIK Official Practice",
        test_option_topik_desc: "Official TOPIK Test Website",
        test_option_sejong: "Sejong Institute Level Test",
        test_option_sejong_desc: "Official Sejong Foundation Test",
        test_option_nuri: "Nuri-Sejong Online",
        test_option_nuri_desc: "Online Korean Level Test",
        upload_image: "Paste image here",
        upload_hint: "(Ctrl + V)",
        or_text: "or",
        select_file: "Select File",
        test_type: "Test Type",
        total_score: "Total Score",
        score_placeholder: "Enter your score",
        analyze_result: "Analyze Result",

        // Result screen
        result_title: "← Test Result",
        current_level: "Current Korean Level",
        total_score_label: "Total",
        growth_timeline: "📈 Growth Timeline",
        next_goal: "💪 Next Goal",
        points_needed: "{points} points needed",
        recommended_courses: "📚 Recommended Courses",
        view_schedule: "View Schedule",

        // Consultation screen
        consultation_title: "← Expert Consultation",
        select_category: "Select Category",
        category_academic: "Academic",
        category_life: "Life",
        category_career: "Career",
        category_emotion: "Emotional",
        category_admin: "Admin",
        consultation_subject: "Subject",
        consultation_content: "Content",
        subject_placeholder: "Enter consultation subject",
        content_placeholder: "Please describe your question in detail",
        submit: "Submit",
        my_consultations: "My Consultations",
        status_completed: "✅ Completed",
        status_processing: "🔄 Processing",
        status_pending: "⏱️ Pending",

        // Chatbot screen
        chatbot_title: "← AI Chat",
        frequent_questions: "Frequent Questions",
        tag_registration: "📚 Registration",
        tag_regulations: "📋 Regulations",
        tag_scholarship: "💰 Scholarship",
        tag_graduation: "🎓 Graduation",
        tag_grades: "📝 Grades",
        chat_placeholder: "Type a message...",
        send: "Send",

        // Job screen
        job_title: "← Local Job Information",
        all_regions: "All Regions",
        all_industries: "All Industries",
        filter_foreign: "Foreign-friendly only",
        filter_visa: "Visa sponsor available",
        job_count: "Job Listings",
        jobs_available: "available",
        foreign_friendly: "✅ Foreign-friendly",
        visa_sponsor: "✅ E-7 Visa Sponsor",
        dormitory: "🏠 Dormitory",

        // Visa screen
        visa_title: "← F-2-R Visa Score Calculator",
        basic_info: "Basic Information",
        age: "Age",
        education: "Education",
        high_school: "High School",
        bachelor: "Bachelor",
        master: "Master",
        doctorate: "Doctorate",
        language_ability: "Language Ability",
        other_info: "Other",
        integration_program: "Integration Program Completed",
        stay_period: "3+ years in Korea",
        calculate_score: "Calculate Score",
        current_score: "Current Score",
        standard_score: "Required: 80 points",
        points_short: "points short",
        requirement_met: "✅ Qualified!",
        improvement_tips: "💡 How to Improve",

        // Story screen
        story_title: "← Success Stories",
        success_story_hub: "🎓 Success Story Hub",
        success_story_desc: "Alumni share their success stories",
        all: "All",
        manufacturing: "Manufacturing",
        service: "Service",
        it: "IT",
        my_journey: "💬 My Journey",
        preparation_timeline: "📅 Timeline",
        interview_experience: "💼 Interview Tips",
        visa_process: "🛂 Visa Process",
        ask_question: "💬 Ask Question",
        request_mentoring: "🙋 Request Mentoring",
        recent_qa: "💬 Recent Q&A",
        view_more: "View More",

        // Common
        month: "month",
        grade: "Level",
        none: "None",
        year_suffix: "Year",
        age_placeholder: "Enter your age"
    },

    uz: {
        // Header (Uzbek)
        platform_title: "ACE Platforma",
        platform_subtitle: "AKADEMIK · JAMOA · ISH",
        platform_description: "Xorijiy talabalar uchun yagona yordam tizimi",

        // Navigation
        nav_home: "Bosh sahifa",
        nav_diagnosis: "Test",
        nav_expert: "Mutaxassis",
        nav_job: "Ish",
        nav_story: "Hikoyalar",

        screen_main: "Asosiy",
        screen_diagnosis: "Koreys tili testi",
        screen_result: "Test natijasi",
        screen_consultation: "Mutaxassis maslahat",
        screen_chatbot: "AI suhbat",
        screen_job: "Ish ma'lumotlari",
        screen_story: "Muvaffaqiyat hikoylari",
        screen_visa: "Viza kalkulyatori",

        section_academics: "A-Academics (O'quv)",
        section_community: "C-Community (Hayot)",
        section_employment: "E-Employment (Ish)",

        feature_korean_test: "Koreys tili testi",
        feature_korean_desc: "Daraja baholash",
        feature_topik: "Maktab hayoti yo'riqnomasi",
        feature_topik_desc: "Akademik ma'lumot",
        feature_consultation: "Mutaxassis maslahat",
        feature_consultation_desc: "To'g'ridan-to'g'ri yordam",
        feature_ai: "Koreyada hayot",
        feature_ai_desc: "Uy-joy·Tibbiy·Huquqiy",
        feature_job_info: "Mahalliy ish o'rinlari",
        feature_job_desc: "Hamkor kompaniyalar",
        feature_job_public: "Ish ma'lumotlari",
        feature_job_public_desc: "Real vaqt ish",
        feature_visa: "F-2-R viza",
        feature_visa_desc: "Ball kalkulyatori",
        feature_story: "Muvaffaqiyat hikoylari",
        feature_story_desc: "Bitiruvchilar muvaffaqiyati",
        feature_portfolio: "Talaba ijodlari",
        feature_portfolio_desc: "Bizning portfoliomiz",

        // Portfolio screen (Uzbek)
        portfolio_title: "← Talaba ijodlari",
        portfolio_subtitle: "Bizning portfoliomiz",
        portfolio_intro_desc: "Vibe Coding bilan yaratilgan loyihalarimizni baham ko'rish va birga o'sish uchun maydon.",
        upload_your_work: "Ishimni yuklash",
        upload_desc: "Vibe Coding loyihangiz havolasini ulashing!",

        diagnosis_title: "← Koreys tili darajasi testi",
        diagnosis_step1: "1️⃣ Koreys tili testini tanlash",
        diagnosis_step2: "2️⃣ Natija rasmini yuklash",
        diagnosis_step3: "3️⃣ Ma'lumot kiritish",
        goto_topik: "Boshlash →",
        test_option_topik: "TOPIK rasmiy test",
        test_option_topik_desc: "Rasmiy TOPIK test sayti",
        test_option_sejong: "Sejong Institut testi",
        test_option_sejong_desc: "Rasmiy Sejong jamg'armasi testi",
        test_option_nuri: "Nuri-Sejong onlayn",
        test_option_nuri_desc: "Onlayn koreys tili testi",
        upload_image: "Rasmni shu yerga joylashtiring",
        select_file: "Faylni tanlash",
        test_type: "Test turi",
        total_score: "Jami ball",
        score_placeholder: "Ballingizni kiriting",
        analyze_result: "Natijani tahlil qilish",

        submit: "Yuborish",
        send: "Yuborish",
        all: "Hammasi",
        age: "Yosh",
        age_placeholder: "Yoshingizni kiriting"
    },

    zh: {
        // Header (Chinese)
        platform_title: "ACE 平台",
        platform_subtitle: "学业 · 社区 · 就业",
        platform_description: "外国留学生综合支持系统",

        nav_home: "主页",
        nav_diagnosis: "测试",
        nav_expert: "专家",
        nav_job: "工作",
        nav_story: "故事",

        screen_main: "主页",
        screen_diagnosis: "韩语诊断",
        screen_result: "诊断结果",
        screen_consultation: "专家咨询",
        screen_chatbot: "AI咨询",
        screen_job: "就业信息",
        screen_story: "学长故事",
        screen_visa: "签证计算器",

        section_academics: "A-Academics (学业)",
        section_community: "C-Community (生活)",
        section_employment: "E-Employment (就业)",

        feature_korean_test: "韩语诊断",
        feature_korean_desc: "等级测试",
        feature_topik: "校园生活指南",
        feature_topik_desc: "学务信息",
        feature_consultation: "专家咨询",
        feature_consultation_desc: "直接咨询",
        feature_ai: "韩国生活指南",
        feature_ai_desc: "住房·医疗·法律",
        feature_job_info: "本地就业信息",
        feature_job_desc: "校企合作公司",
        feature_job_public: "招聘信息",
        feature_job_public_desc: "实时招聘",
        feature_visa: "F-2-R签证",
        feature_visa_desc: "分数计算器",
        feature_story: "学长故事",
        feature_story_desc: "就业成功案例",
        feature_portfolio: "学生作品",
        feature_portfolio_desc: "我们的作品集",

        // Portfolio screen (Chinese)
        portfolio_title: "← 学生作品",
        portfolio_subtitle: "我们的作品集",
        portfolio_intro_desc: "分享我们用 Vibe Coding 制作的项目并共同成长的空间。",
        upload_your_work: "上传我的作品",
        upload_desc: "请分享您的 Vibe Coding 项目链接！",

        diagnosis_title: "← 韩语水平诊断",
        diagnosis_step1: "1️⃣ 选择韩语水平测试",
        diagnosis_step2: "2️⃣ 上传结果截图",
        diagnosis_step3: "3️⃣ 输入信息",
        goto_topik: "开始 →",
        test_option_topik: "TOPIK官方真题",
        test_option_topik_desc: "韩国语能力考试官方网站",
        test_option_sejong: "世宗学堂等级测试",
        test_option_sejong_desc: "世宗学堂财团官方测试",
        test_option_nuri: "Nuri-世宗学堂在线",
        test_option_nuri_desc: "在线韩语水平测试",
        upload_image: "在此粘贴图片",
        select_file: "选择文件",
        test_type: "考试类型",
        total_score: "总分",
        score_placeholder: "请输入分数",
        analyze_result: "分析结果",

        submit: "提交",
        send: "发送",
        all: "全部",
        age: "年龄",
        age_placeholder: "请输入年龄"
    },

    vi: {
        // Header (Vietnamese)
        platform_title: "Nền tảng ACE",
        platform_subtitle: "HỌC TẬP · CỘNG ĐỒNG · VIỆC LÀM",
        platform_description: "Hệ thống hỗ trợ tổng hợp cho du học sinh",

        nav_home: "Trang chủ",
        nav_diagnosis: "Kiểm tra",
        nav_expert: "Chuyên gia",
        nav_job: "Việc làm",
        nav_story: "Câu chuyện",

        screen_main: "Trang chủ",
        screen_diagnosis: "Kiểm tra tiếng Hàn",
        screen_result: "Kết quả",
        screen_consultation: "Tư vấn chuyên gia",
        screen_chatbot: "Trò chuyện AI",
        screen_job: "Thông tin việc làm",
        screen_story: "Câu chuyện thành công",
        screen_visa: "Tính điểm visa",

        section_academics: "A-Academics (Học tập)",
        section_community: "C-Community (Cuộc sống)",
        section_employment: "E-Employment (Nghề nghiệp)",

        feature_korean_test: "Kiểm tra tiếng Hàn",
        feature_korean_desc: "Đánh giá trình độ",
        feature_topik: "Hướng dẫn đời sống sinh viên",
        feature_topik_desc: "Thông tin học vụ",
        feature_consultation: "Tư vấn chuyên gia",
        feature_consultation_desc: "Hỗ trợ trực tiếp",
        feature_ai: "Sống tại Hàn Quốc",
        feature_ai_desc: "Nhà ở·Y tế·Pháp luật",
        feature_job_info: "Việc làm địa phương",
        feature_job_desc: "Công ty đối tác",
        feature_job_public: "Thông tin tuyển dụng",
        feature_job_public_desc: "Tuyển dụng thời gian thực",
        feature_visa: "Visa F-2-R",
        feature_visa_desc: "Tính điểm",
        feature_story: "Câu chuyện thành công",
        feature_story_desc: "Thành công của sinh viên cũ",
        feature_portfolio: "Sáng tạo của sinh viên",
        feature_portfolio_desc: "Bộ sưu tập của chúng tôi",

        // Portfolio screen (Vietnamese)
        portfolio_title: "← Sáng tạo của sinh viên",
        portfolio_subtitle: "Bộ sưu tập của chúng tôi",
        portfolio_intro_desc: "Không gian chia sẻ các dự án của chúng tôi được tạo bằng Vibe Coding và cùng nhau phát triển.",
        upload_your_work: "Tải lên tác phẩm của tôi",
        upload_desc: "Vui lòng chia sẻ liên kết dự án Vibe Coding của bạn!",

        diagnosis_title: "← Kiểm tra trình độ tiếng Hàn",
        diagnosis_step1: "1️⃣ Chọn bài kiểm tra tiếng Hàn",
        diagnosis_step2: "2️⃣ Tải lên ảnh chụp kết quả",
        diagnosis_step3: "3️⃣ Nhập thông tin",
        goto_topik: "Bắt đầu →",
        test_option_topik: "Đề thi TOPIK chính thức",
        test_option_topik_desc: "Trang web chính thức TOPIK",
        test_option_sejong: "Kiểm tra cấp độ Sejong",
        test_option_sejong_desc: "Bài kiểm tra chính thức của Quỹ Sejong",
        test_option_nuri: "Nuri-Sejong trực tuyến",
        test_option_nuri_desc: "Kiểm tra tiếng Hàn trực tuyến",
        upload_image: "Dán ảnh vào đây",
        select_file: "Chọn tệp",
        test_type: "Loại bài kiểm tra",
        total_score: "Tổng điểm",
        score_placeholder: "Nhập điểm của bạn",
        analyze_result: "Phân tích kết quả",

        submit: "Gửi",
        send: "Gửi",
        all: "Tất cả",
        age: "Tuổi",
        age_placeholder: "Nhập tuổi của bạn"
    },

    mn: {
        // Header (Mongolian)
        platform_title: "ACE Платформ",
        platform_subtitle: "СУРЛАГА · НИЙГЭМ · АЖИЛ ЭРХЛЭЛТ",
        platform_description: "Гадаад оюутны цогц дэмжлэгийн систем",

        nav_home: "Нүүр",
        nav_diagnosis: "Шалгалт",
        nav_expert: "Мэргэжилтэн",
        nav_job: "Ажил",
        nav_story: "Түүх",

        screen_main: "Үндсэн",
        screen_diagnosis: "Солонгос хэлний шалгалт",
        screen_result: "Үр дүн",
        screen_consultation: "Мэргэжилтний зөвлөгөө",
        screen_chatbot: "AI чат",
        screen_job: "Ажлын мэдээлэл",
        screen_story: "Амжилтын түүх",
        screen_visa: "Визний тооцоолуур",

        section_academics: "A-Academics (Сургалт)",
        section_community: "C-Community (Амьдрал)",
        section_employment: "E-Employment (Ажил)",

        feature_korean_test: "Солонгос хэлний шалгалт",
        feature_korean_desc: "Түвшин тодорхойлох",
        feature_topik: "Оюутны амьдралын гарын авлага",
        feature_topik_desc: "Сургалтын мэдээлэл",
        feature_consultation: "Мэргэжилтний зөвлөгөө",
        feature_consultation_desc: "Шууд дэмжлэг",
        feature_ai: "Солонгост амьдрал",
        feature_ai_desc: "Орон сууц·Эмнэлэг·Хууль",
        feature_job_info: "Орон нутгийн ажил",
        feature_job_desc: "Хамтрагч компаниуд",
        feature_job_public: "Ажлын мэдээлэл",
        feature_job_public_desc: "Бодит цагийн ажлын зар",
        feature_visa: "F-2-R виз",
        feature_visa_desc: "Оноо тооцоолуур",
        feature_story: "Амжилтын түүх",
        feature_story_desc: "Төгсөгчдийн амжилт",
        feature_portfolio: "Оюутны бүтээл",
        feature_portfolio_desc: "Бидний багц",

        // Portfolio screen (Mongolian)
        portfolio_title: "← Оюутны бүтээл",
        portfolio_subtitle: "Бидний багц",
        portfolio_intro_desc: "Vibe Coding-оор хийсэн төслүүдээ хуваалцаж, хамтдаа хөгжих орон зай.",
        upload_your_work: "Бүтээлээ байршуулах",
        upload_desc: "Vibe Coding төслийн холбоосоо хуваалцаарай!",

        diagnosis_title: "← Солонгос хэлний түвшний шалгалт",
        diagnosis_step1: "1️⃣ Солонгос хэлний шалгалт сонгох",
        diagnosis_step2: "2️⃣ Үр дүнгийн зургийг байршуулах",
        diagnosis_step3: "3️⃣ Мэдээлэл оруулах",
        goto_topik: "Эхлэх →",
        test_option_topik: "TOPIK албан ёсны тест",
        test_option_topik_desc: "Албан ёсны TOPIK вэбсайт",
        test_option_sejong: "Сежон хүрээлэнгийн түвшин тодорхойлох",
        test_option_sejong_desc: "Албан ёсны Сежон сангийн тест",
        test_option_nuri: "Нури-Сежон онлайн",
        test_option_nuri_desc: "Онлайн солонгос хэлний тест",
        upload_image: "Зургийг энд буулгах",
        select_file: "Файл сонгох",
        test_type: "Шалгалтын төрөл",
        total_score: "Нийт оноо",
        score_placeholder: "Оноогоо оруулна уу",
        analyze_result: "Үр дүн шинжлэх",

        submit: "Илгээх",
        send: "Илгээх",
        all: "Бүгд",
        age: "Нас",
        age_placeholder: "Насаа оруулна уу"
    },

    si: {
        // Header (Sinhala - Sri Lanka)
        platform_title: "ACE වේදිකාව",
        platform_subtitle: "අධ්‍යාපන · ප්‍රජාව · රැකියා",
        platform_description: "විදේශීය සිසුන් සඳහා ඒකාබද්ධ ආධාර පද්ධතිය",

        nav_home: "මුල් පිටුව",
        nav_diagnosis: "පරීක්ෂණය",
        nav_expert: "විශේෂඥ",
        nav_job: "රැකියා",
        nav_story: "කථා",

        screen_main: "ප්‍රධාන",
        screen_diagnosis: "කොරියානු භාෂා පරීක්ෂණය",
        screen_result: "පරීක්ෂණ ප්‍රතිඵල",
        screen_consultation: "විශේෂඥ උපදෙස්",
        screen_chatbot: "AI කතාබස්",
        screen_job: "රැකියා තොරතුරු",
        screen_story: "සාර්ථක කථා",
        screen_visa: "වීසා ගණකය",

        section_academics: "A-Academics (අධ්‍යාපන)",
        section_community: "C-Community (ජීවිත)",
        section_employment: "E-Employment (වෘත්තීය)",

        feature_korean_test: "කොරියානු පරීක්ෂණය",
        feature_korean_desc: "මට්ටම තක්සේරුව",
        feature_topik: "විශ්වවිද්‍යාල ජීවිත මාර්ගෝපදේශය",
        feature_topik_desc: "අධ්‍යාපන තොරතුරු",
        feature_consultation: "විශේෂඥ උපදෙස්",
        feature_consultation_desc: "සෘජු සහාය",
        feature_ai: "කොරියාවේ ජීවිතය",
        feature_ai_desc: "නිවාස·වෛද්‍ය·නීතිය",
        feature_job_info: "දේශීය රැකියා",
        feature_job_desc: "සහභාගී සංවිධාන",
        feature_job_public: "රැකියා තොරතුරු",
        feature_job_public_desc: "මයුරු කාල රැකියා",
        feature_visa: "F-2-R වීසා",
        feature_visa_desc: "ලකුණු ගණකය",
        feature_story: "සාර්ථක කථා",
        feature_story_desc: "ශිෂ්‍ය සාර්ථකත්වය",
        feature_portfolio: "ශිෂ්‍ය නිර්මාණ",
        feature_portfolio_desc: "අපගේ කළඹ",

        // Portfolio screen (Sinhala)
        portfolio_title: "← ශිෂ්‍ය නිර්මාණ",
        portfolio_subtitle: "අපගේ කළඹ",
        portfolio_intro_desc: "Vibe Coding සමඟින් සාදන ලද අපගේ ව්‍යාපෘති බෙදා ගැනීමට සහ එකට වර්ධනය වීමට ඉඩක්.",
        upload_your_work: "මගේ නිර්මාණය උඩුගත කරන්න",
        upload_desc: "කරුණාකර ඔබේ Vibe Coding ව්‍යාපෘති සබැඳිය බෙදා ගන්න!",

        diagnosis_title: "← කොරියානු මට්ටම පරීක්ෂණය",
        diagnosis_step1: "1️⃣ කොරියානු පරීක්ෂණය තෝරන්න",
        diagnosis_step2: "2️⃣ ප්‍රතිඵල රූපය උඩුගත කරන්න",
        diagnosis_step3: "3️⃣ තොරතුරු ඇතුළත් කරන්න",
        goto_topik: "ආරම්භ කරන්න →",
        test_option_topik: "TOPIK නිල පරීක්ෂණ",
        test_option_topik_desc: "නිල TOPIK වෙබ් අඩවිය",
        test_option_sejong: "Sejong ආයතන මට්ටම පරීක්ෂණය",
        test_option_sejong_desc: "නිල Sejong පදනමේ පරීක්ෂණය",
        test_option_nuri: "Nuri-Sejong ඔන්ලයින්",
        test_option_nuri_desc: "ඔන්ලයින් කොරියානු පරීක්ෂණය",
        upload_image: "මෙහි පින්තූරය අලවන්න",
        select_file: "ගොනුව තෝරන්න",
        test_type: "පරීක්ෂණ වර්ගය",
        total_score: "මුළු ලකුණු",
        score_placeholder: "ඔබගේ ලකුණු ඇතුළත් කරන්න",
        analyze_result: "ප්‍රතිඵල විශ්ලේෂණය",

        submit: "ඉදිරිපත් කරන්න",
        send: "යවන්න",
        all: "සියල්ල",
        age: "වයස",
        age_placeholder: "ඔබගේ වයස ඇතුළත් කරන්න"
    }
};

// Current language
let currentLanguage = 'ko';

// Get translation
function t(key) {
    return translations[currentLanguage][key] || translations['ko'][key] || key;
}

// Apply translations to the page
function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = t(key);

        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            element.placeholder = translation;
        } else {
            element.textContent = translation;
        }
    });

    // Update language selector
    updateLanguageSelector();
}

// Change language
function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('preferredLanguage', lang);
    applyTranslations();
}

// Get language name and flag
function getLanguageDisplay(code) {
    const languages = {
        'ko': { name: '한국어', flag: '🇰🇷' },
        'en': { name: 'English', flag: '🇺🇸' },
        'uz': { name: "O'zbek", flag: '🇺🇿' },
        'zh': { name: '中文', flag: '🇨🇳' },
        'vi': { name: 'Tiếng Việt', flag: '🇻🇳' },
        'mn': { name: 'Монгол', flag: '🇲🇳' },
        'si': { name: 'සිංහල', flag: '🇱🇰' }
    };
    return languages[code] || languages['ko'];
}

// Update language selector
function updateLanguageSelector() {
    const selector = document.querySelector('.lang-selector');
    if (selector) {
        const lang = getLanguageDisplay(currentLanguage);
        selector.innerHTML = `${lang.flag} ${lang.name} ▼`;
    }
}

// Open language modal
function openLanguageModal() {
    document.getElementById('languageModal').style.display = 'flex';
}

// Close language modal
function closeLanguageModal() {
    document.getElementById('languageModal').style.display = 'none';
}

// Close modal on outside click
document.addEventListener('click', function (event) {
    const modal = document.getElementById('languageModal');
    if (event.target === modal) {
        closeLanguageModal();
    }
});

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function () {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage && translations[savedLanguage]) {
        currentLanguage = savedLanguage;
    }
    applyTranslations();

    // Close modal after language selection
    const originalChangeLanguage = window.changeLanguage;
    window.changeLanguage = function (lang) {
        originalChangeLanguage(lang);
        closeLanguageModal();
    };
});
