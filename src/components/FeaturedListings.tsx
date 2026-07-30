export default function FeaturedListings() {
  return (
    <section style={{ padding: '80px 0', backgroundColor: '#f5f5f5' }} className="section-padding">
      <div className="container">
        <h2>Featured Listings</h2>
        <div style={{ width: 60, height: 2, backgroundColor: '#ddd', marginBottom: 32 }} />

        <div
          style={{
            backgroundColor: '#fff',
            border: '1px solid #ddd',
            borderRadius: 8,
            padding: '48px 24px',
            textAlign: 'center',
            minHeight: 300,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div>
            <i className="fas fa-home" style={{ fontSize: 48, color: 'var(--color_2)', marginBottom: 16 }} />
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", marginBottom: 8 }}>Property Listings</h3>
            <p>Interactive property listings require an IDX integration.</p>
          </div>
        </div>
      </div>
    </section>
  )
}