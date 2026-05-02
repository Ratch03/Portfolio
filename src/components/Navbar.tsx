import { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = ['About', 'Projects', 'Skills', 'Resume', 'Contact'];

  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1.25rem 3rem',
        borderBottom: '1px solid #e8e8e8',
        position: 'sticky',
        top: 0,
        background: '#fff',
        zIndex: 100,
      }}
    >
      <div style={{ fontSize: '1.1rem', fontWeight: 500 }}>Ratchana P</div>
      <ul
        style={{
          display: 'flex',
          gap: '2rem',
          listStyle: 'none',
          margin: 0,
          padding: 0,
        }}
      >
        {links.map((link) => (
          <li key={link}>
            <a
              href={'#' + link.toLowerCase()}
              style={{
                fontSize: '0.8rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#666',
                textDecoration: 'none',
              }}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
