import { useEffect, useRef, useState } from 'react'

export default function Experience() {
  const experiences = [
    {
      id: 4,
      role: "TRYING TO MAKE A SIMPLE 2D GAME",
      company: "Unity",
      year: "2020",
      desc: "I watched dani in youtube that makes a video game using Unity so I tried making and learn it.",
    },
    {
      id: 3,
      role: "CREATE MY MOM A SIMPLE INVENTORY APP",
      company: "Visual Studio",
      year: "2021",
      desc: "I make my Mom who is a principal in her school a simple inventory app using Visual Studio and C#.",
    },
    {
      id: 2,
      role: "MINDORO STATE UNIVERSITY",
      company: "Student",
      year: "2022-2026",
      desc: "I go to Mindoro State University Calapan Campus to pursue the course BSIT.",
    }
  ]

  const listRef = useRef(null)
  const [currentPage, setCurrentPage] = useState(0)
  const [totalPages, setTotalPages] = useState(1)

  // Scroll smoothly by a given offset
  const scrollByAmount = (amount) => {
    const el = listRef.current
    if (!el) return
    const start = el.scrollTop
    const target = start + amount
    const duration = 500
    let startTime

    const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)

    const step = (ts) => {
      if (!startTime) startTime = ts
      const progress = Math.min((ts - startTime) / duration, 1)
      el.scrollTop = start + (target - start) * easeInOutCubic(progress)
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }

  // Scroll to exact position
  const scrollToPosition = (target) => {
    const el = listRef.current
    if (!el) return
    const start = el.scrollTop
    const duration = 600
    let startTime
    const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)
    const step = (ts) => {
      if (!startTime) startTime = ts
      const progress = Math.min((ts - startTime) / duration, 1)
      el.scrollTop = start + (target - start) * easeInOutCubic(progress)
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }

  // Watch scroll and resize
  useEffect(() => {
    const el = listRef.current
    if (!el) return

    const updatePages = () => {
      const visibleHeight = el.clientHeight
      const totalHeight = el.scrollHeight
      const pages = Math.ceil(totalHeight / visibleHeight)
      setTotalPages(pages)
    }

    const onScroll = () => {
      const el = listRef.current
      if (!el) return
      
      const scrollTop = el.scrollTop
      const scrollHeight = el.scrollHeight - el.clientHeight
      
      if (scrollHeight <= 0) {
        setCurrentPage(0)
        return
      }
      
      const progress = Math.min(Math.max(scrollTop / scrollHeight, 0), 1)
      const current = Math.round(progress * (totalPages - 1))
      setCurrentPage(current)
    }

    // Initial setup
    updatePages()
    
    // Add event listeners
    el.addEventListener('scroll', onScroll)
    window.addEventListener('resize', updatePages)

    return () => {
      el.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', updatePages)
    }
  }, [totalPages])

  return (
    <section id="experience" className="glass p-8 flex flex-col h-full overflow-hidden relative">
      <h2 className="text-2xl font-semibold steam-accent mb-4">Experience</h2>

      {/* Scrollable list */}
      <div
        className="flex-1 overflow-y-auto no-scrollbar pr-10"
        ref={listRef}
        style={{ scrollBehavior: 'smooth', willChange: 'scroll-position' }}
      >
        <div className="relative">
          {experiences.map((exp, idx) => {
            const isFirst = idx === 0
            const isLast = idx === experiences.length - 1
            return (
              <div key={exp.id} className="relative pl-10 py-6">
                {!isFirst && (
                  <span className="absolute left-3 top-0 bottom-1/2 w-px bg-white/20" />
                )}
                <span className="absolute left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#66c0f4] border-2 border-white/30 shadow-[0_0_6px_#66c0f4]" />
                {!isLast && (
                  <span className="absolute left-3 top-1/2 bottom-0 w-px bg-white/20" />
                )}
                <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                <p className="text-sm text-gray-400">{exp.company} • {exp.year}</p>
                <p className="mt-2 text-gray-300 text-justify">{exp.desc}</p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Navigation dots and buttons */}
      <div className="absolute right-3 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2 z-10 h-56">
        <button
          type="button"
          onClick={() => scrollByAmount(-200)}
          className="w-9 h-9 rounded-full border border-white/10 bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
        >
          ▲
        </button>

        <div className="flex-1 flex flex-col items-center justify-center gap-1 py-1">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => {
                const el = listRef.current
                if (!el) return
                const target = (el.scrollHeight - el.clientHeight) * (i / Math.max(totalPages - 1, 1))
                scrollToPosition(target)
              }}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                i === currentPage ? 'bg-[#66c0f4] scale-110' : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => scrollByAmount(200)}
          className="w-9 h-9 rounded-full border border-white/10 bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
        >
          ▼
        </button>
      </div>
    </section>
  )
}