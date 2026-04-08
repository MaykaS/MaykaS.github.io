'use client'

import { useState } from 'react'

const posts = [
  {
    title: "Activation isn't a growth problem. Except when it is.",
    preview:
      "Growth and product often use the same word for different outcomes, and that mismatch is where activation quietly breaks down.",
    body: [
      "Here's the thing nobody says out loud: growth and product are often solving different versions of the same problem and calling it by the same name.",
      "Product defines activation as reaching a feature. Growth defines it as a behavior that predicts retention. Those sound similar. They're not.",
      "I've watched users make it through every step of an onboarding flow - hit every checkpoint, complete every task - and still churn two weeks later. Not because the product was broken. Because they never reached the moment where it clicked. The moment where the value stopped being described and started being felt.",
      "Product built the steps. Growth built the funnel. Neither one owned the moment in between.",
      "That gap is where most activation failures actually live. Not in the copy, not in the experiment, not in the email sequence. In the fact that two teams drew different finish lines and never compared notes.",
      "The fix isn't a better A/B test. It's a shared definition of what you're actually trying to get the user to feel - before anyone writes a line of code or sets up a single experiment.",
      "When that definition exists, growth and product stop being parallel tracks. They become the same conversation.",
      "But how often does that conversation actually happen before the sprint starts?",
    ],
  },
  {
    title: '"It works exactly as specced" is the most expensive sentence in product.',
    preview:
      "A product can match the spec perfectly and still fail the people who actually have to use it every day.",
    body: [
      "I've heard it in postmortems. Usually said with quiet defensiveness - because it's true, and it doesn't help.",
      "The product worked. The client was lost. And everyone in the room was technically correct.",
      "What nobody said out loud: we built it for the person who bought it. Not for the person who had to use it every day. Those are almost never the same person - and the gap between them is where onboarding goes to die.",
      "The champion who signed the contract understood the vision. The end users who showed up on day one just needed to know what to do first. Not the full feature set. Not the roadmap. Just: what do I do right now, and why does it matter?",
      "We had built thorough onboarding. Comprehensive. Covered everything. Which meant it helped no one - because nobody knows what to do with everything.",
      "Onboarding isn't documentation. It's a series of small moments where someone decides whether to keep going or quietly stop. And most of the time, those moments get designed for the person who already understands the product - not for the human encountering it for the first time, slightly skeptical, with fifteen other things to do.",
      '"Works as specced" means you built what you intended.',
      'So who were you intending it for?',
    ],
  },
]

export default function Blog() {
  const [openPost, setOpenPost] = useState<number | null>(null)

  return (
    <section id="thoughts" className="px-6 py-24 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1C1C1E] mb-3">Thoughts</h2>
        <div className="w-10 h-0.5 bg-indigo-600 mb-10" />

        <div className="grid gap-4">
          {posts.map((post, index) => {
            const isOpen = openPost === index

            return (
              <article
                key={post.title}
                className="bg-[#FAFAFA] rounded-3xl border border-gray-100 overflow-hidden transition-all duration-300"
              >
                <button
                  type="button"
                  onClick={() => setOpenPost(isOpen ? null : index)}
                  className="w-full text-left p-6 md:p-7 hover:bg-white/60 transition-colors duration-200"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl md:text-2xl font-medium text-[#1C1C1E] leading-snug mb-3 max-w-3xl">
                        {post.title}
                      </h3>
                      {!isOpen && (
                        <p className="text-base text-gray-500 leading-relaxed line-clamp-2 max-w-3xl">
                          {post.preview}
                        </p>
                      )}
                      <p className="text-sm text-indigo-600 mt-4 font-medium">
                        {isOpen ? 'Close' : 'Read more'}
                      </p>
                    </div>

                    <span
                      className={`mt-1 flex-shrink-0 text-indigo-500 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </span>
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 md:px-7 pb-6 md:pb-7">
                    <div className="border-t border-gray-200 pt-6 space-y-4 max-w-3xl">
                      {post.body.map((paragraph) => (
                        <p key={paragraph} className="text-base text-gray-500 leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
