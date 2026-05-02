const Resume = () => {
  return (
    <section id="resume" style={{ padding: '4.5rem 3rem', borderTop: '1px solid #ebebeb', maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
      <p style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#111', marginBottom: '1.5rem', fontWeight: 700 }}>Resume</p>
      <p style={{ fontSize: '0.95rem', color: '#555', marginBottom: '2rem' }}>Download my full resume as a PDF.</p>
      <a href="/RatchanaResume.pdf" download style={{ display: 'inline-block', padding: '0.75rem 2.5rem', background: '#111', color: '#fff', textDecoration: 'none', fontSize: '0.82rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Download Resume</a>
    </section>
  )
}

export default Resume