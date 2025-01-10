'use client'

import { useState, useEffect } from 'react'

/*
  Механика вопросов:
   - Если sessionStatus = 'play', пользователь может отвечать (берём 2-3 демо вопроса).
   - За правильный ответ +1, за ошибку 0, сразу показываем развернутый ответ.
   - Если sessionStatus = 'break', показываем итоги.
*/

export default function SessionQuestions({ sessionStatus }) {
  // Пример вопросов, где у каждой опции поле isCorrect и details (развернутый ответ)
  const questions = [
    {
      id: 1,
      text: 'Как называется период в истории человечества до изобретения письменности?',
      options: [
        { text: 'Доистория', isCorrect: true, details: 'Это корректно, доистория...' },
        { text: 'Средние века', isCorrect: false, details: 'Средние века — другое...' },
        { text: 'Античность', isCorrect: false, details: 'Античность — другое...' },
      ]
    },
    {
      id: 2,
      text: 'Какой металл начали обрабатывать первым?',
      options: [
        { text: 'Железо', isCorrect: false, details: 'Железо позднее...' },
        { text: 'Медь', isCorrect: true, details: 'Медь — первый металл...' },
        { text: 'Бронза', isCorrect: false, details: 'Бронза — сплав...' },
      ]
    }
  ]

  // Состояние ответов
  const [answers, setAnswers] = useState({}) 
  // answers[q.id] = { chosenIndex, correct, details }

  function handleAnswer(qId, optIndex) {
    const question = questions.find(q => q.id === qId)
    if (!question) return

    const chosenOpt = question.options[optIndex]
    setAnswers(prev => ({
      ...prev,
      [qId]: {
        chosenIndex: optIndex,
        correct: chosenOpt.isCorrect,
        details: chosenOpt.details
      }
    }))
  }

  // Если sessionStatus = 'break', показать итоги
  if (sessionStatus === 'break') {
    let correctCount = 0
    questions.forEach(q => {
      if (answers[q.id]?.correct) correctCount++
    })
    return (
      <div className="bg-gray-800 p-4 rounded">
        <h2 className="text-xl font-bold mb-2">Итоги агона</h2>
        <p className="mb-4">Вы набрали {correctCount} из {questions.length} баллов!</p>
        {questions.map(q => {
          const userAns = answers[q.id]
          const isCorrect = userAns?.correct
          return (
            <div key={q.id} className="mb-4 border border-gray-700 p-2 rounded">
              <p className="font-semibold text-gray-100">{q.text}</p>
              {isCorrect ? (
                <p className="text-green-400">✓ Правильно</p>
              ) : (
                <div className="text-red-400">
                  ✗ Ошибка
                  <p className="text-gray-200 mt-1">
                    Правильный ответ: {userAns?.details}
                  </p>
                </div>
              )}
            </div>
          )
        })}
      </div>
    )
  }

  // Иначе (sessionStatus = 'play') — можно отвечать
  return (
    <div className="bg-gray-800 p-4 rounded">
      <h2 className="text-xl font-bold mb-2">Вопросы</h2>
      {questions.map(q => {
        const userAns = answers[q.id]
        const hasAnswered = !!userAns
        return (
          <div key={q.id} className="mb-6">
            <p className="font-semibold text-gray-100 mb-2">{q.text}</p>
            {q.options.map((opt, idx) => {
              if (hasAnswered) {
                // уже ответили
                const chosen = idx === userAns.chosenIndex
                return (
                  <div
                    key={idx}
                    className={
                      'p-2 rounded mb-1 ' +
                      (chosen ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300')
                    }
                  >
                    {opt.text}
                  </div>
                )
              }
              // можно кликнуть
              return (
                <button
                  key={idx}
                  className="w-full text-left border border-gray-600 p-2 my-1 hover:bg-gray-700 rounded"
                  onClick={() => handleAnswer(q.id, idx)}
                >
                  {opt.text}
                </button>
              )
            })}

            {/* Если пользователь ошибся, сразу показать развернутый ответ */}
            {hasAnswered && !userAns.correct && (
              <p className="text-sm text-gray-300 mt-1">
                Развернутый правильный ответ: {userAns.details}
              </p>
            )}
          </div>
        )
      })}
    </div>
  )
}
