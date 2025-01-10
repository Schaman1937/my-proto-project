import Header from '../../shared/Header'
import Footer from '../../shared/Footer'

export default function AttributesPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Атрибутика</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="border border-gray-700 p-4 rounded bg-gray-800">
            <img src="/demo-merch.jpg" alt="Атрибутика" className="mb-2 w-full" />
            <h3 className="font-semibold text-gray-100">Футболка «Протоистория»</h3>
            <p className="text-sm text-gray-400">999 руб.</p>
            <button className="mt-2 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
              Купить
            </button>
          </div>
          {/* Добавьте ещё товары... */}
        </div>
      </main>
      <Footer />
    </>
  )
}
