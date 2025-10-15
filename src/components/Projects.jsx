const projects = [
  { id: 1, title: "Project Museo", desc: "Museom with 3d View", link: "https://github.com/christj831/Project-Museo" },
  { id: 2, title: "Spotify style using Node", desc: "Simple local Spotify player", link: "https://github.com/christj831/Spotify/tree/main/src/css" },
  { id: 3, title: "Document Summarizer", desc: "Simple Auto Summirizer of Documents using Python and Machine Learning", link: "https://github.com/christj831/document_summary" },
  { id: 4, title: "PetPro", desc: "Simple local ecommerce website for pets", link: "https://github.com/christj831/PetPro" },
]

export default function Projects() {
  return (
    <section id="projects" className="glass p-8">
      <h2 className="text-2xl font-semibold steam-accent mb-4">Recent Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map(p => (
          <div
            key={p.id}
            className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 hover:border-[#66c0f4] transition"
          >
            <h3 className="text-xl font-bold text-white">{p.title}</h3>
            <p className="text-gray-400 mt-2">{p.desc}</p>
            <a href={p.link} className="steam-link mt-3 inline-block">View project →</a>
          </div>
        ))}
      </div>
    </section>
  )
}
