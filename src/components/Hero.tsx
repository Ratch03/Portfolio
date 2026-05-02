const Hero = () => {
  return (
    <section
      style={{
        padding: '5rem 3rem 4rem',
        maxWidth: '1100px',
        margin: '0 auto',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '4rem' }}>
        <div style={{ flex: 1 }}>
          <p
            style={{
              fontSize: '0.75rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#999',
              marginBottom: '1.25rem',
            }}
          >
            Master of AI | Monash University
          </p>
          <h1
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              lineHeight: 1.08,
              fontWeight: 400,
              marginBottom: '1.5rem',
            }}
          >
            Ratchana
            <br />
            Pourouchottaman
            <br />
            <em style={{ color: '#777' }}>AI Engineer</em>
          </h1>
          <p
            style={{
              fontSize: '1rem',
              color: '#555',
              lineHeight: 1.8,
              maxWidth: '520px',
              marginBottom: '2.5rem',
            }}
          >
            I build AI that gets evaluated in the real world — a computer vision
            pipeline for City of Melbourne, constraint models reviewed by
            industry experts, and a parking platform running on live government
            data.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a
              href="/RatchanaResume.pdf"
              download
              style={{
                padding: '0.65rem 1.75rem',
                background: '#111',
                color: '#fff',
                textDecoration: 'none',
                fontSize: '0.8rem',
                letterSpacing: '0.06em',
              }}
            >
              Download Resume
            </a>
            <a
              href="#projects"
              style={{
                padding: '0.65rem 1.75rem',
                border: '1px solid #ccc',
                color: '#111',
                textDecoration: 'none',
                fontSize: '0.8rem',
                letterSpacing: '0.06em',
              }}
            >
              View Projects
            </a>
          </div>
        </div>
        <div style={{ flexShrink: 0 }}>
          <img
            src="/photo.jpeg"
            alt="Ratchana Pourouchottaman"
            style={{
              width: '220px',
              height: '220px',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '4px solid #f0f0f0',
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
