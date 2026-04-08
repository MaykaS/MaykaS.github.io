const projects = [
  {
    title: 'RecruitOS',
    description:
      'A personal recruiting operating system for MBA students pursuing internships. I am building it as an opinionated single-user web app designed to reduce recruiting chaos, preserve context, and make the next best action obvious across applications, networking, casing, and recruiting knowledge.',
    tag: 'Flagship Project',
    tagStyle: 'bg-indigo-50 text-indigo-600',
    footnote: 'Personal project - Built independently',
  },
  {
    title: 'AI Customer-Service Prototype',
    description:
      'Building an end-to-end agentic AI customer-service prototype as part of Cornell\'s Digital Technology Immersion. Developed the PR/FAQ, executive pitch deck, and live demo narrative - combining LLM tooling with structured product thinking to prototype a scalable support solution.',
    tag: 'Class Project',
    tagStyle: 'bg-indigo-50 text-indigo-600',
    footnote: 'Cornell SC Johnson - Digital Tech Immersion - 2025-2026',
  },
  {
    title: 'RICA Cyber Program',
    description:
      'Selected for the prestigious Ruhr-Israel Cyber Activator (RICA) program at Ben Gurion University. Collaborated on smart-lock data protection research and presented findings to senior academic and industry leaders in the cybersecurity space.',
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
              className="group p-6 bg-white rounded-2xl border border-gray-100 hover:border-indigo-100 hover:shadow-sm transition-all duration-300"
            >
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
                <p className="text-xs text-gray-300 mt-4 pt-4 border-t border-gray-100">{project.footnote}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
