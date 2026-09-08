import React from 'react';

const AWARENESS_METRICS = [
  { label: 'Waste Segregation Awareness', icon: '♻️', value: 85, color: 'var(--teal-600)', note: 'of users could identify correct waste categories after using EcoSort AI (illustrative target)' },
  { label: 'Recycling Awareness', icon: '🔄', value: 90, color: 'var(--green-600)', note: 'of users gained new recycling knowledge through the Waste Checker feature (illustrative target)' },
  { label: 'Reuse & Sustainability Tips', icon: '🌱', value: 78, color: '#7c3aed', note: 'of users reported actionable takeaways from the Sustainability Tips section (illustrative target)' },
  { label: 'Sustainable Behavior Intent', icon: '💡', value: 72, color: 'var(--blue-600)', note: 'of users indicated intent to change at least one waste-related behavior (illustrative target)' },
];

const IMPACT_AREAS = [
  {
    title: 'Environmental Impact',
    icon: '🌍',
    color: 'var(--green-600)',
    bg: 'var(--green-50)',
    border: 'var(--green-200)',
    items: [
      'Improved waste segregation accuracy in participating communities',
      'Increased awareness of recycling potential for common materials',
      'Reduced organic waste sent to landfill through composting guidance',
      'Greater public understanding of hazardous waste handling',
      'Awareness of microplastic pollution and its prevention',
    ],
  },
  {
    title: 'Social Impact',
    icon: '👥',
    color: 'var(--teal-600)',
    bg: '#f0fdfa',
    border: '#5eead4',
    items: [
      'Accessible sustainability guidance for students and households',
      'Improved waste literacy across diverse communities',
      'Empowerment of individuals to take practical sustainability action',
      'Support for schools and colleges in implementing waste programs',
      'Bridge between waste management knowledge and everyday behavior',
    ],
  },
  {
    title: 'Economic Impact',
    icon: '💰',
    color: '#7c3aed',
    bg: '#f5f3ff',
    border: '#c4b5fd',
    items: [
      'Recovery potential of recyclable materials currently lost to landfill',
      'Reduced waste management costs through better source separation',
      'Encouragement of reuse, reducing replacement purchase costs',
      'Potential reduction in municipal waste processing expenses',
      'Support for circular economy principles at community level',
    ],
  },
];

const FUTURE_SCOPE = [
  { icon: '📷', title: 'Image-Based Waste Recognition', desc: 'Users could photograph waste items for visual AI classification using computer vision.' },
  { icon: '🗺️', title: 'Local Municipal Integration', desc: 'Connect with local authority APIs to provide location-specific disposal rules and collection schedules.' },
  { icon: '🌐', title: 'Multilingual Support', desc: 'Extend the assistant to support multiple languages, making sustainability guidance accessible to more communities.' },
  { icon: '📊', title: 'Community Waste Analytics', desc: 'Aggregate (anonymized) usage data to help communities understand their collective waste patterns.' },
  { icon: '🏫', title: 'Campus Waste Monitoring', desc: 'Dashboard for schools and colleges to track and report on waste reduction progress.' },
  { icon: '🤖', title: 'Advanced AI Classification', desc: 'Integrate large language models for more sophisticated, context-aware waste classification and guidance.' },
  { icon: '🎯', title: 'Personalized Recommendations', desc: 'Build user profiles (privacy-respecting) to deliver personalized sustainability improvement suggestions over time.' },
  { icon: '🤝', title: 'Community Challenges', desc: 'Gamified sustainability challenges to engage schools, offices, and communities in waste reduction goals.' },
];

function ProgressBar({ value, color }) {
  return (
    <div style={{ background: 'var(--gray-200)', borderRadius: 'var(--radius-full)', height: '10px', overflow: 'hidden' }}>
      <div style={{ height: '100%', width: `${value}%`, background: color, borderRadius: 'var(--radius-full)', transition: 'width 1s ease' }} />
    </div>
  );
}

