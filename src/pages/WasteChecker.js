import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { classifyWaste, QUICK_EXAMPLES } from '../data/wasteData';

const ACTION_COLORS = {
  teal:   'action-teal',
  green:  'action-green',
  red:    'action-red',
  purple: 'action-purple',
  gray:   'action-gray',
};

function ResultCard({ result }) {
  if (!result.matched) {
    return (
      <div className="card" style={{ borderColor: 'var(--amber-400)', borderWidth: '2px', marginTop: '1.5rem' }}>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
          <span style={{ fontSize: '2.5rem' }}>❓</span>
          <div>
            <h3 style={{ marginBottom: '0.5rem', color: 'var(--gray-800)' }}>Item Not Recognized</h3>
            <p style={{ marginBottom: '0.75rem' }}>
              We couldn't confidently classify "<strong>{result.query}</strong>".
              Please provide more details or check your local waste-management guidance for this specific item.
            </p>
            <div className="alert alert-warning">
              <span>⚠️</span>
              <span>When in doubt, <strong>never mix hazardous waste</strong> with general bins. Contact your local municipality for guidance on unrecognized items.</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="result-card" style={{ marginTop: '1.5rem' }}>
      <div className="result-header">
        <span className="result-icon">{result.icon}</span>
        <div>
          <h3>{result.name}</h3>
          <p>{result.fuzzy ? 'Classified based on item type' : 'Matched from waste database'}</p>
        </div>
      </div>
      <div className="result-body">
        <div className="result-row">
          <span className="result-row-label">Waste Category</span>
          <span className="result-row-value">
            <span className={`badge badge-${result.actionColor === 'teal' ? 'teal' : result.actionColor === 'green' ? 'green' : result.actionColor === 'red' ? 'red' : result.actionColor === 'purple' ? 'purple' : 'gray'}`}>
              {result.category}
            </span>
          </span>
        </div>

        <div className="result-row">
          <span className="result-row-label">Recommended Action</span>
          <span className={`result-row-value action ${ACTION_COLORS[result.actionColor] || 'action-gray'}`}>
            ✓ {result.action}
          </span>
        </div>

        {result.recyclability && (
          <div className="result-row">
            <span className="result-row-label">Recyclability</span>
            <span className="result-row-value">{result.recyclability}</span>
          </div>
        )}

        {result.suggestedAction && (
          <div className="result-row">
            <span className="result-row-label">Suggested Action</span>
            <span className="result-row-value">{result.suggestedAction}</span>
          </div>
        )}

        {result.sustainabilityTip && (
          <div className="result-row">
            <span className="result-row-label">Sustainability Tip</span>
            <span className="result-row-value" style={{ color: 'var(--green-700)', fontWeight: '500' }}>
              🌱 {result.sustainabilityTip}
            </span>
          </div>
        )}

        {result.environmentalNote && (
          <div className="result-row">
            <span className="result-row-label">Environmental Note</span>
            <span className="result-row-value">{result.environmentalNote}</span>
          </div>
        )}

        {result.caution && (
          <div style={{ marginTop: '1rem' }}>
            <div className="alert alert-warning">
              <span style={{ flexShrink: 0 }}>⚠️</span>
              <span>{result.caution}</span>
            </div>
          </div>
        )}

        <div style={{ marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid var(--gray-100)', display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
          {result.sdg && <span className="badge badge-green">{result.sdg}</span>}
          <span className="badge badge-gray" style={{ fontSize: '0.72rem' }}>📍 Disposal rules may vary by municipality</span>
        </div>
      </div>
    </div>
  );
}

export default function WasteChecker() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);

  const handleCheck = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    if (trimmed.length > 200) {
      alert('Please enter a shorter item name (under 200 characters).');
      return;
    }

    setLoading(true);
    setResult(null);

    // Simulate brief processing
    setTimeout(() => {
      const classified = classifyWaste(trimmed);
      setResult(classified);
      setHistory(prev => [{ query: trimmed, result: classified }, ...prev.slice(0, 4)]);
      setLoading(false);
    }, 600);
  };

  const handleExample = (example) => {
    setInput(example);
    setLoading(true);
    setResult(null);
    setTimeout(() => {
      const classified = classifyWaste(example);
      setResult(classified);
      setHistory(prev => [{ query: example, result: classified }, ...prev.slice(0, 4)]);
      setLoading(false);
    }, 600);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleCheck();
  };

  return (
    <div>
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <div className="eyebrow">AI-Powered</div>
          <h1>🔍 Waste Checker</h1>
          <p>Enter any waste item to get an AI-powered classification, disposal guidance, and sustainability tip.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2.5rem', alignItems: 'start' }}>

            {/* Main Checker */}
            <div>
              {/* AI Prototype Notice */}
              <div className="ai-prototype-banner" style={{ marginBottom: '1.5rem' }}>
                <span className="banner-icon">🤖</span>
                <span><strong>AI Prototype / Demonstration Mode</strong> — Classifications are based on a curated sustainability knowledge base. Always verify disposal guidelines with your local municipality for specific requirements.</span>
              </div>

              {/* Input */}
              <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem' }}>
                <input
                  className="input"
                  type="text"
                  placeholder="e.g. plastic water bottle, banana peel, newspaper..."
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  aria-label="Enter waste item"
                  maxLength={200}
                />
                <button
                  className="btn btn-primary"
                  onClick={handleCheck}
                  disabled={loading || !input.trim()}
                  style={{ flexShrink: 0 }}
                >
                  {loading ? <span className="spinner" /> : '🔍 Check'}
                </button>
              </div>

              {/* Quick examples */}
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ fontSize: '0.82rem', color: 'var(--gray-500)', fontWeight: '500', marginBottom: '0.5rem' }}>Quick examples:</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {QUICK_EXAMPLES.map((ex, i) => (
                    <button key={i} className="chip" onClick={() => handleExample(ex)}>
                      {ex}
                    </button>
                  ))}
                </div>
              </div>

              {/* Loading */}
              {loading && (
                <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--gray-400)' }}>
                  <div className="spinner" style={{ width: '36px', height: '36px', marginBottom: '1rem' }} />
                  <p style={{ color: 'var(--gray-400)' }}>Classifying item...</p>
                </div>
              )}

              {/* Result */}
              {!loading && result && <ResultCard result={result} />}

              {/* Empty state */}
              {!loading && !result && (
                <div className="empty-state">
                  <div className="empty-icon">🌿</div>
                  <h3>Enter a waste item above</h3>
                  <p>Type the name of any waste item — or click one of the quick examples — to get a classification and disposal guidance.</p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

              {/* Recent checks */}
              {history.length > 0 && (
                <div className="card">
                  <h4 style={{ marginBottom: '0.75rem', fontSize: '0.9rem', fontWeight: '700', color: 'var(--gray-700)' }}>Recent Checks</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {history.map((h, i) => (
                      <button key={i} className="chip" style={{ justifyContent: 'flex-start', textAlign: 'left' }} onClick={() => handleExample(h.query)}>
                        {h.result.icon} {h.query}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* SDG Box */}
              <div className="card" style={{ background: 'var(--green-50)', border: '1px solid var(--green-200)' }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>🎯</div>
                <h4 style={{ fontSize: '0.9rem', color: 'var(--green-800)', marginBottom: '0.4rem' }}>SDG 12 Connection</h4>
                <p style={{ fontSize: '0.83rem', color: 'var(--green-700)' }}>
                  Every correct waste segregation decision contributes to <strong>SDG 12 — Responsible Consumption & Production</strong>.
                </p>
              </div>

              {/* Caution Box */}
              <div className="card" style={{ background: 'var(--red-100)', border: '1px solid #fca5a5' }}>
                <div style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>⚠️</div>
                <h4 style={{ fontSize: '0.9rem', color: '#b91c1c', marginBottom: '0.4rem' }}>Hazardous Waste</h4>
                <p style={{ fontSize: '0.83rem', color: '#991b1b' }}>
                  For batteries, chemicals, medications, and e-waste — always use <strong>authorized collection channels</strong>. Never in household bins.
                </p>
              </div>

              {/* Ask AI */}
              <div className="card" style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>🤖</div>
                <h4 style={{ fontSize: '0.9rem', marginBottom: '0.4rem' }}>Have a question?</h4>
                <p style={{ fontSize: '0.83rem', marginBottom: '0.75rem' }}>Ask the AI Sustainability Assistant for more detailed guidance.</p>
                <Link to="/ai-assistant" className="btn btn-secondary btn-sm">Ask AI Assistant</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
