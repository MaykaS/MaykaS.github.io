const experiences = [
  {
    period: '2026',
    role: 'Product Strategy Intern',
    company: 'Stealth AI Startup',
    location: 'New York, US',
    current: false,
    description: 'Early-stage AI product strategy and concept validation work.',
    bullets: [
      'Accelerated product definition by leading <strong>user research</strong>, workflow analysis, and competitive research, translating findings into prioritized AI use cases, product requirements, and an MVP roadmap to guide early product development',
      'Improved product decision-making by <strong>prototyping and testing AI concepts</strong> with stakeholders, refining user journeys, success criteria, and feature requirements to validate feasibility and strengthen product value',
    ],
    tags: ['AI Strategy', 'User Research', 'MVP Roadmap', 'Prototyping', 'Product Requirements'],
  },
  {
    period: '2026',
    role: 'MBA Consultant, Enterprise AI / Product Strategy',
    company: 'Oracle',
    location: 'New York, US',
    current: false,
    description: 'Enterprise AI product strategy work for a financial-services customer-service use case.',
    bullets: [
      'Advised an Oracle sponsor on <strong>enterprise AI product strategy</strong>, developing a prototype, <strong>PR/FAQ</strong>, PRD, demo narrative, and executive pitch to position OCI as a governed CX solution',
      'Analyzed customer service workflows, competitive positioning, ROI levers, and adoption requirements to frame <strong>Generative AI</strong> and <strong>Agentic AI Services</strong> around secure RAG, auditability, human-in-the-loop governance, and deployment',
    ],
    tags: ['Enterprise AI', 'Product Strategy', 'GenAI', 'PRD', 'Executive Communication'],
  },
  {
    period: '2024 - 2025',
    role: 'Project Manager',
    company: 'Lavie Engineers S.B Ltd',
    location: 'Beer Sheva, Israel',
    current: false,
    description: 'Turnkey solutions in LPG, natural gas, and water purification.',
    bullets: [
      '<strong>$2M+ annual revenue</strong> - directed <strong>strategic delivery</strong> for 12 enterprise clients using agile and risk management',
      'Boosted client satisfaction <strong>10%</strong> by running stakeholder interviews and aligning execution with <strong>product strategy</strong>',
      'Closed <strong>$500K+</strong> across 4 contracts with Intel, IEC & major hospitals through <strong>requirements translation</strong> and alignment',
    ],
    tags: ['Project Management', 'Enterprise', 'Agile', 'Stakeholder Management'],
  },
  {
    period: '2021 - 2024',
    role: 'Product Manager, Software Development & R&D',
    company: 'Segoma',
    location: 'Herzliya, Israel',
    current: false,
    description: 'Cloud-based 3D imaging and SaaS solutions for the luxury gemstone trade.',
    bullets: [
      'Scaled to <strong>2,000+ DAU</strong> - owned end-to-end delivery of partner integrations and <strong>third-party API</strong> solutions',
      'Cut release cycles by <strong>3 weeks</strong> through <strong>cross-functional ownership</strong> with QA and infrastructure',
      'Reduced production costs <strong>20%</strong> by optimizing backend throughput and cutting latency by 200ms',
      'Shipped <strong>6 major releases</strong> coordinating teams across New York, Hong Kong, and India',
      'Cut seller onboarding time <strong>10%</strong> via <strong>UX redesign</strong> driven by user analytics and iterative testing',
    ],
    tags: ['Product Management', 'SaaS', 'B2B', 'R&D', 'Roadmapping', 'API Integrations'],
  },
  {
    period: '2017 - 2020',
    role: 'Lecturer',
    company: 'Kidumatica',
    location: 'Beer Sheva, Israel',
    current: false,
    description: 'Extracurricular math excellence program for gifted youth.',
    bullets: [
      '<strong>95% satisfaction</strong> - designed curriculum and delivered STEM programs to 1,000+ students; trained a 20-person staff',
      'Mentored 12 students to <strong>5 national competition wins</strong>',
    ],
    tags: ['STEM Education', 'Leadership', 'Curriculum Design', 'Coaching'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-24 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#1C1C1E] mb-3">Experience</h2>
        <div className="w-10 h-0.5 bg-indigo-600 mb-12" />

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-gray-100" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <div key={i} className="relative pl-8">
                {/* Dot */}
                <div className="absolute left-[-4.5px] top-[6px] w-2.5 h-2.5 rounded-full border-2 border-gray-300 bg-white" />

                {/* Date */}
                <p className="text-xs font-mono text-gray-400 tracking-widest uppercase mb-3">
                  {exp.period}
                </p>

                {/* Card */}
                <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                  {/* Role + company */}
                  <h3 className="font-bold text-[#1C1C1E] text-lg leading-snug mb-1">
                    {exp.role}
                  </h3>
                  <p className="text-indigo-600 text-sm font-medium mb-1">{exp.company}</p>
                  <div className="flex items-center gap-1.5 text-gray-400 text-xs mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    {exp.location}
                  </div>

                  {/* Description */}
                  {exp.description && (
                    <p className="text-sm text-gray-400 leading-relaxed mb-4">{exp.description}</p>
                  )}

                  {/* Bullets */}
                  <ul className="space-y-2 mb-5">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex gap-2.5 text-sm text-gray-600 leading-relaxed">
                        <span className="mt-[7px] shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-300" />
                        <span dangerouslySetInnerHTML={{ __html: b }} />
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="text-xs px-3 py-1 rounded-full bg-indigo-50 text-indigo-500 border border-indigo-100">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
