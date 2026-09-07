import React, { useState } from 'react';

const PHASES = [
  {
    id: 'empathize',
    icon: '🤝',
    title: 'Empathize',
    color: 'var(--blue-600)',
    bg: '#dbeafe',
    border: '#93c5fd',
    subtitle: 'Understanding the people and the problem',
    content: [
      {
        heading: 'Who faces the problem?',
        body: `Incorrect waste disposal is a widespread challenge affecting nearly everyone:

**Students and young people** often lack practical waste management education. Schools teach about sustainability in theory but rarely provide hands-on guidance for everyday disposal decisions.

**Households** face confusing bin systems, unclear labeling, and limited local guidance on what goes where. Many people default to "when in doubt, throw it out" — putting recyclables in general waste.

**Office workers** generate significant paper, plastic, and e-waste but often have no clear guidance on correct segregation at their workplace.

**Communities in developing regions** may have limited waste infrastructure and even less access to sustainability education, making accessible digital guidance especially valuable.

**Waste management workers** receive contaminated recycling loads because of incorrect sorting upstream — increasing processing costs and reducing recycling efficiency.`,
      },
      {
        heading: 'What difficulties do they experience?',
        body: `- Complex, inconsistent recycling rules that vary by location
- No simple, accessible tool to answer "where does this go?"
- Confusing recycling symbols and plastic resin codes
- Lack of awareness about composting and organic waste options
- Uncertainty about hazardous waste handling (batteries, e-waste, chemicals)
- No immediate feedback mechanism when making disposal decisions`,
      },
      {
        heading: 'Why does the problem continue?',
        body: `- Sustainability education is not consistently embedded in school curricula
- Municipality websites are often hard to navigate and not mobile-friendly  
- Waste bin labeling is inconsistent and often unclear
- There is no engaging, interactive tool that makes learning waste management easy
- People are busy — guidance needs to be instant, simple, and accessible on demand`,
      },
    ],
  },
  {
    id: 'define',
    icon: '🎯',
    title: 'Define',
    color: 'var(--teal-600)',
    bg: '#f0fdfa',
    border: '#5eead4',
    subtitle: 'Framing the specific problem to solve',
    content: [
      {
        heading: 'Problem Statement',
        body: `**"How might we use AI to help people correctly identify, segregate, and responsibly manage everyday waste so that communities can become more sustainable?"**

This statement deliberately focuses on:
- **AI** as the enabling technology for personalized, instant guidance
- **Correct identification** — the core knowledge gap
- **Segregation** — the actionable behavior we want to change
- **Responsible management** — going beyond just sorting to safe disposal
- **Communities** — the collective impact goal`,
      },
      {
        heading: 'Target Users',
        body: `**Primary users:**
- Students (secondary school and college level) — learning sustainability
- Households — making daily waste decisions
- School and college sustainability committees

**Secondary users:**
- Office sustainability coordinators
- Community leaders and NGO workers
- Waste management awareness educators`,
      },
      {
        heading: 'Current Gaps',
        body: `- No simple, conversational AI tool specifically for waste classification guidance
- Existing sustainability apps are too complex or require accounts
- No tool that combines classification + disposal guidance + sustainability tip in one interaction
- No responsible AI waste tool that honestly acknowledges local variation and uncertainty
- Limited tools designed specifically for student and community education contexts`,
      },
    ],
  },
  {
    id: 'ideate',
    icon: '💡',
    title: 'Ideate',
    color: '#7c3aed',
    bg: '#f5f3ff',
    border: '#c4b5fd',
    subtitle: 'Generating and evaluating possible solutions',
    content: [
      {
        heading: 'Solution Ideas Considered',
        body: `**Idea 1: Simple static waste guide website**
A lookup table mapping items to categories. Rejected as too rigid — doesn't handle natural language input variation and provides no conversational guidance.

**Idea 2: Image recognition waste classifier**
Users photograph waste for AI classification. Strong idea for a future version but requires camera access, ML model training data, and significant infrastructure — not suitable for a prototype.

**Idea 3: Municipal-linked waste rulebook**
Connect to local authority APIs for location-specific rules. Excellent future enhancement but requires ongoing maintenance and API access.

**Idea 4: EcoSort AI — AI-powered waste checker + conversational assistant (Selected ✓)**
A web application combining:
- Natural language waste checker with AI classification
- Conversational sustainability assistant for open questions
- Educational waste categories section
- Practical sustainability tips
- Responsible AI design throughout`,
      },
      {
        heading: 'Why EcoSort AI Was Selected',
        body: `- **Achievable as a prototype** with no paid APIs or external infrastructure
- **Broad coverage** — handles both specific item questions and general sustainability queries
- **Educational value** — supports students and communities, not just individuals
- **Responsible AI design** is achievable — uncertainty and transparency can be built in from the start
- **Directly addresses SDG 12** through behavior change guidance
- **IBM BOB** was used throughout ideation and development — demonstrating the human+AI collaboration model aligned with 1M1B principles`,
      },
    ],
  },
  {
    id: 'prototype',
    icon: '🛠️',
    title: 'Prototype',
    color: 'var(--green-600)',
    bg: 'var(--green-50)',
    border: 'var(--green-200)',
    subtitle: 'Building the demonstrable solution',
    content: [
      {
        heading: 'Core Prototype Features',
        body: `**Waste Checker:**
Natural language input for any waste item → AI classification → waste category, recommended action, recyclability, disposal guidance, sustainability tip, and environmental note.

**AI Sustainability Assistant:**
Conversational interface where users ask open questions about waste, recycling, composting, and sustainability. Suggested questions make it easy to explore during demos.

**AI Workflow Visualization:**
Step-by-step diagram (Input → Understanding → Classification → Recommendation → Guidance) with an interactive prompt lab showing example inputs and expected AI outputs.

**Waste Categories Education:**
Eight waste categories with examples, handling guidance, reuse/recycle information, and sustainability tips — in both card and table format.

**Sustainability Tips:**
Organized by the 5 R's hierarchy (Refuse, Reduce, Reuse, Recycle, Rot) with actionable tips for each category.

**Impact Dashboard:**
Illustrative metrics and expected impact across environmental, social, and economic dimensions — clearly labeled as prototype targets, not real-world results.

**Responsible AI Section:**
Dedicated section covering fairness, transparency, ethics, privacy, and limitations.`,
      },
      {
        heading: 'Technology Choices',
        body: `- **React** — component-based UI, responsive, and easy to demonstrate locally
- **React Router** — multi-page navigation without requiring a backend
- **Vanilla CSS** — clean, maintainable styles without framework overhead
- **Local data structures** — no database, no API keys, fully offline capable
- **IBM BOB** — used for project ideation, code assistance, and documentation during development`,
      },
    ],
  },
  {
    id: 'test',
    icon: '🔬',
    title: 'Test & Refine',
    color: '#ca8a04',
    bg: '#fefce8',
    border: '#fde047',
    subtitle: 'Improving based on feedback and testing',
    content: [
      {
        heading: 'Key Improvements Made During Development',
        body: `**Classification accuracy:**
- Added fuzzy keyword matching to handle natural language variations ("old phone" → e-waste)
- Expanded the waste database to cover the 10 most common everyday waste items in detail
- Added category-level defaults so any item with known keywords gets a useful response

**Responsible uncertainty handling:**
- Added "Item Not Recognized" state for unknown items — no false confidence
- Added caution notes for items where local rules vary significantly (plastics, glass types)
- Hazardous and e-waste results include strong disposal warnings

**Accessibility improvements:**
- Clear keyboard navigation (Enter to submit in both Waste Checker and AI Assistant)
- High contrast text and clearly labeled form elements
- Mobile-responsive layout across all pages

**Recommendation quality:**
- Sustainability tips made specific and actionable rather than generic
- Environmental notes provide context for why correct disposal matters
- SDG 12 connection made explicit in multiple places

**Responsible AI improvements:**
- "AI Prototype / Demonstration Mode" clearly labeled on all AI features
- No false claims about model accuracy or real-world deployment
- Local variation acknowledged in all relevant classifications`,
      },
      {
        heading: 'Planned Next Improvements',
        body: `- Expand waste database to cover more specific items (currently 10 detailed + category-level matching)
- Add an image upload feature for visual waste recognition (future scope)
- Add location-specific disposal guidance via API integration
- Conduct user testing with actual students to validate classification accuracy and usefulness
- Add multilingual support starting with languages relevant to 1M1B communities`,
      },
    ],
  },
];

