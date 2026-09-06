import React, { useState } from 'react';

const FLOW_STEPS = [
  {
    num: '01',
    icon: '⌨️',
    title: 'User Input',
    color: 'var(--blue-600)',
    bg: '#dbeafe',
    description: 'The user enters an everyday waste item in natural language — for example: "plastic water bottle", "banana peel", or "old mobile phone". The input can be a single word or a short phrase.',
    example: '"I have an empty plastic water bottle. What should I do with it?"',
  },
  {
    num: '02',
    icon: '🧠',
    title: 'AI Understanding',
    color: 'var(--teal-600)',
    bg: '#ccfbf1',
    description: 'The system applies keyword extraction and classification logic to understand the item type, material composition, and waste category. Fuzzy matching handles natural language variations.',
    example: 'Recognizes: plastic → PET bottle → Plastic Waste category',
  },
  {
    num: '03',
    icon: '📋',
    title: 'Waste Classification',
    color: 'var(--green-600)',
    bg: 'var(--green-100)',
    description: 'The item is assigned to a waste category (Organic, Paper, Plastic, Glass, Metal, E-Waste, Hazardous, General). The recommended disposal action is determined.',
    example: 'Category: Plastic Waste | Action: Recycle',
  },
  {
    num: '04',
    icon: '🎯',
    title: 'Recommendation',
    color: '#7c3aed',
    bg: '#ede9fe',
    description: 'A specific, actionable recommendation is provided — including recyclability status, disposal guidance, and an important caution if local rules may differ.',
    example: 'Rinse and place in the recyclable waste stream. Check local plastic recycling guidelines.',
  },
  {
    num: '05',
    icon: '🌱',
    title: 'Sustainability Guidance',
    color: '#ca8a04',
    bg: '#fef3c7',
    description: 'A practical sustainability tip is provided to help the user make a more sustainable choice in the future — going beyond just disposal to encourage behavior change.',
    example: 'Tip: Switch to a reusable water bottle to eliminate single-use plastic entirely.',
  },
];

const PROMPT_EXAMPLE = {
  systemRole: `You are a sustainability assistant specializing in responsible waste management. Your role is to:
1. Classify waste items into the correct category
2. Provide safe, responsible disposal recommendations
3. Offer practical sustainability tips
4. Clearly state when local rules may vary
5. Never provide unsafe instructions for hazardous materials`,

  userInput: `"I have an empty plastic water bottle. What should I do with it?"`,

  expectedOutput: [
    { label: '1. Waste Category', value: 'Plastic Waste — PET (Polyethylene Terephthalate), typically marked with resin code #1' },
    { label: '2. Recommended Action', value: 'Recycle — Place in the designated plastic recycling bin or collection point' },
    { label: '3. Recyclability', value: 'Potentially recyclable depending on local recycling facilities and plastic type' },
    { label: '4. Disposal / Reuse Guidance', value: 'Rinse thoroughly to remove residue, remove the cap (recycle separately or check local rules), flatten if possible, and place in plastic recycling' },
    { label: '5. Sustainability Tip', value: 'Switch to a reusable water bottle to eliminate single-use plastic. One reusable bottle can prevent hundreds of single-use bottles from entering the waste stream.' },
    { label: '6. Important Caution', value: 'Recycling rules for plastics vary by municipality. Not all plastic types are accepted in all programs. Check local guidelines for accepted plastic resin codes.' },
  ],
};

