'use client'
import { useState } from 'react'

export default function SessionQuestions({ sessionStatus }) {
  const questions = [
    {
      id: 1,
      text: 'Как называется период до изобретения письменности?',
      options: [
        { text: 'Доистория', isCorrect: true, details: 'Это правильный ответ. Доистория...' },
        { text: 'Средние века', isCorrect: false, details: 'Средние века — другое...' },
        { text: 'Античность', isCorrect: false, details: 'Античность — другое...' }
      ]
    },
    {
      id: 2,
      text: 'Какой металл начали обрабатывать первым?',
      options: [
        { text: 'Железо', isCorrect: false, details: 'Железо освоили позднее...' },
        { text: 'Медь', isCorrect: true, details: 'Медь — первый металл...' },
        { text: 'Бронза', isCorrect: false, details: 'Бронза — сплав...' }
      ]
    }
  ]

  const [answers, setAnswers] = useState({})

  function handleAnswer(qId, idx) {
    const question = questions.find(q => q.id === qId)
    if (!question) return

    const chosen = question.options[idx]
    setAnswers(prev => ({
      ...prev,
      [qId]: {
        chosenIndex: idx,
        correct: chosen.isCorrect,
        details: chosen.details
      }
    }))
  }

  if (sessionStatus === 'break') {
    // Итоги
    let correctCount = 0
    questions.forEach(q => {
      if (answers[q.id]?.correct) correctCount++
    })
    return (
      <div className="bg-gray-800 p-4 rounded">
        <h2 className="text-xl font-bold mb-2">Итоги агона</h2>
        <p className="mb-4">Вы набрали {correctCount} из {questions.length} баллов!</p>
        {questions.map(q => {
          const ans = answers[q.id]
          return (
            <div key={q.id} className="mb-4 border border-gray-700 p-2 rounded">
              <p className="font-semibold text-gray-100">{q.text}</p>
              {ans?.correct
                ? <p className="text-green-400">✓ Правильно</p>
                : (
                  <div className="text-red-400">
                    ✗ Ошибка
                    <p className="text-gray-200 mt-1">Правильный ответ: {ans?.details}</p>
                  </div>
                )}
            </div>
          )
        })}
      </div>
    )
  }

  // Если sessionStatus === 'play'
  return (
    <div className="bg-gray-800 p-4 rounded">
      <h2 className="text-xl font-bold mb-2">Вопросы</h2>
      {questions.map(q => {
        const ans = answers[q.id]
        const answered = !!ans
        return (
          <div key={q.id} className="mb-6">
            <p className="font-semibold text-gray-100 mb-2">{q.text}</p>
            {q.options.map((opt, idx) => {
              if (answered) {
                const chosen = idx === ans.chosenIndex
                return (
                  <div
                    key={idx}
                    className={
                      'p-2 rounded mb-1 ' +
                      (chosen
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-700 text-gray-300')
                    }
                  >
                    {opt.text}
                  </div>
                )
              }
              // Можно выбрать вариант
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

            {/* Если ответ неверный — сразу показываем развернутый ответ */}
            {answered && !ans.correct && (
              <p className="text-sm text-gray-300 mt-1">
                Правильный ответ: {ans.details}
              </p>
            )}
          </div>
        )
      })}
    </div>
  )
}
