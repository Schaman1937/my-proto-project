'use client'
import Header from '../shared/Header'
import Footer from '../shared/Footer'
import SessionQuestions from '../shared/SessionQuestions'
import { useEffect, useState } from 'react'

export default function AgonPage() {
  const [sessionStatus, setSessionStatus] = useState('play')

  async function fetchTimer() {
    try {
      const res = await fetch('/api/timer', { cache: 'no-store' })
      if (!res.ok) throw new Error(`status=${res.status}`)
      const data = await res.json()
      setSessionStatus(data.sessionStatus)
    } catch (err) {
      console.error('Ошибка /api/timer:', err)
    }
  }

  useEffect(() => {
    fetchTimer()
    const timerId = setInterval(fetchTimer, 5000)
    return () => clearInterval(timerId)
  }, [])

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Агон</h1>
        <SessionQuestions sessionStatus={sessionStatus} />
      </main>
      <Footer />
    </>
  )
}