export default function ImpactDashboard() {
  return (
    <div>
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <div className="eyebrow">Project Impact</div>
          <h1>📊 Impact Dashboard</h1>
          <p>Expected outcomes and potential impact of EcoSort AI across environmental, social, and economic dimensions.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">

          {/* Prototype Notice */}
          <div className="ai-prototype-banner" style={{ marginBottom: '2.5rem' }}>
            <span className="banner-icon">📊</span>
            <span>
              <strong>Prototype / Illustrative Metrics</strong> — All figures on this dashboard represent <em>expected potential impact</em> and illustrative targets for a deployed version of EcoSort AI. These are NOT measured real-world results. EcoSort AI is a prototype developed as part of the 1M1B AI for Sustainability Virtual Internship.
            </span>
          </div>

          {/* Awareness Metrics */}
          <div className="section-header">
            <h2>Awareness & Education Potential</h2>
            <p>Illustrative targets for waste awareness improvement through EcoSort AI education tools</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
            {AWARENESS_METRICS.map((metric, i) => (
              <div key={i} className="card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    <span style={{ fontSize: '1.4rem' }}>{metric.icon}</span>
                    <span style={{ fontWeight: '700', color: 'var(--gray-800)' }}>{metric.label}</span>
                  </div>
                  <span style={{ fontWeight: '800', fontSize: '1.4rem', color: metric.color }}>{metric.value}%</span>
                </div>
                <ProgressBar value={metric.value} color={metric.color} />
                <p style={{ fontSize: '0.8rem', color: 'var(--gray-400)', marginTop: '0.4rem' }}>{metric.note}</p>
              </div>
            ))}
          </div>

          {/* Impact Areas */}
          <div className="section-header">
            <h2>Expected Impact Areas</h2>
            <p>Potential positive outcomes across environmental, social, and economic dimensions</p>
          </div>
          <div className="grid-3" style={{ marginBottom: '3rem' }}>
            {IMPACT_AREAS.map((area, i) => (
              <div key={i} className="card" style={{ background: area.bg, border: `2px solid ${area.border}` }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{area.icon}</div>
                <h3 style={{ color: area.color, marginBottom: '1rem' }}>{area.title}</h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {area.items.map((item, j) => (
                    <li key={j} style={{ fontSize: '0.87rem', color: 'var(--gray-700)', display: 'flex', gap: '0.5rem', lineHeight: '1.5' }}>
                      <span style={{ color: area.color, flexShrink: 0, fontWeight: '700' }}>→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* SDG Impact */}
          <div style={{ background: 'var(--green-800)', borderRadius: 'var(--radius-lg)', padding: '2.5rem', marginBottom: '3rem' }}>
            <h2 style={{ color: 'var(--white)', marginBottom: '1.5rem', textAlign: 'center' }}>SDG Contribution Framework</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
              {[
                { sdg: 'SDG 12', title: 'Responsible Consumption & Production', primary: true, contributions: ['Waste classification guidance', 'Recycling education', 'Reuse promotion', 'Responsible disposal guidance', 'Conscious consumption messaging'] },
                { sdg: 'SDG 11', title: 'Sustainable Cities & Communities', contributions: ['Community waste literacy', 'Urban sustainability guidance', 'Institutional waste programs', 'Accessible sustainability tools'] },
                { sdg: 'SDG 13', title: 'Climate Action', contributions: ['Organic waste composting (methane reduction)', 'Recycling (energy savings)', 'Reduce consumption (carbon footprint)', 'Hazardous waste safe disposal'] },
              ].map((item, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.08)', border: item.primary ? '2px solid #86efac' : '1px solid rgba(255,255,255,0.2)', borderRadius: 'var(--radius-md)', padding: '1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                    <span style={{ background: item.primary ? '#86efac' : 'var(--teal-500)', color: item.primary ? 'var(--green-800)' : 'var(--white)', fontWeight: '800', fontSize: '0.78rem', padding: '0.2rem 0.6rem', borderRadius: 'var(--radius-full)' }}>{item.sdg}{item.primary ? ' ★' : ''}</span>
                  </div>
                  <h4 style={{ color: 'var(--white)', fontSize: '0.9rem', marginBottom: '0.75rem' }}>{item.title}</h4>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                    {item.contributions.map((c, j) => (
                      <li key={j} style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.82rem', display: 'flex', gap: '0.4rem' }}>
                        <span style={{ color: '#86efac', flexShrink: 0 }}>✓</span>{c}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Future Scope */}
          <div>
            <div className="section-header">
              <h2>🚀 Future Scope</h2>
              <p>Realistic planned enhancements — these are not current features but genuine future possibilities</p>
            </div>
            <div className="grid-4">
              {FUTURE_SCOPE.map((item, i) => (
                <div key={i} className="card card-hover">
                  <div style={{ fontSize: '1.8rem', marginBottom: '0.75rem' }}>{item.icon}</div>
                  <h4 style={{ fontSize: '0.9rem', marginBottom: '0.4rem', color: 'var(--gray-800)' }}>{item.title}</h4>
                  <p style={{ fontSize: '0.83rem', color: 'var(--gray-500)' }}>{item.desc}</p>
                  <span className="badge badge-gray" style={{ marginTop: '0.75rem', fontSize: '0.7rem' }}>Future Scope</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
