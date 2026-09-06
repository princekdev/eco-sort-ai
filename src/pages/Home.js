import React from 'react';
import { Link } from 'react-router-dom';

const FEATURES = [
  { icon: '🔍', title: 'Waste Checker', desc: 'Enter any waste item and get an instant AI-powered classification with disposal guidance.' },
  { icon: '🤖', title: 'AI Assistant', desc: 'Ask questions about recycling, composting, sustainability, and responsible waste management.' },
  { icon: '📚', title: 'Waste Education', desc: 'Learn about all 8 waste categories with examples, handling tips, and sustainability advice.' },
  { icon: '💡', title: 'Sustainability Tips', desc: 'Practical, actionable tips for Reduce, Reuse, Recycle, Compost, and Responsible Consumption.' },
  { icon: '📊', title: 'Impact Dashboard', desc: 'Understand the potential environmental, social, and economic impact of better waste habits.' },
  { icon: '🛡️', title: 'Responsible AI', desc: 'Designed with fairness, transparency, ethics, and privacy at its core — no misleading claims.' },
];

const HOW_IT_WORKS = [
  { step: '1', icon: '⌨️', title: 'Enter an item', desc: 'Type the name of a waste item you want to understand — plastic bottle, battery, newspaper, etc.' },
  { step: '2', icon: '🧠', title: 'AI Analysis', desc: 'The system analyzes your input and matches it against a structured waste knowledge base.' },
  { step: '3', icon: '📋', title: 'Classification', desc: 'The item is classified into a waste category with appropriate disposal action.' },
  { step: '4', icon: '🌱', title: 'Sustainability Guidance', desc: 'You receive disposal guidance, a sustainability tip, and an environmental note.' },
];

const IMPACT_ITEMS = [
  { icon: '🏫', label: 'Students & Schools' },
  { icon: '🏠', label: 'Households' },
  { icon: '🏢', label: 'Offices' },
  { icon: '🌆', label: 'Communities' },
];

