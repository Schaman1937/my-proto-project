'use client'

import Header from '../shared/Header'
import Footer from '../shared/Footer'
import { useState } from 'react'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    alert(`Попытка войти: ${email} / ${password}`)
  }

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-sm mx-auto p-4 bg-gray-800 rounded">
          <h1 className="text-xl font-bold mb-4">Авторизация</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-1" htmlFor="email">Email:</label>
              <input
                id="email"
                className="w-full border border-gray-600 p-2 rounded bg-gray-700 text-gray-100"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1" htmlFor="password">Пароль:</label>
              <input
                id="password"
                className="w-full border border-gray-600 p-2 rounded bg-gray-700 text-gray-100"
                type="password"
                placeholder="Введите пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Войти
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  )
}
