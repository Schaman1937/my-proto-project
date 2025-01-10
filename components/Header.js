import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold">
          <Link href="/">
            Протоистория
          </Link>
        </div>
        <nav className="space-x-4">
          <Link href="/quiz" className="hover:underline">
            Викторина
          </Link>
          <Link href="/leaderboard" className="hover:underline">
            Доска почёта
          </Link>
          <Link href="/materials" className="hover:underline">
            Материалы
          </Link>
          {/* Можно реализовать страницу мерча или вставить ссылку на внешний магазин */}
          <Link href="#" className="hover:underline">
            Мерч
          </Link>
          <Link href="/login" className="border px-2 py-1 rounded hover:bg-gray-100">
            Войти
          </Link>
        </nav>
      </div>
    </header>
  )
}
