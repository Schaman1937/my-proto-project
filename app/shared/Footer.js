export default function Footer() {
  return (
    <footer className="bg-gray-800 mt-8 py-4">
      <div className="container mx-auto text-center text-gray-400">
        <p>© {new Date().getFullYear()} Протоистория. Все права защищены.</p>
      </div>
    </footer>
  )
}
