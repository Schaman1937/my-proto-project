'use client'

export default function ScoreTable({ players, isFull }) {
  const sorted = [...players].sort((a, b) => b.score - a.score)
  const data = isFull ? sorted : sorted.slice(0, 10)

  return (
    <table className="w-full border-collapse text-gray-100">
      <thead>
        <tr className="bg-gray-700">
          <th className="border border-gray-600 p-2 text-left">#</th>
          <th className="border border-gray-600 p-2 text-left">Игрок</th>
          <th className="border border-gray-600 p-2 text-left">Баллы</th>
        </tr>
      </thead>
      <tbody>
        {data.map((p, index) => (
          <tr key={p.id} className="odd:bg-gray-900 even:bg-gray-800">
            <td className="border border-gray-600 p-2">{index + 1}</td>
            <td className="border border-gray-600 p-2">{p.name}</td>
            <td className="border border-gray-600 p-2">{p.score}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
