import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>🌿 EcoSort AI</h3>
            <p>
              AI-Powered Waste Segregation & Sustainability Assistant.
              Helping students, households, and communities make smarter,
              more sustainable waste decisions.
            </p>
            <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <span className="footer-sdg-badge">SDG 12 – Responsible Consumption</span>
              <span className="footer-sdg-badge">SDG 11 – Sustainable Cities</span>
              <span className="footer-sdg-badge">SDG 13 – Climate Action</span>
            </div>
          </div>

          <div className="footer-col">
            <h4>Features</h4>
            <ul>
              <li><Link to="/waste-checker">Waste Checker</Link></li>
              <li><Link to="/ai-assistant">AI Assistant</Link></li>
              <li><Link to="/waste-categories">Waste Categories</Link></li>
              <li><Link to="/tips">Sustainability Tips</Link></li>
              <li><Link to="/impact">Impact Dashboard</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Project</h4>
            <ul>
              <li><Link to="/ai-workflow">AI Workflow</Link></li>
              <li><Link to="/responsible-ai">Responsible AI</Link></li>
              <li><Link to="/design-thinking">Design Thinking</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>About</h4>
            <ul>
              <li><a href="https://1m1b.org" target="_blank" rel="noopener noreferrer">1M1B Initiative</a></li>
              <li><span style={{ color: 'var(--gray-600)', fontSize: '0.88rem' }}>Built with IBM BOB</span></li>
              <li><span style={{ color: 'var(--gray-600)', fontSize: '0.88rem' }}>AI for Sustainability</span></li>
              <li><span style={{ color: 'var(--gray-600)', fontSize: '0.88rem' }}>Virtual Internship 2024</span></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © 2024 EcoSort AI — 1M1B AI for Sustainability Virtual Internship Project
          </span>
          <span>
            🤖 Built with&nbsp;<strong style={{ color: 'var(--green-400)' }}>IBM BOB</strong>
            &nbsp;·&nbsp;Prototype / Demonstration Mode
          </span>
        </div>
      </div>
    </footer>
  );
}
