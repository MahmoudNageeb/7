'use client'
import { Save, Plus, Target } from 'lucide-react'

export default function Header({ openAddTaskModal, toggleFocusMode }) {
  return (
    <div className="header">
      <h1>
        <span>🎓</span>
        نظام المذاكرة الذكي - تانية ثانوي علمي
      </h1>
      
      <div className="user-actions">
        <button className="btn btn-primary">
          <Save size={18} />
          حفظ التقدم
        </button>
        
        <button className="btn btn-success" onClick={openAddTaskModal}>
          <Plus size={18} />
          إضافة مهمة
        </button>
        
        <button className="btn btn-warning" onClick={toggleFocusMode}>
          <Target size={18} />
          وضع التركيز
        </button>
      </div>
    </div>
  )
}