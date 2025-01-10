export default function MerchSection() {
  return (
    <section className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Мерч</h2>
      {/* Пример простой сетки товаров */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* Каждая карточка товара */}
        <div className="border p-4 rounded">
          <img src="/demo-merch.jpg" alt="Демо товар" className="mb-2" />
          <h3 className="font-semibold">Футболка «Протоистория»</h3>
          <p className="text-sm text-gray-600">999 руб.</p>
          {/* Здесь предполагается ссылка на сторонний магазин, например всемайки.рф или fun */}
          <button className="mt-2 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
            Купить
          </button>
        </div>
        {/* Повторяем для других товаров... */}
      </div>
    </section>
  )
}
