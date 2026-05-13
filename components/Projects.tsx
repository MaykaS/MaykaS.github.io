const projects = [
  {
    title: 'Tab Agent',
    description:
      'A focus-first browser memory agent built to help people manage tab overload without constantly deciding what to keep, close, or reopen. Designed as a personalized system that learns which contexts are safe to compress and which are costly to interrupt, it combines autonomous tab sleep and wake behavior with product thinking around trust, feedback, and usability.',
    tag: 'Personal Project',
    tagStyle: 'bg-indigo-50 text-indigo-600',
    footnote: 'Personal project - Built independently',
  },
  {
    title: 'Pawfolio',
    description:
      'A mobile-first dog care app built to help one owner manage routines, reminders, health history, and memories in one calm, trustworthy place. Designed around real daily use, Pawfolio combines warm companion-style UX with serious care organization, private backup and restore, and dependable operational structure.',
    tag: 'Personal Project',
    tagStyle: 'bg-indigo-50 text-indigo-600',
    footnote: 'Personal project - Product + engineering',
  },
  {
    title: 'RecruitOS',
    description:
      'A personal recruiting operating system for MBA students pursuing internships, built to reduce chaos and make the next best action clearer across applications, networking, casing, and recruiting knowledge. Designed as an opinionated single-user workflow tool rather than a generic tracker, RecruitOS combines structured execution with product thinking around focus, memory, and follow-through.',
    tag: 'Flagship Project',
    tagStyle: 'bg-indigo-50 text-indigo-600',
    footnote: 'Personal project - Built independently',
  },
  {
    title: 'AI Customer-Service Prototype',
    description:
      'Built an end-to-end agentic AI customer-service prototype as part of Cornell\'s Digital Technology Immersion. Developed the PR/FAQ, executive pitch deck, and demo narrative, using LLM tooling and structured product thinking to explore how AI support systems can be shaped into something scalable, credible, and useful.',
    tag: 'Class Project',
    tagStyle: 'bg-indigo-50 text-indigo-600',
    footnote: 'Cornell SC Johnson - Digital Tech Immersion - 2025-2026',
  },
  {
    title: 'RICA Cyber Program',
    description:
      'Selected for the Ruhr-Israel Cyber Activator (RICA) program at Ben Gurion University, where I worked on smart-lock data protection research and presented findings to academic and industry leaders. The experience strengthened both my technical foundation and my interest in how security, systems, and real-world product constraints intersect.',
    tag: 'Academic',
    tagStyle: 'bg-gray-100 text-gray-500',
    footnote: 'Ben Gurion University - 2021',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24 md:py-32">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1C1C1E] mb-3">Projects</h2>
        <div className="w-10 h-0.5 bg-indigo-600 mb-10" />

        <div className="grid sm:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group h-full p-6 bg-white rounded-2xl border border-gray-100 hover:border-indigo-100 hover:shadow-sm transition-all duration-300"
            >
              <div className="flex h-full flex-col">
                <div className="mb-4">
                  <span className={`inline-block text-xs font-medium px-2.5 py-1 rounded-full ${project.tagStyle}`}>
                    {project.tag}
                  </span>
                </div>
                <h3 className="font-medium text-[#1C1C1E] text-base leading-snug mb-3 group-hover:text-indigo-600 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">{project.description}</p>
                {project.footnote && (
                  <p className="text-xs text-gray-300 mt-auto pt-4 border-t border-gray-100">{project.footnote}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
