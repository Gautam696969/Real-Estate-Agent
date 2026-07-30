import { useScrollReveal } from '../hooks/useScrollReveal'

export default function ProvenResults() {
  const revealRef = useScrollReveal()
  const items = [
    {
      title: 'DATA DRIVEN',
      description: 'Market knowledge goes beyond simply neighborhoods.',
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="5" y="35" width="10" height="20" rx="1" fill="#fff" />
          <rect x="20" y="25" width="10" height="30" rx="1" fill="#fff" />
          <rect x="35" y="15" width="10" height="40" rx="1" fill="#fff" />
          <rect x="50" y="5" width="10" height="50" rx="1" fill="#fff" />
          <line x1="2" y1="55" x2="58" y2="55" stroke="#fff" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: 'CLIENT-FOCUSED',
      description: 'Your time is valuable. That\'s why take the time upfront.',
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 30C15 22.268 21.268 16 29 16C36.732 16 43 22.268 43 30" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
          <path d="M29 36L22 48" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
          <path d="M29 36L36 48" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
          <circle cx="29" cy="16" r="5" stroke="#fff" strokeWidth="3" />
        </svg>
      ),
    },
    {
      title: 'MARKET EXPERTISE',
      description: 'You have questions and I have answers.',
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 5L50 30H10L30 5Z" fill="#fff" />
          <rect x="15" y="30" width="30" height="25" rx="1" fill="#fff" />
          <rect x="20" y="35" width="20" height="15" rx="1" fill="#111" />
          <path d="M25 50H35" stroke="#fff" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: 'REFERRAL NETWORK',
      description: 'This industry is all about who you know. I can connect you',
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="15" cy="15" r="5" stroke="#fff" strokeWidth="3" />
          <circle cx="45" cy="15" r="5" stroke="#fff" strokeWidth="3" />
          <circle cx="30" cy="35" r="5" stroke="#fff" strokeWidth="3" />
          <line x1="19" y1="18" x2="41" y2="18" stroke="#fff" strokeWidth="2" />
          <line x1="17" y1="19" x2="28" y2="32" stroke="#fff" strokeWidth="2" />
          <line x1="43" y1="19" x2="32" y2="32" stroke="#fff" strokeWidth="2" />
        </svg>
      ),
    },
  ]

  return (
    <section ref={revealRef} className="bg-[#111] py-[80px]">
      <div className="container mx-auto px-5">
        <h2 className="text-white text-left mb-0 text-[36px] font-cormorant" style={{ color: '#fff' }}>PROVEN RESULTS</h2>
        <div className="w-[60px] h-[2px] bg-[#888] mb-6" />
        <p className="text-white text-[18px] mb-12" style={{ color: '#fff' }}>
          Where proven results meet your real estate goals . Your success is our best testimonial.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {items.map((item, index) => (
            <div key={item.title} className={`reveal-up delay-${index + 1} transition-transform duration-300 ease-in-out hover:-translate-y-[10px] hover:shadow-[0_20px_40px_rgba(255,255,255,0.05)] text-center p-5 rounded-xl`}>
              <div className="mb-5 flex justify-center">{item.icon}</div>
              <h3 className="text-white mb-3 font-cormorant font-bold text-[25px]" style={{ color: '#fff' }}>
                {item.title}
              </h3>
              <p className="text-white text-[16px] leading-[1.8]" style={{ color: '#fff' }}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}