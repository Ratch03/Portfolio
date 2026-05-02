const Footer = () => {
  return (
    <footer
      style={{
        padding: '2rem 3rem',
        background: '#111',
        borderTop: '0.5px solid #222',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <p style={{ fontSize: '0.78rem', color: '#555' }}>
        Ratchana Pourouchottaman © 2026
      </p>
      <p style={{ fontSize: '0.78rem', color: '#555' }}>Melbourne, Australia</p>
    </footer>
  );
};

export default Footer;
