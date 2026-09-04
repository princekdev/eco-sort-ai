import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const NAV_LINKS = [
  { to: '/',                 label: 'Home' },
  { to: '/waste-checker',   label: 'Waste Checker' },
  { to: '/ai-assistant',    label: 'AI Assistant' },
  { to: '/waste-categories', label: 'Categories' },
  { to: '/tips',            label: 'Tips' },
  { to: '/impact',          label: 'Impact' },
  { to: '/ai-workflow',     label: 'AI Workflow' },
  { to: '/responsible-ai',  label: 'Responsible AI' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-inner">
          <Link to="/" className="navbar-brand" onClick={() => setOpen(false)}>
            <span className="navbar-logo">🌿</span>
            <span className="navbar-name">EcoSort <span>AI</span></span>
          </Link>

          <ul className="navbar-nav">
            {NAV_LINKS.map(link => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) => isActive ? 'active' : ''}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="navbar-cta">
            <Link to="/waste-checker" className="btn btn-primary btn-sm">
              Check Waste →
            </Link>
          </div>

          <button
            className="hamburger"
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        <ul>
          {NAV_LINKS.map(link => (
            <li key={link.to}>
              <Link to={link.to} onClick={() => setOpen(false)}>{link.label}</Link>
            </li>
          ))}
          <li style={{ marginTop: '0.5rem' }}>
            <Link to="/waste-checker" className="btn btn-primary btn-sm w-full" onClick={() => setOpen(false)}>
              Check Your Waste →
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
