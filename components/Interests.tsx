import Image from 'next/image'

type InterestCard = {
  title: string
  caption: string
  icon?: string
  iconSrc?: string
  iconAlt?: string
}

const interestCards: InterestCard[] = [
  {
    title: 'Salsa Dancing',
    caption: 'Ten years in, and it still feels like flying. Salsa is where I stop thinking and just move.',
    iconSrc: '/images/dancer.png',
    iconAlt: 'Salsa dancing icon',
  },
  {
    title: 'Embroidery',
    caption: 'Started during COVID as a creative escape, turned into a small business. Pattern by patient pattern.',
    iconSrc: '/images/embroidery.png',
    iconAlt: 'Embroidery icon',
  },
  {
    title: 'Global Travel',
    caption: 'Favorite city: Vienna. Something about the coffee, the architecture, and the unhurried pace gets me every time.',
    iconSrc: '/images/travel.png',
    iconAlt: 'Global travel icon',
  },
  {
    title: 'Writing a Book',
    caption: 'A work in progress - fiction, for now. The words are coming. Slowly becoming real.',
    iconSrc: '/images/writing.png',
    iconAlt: 'Writing a book icon',
  },
]

const dylanPhotos = [
  {
    src: '/images/dylan-flowers.jpg',
    alt: 'Dylan sitting in a field of purple flowers, tongue out and happy',
  },
  {
    src: '/images/dylan-waterfall.jpg',
    alt: 'Dylan posing in front of a waterfall on a rocky riverbed',
  },
  {
    src: '/images/dylan-lakeside.jpg',
    alt: 'Dylan sitting by a sparkling lake, completely content',
  },
]

export default function Interests() {
  return (
    <section id="interests" className="px-6 py-24 md:py-32">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1C1C1E] mb-3">Interests</h2>
        <div className="w-10 h-0.5 bg-indigo-600 mb-10" />

        <div className="space-y-8">
          <div className="grid sm:grid-cols-2 gap-4">
            {interestCards.map((card) => (
              <div
                key={card.title}
                className="p-6 bg-white rounded-2xl border border-gray-100 hover:border-indigo-100 transition-colors duration-200"
              >
                <div className="mb-3 h-8 flex items-center">
                  {card.iconSrc ? (
                    <Image
                      src={card.iconSrc}
                      alt={card.iconAlt || `${card.title} icon`}
                      width={30}
                      height={30}
                      className="object-contain"
                    />
                  ) : (
                    <span className="text-2xl leading-none">{card.icon}</span>
                  )}
                </div>
                <h3 className="font-medium text-[#1C1C1E] text-sm mb-2">{card.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{card.caption}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl overflow-hidden bg-white border border-gray-100 p-5">
            <div className="grid grid-cols-3 gap-3 mb-4">
              {dylanPhotos.map((photo, i) => (
                <div key={i} className="relative overflow-hidden rounded-xl aspect-square">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 33vw, 20vw"
                  />
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-[#1C1C1E]">Meet Dylan</span>
                <span className="text-sm text-indigo-400">🐾</span>
                <p className="text-xs text-gray-400 ml-1">
                  My Great Pyranees adventure buddy - equal parts fluff and fearless.              
                </p>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}
