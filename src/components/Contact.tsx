const Contact = () => {
  return (
    <section id="contact" style={{ padding: '4.5rem 3rem', borderTop: '1px solid #222', maxWidth: '100%', margin: '0 auto', background: '#111' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <p style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#fff', marginBottom: '2.5rem', fontWeight: 700 }}>Contact</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem' }}>
          <a href="https://linkedin.com/in/ratchana" target="_blank" rel="noreferrer" style={{ fontSize: '0.88rem', color: '#aaa', textDecoration: 'none' }}>↗ LinkedIn</a>
          <a href="https://github.com/Ratch03" target="_blank" rel="noreferrer" style={{ fontSize: '0.88rem', color: '#aaa', textDecoration: 'none' }}>↗ GitHub</a>
          <a href="mailto:ratchana2002@email.com" style={{ fontSize: '0.88rem', color: '#aaa', textDecoration: 'none' }}>↗ ratchana2002@email.com</a>
        </div>
        <div style={{ borderTop: '1px solid #222', paddingTop: '2rem' }}>
          <p style={{ fontSize: '0.95rem', color: '#aaa', lineHeight: 1.85, maxWidth: '500px' }}>Open to AI engineer, machine learning, and computer vision roles across Australia. I move fast, build things that work, and I'm ready to start - Feel free to connect.</p>
        </div>
      </div>
    </section>
  )
}

export default Contact