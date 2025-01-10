import Header from './shared/Header'
import Footer from './shared/Footer'
import ScoreTable from './shared/ScoreTable'

// Топ-10 для главной
const topPlayers = [
  { id: 1, name: 'Alice', score: 10 },
  { id: 2, name: 'Bob', score: 9 },
  { id: 3, name: 'Charlie', score: 9 },
  { id: 4, name: 'Dave', score: 8 },
  { id: 5, name: 'Eve', score: 8 },
  { id: 6, name: 'Fred', score: 7 },
  { id: 7, name: 'Gina', score: 7 },
  { id: 8, name: 'Henry', score: 6 },
  { id: 9, name: 'Irene', score: 6 },
  { id: 10, name: 'John', score: 5 },
]

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <section className="bg-gray-800 p-6 rounded mb-8 text-center">
          <h1 className="text-3xl font-bold mb-4">Добро пожаловать!</h1>
          <p className="text-gray-300 mb-2">
            Участвуй в Агонах (общий таймер на 15 минут), получай баллы за правильные ответы
          </p>
          <p className="text-gray-300 mb-2">
            После окончания игры — 5 минут перерыва, и всё начинается заново!
          </p>
        </section>

        {/* Доска почёта (ТОП-10) */}
        <section className="bg-gray-800 p-6 rounded">
          <h2 className="text-2xl font-bold mb-4">Доска почёта (ТОП-10)</h2>
          <ScoreTable players={topPlayers} isFull={false} />
        </section>
      </main>
      <Footer />
    </>
  )
}
