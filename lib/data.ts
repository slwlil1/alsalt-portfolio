export const personalInfo = {
  name: "Alsalt Ali Alsalti",
  title: "Computer Science Student | Data Analytics & AI",
  location: "Muscat, Oman",
  phone: "+968 97352219",
  email: "alsaltali69@gmail.com",
  github: "https://github.com/slwlil1",
  linkedin: "https://www.linkedin.com/in/al-salt-al-salti-8713ba273/",
};

export const experiences = [
  {
    role: "IT Trainee",
    company: "Oman Broadband",
    location: "Muscat, Oman",
    period: "2026 – Present",
    points: [
      "Training in the IT Department.",
      "Hands-on experience in IT support, networking, and system administration.",
      "Working with a professional IT team on daily operations and troubleshooting.",
    ],
  },
  {
    role: "Sales Trainee",
    company: "Polyglot Institute",
    location: "Muscat, Oman",
    period: "May 2026 – Aug 2026",
    points: [
      "Achieved sales exceeding OMR 13,000 within 3 months.",
      "Recognized as one of the top-performing trainees in the Sales Department.",
      "Developed strong skills in customer communication, negotiation, and target achievement.",
    ],
  },
  {
    role: "Student Recruitment Intern",
    company: "Middle East College",
    location: "Muscat, Oman",
    period: "Jan 2025 – Mar 2025",
    points: [
      "Managed applicant admission processes, including reviewing credentials and defining eligibility.",
      "Guided prospective students through enrolment and provided information on courses and fees.",
      "Maintained and updated the CRM system with applicant data, phone logs, and feedback.",
      "Represented the college at exhibitions and recruitment events.",
    ],
  },
  {
    role: "International Training Program Participant",
    company: "Fayoum University, Egypt",
    location: "Fayoum, Egypt",
    period: "Aug 2026 – Sep 2026",
    points: [
      "Completed a one-month international training program in Data Analytics, Cybersecurity, and AI.",
      "Participated in an international student exchange initiative with students from various Arab countries.",
      "Received two certificates for completing the program.",
    ],
  },
];

export const certifications = [
  "Student Recruitment Training Certificate — Middle East College",
  "Sales Training Certificate — Polyglot Institute",
  "International Training Program Certificate — Fayoum University",
  "International Student Exchange Certificate — Fayoum University",
  "How to Get into Web Development — University of Leeds",
  "Hadoop 101 (BD0115EN) — IBM",
  "Database Management System — Great Learning Academy",
];

export const technicalSkillsWithLevels = [
  { name: "Python", level: 85, icon: "🐍", category: "Language" },
  { name: "Java", level: 75, icon: "☕", category: "Language" },
  { name: "HTML & CSS", level: 90, icon: "🎨", category: "Web" },
  { name: "JavaScript", level: 75, icon: "⚡", category: "Web" },
  { name: "MySQL / SQLite", level: 80, icon: "🗄️", category: "Database" },
  { name: "Streamlit", level: 85, icon: "📊", category: "Data" },
  { name: "Pandas & NumPy", level: 85, icon: "🐼", category: "Data" },
  { name: "Scikit-learn", level: 75, icon: "🤖", category: "ML" },
  { name: "XGBoost", level: 70, icon: "🚀", category: "ML" },
  { name: "Facebook Prophet", level: 75, icon: "📈", category: "ML" },
  { name: "Plotly", level: 80, icon: "📉", category: "Data" },
  { name: "Web Development", level: 80, icon: "🌐", category: "Web" },
  { name: "System Analysis", level: 75, icon: "🔍", category: "Analysis" },
  { name: "MS Office", level: 90, icon: "📄", category: "Tools" },
  { name: "CRM Systems", level: 80, icon: "👥", category: "Tools" },
  { name: "Data Analysis", level: 85, icon: "📊", category: "Data" },
];

export const coreSkillsWithLevels = [
  { name: "Problem-solving", level: 90, icon: "🧩" },
  { name: "Effective Communication", level: 88, icon: "💬" },
  { name: "Time Management", level: 85, icon: "⏰" },
  { name: "Leadership", level: 82, icon: "👑" },
  { name: "AI Communication", level: 85, icon: "🤖" },
  { name: "Sales & Customer Engagement", level: 88, icon: "🤝" },
  { name: "Cross-cultural Collaboration", level: 85, icon: "🌍" },
  { name: "Customer Service", level: 90, icon: "😊" },
  { name: "Teamwork", level: 92, icon: "🤜🤛" },
];

export const technicalSkills = technicalSkillsWithLevels.map((s) => s.name);
export const coreSkills = coreSkillsWithLevels.map((s) => s.name);