'use client'

import Image from 'next/image'

// Static star positions (deterministic - no hydration mismatch)
const stars = [
  { top: '5%', left: '10%', size: 1.5, opacity: 0.6 },
  { top: '8%', left: '35%', size: 1, opacity: 0.4 },
  { top: '12%', left: '62%', size: 2, opacity: 0.7 },
  { top: '3%', left: '80%', size: 1, opacity: 0.5 },
  { top: '18%', left: '22%', size: 1.5, opacity: 0.5 },
  { top: '22%', left: '90%', size: 1, opacity: 0.4 },
  { top: '28%', left: '5%', size: 2, opacity: 0.6 },
  { top: '30%', left: '48%', size: 1, opacity: 0.3 },
  { top: '35%', left: '72%', size: 1.5, opacity: 0.5 },
  { top: '40%', left: '15%', size: 1, opacity: 0.4 },
  { top: '42%', left: '95%', size: 2, opacity: 0.6 },
  { top: '50%', left: '30%', size: 1, opacity: 0.3 },
  { top: '55%', left: '58%', size: 1.5, opacity: 0.5 },
  { top: '60%', left: '8%', size: 1, opacity: 0.4 },
  { top: '65%', left: '85%', size: 2, opacity: 0.6 },
  { top: '70%', left: '42%', size: 1, opacity: 0.3 },
  { top: '75%', left: '18%', size: 1.5, opacity: 0.5 },
  { top: '80%', left: '70%', size: 1, opacity: 0.4 },
  { top: '85%', left: '55%', size: 2, opacity: 0.6 },
  { top: '90%', left: '25%', size: 1, opacity: 0.3 },
  { top: '92%', left: '78%', size: 1.5, opacity: 0.5 },
  { top: '95%', left: '40%', size: 1, opacity: 0.4 },
  { top: '15%', left: '50%', size: 1, opacity: 0.35 },
  { top: '48%', left: '2%', size: 1.5, opacity: 0.5 },
  { top: '58%', left: '93%', size: 1, opacity: 0.4 },
  { top: '25%', left: '77%', size: 2, opacity: 0.55 },
  { top: '72%', left: '60%', size: 1, opacity: 0.35 },
  { top: '38%', left: '33%', size: 1.5, opacity: 0.45 },
  { top: '83%', left: '12%', size: 1, opacity: 0.4 },
  { top: '10%', left: '45%', size: 2, opacity: 0.5 },
]

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #070714 0%, #0d0d2b 50%, #0a0a1f 100%)' }}
    >
      {/* Stars */}
      {stars.map((star, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-white pointer-events-none"
          style={{
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
          }}
        />
      ))}

      {/* Subtle glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)' }} />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)' }} />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-xl">
        {/* Profile photo */}
        <div className="mb-6 w-24 h-24 rounded-full ring-2 ring-indigo-500/40 ring-offset-4 ring-offset-transparent overflow-hidden">
          <Image
            src="/images/me.jpg"
            alt="Maya Sagalin"
            width={120}
            height={120}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Label */}
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-indigo-400 mb-4">
          Hello, I&apos;m
        </p>

        {/* Name */}
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-5 leading-tight">
          Maya{' '}
          <span className="text-indigo-400">Sagalin</span>
        </h1>

        {/* Role tags */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {['Builder', 'Product', 'Engineer', 'Cornell MBA'].map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-full border border-indigo-500/30 text-indigo-300 bg-indigo-500/10"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Bio */}
        <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-8 max-w-sm">
          Building thoughtful products with technical depth and product judgment.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <a
            href="#projects"
            className="px-6 py-2.5 bg-indigo-600 text-white text-sm font-medium rounded-full hover:bg-indigo-500 transition-colors duration-200"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-2.5 border border-indigo-500/40 text-indigo-300 text-sm font-medium rounded-full hover:bg-indigo-500/10 transition-colors duration-200"
          >
            Get In Touch
          </a>
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/maya-sagalin/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-indigo-400 transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <a
            href="https://github.com/MaykaS"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-indigo-400 transition-colors duration-200"
            aria-label="GitHub"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-6 bg-gradient-to-b from-gray-600 to-transparent" />
      </div>
    </section>
  )
}
