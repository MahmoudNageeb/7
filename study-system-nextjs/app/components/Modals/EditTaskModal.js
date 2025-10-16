'use client'
import { useState } from 'react'
import { X } from 'lucide-react'

export default function EditTaskModal({ onClose, onSave }) {
  const [taskData, setTaskData] = useState({
    text: 'مهمة مثال',
    priority: 'medium',
    link: '',
    status: 'pending'
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
          <h3 className="modal-title">تعديل المهمة</h3>
          <button className="close-modal" onClick={onClose}>
            <X size={20} />
          </button>
        </div>
        
        <div className="form-group">
          <label className="form-label">نص المهمة:</label>
          <input 
            type="text" 
            className="form-control"
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
        
        <div className="form-group">
          <label className="form-label">حالة المهمة:</label>
          <div className="task-status">
            <button 
              className={`status-btn status-completed ${taskData.status === 'completed' ? 'active' : ''}`}
              onClick={() => setTaskData({...taskData, status: 'completed'})}
            >
              مكتملة
            </button>
            <button 
              className={`status-btn status-pending ${taskData.status === 'pending' ? 'active' : ''}`}
              onClick={() => setTaskData({...taskData, status: 'pending'})}
            >
              معلقة
            </button>
            <button 
              className={`status-btn status-vacation ${taskData.status === 'vacation' ? 'active' : ''}`}
              onClick={() => setTaskData({...taskData, status: 'vacation'})}
            >
              إجازة
            </button>
          </div>
        </div>
        
        <div className="modal-footer">
          <button className="btn" onClick={onClose}>إلغاء</button>
          <button className="btn btn-primary" onClick={handleSave}>حفظ التعديلات</button>
        </div>
      </div>
    </div>
  )
}