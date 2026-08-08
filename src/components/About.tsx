const About = () => {
  return (
    <section
      id="about"
      style={{
        padding: '4.5rem 3rem',
        borderTop: '1px solid #222',
        maxWidth: '100%',
        margin: '0 auto',
        background: '#111',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <p
          style={{
            fontSize: '0.7rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: '#fff',
            marginBottom: '2rem',
            fontWeight: 700,
          }}
        >
          About
        </p>
        <p
          style={{
            color: '#aaa',
            lineHeight: 1.85,
            marginBottom: '1rem',
            fontSize: '0.95rem',
            maxWidth: '600px',
          }}
        >
          I'm a Master of AI graduate from Monash University with two years of
          hands-on project experience in computer vision, NLP and applied machine
          learning. I conceived and led the AI development for a rooftop
          greening project integrating FastSAM, MiDaS and Stable Diffusion into
          a working pipeline and presented the results at the Monash Data
          Science & AI industry event to academic and industry reviewers.
        </p>
        <p
          style={{
            color: '#aaa',
            lineHeight: 1.85,
            marginBottom: '1rem',
            fontSize: '0.95rem',
            maxWidth: '600px',
          }}
        >
          Most recently I independently built a production RAG pipeline using
          LangChain, ChromaDB and Llama 3.1, a live Q&A assistant that
          retrieves document-grounded answers with source citations on every
          response.
        </p>
        <p
          style={{
            color: '#aaa',
            lineHeight: 1.85,
            fontSize: '0.95rem',
            maxWidth: '600px',
          }}
        >
          Every project I worked on had real deadlines, real data, and was
          evaluated beyond the classroom. I'm looking to bring that same
          approach to a team working on problems that have genuine real-world
          impact.
        </p>
      </div>
    </section>
  );
};
export default About;
