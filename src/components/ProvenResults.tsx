export default function ProvenResults() {
  const items = [
    {
      title: 'DATA DRIVEN',
      description: 'Market knowledge goes beyond simply neighborhoods.',
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="5" y="35" width="10" height="20" rx="1" fill="#000" />
          <rect x="20" y="25" width="10" height="30" rx="1" fill="#000" />
          <rect x="35" y="15" width="10" height="40" rx="1" fill="#000" />
          <rect x="50" y="5" width="10" height="50" rx="1" fill="#000" />
          <line x1="2" y1="55" x2="58" y2="55" stroke="#000" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: 'CLIENT-FOCUSED',
      description: 'Your time is valuable. That\'s why take the time upfront.',
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 30C15 22.268 21.268 16 29 16C36.732 16 43 22.268 43 30" stroke="#000" strokeWidth="3" strokeLinecap="round" />
          <path d="M29 36L22 48" stroke="#000" strokeWidth="3" strokeLinecap="round" />
          <path d="M29 36L36 48" stroke="#000" strokeWidth="3" strokeLinecap="round" />
          <circle cx="29" cy="16" r="5" stroke="#000" strokeWidth="3" />
        </svg>
      ),
    },
    {
      title: 'MARKET EXPERTISE',
      description: 'You have questions and I have answers.',
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 5L50 30H10L30 5Z" fill="#000" />
          <rect x="15" y="30" width="30" height="25" rx="1" fill="#000" />
          <rect x="20" y="35" width="20" height="15" rx="1" fill="#fff" />
          <path d="M25 50H35" stroke="#000" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: 'REFERRAL NETWORK',
      description: 'This industry is all about who you know. I can connect you',
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="15" cy="15" r="5" stroke="#000" strokeWidth="3" />
          <circle cx="45" cy="15" r="5" stroke="#000" strokeWidth="3" />
          <circle cx="30" cy="35" r="5" stroke="#000" strokeWidth="3" />
          <line x1="19" y1="18" x2="41" y2="18" stroke="#000" strokeWidth="2" />
          <line x1="17" y1="19" x2="28" y2="32" stroke="#000" strokeWidth="2" />
          <line x1="43" y1="19" x2="32" y2="32" stroke="#000" strokeWidth="2" />
        </svg>
      ),
    },
  ]

  return (
    <section style={{ backgroundColor: '#111', padding: '80px 0' }} className="section-padding">
      <div className="container">
        <h2 style={{ color: '#fff', textAlign: 'left', marginBottom: 0 }}>PROVEN RESULTS</h2>
        <div style={{ width: 60, height: 2, backgroundColor: '#888', marginBottom: 24 }} />
        <p style={{ color: '#fff', fontSize: 18, marginBottom: 48 }}>
          Where proven results meet your real estate goals . Your success is our best testimonial.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32 }}>
          {items.map((item) => (
            <div key={item.title} style={{ textAlign: 'center' }}>
              <div style={{ marginBottom: 20 }}>{item.icon}</div>
              <h3 style={{ color: '#fff', marginBottom: 12, fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}>
                {item.title}
              </h3>
              <p style={{ color: '#fff', fontSize: 16, lineHeight: 1.8 }}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .section-padding > div > div {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 24px !important;
          }
        }
        @media (min-width: 768px) and (max-width: 1024px) {
          .section-padding > div > div {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 24px !important;
          }
        }
      `}</style>
    </section>
  )
}