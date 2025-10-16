'use client'
import { useState, useEffect } from 'react'
import { Play, Pause, Check, X } from 'lucide-react'

export default function FocusMode({ onClose }) {
  const [timeLeft, setTimeLeft] = useState(60 * 60) // 60 دقيقة بالثواني
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    let interval
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(time => time - 1)
      }, 1000)
    } else if (timeLeft === 0) {
      setIsRunning(false)
    }
    
    return () => clearInterval(interval)
  }, [isRunning, timeLeft])

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  const startTimer = () => setIsRunning(true)
  const pauseTimer = () => setIsRunning(false)
  const resetTimer = () => setTimeLeft(60 * 60)

  return (
    <div className="focus-mode active">
      <div className="focus-task">اختر مهمة للتركيز عليها</div>
      <div className="focus-timer">{formatTime(timeLeft)}</div>
      <div className="focus-controls">
        {!isRunning ? (
          <button className="btn btn-success" onClick={startTimer}>
            <Play size={18} />
            بدء
          </button>
        ) : (
          <button className="btn btn-warning" onClick={pauseTimer}>
            <Pause size={18} />
            إيقاف مؤقت
          </button>
        )}
        <button className="btn btn-primary">
          <Check size={18} />
          إكمال المهمة
        </button>
        <button className="btn btn-danger" onClick={onClose}>
          <X size={18} />
          إنهاء
        </button>
      </div>
    </div>
  )
}