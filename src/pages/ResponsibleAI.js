import React, { useState } from 'react';

const PRINCIPLES = [
  {
    id: 'fairness',
    icon: '⚖️',
    title: 'Fairness',
    color: 'var(--blue-600)',
    bg: '#eff6ff',
    border: '#bfdbfe',
    commitment: 'EcoSort AI provides equal quality guidance to all users regardless of background, location, or identity.',
    details: [
      'The system makes no assumptions about the user\'s educational background, nationality, or economic status.',
      'Waste guidance is designed to be universally applicable, with clear notes when local rules may create differences.',
      'The AI does not prioritize certain communities over others — all users receive the same quality of information.',
      'Language is kept clear, accessible, and jargon-free to serve users with diverse literacy levels.',
      'No demographic information is collected or used to influence the guidance provided.',
    ],
    consideration: 'Waste management rules genuinely vary by location. This is a real-world variation, not a fairness failure. EcoSort AI explicitly acknowledges this and recommends local authority verification.',
  },
  {
    id: 'transparency',
    icon: '🔍',
    title: 'Transparency',
    color: 'var(--teal-600)',
    bg: '#f0fdfa',
    border: '#99f6e4',
    commitment: 'Users are always informed about what the system is, how it works, and the nature of the guidance it provides.',
    details: [
      'EcoSort AI is clearly labeled as an "AI Prototype / Demonstration Mode" on all AI-powered features.',
      'The AI Workflow page explains exactly how the classification and recommendation process works.',
      'Classifications are presented as "guidance" and "recommendations" — not absolute determinations.',
      'The system does not claim to be a live AI model when no external model is connected.',
      'Uncertainty is explicitly communicated — the system tells users when it cannot confidently classify an item.',
      'The recommendation to "verify with local municipal guidelines" appears consistently throughout the application.',
    ],
    consideration: 'Transparency builds trust. Users who understand they are using a prototype educational tool are better equipped to use it responsibly.',
  },
  {
    id: 'ethics',
    icon: '🛡️',
    title: 'Ethics',
    color: '#7c3aed',
    bg: '#faf5ff',
    border: '#ddd6fe',
    commitment: 'EcoSort AI is designed to never cause harm, mislead users, or provide dangerous guidance.',
    details: [
      'Hazardous waste items (batteries, chemicals, e-waste) always receive safety warnings and are never trivialized.',
      'The system never recommends unsafe disposal methods for any category of waste.',
      'For items that cannot be classified, the system recommends professional guidance rather than guessing.',
      'No fabricated statistics, false deployment claims, or invented impact metrics are presented.',
      'The project documentation clearly distinguishes between current prototype capabilities and future scope.',
      'Guidance is evidence-based and aligned with general best practices in waste management.',
    ],
    consideration: '⚠️ EcoSort AI is not a substitute for professional waste management advice. For large quantities of hazardous waste, industrial waste, or unusual materials, always consult authorized waste management authorities.',
  },
  {
    id: 'privacy',
    icon: '🔒',
    title: 'Privacy',
    color: 'var(--green-600)',
    bg: 'var(--green-50)',
    border: 'var(--green-200)',
    commitment: 'EcoSort AI collects no personal data and requires no account creation.',
    details: [
      'No user registration, login, or account creation is required to use any feature of EcoSort AI.',
      'No personal information (name, email, location, demographics) is collected.',
      'Waste queries entered by users are processed locally and are not transmitted to external services.',
      'No tracking cookies, analytics, or behavioral profiling are implemented in this prototype.',
      'The chat history in the AI Assistant exists only in the browser session — it is cleared on page reload.',
      'Users are not asked to provide location data (local disposal rules are handled via disclaimer).',
    ],
    consideration: 'Future versions incorporating location-specific disposal guidance or user personalization would require a clear privacy policy and explicit consent mechanisms.',
  },
  {
    id: 'limitations',
    icon: '⚠️',
    title: 'Limitations & Uncertainty',
    color: '#ca8a04',
    bg: '#fefce8',
    border: '#fde68a',
    commitment: 'EcoSort AI is honest about what it does not know and where users should seek additional guidance.',
    details: [
      'Waste disposal rules vary significantly between municipalities, regions, and countries — EcoSort AI cannot know every local rule.',
      'The prototype knowledge base covers common items but cannot classify every possible waste item.',
      'Classification is based on general best practices, not legally binding disposal guidance.',
      'For unusual, industrial, or large-quantity waste, professional waste management services should be consulted.',
      'The AI Assistant operates in demonstration mode — responses are curated educational content, not live model inference.',
      'Sustainability statistics cited are general educational figures, not results measured by EcoSort AI.',
    ],
    consideration: 'The system explicitly displays "Item Not Recognized" for unclassifiable items rather than guessing. For items involving safety (hazardous, e-waste), the system always escalates to "consult authorized channels".',
  },
];

