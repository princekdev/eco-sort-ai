import React, { useState } from 'react';
import { WASTE_CATEGORIES } from '../data/categoriesData';

export default function WasteCategories() {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <div>
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <div className="eyebrow">Education</div>
          <h1>📚 Waste Categories</h1>
          <p>Learn about the 8 main waste categories — what goes in each, how to handle it, and how it can be managed sustainably.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">

          {/* Category Grid */}
          <div className="grid-4" style={{ marginBottom: '2.5rem' }}>
            {WASTE_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(activeCategory === cat.id ? null : cat.id)}
                style={{
                  background: activeCategory === cat.id ? cat.bgColor : 'var(--white)',
                  border: `2px solid ${activeCategory === cat.id ? cat.color : cat.borderColor}`,
                  borderRadius: 'var(--radius-md)',
                  padding: '1.25rem',
                  cursor: 'pointer',
                  textAlign: 'center',
                  transition: 'all 0.2s',
                  fontFamily: 'var(--font-sans)',
                  boxShadow: activeCategory === cat.id ? 'var(--shadow-md)' : 'var(--shadow-sm)',
                }}
              >
                <div style={{ fontSize: '2.2rem', marginBottom: '0.5rem' }}>{cat.icon}</div>
                <div style={{ fontWeight: '700', fontSize: '0.88rem', color: activeCategory === cat.id ? cat.color : 'var(--gray-800)' }}>{cat.name}</div>
              </button>
            ))}
          </div>

          {/* Category Detail */}
          {activeCategory ? (
            WASTE_CATEGORIES.filter(c => c.id === activeCategory).map(cat => (
              <div key={cat.id} className="card" style={{ background: cat.bgColor, border: `2px solid ${cat.color}`, marginBottom: '2rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '3rem', flexShrink: 0 }}>{cat.icon}</span>
                  <div style={{ flex: 1 }}>
                    <h2 style={{ color: cat.color, marginBottom: '1.25rem' }}>{cat.name}</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
                      <div>
                        <h4 style={{ fontSize: '0.82rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--gray-600)', marginBottom: '0.6rem' }}>Examples</h4>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                          {cat.examples.map((ex, i) => (
                            <li key={i} style={{ fontSize: '0.88rem', color: 'var(--gray-700)', display: 'flex', gap: '0.4rem' }}>
                              <span style={{ color: cat.color }}>•</span> {ex}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 style={{ fontSize: '0.82rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--gray-600)', marginBottom: '0.6rem' }}>Recommended Handling</h4>
                        <p style={{ fontSize: '0.88rem', color: 'var(--gray-700)', lineHeight: '1.6' }}>{cat.handling}</p>
                      </div>
                      <div>
                        <h4 style={{ fontSize: '0.82rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--gray-600)', marginBottom: '0.6rem' }}>Reuse / Recycle</h4>
                        <p style={{ fontSize: '0.88rem', color: 'var(--gray-700)', lineHeight: '1.6' }}>{cat.reuseRecycle}</p>
                      </div>
                      <div>
                        <h4 style={{ fontSize: '0.82rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--gray-600)', marginBottom: '0.6rem' }}>🌱 Sustainability Tip</h4>
                        <p style={{ fontSize: '0.88rem', color: cat.color, lineHeight: '1.6', fontWeight: '500' }}>{cat.sustainabilityTip}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="empty-state">
              <div className="empty-icon">👆</div>
              <h3>Click any category to learn more</h3>
              <p>Select a waste category from the grid above to see examples, handling guidance, and sustainability tips.</p>
            </div>
          )}

          {/* All categories reference table */}
          <div style={{ marginTop: '2.5rem' }}>
            <h2 style={{ marginBottom: '1.25rem' }}>Quick Reference Guide</h2>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem' }}>
                <thead>
                  <tr style={{ background: 'var(--green-700)', color: 'var(--white)' }}>
                    {['Category', 'Icon', 'Example Items', 'Recommended Action', 'Recyclable?'].map(h => (
                      <th key={h} style={{ padding: '0.75rem 1rem', textAlign: 'left', fontWeight: '700', fontSize: '0.8rem', letterSpacing: '0.04em' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {WASTE_CATEGORIES.map((cat, i) => (
                    <tr key={cat.id} style={{ background: i % 2 === 0 ? 'var(--white)' : 'var(--gray-50)', borderBottom: '1px solid var(--gray-200)' }}>
                      <td style={{ padding: '0.75rem 1rem', fontWeight: '600', color: cat.color }}>{cat.name}</td>
                      <td style={{ padding: '0.75rem 1rem', fontSize: '1.2rem' }}>{cat.icon}</td>
                      <td style={{ padding: '0.75rem 1rem', color: 'var(--gray-600)' }}>{cat.examples.slice(0, 2).join(', ')}</td>
                      <td style={{ padding: '0.75rem 1rem', color: 'var(--gray-700)', fontWeight: '500' }}>{
                        cat.id === 'organic' ? 'Compost' :
                        cat.id === 'ewaste' || cat.id === 'hazardous' ? 'Special Disposal ⚠️' :
                        cat.id === 'general' ? 'General Waste Bin' : 'Recycle'
                      }</td>
                      <td style={{ padding: '0.75rem 1rem' }}>
                        <span style={{ color: cat.id === 'hazardous' || cat.id === 'general' ? 'var(--red-500)' : cat.id === 'organic' ? 'var(--amber-500)' : 'var(--green-600)', fontWeight: '600' }}>
                          {cat.id === 'hazardous' ? 'Special handling' : cat.id === 'general' ? 'Generally no' : cat.id === 'organic' ? 'Compostable' : 'Yes (check local rules)'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{ marginTop: '0.75rem', fontSize: '0.8rem', color: 'var(--gray-400)' }}>📍 Recycling acceptance varies by municipality. Always verify with your local waste management authority.</p>
          </div>

        </div>
      </section>
    </div>
  );
}
