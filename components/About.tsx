export default function About() {
  return (
    <section id="about" className="px-6 py-24 md:py-32">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1C1C1E] mb-3">About</h2>
        <div className="w-10 h-0.5 bg-indigo-600 mb-10" />

        <div className="space-y-6 max-w-2xl">
          <p className="text-2xl md:text-3xl font-light text-[#1C1C1E] leading-relaxed">
            I started out writing code. Then I got curious about{' '}
            <em className="not-italic text-indigo-600">why</em> we build things - and that changed everything.
          </p>

          <p className="text-base text-gray-500 leading-relaxed">
          My foundation is Computer Science and Bioinformatics from Ben Gurion University. But the question that kept pulling me forward wasn't technical - it was strategic. Why are we building this? Who does it actually serve? What should we build next?
          </p>

          <p className="text-base text-gray-500 leading-relaxed">
            That curiosity pushed me beyond execution and into shaping what gets built, why it matters, and how teams bring it to life. At Segoma, I grew into the person who owned the roadmap, made the hard trade-offs, and brought people together across three continents to build something they were proud of. At Lavie Engineers, the stakes shifted - enterprise clients, complex partners, high-pressure delivery - and I learned that the most expensive thing in any project isn't bad code. It's misalignment.
          </p>

          <p className="text-base text-gray-500 leading-relaxed">
           Now I'm at Cornell's SC Johnson College of Business as a Forte Fellow, adding the strategic layer to a foundation that's already technical, already cross-functional, and already proven. I'm here to do it at a bigger scale, on harder problems, with more impact.
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {['English', 'Hebrew', 'Russian'].map((lang) => (
              <span
                key={lang}
                className="text-xs px-3 py-1.5 rounded-full border border-gray-200 text-gray-500"
              >
                {lang}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