export default function Home() {
  return (
    <div>
      {/* ---- HERO ---- */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-eyebrow">
              🌍 1M1B AI for Sustainability Virtual Internship 2024
            </div>
            <h1>
              Understand Waste.<br />
              Sort <span className="highlight">Smarter.</span><br />
              Build a Sustainable Future.
            </h1>
            <p>
              EcoSort AI helps students, households, schools, and communities
              correctly identify, segregate, and responsibly manage everyday waste —
              using AI to make sustainability guidance accessible to everyone.
            </p>
            <div className="hero-actions">
              <Link to="/waste-checker" className="btn btn-primary btn-lg">
                🔍 Check Your Waste
              </Link>
              <Link to="/ai-assistant" className="btn btn-secondary btn-lg">
                🤖 Ask Sustainability AI
              </Link>
            </div>
            <div className="hero-stats">
              <div className="hero-stat">
                <div className="stat-value">8</div>
                <div className="stat-label">Waste Categories</div>
              </div>
              <div className="hero-stat">
                <div className="stat-value">SDG 12</div>
                <div className="stat-label">Primary Alignment</div>
              </div>
              <div className="hero-stat">
                <div className="stat-value">AI</div>
                <div className="stat-label">Powered Classification</div>
              </div>
              <div className="hero-stat">
                <div className="stat-value">Free</div>
                <div className="stat-label">No Login Required</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---- SDG BANNER ---- */}
      <div className="sdg-banner">
        <div className="container">
          <div className="sdg-items">
            <span style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--gray-600)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>SDG Alignment:</span>
            <div className="sdg-item"><span className="sdg-dot" /> SDG 12 – Responsible Consumption & Production (Primary)</div>
            <div className="sdg-item"><span className="sdg-dot secondary" /> SDG 11 – Sustainable Cities & Communities</div>
            <div className="sdg-item"><span className="sdg-dot secondary" /> SDG 13 – Climate Action</div>
          </div>
        </div>
      </div>

      {/* ---- PROBLEM SECTION ---- */}
      <section className="section" style={{ background: 'var(--gray-50)' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '3rem' }}>
            <div>
              <div className="eyebrow" style={{ fontSize: '0.78rem', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--green-600)', marginBottom: '0.75rem' }}>The Problem</div>
              <h2 style={{ marginBottom: '1rem' }}>Most people don't know what to do with their waste</h2>
              <p style={{ marginBottom: '1rem' }}>
                Billions of people generate waste every day but lack reliable, accessible guidance
                on how to correctly sort it. This leads to recyclable materials ending up in landfills,
                hazardous waste handled unsafely, and organic waste generating greenhouse gases.
              </p>
              <p>
                <strong style={{ color: 'var(--gray-800)' }}>The result?</strong> Reduced recycling efficiency,
                increased pollution, lost reusable resources, and greater environmental harm — all from
                a problem that is largely <em>solvable with the right information</em>.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { icon: '❌', issue: 'Incorrect waste segregation', impact: 'Recyclables lost to landfill' },
                { icon: '🗑️', issue: 'Lack of disposal knowledge', impact: 'Hazardous waste mishandled' },
                { icon: '🌿', issue: 'Organic waste in general bins', impact: 'Methane emissions from landfill' },
                { icon: '♻️', issue: 'Confusion about recyclability', impact: 'Valuable materials wasted' },
              ].map((item, i) => (
                <div key={i} className="card" style={{ display: 'flex', gap: '1rem', alignItems: 'center', padding: '1rem 1.25rem' }}>
                  <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>{item.icon}</span>
                  <div>
                    <div style={{ fontWeight: '600', color: 'var(--gray-800)', fontSize: '0.92rem' }}>{item.issue}</div>
                    <div style={{ color: 'var(--gray-500)', fontSize: '0.83rem' }}>{item.impact}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---- AI FOR SUSTAINABILITY ---- */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">Why AI?</div>
            <h2>Intelligent guidance, accessible to everyone</h2>
            <p>Unlike a static website, AI can understand varied user inputs, provide contextual recommendations, and offer conversational support for sustainability questions.</p>
          </div>
          <div className="grid-2" style={{ gap: '1rem' }}>
            {[
              { icon: '🧠', title: 'Waste Classification', desc: 'Understands natural language inputs like "old phone", "banana peel", or "glass jar" and maps them to correct waste categories.' },
              { icon: '💬', title: 'Conversational Assistant', desc: 'Users can ask free-text sustainability questions and get relevant, structured guidance — like having an expert always available.' },
              { icon: '🎯', title: 'Decision Support', desc: 'Goes beyond simple answers: provides the recommended action, recyclability status, and a practical sustainability tip.' },
              { icon: '📖', title: 'Education at Scale', desc: 'Delivers consistent, responsible waste education to students, households, offices, and communities without requiring expert staff.' },
            ].map((item, i) => (
              <div key={i} className="card card-hover" style={{ display: 'flex', gap: '1rem' }}>
                <span style={{ fontSize: '2rem', flexShrink: 0, lineHeight: 1, marginTop: '0.1rem' }}>{item.icon}</span>
                <div>
                  <h3 style={{ marginBottom: '0.4rem', fontSize: '1rem' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.9rem' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- FEATURES ---- */}
      <section className="section" style={{ background: 'var(--green-50)' }}>
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">Features</div>
            <h2>Everything you need for smarter waste decisions</h2>
          </div>
          <div className="grid-3">
            {FEATURES.map((f, i) => (
              <div key={i} className="card card-hover" style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>{f.icon}</div>
                <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>{f.title}</h3>
                <p style={{ fontSize: '0.88rem' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- HOW IT WORKS ---- */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">How It Works</div>
            <h2>From input to sustainable action in seconds</h2>
          </div>
          <div className="grid-4">
            {HOW_IT_WORKS.map((step, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ width: '56px', height: '56px', background: 'var(--green-600)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', margin: '0 auto 1rem' }}>
                  {step.icon}
                </div>
                <div style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--green-600)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.3rem' }}>Step {step.step}</div>
                <h3 style={{ fontSize: '0.98rem', marginBottom: '0.4rem' }}>{step.title}</h3>
                <p style={{ fontSize: '0.85rem' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- WHO BENEFITS ---- */}
      <section className="section" style={{ background: 'var(--gray-50)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
            <div>
              <div className="eyebrow" style={{ fontSize: '0.78rem', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--green-600)', marginBottom: '0.75rem' }}>Who Benefits</div>
              <h2 style={{ marginBottom: '1rem' }}>Built for everyday people, not just experts</h2>
              <p style={{ marginBottom: '1.5rem' }}>
                EcoSort AI is designed to be accessible, jargon-free, and genuinely helpful
                for anyone who wants to make better waste decisions — regardless of their
                background or sustainability knowledge.
              </p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                {IMPACT_ITEMS.map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'var(--white)', border: '1px solid var(--gray-200)', padding: '0.5rem 1rem', borderRadius: 'var(--radius-full)', fontSize: '0.88rem', fontWeight: '500' }}>
                    <span>{item.icon}</span> {item.label}
                  </div>
                ))}
              </div>
            </div>
            <div className="card" style={{ background: 'var(--green-800)', border: 'none', color: 'var(--white)' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>🎯</div>
              <h3 style={{ color: 'var(--white)', marginBottom: '0.75rem' }}>Problem Statement</h3>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontStyle: 'italic', lineHeight: '1.7', fontSize: '1rem' }}>
                "How might we use AI to help people correctly identify, segregate, and responsibly manage everyday waste so that communities can become more sustainable?"
              </p>
              <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.2)' }}>
                <span style={{ color: 'var(--green-300)', fontSize: '0.82rem', fontWeight: '600' }}>1M1B AI for Sustainability Virtual Internship</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---- CTA ---- */}
      <section className="section" style={{ background: 'linear-gradient(135deg, var(--green-700), var(--teal-600))', color: 'var(--white)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ color: 'var(--white)', marginBottom: '1rem' }}>Ready to sort smarter?</h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', marginBottom: '2rem', fontSize: '1.05rem' }}>
            Try the Waste Checker or ask the AI Assistant — no account required.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/waste-checker" className="btn btn-primary btn-lg" style={{ background: 'var(--white)', color: 'var(--green-700)', borderColor: 'var(--white)' }}>
              🔍 Check Your Waste
            </Link>
            <Link to="/ai-assistant" className="btn btn-secondary btn-lg" style={{ borderColor: 'rgba(255,255,255,0.5)', color: 'var(--white)', background: 'rgba(255,255,255,0.12)' }}>
              🤖 Ask the AI Assistant
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
