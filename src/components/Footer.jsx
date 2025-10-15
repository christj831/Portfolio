export default function Footer() {
  return (
    <footer className="bg-black/20 backdrop-blur-sm mt-12 py-6 text-center text-sm text-gray-400 border-t border-white/5">
      © {new Date().getFullYear()} Your Name. Inspired by Steam UI.
    </footer>
  )
}