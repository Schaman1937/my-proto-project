'use client'

import Header from '../shared/Header'
import Footer from '../shared/Footer'
import SessionQuestions from '../shared/SessionQuestions'
import { useContext } from 'react'
import { TimerContext } from '../shared/TimerContext'

/*
  Здесь показываем вопросы, но глобальный таймер у нас в Header + TimerContext.
  Если sessionStatus === 'play', пользователь может отвечать.
  Если sessionStatus === 'break', игра закончена -> показываем итоги (в SessionQuestions).
*/

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
