'use client'
import { Home, Calendar, Clock, StickyNote, Trophy, Link, BarChart, Settings, Moon, Sun } from 'lucide-react'

const menuItems = [
  { id: 'home', label: 'الرئيسية', icon: Home },
  { id: 'schedule', label: 'جدول المذاكرة', icon: Calendar },
  { id: 'pomodoro', label: 'مؤقت البومودورو', icon: Clock },
  { id: 'notes', label: 'الملاحظات', icon: StickyNote },
  { id: 'calendar', label: 'التقويم', icon: Calendar },
  { id: 'rewards', label: 'المكافآت', icon: Trophy },
  { id: 'resources', label: 'إدارة الروابط', icon: Link },
  { id: 'stats', label: 'الإحصائيات', icon: BarChart },
  { id: 'settings', label: 'الإعدادات', icon: Settings },
]

export default function Sidebar({ activeSection, setActiveSection, darkMode, toggleDarkMode }) {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>🎓 نظام المذاكرة</h2>
      </div>
      
      <ul className="sidebar-menu">
        {menuItems.map(item => {
          const Icon = item.icon
          return (
            <li key={item.id}>
              <a 
                href="#" 
                className={activeSection === item.id ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault()
                  setActiveSection(item.id)
                }}
              >
                <Icon size={20} />
                <span>{item.label}</span>
              </a>
            </li>
          )
        })}
      </ul>
      
      <div className="sidebar-footer">
        <button className="theme-toggle" onClick={toggleDarkMode}>
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <div className="user-info">
          <span>طالب علمي</span>
        </div>
      </div>
    </div>
  )
}