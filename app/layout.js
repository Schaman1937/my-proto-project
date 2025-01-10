import '../styles/globals.css'

export const metadata = {
  title: 'Протоистория',
  description: 'Агоны, таймер, доска почёта и материалы'
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className="bg-gray-900 text-gray-100 min-h-screen">
        {children}
      </body>
    </html>
  )
}
