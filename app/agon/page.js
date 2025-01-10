'use client'
import Header from '../../shared/Header'
import Footer from '../../shared/Footer'
import SessionQuestions from '../../shared/SessionQuestions'
import { useContext } from 'react'
import { TimerContext } from '../../shared/TimerContext'

export default function AgonPage() {
  const { sessionStatus } = useContext(TimerContext)

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
