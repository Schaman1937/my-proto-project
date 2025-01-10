'use client'

import { createContext, useState } from 'react'

// Храним глобально sessionStatus, timeLeft и breakLeft
export const TimerContext = createContext()

export function TimerProvider({ children }) {
  const [sessionStatus, setSessionStatus] = useState('play') // "play" / "break"
  const [timeLeft, setTimeLeft] = useState(900)  // 900 = 15 min
  const [breakLeft, setBreakLeft] = useState(300) // 300 = 5 min

  return (
    <TimerContext.Provider
      value={{ sessionStatus, timeLeft, breakLeft, setSessionStatus, setTimeLeft, setBreakLeft }}
    >
      {children}
    </TimerContext.Provider>
  )
}
