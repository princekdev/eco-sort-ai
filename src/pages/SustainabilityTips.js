import React, { useState } from 'react';
import { SUSTAINABILITY_TIPS } from '../data/categoriesData';

const TAB_CONFIG = [
  { key: 'reduce',      label: '↓ Reduce',       icon: '📉', color: 'var(--blue-600)',  bg: '#dbeafe', desc: 'Consume less and avoid unnecessary waste at the source. The most impactful step.' },
  { key: 'reuse',       label: '🔄 Reuse',        icon: '🔄', color: '#7c3aed',          bg: '#ede9fe', desc: 'Extend the life of products by repairing, repurposing, and using items multiple times.' },
  { key: 'recycle',     label: '♻️ Recycle',      icon: '♻️', color: 'var(--teal-600)', bg: '#ccfbf1', desc: 'Correctly sort recyclable materials to help them re-enter the production cycle.' },
  { key: 'compost',     label: '🌱 Compost',      icon: '🌱', color: 'var(--green-600)', bg: 'var(--green-100)', desc: 'Convert organic waste into valuable soil amendment rather than sending it to landfill.' },
  { key: 'responsible', label: '🧠 Responsible',  icon: '🧠', color: '#92400e',          bg: '#fef3c7', desc: 'Make conscious purchasing decisions — consider necessity, durability, and end-of-life before buying.' },
];

const PRIORITY_ORDER = [
  { num: '1', label: 'Refuse', desc: 'Say no to what you don\'t need', icon: '🚫', color: 'var(--red-500)' },
  { num: '2', label: 'Reduce', desc: 'Use less, buy less', icon: '📉', color: 'var(--blue-600)' },
  { num: '3', label: 'Reuse',  desc: 'Repair and repurpose', icon: '🔄', color: '#7c3aed' },
  { num: '4', label: 'Recycle', desc: 'Sort and recycle correctly', icon: '♻️', color: 'var(--teal-600)' },
  { num: '5', label: 'Rot',    desc: 'Compost organic materials', icon: '🌱', color: 'var(--green-600)' },
];

export default function SustainabilityTips() {
  const [activeTab, setActiveTab] = useState('reduce');

  const currentTab = TAB_CONFIG.find(t => t.key === activeTab);
  const tips = SUSTAINABILITY_TIPS[activeTab] || [];

  return (
    <div>
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <div className="eyebrow">Practical Guidance</div>
          <h1>💡 Sustainability Tips</h1>
          <p>Actionable tips for Reduce, Reuse, Recycle, Compost, and Responsible Consumption — practical, not generic.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">

          {/* The 5 R's */}
          <div style={{ marginBottom: '3rem' }}>
            <div className="section-header" style={{ marginBottom: '1.5rem' }}>
              <h2>The Sustainability Hierarchy</h2>
              <p>The most effective sustainability actions — in order of environmental impact</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0', overflowX: 'auto', padding: '0.5rem 0' }}>
              {PRIORITY_ORDER.map((item, i) => (
                <React.Fragment key={i}>
                  <div style={{ textAlign: 'center', padding: '1rem', minWidth: '120px', flex: 1 }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: item.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem', margin: '0 auto 0.5rem' }}>{item.icon}</div>
                    <div style={{ fontWeight: '800', fontSize: '0.95rem', color: item.color }}>{item.label}</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--gray-500)', marginTop: '0.2rem' }}>{item.desc}</div>
                  </div>
                  {i < PRIORITY_ORDER.length - 1 && (
                    <div style={{ fontSize: '1.2rem', color: 'var(--gray-300)', flexShrink: 0, padding: '0 0.25rem' }}>→</div>
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="alert alert-info" style={{ marginTop: '1rem' }}>
              <span>💡</span>
              <span><strong>Priority matters:</strong> Refusing and reducing waste has more environmental impact than recycling. Start from the top of the hierarchy — recycling is important, but it's not the first step.</span>
            </div>
          </div>

          {/* Tabs */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
            {TAB_CONFIG.map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                style={{
                  padding: '0.5rem 1.1rem',
                  borderRadius: 'var(--radius-full)',
                  border: `2px solid ${activeTab === tab.key ? tab.color : 'var(--gray-200)'}`,
                  background: activeTab === tab.key ? tab.bg : 'var(--white)',
                  color: activeTab === tab.key ? tab.color : 'var(--gray-600)',
                  fontWeight: '600',
                  fontSize: '0.88rem',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-sans)',
                  transition: 'all 0.15s',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab description */}
          {currentTab && (
            <div className="card" style={{ background: currentTab.bg, border: `2px solid ${currentTab.color}`, marginBottom: '1.5rem' }}>
              <p style={{ color: currentTab.color, fontWeight: '600', margin: 0 }}>
                {currentTab.icon} <strong>{currentTab.label.replace(/^[^\s]+\s/, '')}:</strong> {currentTab.desc}
              </p>
            </div>
          )}

          {/* Tips grid */}
          <div className="grid-2">
            {tips.map((tip, i) => (
              <div key={i} className="card card-hover" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', borderLeft: `4px solid ${currentTab?.color || 'var(--green-600)'}` }}>
                <span style={{ fontSize: '1.6rem', flexShrink: 0, lineHeight: 1, marginTop: '0.1rem' }}>{tip.icon}</span>
                <p style={{ margin: 0, fontSize: '0.92rem', lineHeight: '1.65', color: 'var(--gray-700)' }}>{tip.tip}</p>
              </div>
            ))}
          </div>

          {/* SDG Connection */}
          <div style={{ marginTop: '3rem', background: 'var(--green-700)', borderRadius: 'var(--radius-lg)', padding: '2.5rem', color: 'var(--white)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem' }}>
              <div>
                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>🎯</div>
                <h3 style={{ color: 'var(--white)', marginBottom: '0.5rem' }}>SDG 12</h3>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.88rem' }}>Every tip on this page directly supports <strong style={{ color: '#86efac' }}>SDG 12 — Responsible Consumption & Production</strong>, the primary SDG of EcoSort AI.</p>
              </div>
              <div>
                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>🌆</div>
                <h3 style={{ color: 'var(--white)', marginBottom: '0.5rem' }}>SDG 11</h3>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.88rem' }}>Better waste habits contribute to <strong style={{ color: '#86efac' }}>SDG 11 — Sustainable Cities</strong> by reducing waste burden on urban systems and improving community health.</p>
              </div>
              <div>
                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>🌡️</div>
                <h3 style={{ color: 'var(--white)', marginBottom: '0.5rem' }}>SDG 13</h3>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.88rem' }}>Reducing food waste and composting organic materials directly supports <strong style={{ color: '#86efac' }}>SDG 13 — Climate Action</strong> by lowering methane emissions.</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
