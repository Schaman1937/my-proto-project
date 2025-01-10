export default function AttrSection() {
  return (
    <section className="mt-8 bg-gray-800 p-4 rounded">
      <h2 className="text-2xl font-bold mb-4">Атрибутика</h2>
      {/* Пример простой сетки товаров */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* Карточка */}
        <div className="border border-gray-700 p-4 rounded bg-gray-700">
          <img src="/demo-merch.jpg" alt="Демо товар" className="mb-2 w-full" />
          <h3 className="font-semibold text-gray-100">Футболка «Протоистория»</h3>
          <p className="text-sm text-gray-400">999 руб.</p>
          <button className="mt-2 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
            Купить
          </button>
        </div>
        {/* Добавьте ещё... */}
      </div>
    </section>
  )
}
