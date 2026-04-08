const volunteering = [
  {
    title: 'Baby Brigade',
    description:
      'Supported a community resource initiative for local parents, helping connect families with essential supplies and in-person support through a large-scale Ithaca resource fair.',
    tag: 'Volunteer',
    tagStyle: 'bg-amber-50 text-amber-600',
    footnote: 'Community impact initiative - Featured by Cornell Chronicle',
    href: 'https://news.cornell.edu/stories/2026/03/student-veterans-create-resource-fair-local-parents',
  },
  {
    title: 'Big Red Tech Strategy',
    description:
      'Mentored Cornell Master of Engineering students through project work, helping them shape stronger business thinking around market research, strategic positioning, and how to evaluate technical ideas through a product and commercial lens.',
    tag: 'Mentor',
    tagStyle: 'bg-indigo-50 text-indigo-600',
    footnote: 'Cornell community',
  },
  {
    title: 'MBA Mentorship Program',
    description:
      'Co-leading a peer mentorship initiative for international MBA students navigating the U.S. job market. First-years get paired with second-years for recruiting guidance, pre-MBAs get support with applications and school selection, and the broader community benefits from speaker events and structured programming.',
    tag: 'Active',
    tagStyle: 'bg-emerald-50 text-emerald-600',
    footnote: 'International MBA Community - Co-Lead, Mentorship Program',
  },
  {
    title: 'Code for Israel',
    description:
      'Full-Stack Developer volunteer building nonprofit integration tools. Collaborated with design and dev teams to build features aligned with product vision, streamlining operations and expanding platform impact for social-sector organizations across Israel.',
    tag: 'Volunteer',
    tagStyle: 'bg-amber-50 text-amber-600',
    footnote: 'Code for Israel - Full-Stack Developer',
  },
]

export default function Volunteering() {
  return (
    <section id="volunteering" className="px-6 py-24 md:py-32 bg-[#FAFAFA]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1C1C1E] mb-3">Volunteering</h2>
        <div className="w-10 h-0.5 bg-indigo-600 mb-10" />

        <div className="grid sm:grid-cols-2 gap-5">
          {volunteering.map((item, i) => {
            const CardTag = item.href ? 'a' : 'div'

            return (
              <CardTag
                key={i}
                {...(item.href
                  ? {
                      href: item.href,
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    }
                  : {})}
                className="group block h-full p-6 bg-white rounded-2xl border border-gray-100 hover:border-indigo-100 hover:shadow-sm transition-all duration-300"
              >
                <div className="flex h-full flex-col">
                  <div className="mb-4">
                    <span className={`inline-block text-xs font-medium px-2.5 py-1 rounded-full ${item.tagStyle}`}>
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="font-medium text-[#1C1C1E] text-base leading-snug mb-3 group-hover:text-indigo-600 transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
                  {item.footnote && (
                    <p className="text-xs text-gray-300 mt-auto pt-4 border-t border-gray-100">{item.footnote}</p>
                  )}
                </div>
              </CardTag>
            )
          })}
        </div>
      </div>
    </section>
  )
}