export default function DesignThinking() {
  const [activePhase, setActivePhase] = useState('empathize');
  const current = PHASES.find(p => p.id === activePhase);

  function renderBody(body) {
    // Convert **text** to bold, simple line formatting
    const lines = body.split('\n');
    return lines.map((line, i) => {
      const formatted = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      if (line.startsWith('- ')) {
        return <li key={i} style={{ marginLeft: '1rem', fontSize: '0.92rem', color: 'var(--gray-700)', lineHeight: '1.7', marginBottom: '0.2rem' }} dangerouslySetInnerHTML={{ __html: formatted.replace(/^- /, '') }} />;
      }
      if (line === '') return <br key={i} />;
      return <p key={i} style={{ fontSize: '0.92rem', color: 'var(--gray-700)', lineHeight: '1.7', marginBottom: '0.3rem' }} dangerouslySetInnerHTML={{ __html: formatted }} />;
    });
  }

  return (
    <div>
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <div className="eyebrow">Project Documentation</div>
          <h1>🧠 Design Thinking</h1>
          <p>The 5-phase Design Thinking approach used to develop EcoSort AI — from understanding the problem to building and refining the prototype.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">

          {/* Phase tabs */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
            {PHASES.map(phase => (
              <button
                key={phase.id}
                onClick={() => setActivePhase(phase.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.6rem 1.1rem',
                  borderRadius: 'var(--radius-full)',
                  border: `2px solid ${activePhase === phase.id ? phase.color : 'var(--gray-200)'}`,
                  background: activePhase === phase.id ? phase.bg : 'var(--white)',
                  color: activePhase === phase.id ? phase.color : 'var(--gray-600)',
                  fontWeight: '700',
                  fontSize: '0.88rem',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-sans)',
                  transition: 'all 0.15s',
                }}
              >
                <span>{phase.icon}</span> {phase.title}
              </button>
            ))}
          </div>

          {/* Phase content */}
          {current && (
            <div>
              <div style={{ marginBottom: '2rem' }}>
                <span style={{ fontSize: '2.5rem' }}>{current.icon}</span>
                <h2 style={{ color: current.color, marginTop: '0.5rem', marginBottom: '0.25rem' }}>{current.title}</h2>
                <p style={{ color: current.color, fontWeight: '500', opacity: '0.8' }}>{current.subtitle}</p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {current.content.map((section, i) => (
                  <div key={i} className="card" style={{ background: current.bg, border: `1px solid ${current.border}` }}>
                    <h3 style={{ color: current.color, marginBottom: '1rem', fontSize: '1rem' }}>{section.heading}</h3>
                    <div>{renderBody(section.body)}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Phase overview */}
          <div style={{ marginTop: '3rem', background: 'var(--gray-50)', borderRadius: 'var(--radius-lg)', padding: '2rem' }}>
            <h3 style={{ marginBottom: '1.25rem', textAlign: 'center' }}>Design Thinking Process Overview</h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0', overflowX: 'auto', justifyContent: 'center' }}>
              {PHASES.map((phase, i) => (
                <React.Fragment key={phase.id}>
                  <button
                    onClick={() => setActivePhase(phase.id)}
                    style={{
                      background: activePhase === phase.id ? phase.bg : 'var(--white)',
                      border: `2px solid ${activePhase === phase.id ? phase.color : phase.border}`,
                      borderRadius: 'var(--radius)',
                      padding: '0.75rem 0.9rem',
                      cursor: 'pointer',
                      textAlign: 'center',
                      fontFamily: 'var(--font-sans)',
                      minWidth: '90px',
                    }}
                  >
                    <div style={{ fontSize: '1.4rem' }}>{phase.icon}</div>
                    <div style={{ fontSize: '0.78rem', fontWeight: '700', color: phase.color, marginTop: '0.2rem' }}>{phase.title}</div>
                  </button>
                  {i < PHASES.length - 1 && (
                    <div style={{ color: 'var(--gray-300)', fontSize: '1rem', padding: '0 0.2rem', flexShrink: 0 }}>→</div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
