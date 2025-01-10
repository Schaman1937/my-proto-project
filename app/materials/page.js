import Header from '../../shared/Header'
import Footer from '../../shared/Footer'
import Link from 'next/link'

export default function MaterialsPage() {
  const articles = [
    {
      id: '1',
      title: 'Артефакты и находки',
      date: '2025-01-03',
      excerpt: 'Краткое описание статьи об интересных находках...'
    },
    {
      id: '2',
      title: 'Забытые цивилизации',
      date: '2025-01-04',
      excerpt: 'Рассмотрим некоторые утерянные города и народы...'
    }
  ]

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Материалы</h1>
        <div className="grid gap-4 md:grid-cols-2">
          {articles.map(article => (
            <div key={article.id} className="p-4 border border-gray-700 rounded bg-gray-800">
              <h2 className="font-semibold text-lg">{article.title}</h2>
              <p className="text-xs text-gray-400 mb-2">{article.date}</p>
              <p className="text-gray-200">{article.excerpt}</p>
              <Link href={`/materials/${article.id}`} className="text-blue-400 hover:underline">
                Читать далее
              </Link>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}
