'use client'
import Header from '../shared/Header'
import Footer from '../shared/Footer'
import ScoreTable from '../shared/ScoreTable'

const allPlayers = [
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
  { id: 11, name: 'Kate', score: 5 },
  { id: 12, name: 'Leo', score: 4 }
]

export default function LeaderboardPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Доска почёта (Полная)</h1>
        <ScoreTable players={allPlayers} isFull />
      </main>
      <Footer />
    </>
  )
}
