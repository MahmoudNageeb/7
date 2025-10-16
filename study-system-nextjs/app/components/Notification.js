'use client'
import { X, CheckCircle, AlertCircle, AlertTriangle, Info } from 'lucide-react'

const iconMap = {
  success: CheckCircle,
  error: AlertCircle,
  warning: AlertTriangle,
  info: Info
}

export default function Notification({ show, message, type = 'success', onClose }) {
  if (!show) return null

  const Icon = iconMap[type] || CheckCircle

  return (
    <div className={`notification ${type} show`}>
      <div className="notification-content">
        <Icon size={20} />
        <span>{message}</span>
      </div>
      <button className="close-notification" onClick={onClose}>
        <X size={20} />
      </button>
    </div>
  )
}