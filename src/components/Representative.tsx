export default function Representative() {
  return (
    <section style={{ padding: '80px 0' }} className="section-padding">
      <div className="container">
        {/* Buyers Representative */}
        <div style={{ display: 'flex', gap: 40, alignItems: 'center', marginBottom: 60, flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: 300 }}>
            <img
              src="https://irp.cdn-website.com/b3b084dd/dms3rep/multi/opt/vecteezy_portrait-of-happy-mature-couple-standing-in-front-of-their_23307566+%281%29-808h.jpg"
              alt="Buyers Representative"
              style={{ width: '100%', height: 'auto', borderRadius: 8 }}
            />
          </div>
          <div style={{ flex: 1, minWidth: 300 }}>
            <h2>BUYERS REPRESENTATIVE</h2>
            <div style={{ width: 60, height: 2, backgroundColor: 'var(--color_2)', marginBottom: 20, marginTop: 12 }} />
            <p style={{ marginBottom: 24 }}>
              Navigating the home buying process can be overwhelming, but with the right representation, it becomes a seamless experience. As your buyers representative, I will guide you through every step from property search to closing, ensuring you find the perfect home that meets your needs and budget.
            </p>
            <button className="btn">Learn More</button>
          </div>
        </div>

        {/* Sellers Representative */}
        <div style={{ display: 'flex', gap: 40, alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: 300 }}>
            <h2>SELLERS REPRESENTATIVE</h2>
            <div style={{ width: 60, height: 2, backgroundColor: 'var(--color_2)', marginBottom: 20, marginTop: 12 }} />
            <p style={{ marginBottom: 24 }}>
              Selling a home requires strategic marketing and expert negotiation. I will work tirelessly to position your property in the best light, attract qualified buyers, and secure the highest possible price in the shortest time frame.
            </p>
            <button className="btn">Learn More</button>
          </div>
          <div style={{ flex: 1, minWidth: 300 }}>
            <img
              src="https://irp.cdn-website.com/b3b084dd/dms3rep/multi/opt/vecteezy_real-estate-agent-holding-house-key-to-his-client-after_8572449+%281%29-808h.jpg"
              alt="Sellers Representative"
              style={{ width: '100%', height: 'auto', borderRadius: 8 }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}