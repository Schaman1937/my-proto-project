'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Header() {
  const [sessionStatus, setSessionStatus] = useState('play')
  const [timeLeft, setTimeLeft] = useState(900)

  async function fetchTimer() {
    try {
      const res = await fetch('/api/timer', { cache: 'no-store' })
      if (!res.ok) throw new Error(`status = ${res.status}`)
      const data = await res.json()
      setSessionStatus(data.sessionStatus)
      setTimeLeft(data.timeLeft)
    } catch (err) {
      console.error('Ошибка запроса /api/timer:', err)
    }
  }

  useEffect(() => {
    fetchTimer()
    const t = setInterval(fetchTimer, 5000)
    return () => clearInterval(t)
  }, [])

  const isBreak = sessionStatus === 'break'
  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60
  const formatted = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`

  return (
    <header className="bg-gray-800 shadow mb-4">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img
            src="/logo.png"
            alt="Логотип"
            className="h-8 w-8 object-contain"
          />
          <Link href="/" className="text-2xl font-bold text-gray-100 hover:text-white">
            Протоистория
          </Link>
        </div>
        <nav className="flex items-center space-x-4">
          <Link href="/agon" className="text-gray-300 hover:text-white">Агон</Link>
          <Link href="/attributes" className="text-gray-300 hover:text-white">Атрибутика</Link>
          <Link href="/materials" className="text-gray-300 hover:text-white">Материалы</Link>
          <Link href="/leaderboard" className="text-gray-300 hover:text-white">Доска почёта</Link>
          <Link
            href="/login"
            className="border border-gray-600 px-2 py-1 rounded text-gray-300 hover:text-white hover:bg-gray-700"
          >
            Войти
          </Link>
          {isBreak ? (
            <div className="text-red-400 font-bold ml-3">
              Перерыв: {formatted}
            </div>
          ) : (
            <div className="text-green-400 font-bold ml-3">
              Идёт Агон: {formatted}
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}
