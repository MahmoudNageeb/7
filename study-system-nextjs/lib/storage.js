// ملف إدارة التخزين
export const STORAGE_KEYS = {
  THEME: 'theme',
  SCHEDULE: 'studySchedule',
  COMPLETED_TASKS: 'studyCompletedTasks',
  VACATIONS: 'studyVacations',
  NOTES: 'studyNotes',
  SETTINGS: 'studySettings'
}

export const getInitialSchedule = () => [
  { day: "السبت", subjects: ["🧮 رياضيات: 2 درس", "⚗️ كيمياء: مراجعة + أسئلة", "🏛️ تاريخ: 1 درس"] },
  { day: "الأحد", subjects: ["📖 عربي: محاضرة شرح", "⚡ فيزياء: مراجعة + أسئلة", "🧮 رياضيات: 1 درس"] },
  { day: "الاثنين", subjects: ["📖 عربي: اختبار", "🧮 رياضيات: 1 درس + حل تدريبات", "⚡ حل فيزياء / كيمياء"] },
  { day: "الثلاثاء", subjects: ["🧮 رياضيات: 2 درس", "⚗️ كيمياء: درس جديد", "🏛️ تاريخ: 1 درس"] },
  { day: "الأربعاء", subjects: ["🇬🇧 إنجليزي: محاضرة + مراجعة", "🧮 رياضيات: 1 درس", "⚡ فيزياء: درس جديد"] },
  { day: "الخميس", subjects: ["🌴 إجازة كاملة"] },
  { day: "الجمعة", subjects: ["🧮 رياضيات: مراجعة الأسبوع", "⚡ فيزياء: مراجعة", "⚗️ كيمياء: مراجعة"] }
]