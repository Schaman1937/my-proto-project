export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-8">
      <div className="container mx-auto px-4 py-4 text-center text-gray-600">
        <p>© {new Date().getFullYear()} Протоистория. Все права защищены.</p>
      </div>
    </footer>
  )
}
