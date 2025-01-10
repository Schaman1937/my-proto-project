import '../styles/globals.css'
import { TimerProvider } from './shared/TimerContext'

export const metadata = {
  title: 'Протоистория',
  description: 'Агоны, таймер, доска почёта и материалы'
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className="bg-gray-900 text-gray-100 min-h-screen">
        <TimerProvider>
          {children}
        </TimerProvider>
      </body>
    </html>
  )
}
