'use client'
import { useState } from 'react'
import { X } from 'lucide-react'

export default function AddNoteModal({ onClose, onSave }) {
  const [noteData, setNoteData] = useState({
    title: '',
    content: ''
  })

  const handleSave = () => {
    if (noteData.title.trim() && noteData.content.trim()) {
      onSave()
    }
  }

  return (
    <div className="modal" style={{ display: 'flex' }}>
      <div className="modal-content">
        <div className="modal-header">
          <h3 className="modal-title">إضافة ملاحظة جديدة</h3>
          <button className="close-modal" onClick={onClose}>
            <X size={20} />
          </button>
        </div>
        
        <div className="form-group">
          <label className="form-label">عنوان الملاحظة:</label>
          <input 
            type="text" 
            className="form-control" 
            placeholder="أدخل عنوان الملاحظة..."
            value={noteData.title}
            onChange={(e) => setNoteData({...noteData, title: e.target.value})}
          />
        </div>
        
        <div className="form-group">
          <label className="form-label">نص الملاحظة:</label>
          <textarea 
            className="form-control" 
            rows="5" 
            placeholder="أدخل نص الملاحظة..."
            value={noteData.content}
            onChange={(e) => setNoteData({...noteData, content: e.target.value})}
          />
        </div>
        
        <div className="modal-footer">
          <button className="btn" onClick={onClose}>إلغاء</button>
          <button className="btn btn-primary" onClick={handleSave}>إضافة الملاحظة</button>
        </div>
      </div>
    </div>
  )
}