export default function AIWorkflow() {
  const [activeStep, setActiveStep] = useState(null);

  return (
    <div>
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <div className="eyebrow">How the AI Works</div>
          <h1>⚙️ AI Workflow</h1>
          <p>Understand how EcoSort AI processes your input and generates responsible waste guidance — from input to sustainability action.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">

          {/* Prototype Notice */}
          <div className="ai-prototype-banner" style={{ marginBottom: '2.5rem' }}>
            <span className="banner-icon">🤖</span>
            <span>
              <strong>AI Prototype / Demonstration Mode</strong> — EcoSort AI demonstrates an AI workflow using a structured knowledge base.
              This prototype simulates the input → classification → recommendation pipeline without requiring an external AI API.
              The workflow design is compatible with integration of large language models as a future enhancement.
            </span>
          </div>

          {/* Flow overview */}
          <div className="section-header">
            <h2>The EcoSort AI Pipeline</h2>
            <p>A clear, explainable 5-step process from user input to sustainability guidance</p>
          </div>

          {/* Flow diagram */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0', marginBottom: '2.5rem', overflowX: 'auto', padding: '0.5rem 0' }}>
            {FLOW_STEPS.map((step, i) => (
              <React.Fragment key={i}>
                <button
                  onClick={() => setActiveStep(activeStep === i ? null : i)}
                  style={{
                    background: activeStep === i ? step.bg : 'var(--white)',
                    border: `2px solid ${activeStep === i ? step.color : 'var(--gray-200)'}`,
                    borderRadius: 'var(--radius-md)',
                    padding: '1.25rem 1rem',
                    cursor: 'pointer',
                    textAlign: 'center',
                    minWidth: '140px',
                    transition: 'all 0.2s',
                    fontFamily: 'var(--font-sans)',
                  }}
                >
                  <div style={{ fontSize: '1.8rem', marginBottom: '0.4rem' }}>{step.icon}</div>
                  <div style={{ fontSize: '0.68rem', fontWeight: '700', color: step.color, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{step.num}</div>
                  <div style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--gray-800)', marginTop: '0.2rem' }}>{step.title}</div>
                </button>
                {i < FLOW_STEPS.length - 1 && (
                  <div style={{ padding: '0 0.3rem', color: 'var(--gray-400)', fontSize: '1.2rem', flexShrink: 0 }}>→</div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Step detail */}
          {activeStep !== null && (
            <div className="card" style={{ background: FLOW_STEPS[activeStep].bg, border: `2px solid ${FLOW_STEPS[activeStep].color}`, marginBottom: '2rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '2.5rem', flexShrink: 0 }}>{FLOW_STEPS[activeStep].icon}</span>
                <div>
                  <h3 style={{ color: FLOW_STEPS[activeStep].color, marginBottom: '0.5rem' }}>
                    Step {FLOW_STEPS[activeStep].num}: {FLOW_STEPS[activeStep].title}
                  </h3>
                  <p style={{ marginBottom: '0.75rem' }}>{FLOW_STEPS[activeStep].description}</p>
                  <div style={{ background: 'rgba(255,255,255,0.7)', border: '1px solid rgba(0,0,0,0.1)', borderRadius: 'var(--radius)', padding: '0.75rem 1rem', fontFamily: 'monospace', fontSize: '0.87rem', color: 'var(--gray-700)' }}>
                    Example: {FLOW_STEPS[activeStep].example}
                  </div>
                </div>
              </div>
            </div>
          )}

          {!activeStep && activeStep !== 0 && (
            <p style={{ color: 'var(--gray-400)', fontSize: '0.88rem', marginBottom: '2rem', textAlign: 'center' }}>👆 Click any step above to see details</p>
          )}

          {/* Prompt Lab */}
          <div style={{ borderTop: '1px solid var(--gray-200)', paddingTop: '3rem', marginTop: '1rem' }}>
            <div className="section-header">
              <h2>🧪 Prompt Lab</h2>
              <p>An example AI prompt workflow showing how inputs map to structured outputs</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
              {/* System role */}
              <div>
                <div style={{ fontWeight: '700', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--gray-500)', marginBottom: '0.5rem' }}>System Role</div>
                <div style={{ background: 'var(--gray-900)', borderRadius: 'var(--radius)', padding: '1.25rem', color: '#86efac', fontFamily: 'monospace', fontSize: '0.83rem', lineHeight: '1.6', whiteSpace: 'pre-wrap' }}>
                  {PROMPT_EXAMPLE.systemRole}
                </div>
              </div>

              {/* User input */}
              <div>
                <div style={{ fontWeight: '700', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--gray-500)', marginBottom: '0.5rem' }}>User Input</div>
                <div style={{ background: '#1e3a5f', borderRadius: 'var(--radius)', padding: '1.25rem', color: '#93c5fd', fontFamily: 'monospace', fontSize: '0.9rem', lineHeight: '1.6', minHeight: '100px' }}>
                  {PROMPT_EXAMPLE.userInput}
                </div>
              </div>
            </div>

            {/* Expected output */}
            <div>
              <div style={{ fontWeight: '700', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--gray-500)', marginBottom: '0.75rem' }}>Expected AI Output Structure</div>
              <div className="card" style={{ border: '2px solid var(--green-200)' }}>
                {PROMPT_EXAMPLE.expectedOutput.map((item, i) => (
                  <div key={i} style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: '1rem', padding: '0.85rem 0', borderBottom: i < PROMPT_EXAMPLE.expectedOutput.length - 1 ? '1px solid var(--gray-100)' : 'none' }}>
                    <span style={{ fontWeight: '700', fontSize: '0.83rem', color: 'var(--green-700)' }}>{item.label}</span>
                    <span style={{ fontSize: '0.9rem', color: 'var(--gray-700)' }}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Responsible AI note */}
          <div className="alert alert-success" style={{ marginTop: '2.5rem' }}>
            <span>🛡️</span>
            <div>
              <strong>Responsible AI Design:</strong> The EcoSort AI workflow is designed to be transparent, explainable, and honest.
              It acknowledges uncertainty, recommends checking local guidelines, and never provides unsafe instructions for hazardous materials.
              Classifications are presented as guidance, not absolute determinations.
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
