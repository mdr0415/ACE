# ACE Platform - International Student Support System

## 📋 Project Overview

The ACE (ACADEMICS · COMMUNITY · EMPLOYMENT) Platform is a comprehensive web-based support system designed for international students, covering academic, life, and career support services.

### 🎯 Project Goals

- Support international students' adaptation to Korean university life
- Diagnose academic abilities and recommend personalized education
- Provide expert consultation and AI-based academic guidance
- Offer local employment information and visa support
- Share alumni success stories for mentoring

## ✨ Key Features

### 🎓 Academic Support (A-Academics)

#### 1. Korean Language Level Diagnosis ✅
- **3 Test Options:**
  - TOPIK 공식 기출문제 (Official Practice Tests)
  - 세종학당 레벨테스트 (Sejong Institute Level Test)
  - 누리-세종학당 온라인 (Nuri-Sejong Online Test)
- Result screenshot upload (image upload / paste)
- Automatic level analysis and score storage
- Learning growth timeline visualization (Chart.js)
- Progress display to next goal
- Personalized course recommendations

**Status**: ✅ Fully Implemented

**Key Technologies**:
- Image upload and Clipboard API
- Chart.js for growth graphs
- LocalStorage for diagnosis result storage

#### 2. School Life Guide (학교생활 안내) 🆕
- Academic regulations
- Course registration information
- Scholarship guidelines
- Graduation requirements

**Status**: ✅ Fully Implemented
**Subtitle**: 학사 정보 안내

### 🏠 Life Support (C-Community)

#### 1. Expert Consultation ✅
- Category-based consultation requests (Academic/Life/Career/Emotional/Admin)
- Consultation history view
- Answer status tracking (Pending/Processing/Completed)

**Status**: ✅ UI Complete
**Backend Integration**: ⏳ Required

#### 2. Korean Life Guide (한국생활 안내) 🆕
- Housing information
- Medical services
- Legal information for international students

**Status**: ✅ Fully Implemented
**Subtitle**: 주거·의료·법률

#### 3. AI Chatbot ✅
- Quick answers to frequently asked academic questions
- Natural language-based conversational consultation
- Tag-based quick question selection
- Real-time chat interface

**Status**: ✅ Fully Implemented
**Enhancement Needed**: AI model integration, more sophisticated answer system

### 💼 Career Support (E-Employment)

#### 1. Real-time Job Information (채용정보) 🆕
- Integration with 고용24(Work-Net) OPEN API
- Real-time job posting updates
- Government job posting database

**Status**: ✅ Fully Implemented
**Subtitle**: 실시간 채용정보

#### 2. Local Employment Information (지역 취업정보) ✅
- Region/industry filtering
- Display only foreign-friendly companies
- Filter companies offering visa sponsorship
- Detailed job information (salary, location, benefits)

**Status**: ✅ Fully Implemented
**Backend Integration**: ⏳ Required (Real-time job posting API integration)
**Subtitle**: 학교가족회사

#### 3. F-2-R Visa Score Calculator ✅
- Score calculation based on age, education, TOPIK level
- Real-time score calculation and qualification judgment
- Personalized score improvement suggestions
- Visual score display

**Status**: ✅ Fully Implemented
**Calculation Logic**: Requires validation with actual F-2-R visa criteria

#### 4. Alumni Success Stories ✅
- Detailed introduction of employment success cases
- Timeline-based preparation process
- Interview experiences and Q&A
- Visa conversion process guide
- Mentoring application feature

**Status**: ✅ Fully Implemented
**Backend Integration**: ⏳ Required (Actual mentoring matching system)

## 🎨 3-Depth Menu System 🆕

