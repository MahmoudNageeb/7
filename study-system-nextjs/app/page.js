'use client'
import { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import Schedule from './components/Schedule'
import PomodoroTimer from './components/PomodoroTimer'
import Notes from './components/Notes'
import Calendar from './components/Calendar'
import Rewards from './components/Rewards'
import Resources from './components/Resources'
import Stats from './components/Stats'
import Settings from './components/Settings'
import FocusMode from './components/FocusMode'
import Notification from './components/Notification'
import AddTaskModal from './components/Modals/AddTaskModal'
import EditTaskModal from './components/Modals/EditTaskModal'
import AddNoteModal from './components/Modals/AddNoteModal'

export default function Home() {
  const [activeSection, setActiveSection] = useState('home')
  const [darkMode, setDarkMode] = useState(false)
  const [notification, setNotification] = useState({ show: false, message: '', type: '' })
  const [modals, setModals] = useState({
    addTask: false,
    editTask: false,
    addNote: false
  })
  const [focusMode, setFocusMode] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      setDarkMode(true)
      document.body.classList.add('dark-mode')
    }
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.body.classList.toggle('dark-mode')
    localStorage.setItem('theme', !darkMode ? 'dark' : 'light')
  }

  const showNotification = (message, type = 'success') => {
    setNotification({ show: true, message, type })
    setTimeout(() => setNotification({ show: false, message: '', type: '' }), 4000)
  }

  const openModal = (modalName) => {
    setModals(prev => ({ ...prev, [modalName]: true }))
  }

  const closeModal = (modalName) => {
    setModals(prev => ({ ...prev, [modalName]: false }))
  }

  const toggleFocusMode = () => {
    setFocusMode(!focusMode)
  }

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Dashboard />
      case 'schedule':
        return <Schedule />
      case 'pomodoro':
        return <PomodoroTimer />
      case 'notes':
        return <Notes />
      case 'calendar':
        return <Calendar />
      case 'rewards':
        return <Rewards />
      case 'resources':
        return <Resources />
      case 'stats':
        return <Stats />
      case 'settings':
        return <Settings />
      default:
        return <Dashboard />
    }
  }

  return (
    <div className="app-container">
      <Sidebar 
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      
      <div className="main-content">
        <Header 
          openAddTaskModal={() => openModal('addTask')}
          toggleFocusMode={toggleFocusMode}
        />
        
        <div className="content">
          {renderSection()}
        </div>
      </div>

      {focusMode && (
        <FocusMode 
          onClose={toggleFocusMode}
        />
      )}
      
      {modals.addTask && (
        <AddTaskModal 
          onClose={() => closeModal('addTask')}
          onSave={() => {
            showNotification('تم إضافة المهمة بنجاح', 'success')
            closeModal('addTask')
          }}
        />
      )}
      
      {modals.editTask && (
        <EditTaskModal 
          onClose={() => closeModal('editTask')}
          onSave={() => {
            showNotification('تم تعديل المهمة بنجاح', 'success')
            closeModal('editTask')
          }}
        />
      )}
      
      {modals.addNote && (
        <AddNoteModal 
          onClose={() => closeModal('addNote')}
          onSave={() => {
            showNotification('تم إضافة الملاحظة بنجاح', 'success')
            closeModal('addNote')
          }}
        />
      )}

      <Notification 
        show={notification.show}
        message={notification.message}
        type={notification.type}
        onClose={() => setNotification({ show: false, message: '', type: '' })}
      />
    </div>
  )
}