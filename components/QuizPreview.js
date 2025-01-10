import Link from 'next/link'

export default function QuizPreview() {
  // Здесь можно динамически получать инфу о текущей викторине и времени до её обновления
  const timer = '00:12:34' // пример

  return (
    <section className="mt-8 p-4 border rounded">
      <h2 className="text-2xl font-bold mb-2">Викторина</h2>
      <p className="text-gray-700 mb-2">
        Новая викторина будет доступна через: <span className="font-semibold">{timer}</span>
      </p>
      <Link
        href="/quiz"
        className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Принять участие
      </Link>
    </section>
  )
}
