const skillGroups = [
  {
    category: 'Product Management',
    skills: ['Roadmapping', '0-to-1 Product', 'Agile / Scrum', 'User Research', 'Stakeholder Management', 'B2B SaaS', 'PRD Writing', 'Trade-off Analysis'],
  },
  {
    category: 'Technical',
    skills: ['Python', 'SQL', 'JavaScript', 'C#','C++','Git', 'RESTful APIs', 'MongoDB'],
  },
  {
    category: 'AI & Data',
    skills: ['Agentic AI', 'Prompt Engineering', 'LLM Integration', 'Data Analysis', 'A/B Testing'],
  },
  {
    category: 'Languages',
    skills: ['English (Fluent)', 'Hebrew (Native)', 'Russian (Native)'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1C1C1E] mb-3">Skills</h2>
        <div className="w-10 h-0.5 bg-indigo-600 mb-10" />

        <div className="space-y-8">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <p className="text-xs text-gray-400 font-medium tracking-widest uppercase mb-3">
                {group.category}
                <span className="ml-1 text-gray-300">·</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
