const GraduationCapIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
  </svg>
)

const education = [
  {
    school: 'Cornell University',
    degree: 'MBA',
    field: 'SC Johnson Graduate School of Business',
    location: 'Ithaca, NY',
    years: '2024 - Present',
    current: true,
    badges: ['Forte Foundation Fellow'],
    leadershipRoles: ['HTC Club - VP of Trek', 'VC Club - VP of Community', 'JBA - President'],
    icon: <GraduationCapIcon />,
  },
  {
    school: 'Ben-Gurion University of the Negev',
    degree: 'B.Sc.',
    field: 'Computer Science & Bioinformatics',
    location: 'Beer Sheva, Israel',
    years: '2017 - 2021',
    current: false,
    badges: [],
    leadershipRoles: [],
    icon: <GraduationCapIcon />,
  },
]

export default function Education() {
  return (
    <section id="education" className="px-6 py-24 md:py-32 bg-[#FAFAFA]">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1C1C1E] mb-3">Education</h2>
          <div className="w-10 h-0.5 bg-indigo-600" />
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {education.map((edu, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-gray-100 p-6 flex flex-col gap-4 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                  {edu.icon}
                </div>
                <div>
                  <p className="font-semibold text-[#1C1C1E] text-base leading-snug">{edu.school}</p>
                  <p className="text-indigo-600 text-sm font-medium mt-0.5">
                    {edu.degree} - {edu.field}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-gray-400 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>{edu.location}</span>
                <span>-</span>
                <span>{edu.years}</span>
              </div>

              {(edu.current || edu.badges.length > 0) && (
                <div className="flex flex-wrap gap-2">
                  {edu.current && (
                    <span className="text-xs px-3 py-1 rounded-full border border-emerald-300 text-emerald-600 bg-emerald-50">
                      Current
                    </span>
                  )}
                  {edu.badges.map((badge) => (
                    <span
                      key={badge}
                      className="text-xs px-3 py-1 rounded-full bg-indigo-50 text-indigo-500 border border-indigo-100"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              )}

              {edu.leadershipRoles.length > 0 && (
                <div className="pt-1">
                  <p className="text-xs text-gray-300 uppercase tracking-wider mb-3">Leadership</p>
                  <ul className="space-y-2">
                    {edu.leadershipRoles.map((role) => (
                      <li key={role} className="flex gap-2.5 text-sm text-gray-500 leading-relaxed">
                        <span className="mt-[7px] shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-300" />
                        <span>{role}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
