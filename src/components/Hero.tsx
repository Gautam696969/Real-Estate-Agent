export default function Hero() {

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: '#111',
        backgroundImage: 'url(https://irp.cdn-website.com/b3b084dd/dms3rep/multi/opt/3qnMI7RQW4DLRjW6uAAC_Untitled-1.v2.0000000-1920w.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div style={{ position: 'absolute', inset: 0 }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://irp.cdn-website.com/b3b084dd/dms3rep/multi/opt/3qnMI7RQW4DLRjW6uAAC_Untitled-1.v2.0000000-1920w.jpg"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        >
          <source src="https://cdn.pixabay.com/video/2024/02/02/198888-909564511_large.mp4" type="video/mp4" />
        </video>
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.4)' }} />
      </div>

      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '0 20px' }}>
        <h1>Luxury REAL ESTATE</h1>
        <h1 style={{ fontSize: '36px', fontWeight: 400, marginTop: 8 }}>by Taylor Calacci</h1>
        <p style={{ fontSize: 24, fontWeight: 300, marginTop: 24, color: '#fff', fontFamily: "'Muli', sans-serif" }}>
          Find More then just a home, find a lifestyle...
        </p>
      </div>

      <div style={{ position: 'absolute', right: 40, bottom: 80, zIndex: 2, display: 'none' }} className="hero-window">
        <img
          src="https://irp.cdn-website.com/b3b084dd/dms3rep/multi/opt/window-67w.png"
          alt="window decoration"
          style={{ width: 80, height: 'auto' }}
        />
      </div>

      <style>{`
        @media (min-width: 1025px) {
          .hero-window { display: block !important; }
        }
      `}</style>
    </section>
  )
}