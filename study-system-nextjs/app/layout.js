import './globals.css'

export const metadata = {
  title: '🎓 نظام المذاكرة الذكي - تانية ثانوي علمي',
  description: 'نظام متكامل لإدارة المذاكرة للصف الثاني الثانوي العلمي',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  )
}