### Navigation Structure:
- **Depth 1 (Primary)**: 메인 - Main home button
  - Style: Dark blue gradient (#1e3c72 → #2a5298)
  - Icon: 🏠
  
- **Depth 2 (Main Features)**: 한국어 진단, 전문가 상담, 취업정보, 선배 스토리, 비자 계산기
  - Style: Outlined buttons with blue border
  - Hover effect: Gradient background
  
- **Depth 3 (Sub Pages)**: 진단 결과, AI 상담
  - Style: Light blue background (#f0f4ff)
  - Smaller, lightweight appearance

**Features**:
- Visual hierarchy with color distinction
- Clear navigation path
- Responsive design for mobile
- Icon + text labels
- **Header Back Navigation**: All screens with a "←" symbol support clicking the header to return to the main screen.

## 🌐 Multi-Language Support

### Supported Languages:
- 🇰🇷 **Korean** (한국어)
- 🇺🇸 **English**
- 🇺🇿 **Uzbek** (O'zbek)
- 🇨🇳 **Chinese** (中文)
- 🇻🇳 **Vietnamese** (Tiếng Việt)
- 🇲🇳 **Mongolian** (Монгол)
- 🇱🇰 **Sinhala** (සිංහල) - Sri Lanka

### Translation System:
- Comprehensive translation file (`js/translations.js`)
- Dynamic language switching
- LocalStorage preference saving
- Beautiful language selection modal with flag emojis
- All UI elements support multi-language with `data-i18n` attributes

## 🛠 Technology Stack

### Frontend
- **HTML5**: Semantic markup
- **CSS3**: Responsive design, gradients, animations
- **JavaScript (ES6+)**: Dynamic interactions, LocalStorage
- **Chart.js**: Data visualization (learning growth graphs)
- **Google Fonts**: Noto Sans KR

### Design Theme
- **Clean White Background**: #ffffff (Main background)
- **Primary Gradient**: #1e3c72 → #2a5298 (Headers, Buttons)
- **Depth 1 Buttons**: Dark blue gradient with large shadows
- **Depth 2 Buttons**: White background with blue border
- **Depth 3 Buttons**: Light blue (#f0f4ff) with subtle borders
- **Mobile First Design**: iPhone X frame (375px × 812px)
- **Smooth Animations**: Transitions and hover effects
- **Intuitive Icons**: Emojis throughout

## 📱 Screen Structure

### 1. Main Screen (`main`)
- ACE platform introduction
- **A-Academics (학업)**: 한국어 진단, 학교생활 안내
- **C-Community (생활)**: 전문가 상담, 한국생활 안내
- **E-Employment (진로)**: 채용정보, 지역 취업정보, F-2-R 비자, 선배 스토리
- Language selector modal (7 languages)

### 2. Korean Diagnosis Screen (`diagnosis`)
- **3 Test Option Cards:**
  1. TOPIK 공식 기출문제 (https://www.topik.go.kr)
  2. 세종학당 레벨테스트 (https://www.sejonghakdang.org)
  3. 누리-세종학당 온라인 (https://nuri.iksi.or.kr)
- Image upload area (drag & drop / Ctrl+V paste)
- Test type selection (TOPIK I/II)
- Score input field
- Result analysis button

### 3. Diagnosis Result Screen (`result`)
- Current Korean level display (TOPIK II - 4급)
- Growth timeline chart (Chart.js)
- Progress bar to next goal
- Recommended course list (3 courses)
- Schedule view button

### 4. Expert Consultation Screen (`consultation`)
- Category selection grid (5 categories: 학업, 생활, 진로, 정서, 행정)
- Consultation title/content input
- My consultation history list (3 items with status badges)

### 5. AI Chatbot Screen (`chatbot`)
- Frequently asked questions tags (5 tags)
- Chat messages area with bot/user bubbles
- Sample conversation included
- Message input field with send button

### 6. Local Job Information Screen (`job`)
- Region filter (익산, 전주, 전북)
- Industry filter (제조업, 서비스업)
- Foreign-friendly checkbox
- Visa sponsor checkbox
- Job posting cards (2 sample companies)
  - Company name, position, location
  - Salary range
  - Benefits badges (외국인 채용 가능, 비자 스폰서, 기숙사 제공)

### 7. Alumni Stories Screen (`story`)
- Success Story Hub header
- Industry filter buttons (전체, 제조업, 서비스업, IT)
- **2 Alumni Profile Cards:**
  1. 리웨이 (중국) - ABC전자 생산관리
  2. 응우옌 (베트남) - XYZ 물류 관리팀
- Each card includes:
  - Profile avatar with gradient
  - Employment journey story
  - Preparation timeline (4 years)
  - Interview experience
  - Visa conversion process
  - Q&A buttons (질문하기, 멘토링 신청)
- Recent Q&A section

### 8. Visa Calculator Screen (`visa`)
- Basic information form:
  - Age input (default: 25)
  - Education select (고졸/학사/석사/박사)
- Language ability:
  - TOPIK level select (없음 ~ 6급)
- Additional checkboxes:
  - 사회통합프로그램 이수
  - 한국 체류 3년 이상
- Calculate button
- Score display circle (65점 sample)
- Pass/fail status (기준 점수: 80점)
- Improvement suggestions box (3 suggestions)

### 9. Real-time Job Information Screen (`recruitment`) 🆕
- Popular keyword tags
- Sample job posting cards with visa and position details
- Integrated back-to-main navigation

**Status**: ✅ Fully Implemented

## 🚀 Getting Started

### Installation and Execution

```bash
# Clone project
git clone [repository-url]

# Navigate to project directory
cd ace-platform

# Open index.html in browser
open index.html
```

### File Structure

```
ace-platform/
├── index.html              # Main HTML file (with 8 screens)
├── css/
│   └── style.css          # Stylesheet (3-Depth menu, white theme)
├── js/
│   ├── main.js            # JavaScript logic
│   └── translations.js    # Multi-language translations (7 languages)
└── README.md              # Project documentation
```

## 📊 Data Models (For Future Backend Integration)

### Users (Users)
- id (PK)
- name (Name)
- nationality (Nationality)
- major (Major)
- student_id (Student ID)
- email (Email)
- topik_level (TOPIK Level)
- preferred_language (Preferred Language)

### DiagnosisResults (Diagnosis Results)
- id (PK)
- user_id (FK)
- test_date (Test Date)
- test_type (TOPIK I/II)
- score (Score)
- grade (Level)
- created_at (Created Date)

### Consultations (Consultations)
- id (PK)
- user_id (FK)
- category (Category)
- title (Title)
- content (Content)
- status (Status: pending/processing/completed)
- response (Answer)
- created_at (Created Date)
- updated_at (Updated Date)

### Jobs (Job Postings)
- id (PK)
- company_name (Company Name)
- position (Position)
- location (Location)
- salary_min (Minimum Salary)
- salary_max (Maximum Salary)
- foreign_friendly (Foreign-friendly)
- visa_sponsor (Visa Sponsor)
- benefits (Benefits)
- created_at (Posted Date)

### Stories (Alumni Stories)
- id (PK)
- user_id (FK)
- company (Company)
- position (Position)
- industry (Industry)
- story (Story)
- timeline (Timeline JSON)
- interview_tips (Interview Tips)
- visa_process (Visa Process)
- created_at (Posted Date)

## 🔄 Future Development Plans

### Phase 1: Backend Construction ⏳
- [ ] RESTful API server construction (Node.js/Express or Python/Django)
- [ ] Database design and construction (PostgreSQL/MySQL)
- [ ] User authentication system (JWT)
- [ ] File upload server implementation
- [ ] 고용24(Work-Net) OPEN API integration

### Phase 2: Feature Enhancement ⏳
- [ ] OCR for automatic TOPIK score recognition
- [ ] Advanced AI chatbot (GPT API integration)
- [ ] Real-time job posting crawling
- [ ] Email notification system
- [ ] Mentor-mentee matching algorithm
- [ ] Implement `job-public` screen with Work-Net API

### Phase 3: Additional Features 📋
- [x] School Life Guide (학교생활 안내) screen implementation
- [x] Korean Life Guide (한국생활 안내) screen implementation
- [x] Real-time Job Information (실시간 채용정보) screen implementation
- [ ] Extend language support (more languages)
- [ ] Community bulletin board
- [ ] Academic calendar
- [ ] Dormitory/housing information
- [ ] Mobile app (React Native/Flutter)

### Phase 4: Admin System 📋
- [ ] Admin dashboard
- [ ] Consultation management system
- [ ] Statistics and analysis tools
- [ ] User management

## 🎨 Design Guide

### Color Palette
- **Background**: #ffffff (White)
- **Primary Gradient**: #1e3c72 → #2a5298
- **Depth-1 Button**: #1e3c72 → #2a5298 (Dark blue gradient)
- **Depth-2 Button**: White background, #2a5298 border
- **Depth-3 Button**: #f0f4ff background, #7694c4 border
- **Success**: #4CAF50
- **Warning**: #FF9800
- **Danger**: #f44336
- **Info**: #2196F3
- **Card Background**: #ffffff
- **Text Primary**: #333333
- **Text Secondary**: #666666

### Typography
- **Font**: Noto Sans KR
- **Heading**: 24px (bold)
- **Body**: 14px (regular)
- **Caption**: 12px (regular)

## 🌟 Key Features Highlights

### 1. Sophisticated Design
- Clean white background theme
- Professional and modern interface
- 3-Depth menu system with visual hierarchy
- Smooth animations and transitions

### 2. Multi-Language Support
- 7 languages supported
- Easy language switching with modal
- Beautiful language selection with flag emojis
- Preference saving with LocalStorage

### 3. User-Friendly Interface
- Intuitive 3-level navigation
- Clear visual hierarchy
- Responsive design
- Mobile-optimized (iPhone X frame)

### 4. Comprehensive Functionality
- Academic diagnosis with 3 test options
- Expert and AI consultation
- Employment support with filtering
- Visa guidance with score calculator
- Mentoring system with alumni stories

## 📈 Recent Updates

### Latest Version Features:
- ✅ 3-Depth menu system implementation
- ✅ White background design theme
- ✅ 3 Korean language test options (TOPIK, Sejong, Nuri-Sejong)
- ✅ Updated section titles (A-Academics, C-Community, E-Employment)
- ✅ Implemented screens: 학교생활 안내, 한국생활 안내, 실시간 채용정보
- ✅ **Year Upgrade**: Migration of all dates and academic schedules from 2024 to 2026.
- ✅ **UI/UX Improvement**: Added "Back to Main" navigation functionality to all sub-screen headers.
- ✅ **Chart Optimization**: Fixed Chart.js initialization issues and naming conflicts.

## 🤝 Contributing

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project follows the MIT License.

## 📞 Contact

For questions about the project, please register an issue.

---

**Made with ❤️ for International Students**

**Supported Languages**: 한국어 · English · O'zbek · 中文 · Tiếng Việt · Монгол · සිංහල
