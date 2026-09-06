import React, { useState, useRef, useEffect } from 'react';
import { getAIResponse, SUGGESTED_QUESTIONS } from '../data/aiResponses';

function parseMarkdown(text) {
  // Very lightweight markdown: **bold**, bullet lists, line breaks
  let html = text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    .replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>')
    .replace(/\n{2,}/g, '<br/><br/>')
    .replace(/\n/g, '<br/>');
  return html;
}

function Message({ msg }) {
  const isUser = msg.role === 'user';
  return (
    <div style={{
      display: 'flex',
      justifyContent: isUser ? 'flex-end' : 'flex-start',
      marginBottom: '1rem',
      alignItems: 'flex-end',
      gap: '0.6rem',
    }}>
      {!isUser && (
        <div style={{ width: '32px', height: '32px', background: 'var(--green-600)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', flexShrink: 0 }}>
          🌿
        </div>
      )}
      <div style={{
        maxWidth: '75%',
        padding: '0.75rem 1rem',
        borderRadius: isUser ? '18px 18px 4px 18px' : '4px 18px 18px 18px',
        background: isUser ? 'var(--green-600)' : 'var(--white)',
        color: isUser ? 'var(--white)' : 'var(--gray-800)',
        border: isUser ? 'none' : '1px solid var(--gray-200)',
        fontSize: '0.92rem',
        lineHeight: '1.6',
        boxShadow: 'var(--shadow-sm)',
      }}>
        {isUser ? (
          <span>{msg.content}</span>
        ) : (
          <span dangerouslySetInnerHTML={{ __html: parseMarkdown(msg.content) }} />
        )}
      </div>
      {isUser && (
        <div style={{ width: '32px', height: '32px', background: 'var(--gray-200)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', flexShrink: 0 }}>
          👤
        </div>
      )}
    </div>
  );
}

const WELCOME_MESSAGE = {
  role: 'assistant',
  content: `Hello! 👋 I'm the **EcoSort AI Sustainability Assistant**.

I can help you with:
- Waste classification and disposal guidance
- Recycling and composting advice
- Sustainable habits and tips
- SDG 12 – Responsible Consumption information
- How to reduce your environmental footprint

Ask me anything about sustainability and waste management! You can also use the suggested questions below to get started.

⚠️ *This assistant operates in **AI Prototype / Demonstration Mode**. Responses are based on a curated knowledge base. Always verify specific disposal rules with your local municipality.*`,
};

export default function AIAssistant() {
  const [messages, setMessages] = useState([WELCOME_MESSAGE]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const sendMessage = (text) => {
    const trimmed = (text || input).trim();
    if (!trimmed || loading) return;

    const userMsg = { role: 'user', content: trimmed };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    // Simulate AI processing delay
    setTimeout(() => {
      const responseObj = getAIResponse(trimmed);
      const assistantMsg = { role: 'assistant', content: responseObj.response };
      setMessages(prev => [...prev, assistantMsg]);
      setLoading(false);
    }, 800);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const clearChat = () => {
    setMessages([WELCOME_MESSAGE]);
    setInput('');
  };

  return (
    <div>
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <div className="eyebrow">Conversational AI</div>
          <h1>🤖 Sustainability Assistant</h1>
          <p>Ask questions about waste management, recycling, sustainability habits, and responsible consumption.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem', alignItems: 'start' }}>

            {/* Chat Interface */}
            <div>
              {/* AI Prototype Banner */}
              <div className="ai-prototype-banner" style={{ marginBottom: '1rem' }}>
                <span className="banner-icon">🤖</span>
                <span><strong>AI Prototype / Demonstration Mode</strong> — This assistant uses a curated knowledge base to simulate AI responses. No external AI API is connected. Response content is pre-designed for demonstration purposes.</span>
              </div>

              {/* Chat window */}
              <div style={{
                background: 'var(--gray-50)',
                border: '1px solid var(--gray-200)',
                borderRadius: 'var(--radius-lg)',
                height: '460px',
                overflowY: 'auto',
                padding: '1.25rem',
                display: 'flex',
                flexDirection: 'column',
              }}>
                {messages.map((msg, i) => (
                  <Message key={i} msg={msg} />
                ))}

                {loading && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
                    <div style={{ width: '32px', height: '32px', background: 'var(--green-600)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', flexShrink: 0 }}>🌿</div>
                    <div style={{ background: 'var(--white)', border: '1px solid var(--gray-200)', borderRadius: '4px 18px 18px 18px', padding: '0.75rem 1rem', display: 'flex', gap: '5px', alignItems: 'center' }}>
                      {[0,1,2].map(i => (
                        <span key={i} style={{ width: '7px', height: '7px', background: 'var(--green-500)', borderRadius: '50%', display: 'inline-block', animation: `bounce 1.2s ease-in-out ${i * 0.2}s infinite` }} />
                      ))}
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input area */}
              <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.75rem' }}>
                <textarea
                  className="input"
                  placeholder="Ask about recycling, composting, sustainable habits..."
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  rows={2}
                  style={{ resize: 'none' }}
                  aria-label="Ask a sustainability question"
                />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <button
                    className="btn btn-primary"
                    onClick={() => sendMessage()}
                    disabled={loading || !input.trim()}
                    style={{ flexShrink: 0 }}
                  >
                    {loading ? <span className="spinner" style={{ width: '16px', height: '16px', borderWidth: '2px' }} /> : '↑ Send'}
                  </button>
                  <button className="btn btn-ghost btn-sm" onClick={clearChat}>Clear</button>
                </div>
              </div>
              <p style={{ fontSize: '0.77rem', color: 'var(--gray-400)', marginTop: '0.4rem' }}>Press Enter to send · Shift+Enter for new line</p>
            </div>

            {/* Sidebar */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div className="card">
                <h4 style={{ marginBottom: '0.75rem', fontSize: '0.9rem', fontWeight: '700', color: 'var(--gray-700)' }}>💬 Suggested Questions</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  {SUGGESTED_QUESTIONS.map((q, i) => (
                    <button
                      key={i}
                      onClick={() => sendMessage(q)}
                      disabled={loading}
                      style={{
                        background: 'var(--green-50)',
                        border: '1px solid var(--green-200)',
                        borderRadius: 'var(--radius)',
                        padding: '0.5rem 0.75rem',
                        textAlign: 'left',
                        cursor: 'pointer',
                        fontSize: '0.82rem',
                        color: 'var(--green-800)',
                        transition: 'background 0.15s',
                        fontFamily: 'var(--font-sans)',
                        lineHeight: '1.4',
                      }}
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>

              <div className="card" style={{ background: 'var(--green-50)', border: '1px solid var(--green-200)' }}>
                <div style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>🌍</div>
                <h4 style={{ fontSize: '0.9rem', color: 'var(--green-800)', marginBottom: '0.4rem' }}>About this Assistant</h4>
                <p style={{ fontSize: '0.82rem', color: 'var(--green-700)' }}>
                  This assistant covers waste segregation, recycling, composting, sustainability habits, and SDG 12.
                  Responses are thoughtfully designed for education and demonstration.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <style>{`
        @keyframes bounce {
          0%, 80%, 100% { transform: scale(0.8); opacity: 0.5; }
          40% { transform: scale(1.2); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
