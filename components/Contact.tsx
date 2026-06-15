'use client'

import { trackOutboundClick } from '@/lib/gtag'

const contacts = [
  {
    label: 'Email',
    value: 'mayasag10@gmail.com',
    href: 'mailto:mayasag10@gmail.com',
    icon: (
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
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/maya-sagalin',
    href: 'https://www.linkedin.com/in/maya-sagalin/',
    icon: (
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
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: 'github.com/MaykaS',
    href: 'https://github.com/MaykaS',
    icon: (
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
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    ),
  },
]

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24 md:py-32">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1C1C1E] mb-3">Contact</h2>
        <div className="w-10 h-0.5 bg-indigo-600 mb-10" />

        <div>
            <p className="text-2xl md:text-3xl font-light text-[#1C1C1E] leading-relaxed mb-3">
              Let's talk.
            </p>
            <p className="text-base text-gray-400 leading-relaxed mb-12 max-w-sm">
              Whether it's a role, a collaboration, or just a good conversation - I'm always open.
            </p>

            <div className="space-y-6">
              {contacts.map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  target={contact.href.startsWith('mailto') ? undefined : '_blank'}
                  rel={contact.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  className="group flex items-center gap-4 text-gray-400 hover:text-indigo-600 transition-colors duration-200"
                  onClick={() =>
                    trackOutboundClick(
                      contact.label.toLowerCase() as 'linkedin' | 'github' | 'email',
                      'contact'
                    )
                  }
                >
                  <span className="group-hover:text-indigo-600 transition-colors duration-200">
                    {contact.icon}
                  </span>
                  <div>
                    <p className="text-xs text-gray-300 uppercase tracking-wider mb-0.5">
                      {contact.label}
                    </p>
                    <p className="text-sm text-gray-500 group-hover:text-indigo-600 transition-colors duration-200">
                      {contact.value}
                    </p>
                  </div>
                  <svg
                    className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-indigo-400"
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                </a>
              ))}
            </div>
        </div>
      </div>
    </section>
  )
}
