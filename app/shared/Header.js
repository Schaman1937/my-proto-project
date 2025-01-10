'use client'

import Link from 'next/link'
import { useContext, useEffect } from 'react'
import { TimerContext } from './TimerContext'

export default function Header() {
  const {
    sessionStatus, timeLeft, breakLeft
  } = useContext(TimerContext)

  // Определяем, что выводим
  const isBreak = sessionStatus === 'break'
  const display = isBreak ? breakLeft : timeLeft
  const minutes = Math.floor(display / 60)
  const seconds = display % 60
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
          <Link href="/agon" className="text-gray-300 hover:text-white">
            Агон
          </Link>
          <Link href="/attributes" className="text-gray-300 hover:text-white">
            Атрибутика
          </Link>
          <Link href="/materials" className="text-gray-300 hover:text-white">
            Материалы
          </Link>
          <Link href="/leaderboard" className="text-gray-300 hover:text-white">
            Доска почёта
          </Link>
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
              До конца агона: {formatted}
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}
