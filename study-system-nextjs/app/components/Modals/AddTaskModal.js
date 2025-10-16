'use client'
import { useState } from 'react'
import { X } from 'lucide-react'

export default function AddTaskModal({ onClose, onSave }) {
  const [taskData, setTaskData] = useState({
    day: '0',
    text: '',
    priority: 'medium',
    link: ''
  })

  const handleSave = () => {
    if (taskData.text.trim()) {
      onSave()
    }
  }

  return (
    <div className="modal" style={{ display: 'flex' }}>
      <div className="modal-content">
        <div className="modal-header">
          <h3 className="modal-title">إضافة مهمة جديدة</h3>
          <button className="close-modal" onClick={onClose}>
            <X size={20} />
          </button>
        </div>
        
        <div className="form-group">
          <label className="form-label">اليوم:</label>
          <select 
            className="form-control"
            value={taskData.day}
            onChange={(e) => setTaskData({...taskData, day: e.target.value})}
          >
            <option value="0">السبت</option>
            <option value="1">الأحد</option>
            <option value="2">الاثنين</option>
            <option value="3">الثلاثاء</option>
            <option value="4">الأربعاء</option>
            <option value="5">الخميس</option>
            <option value="6">الجمعة</option>
          </select>
        </div>
        
        <div className="form-group">
          <label className="form-label">نص المهمة:</label>
          <input 
            type="text" 
            className="form-control" 
            placeholder="أدخل نص المهمة..."
            value={taskData.text}
            onChange={(e) => setTaskData({...taskData, text: e.target.value})}
          />
        </div>
        
        <div className="form-group">
          <label className="form-label">الأولوية:</label>
          <select 
            className="form-control"
            value={taskData.priority}
            onChange={(e) => setTaskData({...taskData, priority: e.target.value})}
          >
            <option value="low">منخفضة</option>
            <option value="medium">متوسطة</option>
            <option value="high">عالية</option>
          </select>
        </div>
        
        <div className="form-group">
          <label className="form-label">رابط خارجي (اختياري):</label>
          <input 
            type="url" 
            className="form-control" 
            placeholder="https://example.com"
            value={taskData.link}
            onChange={(e) => setTaskData({...taskData, link: e.target.value})}
          />
        </div>
        
        <div className="modal-footer">
          <button className="btn" onClick={onClose}>إلغاء</button>
          <button className="btn btn-primary" onClick={handleSave}>إضافة المهمة</button>
        </div>
      </div>
    </div>
  )
}