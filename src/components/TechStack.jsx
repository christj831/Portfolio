export default function TechStack() {
  const frontend = ['React', 'Next.js', 'Vite', 'TailwindCSS']
  const backend = ['Node.js', 'Express', 'MongoDB', 'Python']
  const programming = ['C#', 'PHP', 'JavaScript', 'Python', 'TypeScript']

  return (
    <section id="tech" className="glass p-8 flex flex-col h-full">
      <h2 className="text-2xl font-semibold steam-accent mb-6">Tech Stack</h2>

      <div className="grid grid-cols-2 gap-6 text-gray-300">
        {/* Frontend */}
        <div className="bg-[#1b2838]/60 p-4 rounded-xl shadow-md hover:shadow-lg transition-all">
          <h3 className="font-bold mb-2 text-white border-b border-[#66c0f4]/40 pb-1">
            Frontend
          </h3>
          <ul className="space-y-1 text-sm">
            {frontend.map((t) => (
              <li key={t}>• {t}</li>
            ))}
          </ul>
        </div>

        {/* Backend */}
        <div className="bg-[#1b2838]/60 p-4 rounded-xl shadow-md hover:shadow-lg transition-all">
          <h3 className="font-bold mb-2 text-white border-b border-[#66c0f4]/40 pb-1">
            Backend
          </h3>
          <ul className="space-y-1 text-sm">
            {backend.map((t) => (
              <li key={t}>• {t}</li>
            ))}
          </ul>
        </div>

        {/* programming (takes one full row if grid has odd count) */}
        <div className="bg-[#1b2838]/60 p-4 rounded-xl shadow-md hover:shadow-lg transition-all col-span-2">
          <h3 className="font-bold mb-2 text-white border-b border-[#66c0f4]/40 pb-1">
            Programming Language
          </h3>
          <ul className="flex flex-wrap gap-x-6 gap-y-1 text-sm">
            {programming.map((t) => (
              <li key={t}>• {t}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
