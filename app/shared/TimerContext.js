'use client'

import { createContext, useState, useEffect } from 'react'

export const TimerContext = createContext()

export function TimerProvider({ children }) {
  const [sessionStatus, setSessionStatus] = useState('play') // "play" / "break"
  const [timeLeft, setTimeLeft] = useState(900)  // 15 * 60
  const [breakLeft, setBreakLeft] = useState(300) // 5 * 60

  useEffect(() => {
    if (sessionStatus === 'play' && timeLeft > 0) {
      const t = setInterval(() => {
        setTimeLeft(prev => prev - 1)
      }, 1000)
      return () => clearInterval(t)
    }

    if (sessionStatus === 'play' && timeLeft <= 0) {
      setSessionStatus('break')
    }

    if (sessionStatus === 'break' && breakLeft > 0) {
      const t = setInterval(() => {
        setBreakLeft(prev => prev - 1)
      }, 1000)
      return () => clearInterval(t)
    }

    if (sessionStatus === 'break' && breakLeft <= 0) {
      // Снова стартуем
      setSessionStatus('play')
      setTimeLeft(900)
      setBreakLeft(300)
    }
  }, [sessionStatus, timeLeft, breakLeft])

  const value = {
    sessionStatus,
    timeLeft,
    breakLeft
  }

  return (
    <TimerContext.Provider value={value}>
      {children}
    </TimerContext.Provider>
  )
}
