import Link from 'next/link'

export default function QuizPreview() {
  const timer = '00:12:34'

  return (
    <section className="mt-8 p-4 border border-gray-700 rounded bg-gray-800">
      <h2 className="text-2xl font-bold mb-2">Агон</h2>
      <div className="flex items-center mb-2 text-gray-200">
        {/* Анимация песочных часов (hourglass.gif) рядом с таймером */}
        <img
          src="/hourglass.gif"
          alt="Hourglass"
          className="w-6 h-6 mr-2"
        />
        Новая игра будет доступна через: <span className="font-semibold ml-1">{timer}</span>
      </div>
      <Link
        href="/agon"
        className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Принять участие
      </Link>
    </section>
  )
}
