import Link from 'next/link'

export default function Hero() {
  return (
    <section className="bg-gray-100 p-8 rounded-md text-center">
      <h1 className="text-3xl font-bold mb-4">
        Погрузись в загадки Протоистории!
      </h1>
      <p className="mb-6 text-gray-700">
        Участвуй в викторине, читай материалы и узнавай новое о мире древности.
      </p>
      <Link href="/quiz" className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Пройти викторину
      </Link>
    </section>
  )
}
