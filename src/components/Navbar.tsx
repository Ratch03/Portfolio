const Navbar = () => {
  const links = ['About', 'Projects', 'Skills', 'Resume', 'Contact']

  return (
    <>
      <style>{`
        .navbar { display: flex; justify-content: space-between; align-items: center; padding: 1.25rem 3rem; border-bottom: 1px solid #e8e8e8; position: sticky; top: 0; background: #fff; z-index: 100; }
        .navbar-name { font-size: 1.1rem; font-weight: 500; white-space: nowrap; }
        .navbar-links { display: flex; gap: 2rem; list-style: none; margin: 0; padding: 0; }
        .navbar-links a { font-size: 0.8rem; letter-spacing: 0.08em; text-transform: uppercase; color: #666; text-decoration: none; }
        .navbar-links a:hover { color: #111; }
        @media (max-width: 600px) {
          .navbar { padding: 1rem 1.25rem; }
          .navbar-links { gap: 1rem; }
          .navbar-links a { font-size: 0.65rem; letter-spacing: 0.04em; }
        }
      `}</style>
      <nav className="navbar">
        <div className="navbar-name">Ratchana P</div>
        <ul className="navbar-links">
          {links.map(link => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`}>{link}</a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default Navbar
