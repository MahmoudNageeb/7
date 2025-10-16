'use client'
import { useState, useEffect } from 'react'
import { Tasks, CheckCircle, PieChart, Clock } from 'lucide-react'

const initialStats = [
  { id: 'completed', label: 'مهمة مكتملة', value: 0, icon: CheckCircle, color: 'success' },
  { id: 'total', label: 'إجمالي المهام', value: 35, icon: Tasks, color: 'primary' },
  { id: 'progress', label: 'نسبة الإنجاز', value: '0%', icon: PieChart, color: 'warning' },
  { id: 'remaining', label: 'مهمة متبقية', value: 35, icon: Clock, color: 'danger' },
]

export default function Dashboard() {
  const [stats, setStats] = useState(initialStats)

  return (
    <div>
      <div className="motivational-quote">
        " النجاح هو مجموع الجهود الصغيرة المتكررة يومياً "
      </div>
      
      <div className="dashboard">
        {stats.map(stat => {
          const Icon = stat.icon
          return (
            <div key={stat.id} className="stat-card">
              <div className={`stat-icon ${stat.color}`}>
                <Icon size={24} />
              </div>
              <div className="stat-info">
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            </div>
          )
        })}
      </div>
      
      <div className="schedule-section">
        <div className="section-header">
          <h2 className="section-title">نظرة سريعة على الجدول</h2>
          <button className="btn btn-primary">
            عرض كامل
          </button>
        </div>
        
        <div className="progress-container">
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: '0%' }}></div>
          </div>
          <div className="progress-text">
            <span>لم تبدأ</span>
            <span>0%</span>
          </div>
        </div>
        
        <div className="days-grid">
          <div className="day-card">
            <div className="day-header">
              <span>السبت</span>
            </div>
            <div className="day-content">
              <ul className="tasks-list">
                <li className="task-item">
                  <span className="task-text">🧮 رياضيات: 2 درس</span>
                </li>
                <li className="task-item">
                  <span className="task-text">⚗️ كيمياء: مراجعة + أسئلة</span>
                </li>
                <li className="task-item">
                  <span className="task-text">🏛️ تاريخ: 1 درس</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="day-card">
            <div className="day-header">
              <span>الأحد</span>
            </div>
            <div className="day-content">
              <ul className="tasks-list">
                <li className="task-item">
                  <span className="task-text">📖 عربي: محاضرة شرح</span>
                </li>
                <li className="task-item">
                  <span className="task-text">⚡ فيزياء: مراجعة + أسئلة</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}