export default function ResponsibleAI() {
  const [activePrinciple, setActivePrinciple] = useState('fairness');
  const current = PRINCIPLES.find(p => p.id === activePrinciple);

  return (
    <div>
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <div className="eyebrow">Responsible AI</div>
          <h1>🛡️ Responsible AI Considerations</h1>
          <p>EcoSort AI is designed with fairness, transparency, ethics, privacy, and honest limitations at its core — not as an afterthought.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">

          {/* Intro */}
          <div className="card" style={{ background: 'var(--green-50)', border: '2px solid var(--green-200)', marginBottom: '2.5rem' }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '2rem', flexShrink: 0 }}>🤖</span>
              <div>
                <h3 style={{ color: 'var(--green-700)', marginBottom: '0.5rem' }}>Why Responsible AI Matters for Sustainability</h3>
                <p>
                  AI systems that provide guidance on health, safety, or environmental decisions have a responsibility to be accurate, honest, and transparent.
                  For EcoSort AI, incorrect waste disposal advice could lead to environmental harm or safety risks — so responsible AI design is essential, not optional.
                  This section documents the specific responsible AI choices made in EcoSort AI's design and development.
                </p>
              </div>
            </div>
          </div>

          {/* Principles navigation */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
            {PRINCIPLES.map(p => (
              <button
                key={p.id}
                onClick={() => setActivePrinciple(p.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.6rem 1.1rem',
                  borderRadius: 'var(--radius-full)',
                  border: `2px solid ${activePrinciple === p.id ? p.color : 'var(--gray-200)'}`,
                  background: activePrinciple === p.id ? p.bg : 'var(--white)',
                  color: activePrinciple === p.id ? p.color : 'var(--gray-600)',
                  fontWeight: '700',
                  fontSize: '0.88rem',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-sans)',
                  transition: 'all 0.15s',
                }}
              >
                <span>{p.icon}</span> {p.title}
              </button>
            ))}
          </div>

          {/* Principle detail */}
          {current && (
            <div>
              <div className="card" style={{ background: current.bg, border: `2px solid ${current.color}`, marginBottom: '2rem' }}>
                <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '3rem', flexShrink: 0 }}>{current.icon}</span>
                  <div style={{ flex: 1 }}>
                    <h2 style={{ color: current.color, marginBottom: '0.5rem' }}>{current.title}</h2>
                    <p style={{ fontWeight: '600', color: 'var(--gray-700)', marginBottom: '1.25rem', fontSize: '0.95rem' }}>
                      {current.commitment}
                    </p>
                    <h4 style={{ fontSize: '0.82rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--gray-500)', marginBottom: '0.75rem' }}>
                      How this is implemented in EcoSort AI:
                    </h4>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.25rem' }}>
                      {current.details.map((detail, i) => (
                        <li key={i} style={{ display: 'flex', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--gray-700)', lineHeight: '1.6' }}>
                          <span style={{ color: current.color, fontWeight: '700', flexShrink: 0, marginTop: '0.1rem' }}>✓</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                    <div className="alert alert-warning">
                      <span style={{ flexShrink: 0 }}>💡</span>
                      <span style={{ fontSize: '0.88rem' }}><strong>Important consideration: </strong>{current.consideration}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Summary grid */}
          <div>
            <h2 style={{ marginBottom: '1.25rem' }}>Responsible AI at a Glance</h2>
            <div className="grid-3">
              {PRINCIPLES.map(p => (
                <div key={p.id} className="card card-hover" style={{ cursor: 'pointer', borderLeft: `4px solid ${p.color}` }} onClick={() => setActivePrinciple(p.id)}>
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <span style={{ fontSize: '1.5rem' }}>{p.icon}</span>
                    <h4 style={{ color: p.color, fontSize: '0.95rem' }}>{p.title}</h4>
                  </div>
                  <p style={{ fontSize: '0.83rem', color: 'var(--gray-600)', lineHeight: '1.5' }}>{p.commitment}</p>
                  <span style={{ color: p.color, fontSize: '0.8rem', fontWeight: '600', marginTop: '0.5rem', display: 'block' }}>View details →</span>
                </div>
              ))}
            </div>
          </div>

          {/* IBM BOB connection */}
          <div style={{ marginTop: '2.5rem', background: 'var(--gray-900)', borderRadius: 'var(--radius-lg)', padding: '2rem', color: 'var(--white)' }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '2rem', flexShrink: 0 }}>🤖</span>
              <div>
                <h3 style={{ color: 'var(--white)', marginBottom: '0.5rem' }}>IBM BOB & Responsible AI</h3>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', lineHeight: '1.7' }}>
                  <strong style={{ color: '#86efac' }}>IBM BOB</strong> was used as the primary development and ideation tool for EcoSort AI.
                  During development, IBM BOB helped identify responsible AI considerations, suggest appropriate language for uncertainty disclaimers,
                  and structure the project documentation to ensure transparency at every level.
                  The collaboration with IBM BOB demonstrates the human+AI partnership model that is core to the 1M1B AI for Sustainability program.
                </p>
                <div style={{ marginTop: '1rem' }}>
                  <span className="badge" style={{ background: '#166534', color: '#86efac', marginRight: '0.5rem' }}>IBM BOB Used</span>
                  <span className="badge" style={{ background: 'rgba(255,255,255,0.1)', color: 'var(--gray-300)' }}>1M1B Virtual Internship 2024</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
