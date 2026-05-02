const skills = [
  { category: 'ML & AI', items: ['PyTorch', 'OpenCV', 'Ultralytics', 'Diffusers', 'HuggingFace', 'Transformers', 'Computer Vision'] },
  { category: 'Optimisation', items: ['MiniZinc', 'Constraint Programming', 'HiGHS Solver', 'Discrete Optimisation'] },
  { category: 'Languages', items: ['Python', 'SQL', 'JavaScript', 'C', 'C++'] },
  { category: 'Web & Backend', items: ['FastAPI', 'React', 'TypeScript', 'HTML', 'CSS'] },
  { category: 'Data & Databases', items: ['MySQL', 'Open Data APIs', 'Data Pipelines', 'ABS Datasets'] },
  { category: 'Tools', items: ['Git', 'Linux', 'Burp Suite', 'Wireshark', 'Kali Linux'] },
]

const Skills = () => {
  return (
    <>
      <style>{`
        .skills-section { padding: 4.5rem 3rem; background: #111; width: 100%; }
        .skills-inner { max-width: 1100px; margin: 0 auto; }
        .skill-row { display: grid; grid-template-columns: 180px 1fr; gap: 2rem; align-items: center; padding: 1.5rem 0; border-top: 0.5px solid #222; }
        @media (max-width: 600px) {
          .skills-section { padding: 3rem 1.25rem; }
          .skill-row { grid-template-columns: 1fr; gap: 0.75rem; padding: 1.25rem 0; }
        }
      `}</style>
      <section id="skills" className="skills-section">
        <div className="skills-inner">
          <p style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#fff', marginBottom: '3rem', fontWeight: 700 }}>Skills</p>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {skills.map(group => (
              <div key={group.category} className="skill-row">
                <p style={{ fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#555', margin: 0 }}>{group.category}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                  {group.items.map(item => (
                    <span key={item} style={{ fontSize: '0.82rem', padding: '0.35rem 0.9rem', border: '0.5px solid #333', color: '#555', borderRadius: '2px', letterSpacing: '0.02em', fontWeight: 700 }}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
            <div style={{ borderTop: '0.5px solid #222' }} />
          </div>
        </div>
      </section>
    </>
  )
}

export default Skills
