const projects = [
  { num: '01', title: 'Leafy Haven RAG Assistant', desc: 'Independently built a RAG-powered Q&A assistant extending the Leafy Haven app. Implemented a full retrieval pipeline using LangChain, ChromaDB and HuggingFace sentence-transformers for semantic search across 31 document chunks. Deployed a live Gradio chat interface with source citation on every answer using Llama 3.1 8B via Groq API.', tags: ['LangChain', 'ChromaDB', 'RAG', 'HuggingFace', 'Gradio', 'Python'], github: 'https://github.com/Ratch03/leafy-haven-rag' },
  { num: '02', title: 'Leafy Haven Rooftop Greening', desc: 'Led AI development in a team of 6 for a City of Melbourne sustainability project. Built a multi-model pipeline using FastSAM, MiDaS and Stable Diffusion. Presented at Monash Data Science & AI industry event.', tags: ['FastSAM', 'MiDaS', 'Stable Diffusion', 'OpenCV', 'Python'], github: 'https://github.com/Ratch03/Leafy-Haven-AI' },
  { num: '03', title: 'Smart Parking Availability Platform', desc: 'Designed MySQL schema integrating 6 open government datasets. Led data insights epic analysing Melbourne CBD congestion. Contributed to a deployed web platform with real-time parking map.', tags: ['MySQL', 'Python', 'FastAPI', 'Open Data'], github: '' },
  { num: '04', title: 'Rift Valley Fever Scheduling', desc: 'Built a multi-objective constraint optimisation model in MiniZinc. Conducted full sensitivity analysis across 9 datasets and 10 constraint groups using the HiGHS solver.', tags: ['MiniZinc', 'HiGHS Solver', 'Constraint Programming'], github: 'https://github.com/Ratch03/Rift-Valley-Fever-Clinical-Trial-Scheduling-MiniZinc' },
  { num: '05', title: 'Mine Planning Optimisation', desc: 'Built a MiniZinc model to find the most profitable underground mine tunnel path, maximising ore yield within budget and tunnel length constraints across a 2D grid.', tags: ['MiniZinc', 'Constraint Programming', 'Optimisation'], github: 'https://github.com/Ratch03/Mine-Planning-Optimization' },
]

const Projects = () => {
  return (
    <>
      <style>{`
        .projects-section { padding: 4.5rem 3rem; border-top: 1px solid #ebebeb; max-width: 1100px; margin: 0 auto; }
        .projects-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: #e8e8e8; }
        .project-card:last-child:nth-child(odd) { grid-column: 1 / -1; max-width: 50%; margin: 0 auto; width: 100%; background: #fff; }
        .project-card { background: #fff; padding: 1.75rem; display: flex; flex-direction: column; }
        @media (max-width: 600px) {
          .projects-section { padding: 3rem 1.25rem; }
          .projects-grid { grid-template-columns: 1fr; } 
            `}</style>
      <section id="projects" className="projects-section">
        <p style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#111', marginBottom: '2.5rem', fontWeight: 700 }}>Projects</p>
        <div className="projects-grid">
          {projects.map(p => (
            <div key={p.num} className="project-card">
              <p style={{ fontSize: '0.7rem', letterSpacing: '0.1em', color: '#bbb', marginBottom: '0.6rem' }}>{p.num}</p>
              <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '1.1rem', fontWeight: 400, marginBottom: '0.6rem' }}>{p.title}</h3>
              <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: 1.7 }}>{p.desc}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '1rem' }}>
                {p.tags.map(t => (
                  <span key={t} style={{ fontSize: '0.68rem', letterSpacing: '0.05em', padding: '0.2rem 0.6rem', border: '0.5px solid #ddd', color: '#777' }}>{t}</span>
                ))}
              </div>
              {p.github ? (
                <a href={p.github} target="_blank" rel="noreferrer" style={{ marginTop: '1.25rem', fontSize: '0.78rem', color: '#111', textDecoration: 'none', letterSpacing: '0.05em', borderTop: '0.5px solid #ebebeb', paddingTop: '1rem', textAlign: 'center' }}>View on GitHub ↗</a>
              ) : (
                <p style={{ marginTop: '1.25rem', fontSize: '0.78rem', color: '#aaa', letterSpacing: '0.05em', borderTop: '0.5px solid #ebebeb', paddingTop: '1rem', textAlign: 'center', fontStyle: 'italic' }}>Group project — repository maintained privately by the team</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Projects
