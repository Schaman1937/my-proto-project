// components/MaterialsPreview.js

import Link from 'next/link'

export default function MaterialsPreview() {
  // Демоданные для отображения
  const articles = [
    {
      id: 1,
      title: 'История и культура древних цивилизаций',
      date: '2025-01-01',
      excerpt: 'Краткий обзор достижений и тайн, которые ещё предстоит разгадать...'
    },
    {
      id: 2,
      title: 'Техника и инструменты каменного века',
      date: '2025-01-02',
      excerpt: 'Рассмотрим, как человек научился обрабатывать камень...'
    }
  ]

  return (
    <section className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Последние материалы</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {articles.map(article => (
          <div key={article.id} className="p-4 border rounded">
            <h3 className="font-semibold text-lg mb-2">{article.title}</h3>
            <p className="text-xs text-gray-500 mb-2">{article.date}</p>
            <p className="text-gray-700">{article.excerpt}</p>
            <Link
              href={`/materials`}
              className="inline-block mt-2 text-blue-600 hover:underline"
            >
              Читать далее
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
