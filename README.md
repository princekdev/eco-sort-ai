# 🌿 EcoSort AI

## AI-Powered Waste Segregation & Sustainability Assistant

> _"Understand Waste. Sort Smarter. Build a Sustainable Future."_

**1M1B AI for Sustainability Virtual Internship 2024**

---

## About

EcoSort AI is a web-based AI prototype that helps students, households, schools, and communities correctly identify, segregate, and responsibly manage everyday waste. The project was developed as part of the **1M1B (1 Million 1 Billion) AI for Sustainability Virtual Internship** using **IBM BOB** as the primary development and ideation AI tool.

---

## Problem

Most people don't know:
- Which waste category an item belongs to
- Whether an item is recyclable, compostable, or needs special disposal
- How different types of waste should be handled
- Why correct waste segregation matters

This leads to incorrect waste segregation, reduced recycling efficiency, increased landfill waste, and unnecessary environmental pollution — all from a problem that is largely solvable with the right accessible information.

---

## SDG Alignment

| SDG | Role | How EcoSort AI Contributes |
|-----|------|---------------------------|
| **SDG 12** — Responsible Consumption & Production | **Primary** | Waste classification, recycling education, reuse promotion, responsible disposal |
| **SDG 11** — Sustainable Cities & Communities | Supporting | Accessible waste guidance for urban communities and institutions |
| **SDG 13** — Climate Action | Supporting | Composting reduces methane; recycling saves energy; hazardous waste guidance prevents contamination |

---

## AI Usage

EcoSort AI uses AI in two key features:

### 1. Waste Checker
- **Input:** Natural language waste item name
- **Processing:** Keyword extraction → Direct match → Fuzzy category matching
- **Output:** Waste category, recommended action, recyclability, disposal guidance, sustainability tip
- **Error handling:** "Item Not Recognized" for unknown items — no false confidence

### 2. AI Sustainability Assistant
- **Input:** Free-text sustainability question
- **Processing:** Keyword matching against curated response database
- **Output:** Structured guidance with markdown formatting
- **Scope:** Recycling, composting, hazardous waste, sustainable habits, SDGs, e-waste

> **Note:** EcoSort AI operates in **AI Prototype / Demonstration Mode**. The AI uses a curated local knowledge base. No external AI API or cloud service is required.

---

## Features

| Feature | Description |
|---------|-------------|
| 🔍 **Waste Checker** | Enter any waste item for AI classification and disposal guidance |
| 🤖 **AI Assistant** | Ask sustainability questions in natural language |
| ⚙️ **AI Workflow** | See how the AI pipeline works, with prompt examples |
| 📚 **Waste Categories** | Educational guide to all 8 waste categories |
| 💡 **Sustainability Tips** | Actionable tips organized by the 5 R's |
| 📊 **Impact Dashboard** | Expected impact metrics and SDG contribution framework |
| 🧠 **Design Thinking** | Full 5-phase design thinking documentation |
| 🛡️ **Responsible AI** | Fairness, transparency, ethics, privacy, and limitations |

---

## Responsible AI

EcoSort AI was designed with responsible AI principles at its core:

- **Fairness** — Equal guidance for all users, no demographic assumptions
- **Transparency** — "AI Prototype / Demonstration Mode" clearly labeled on all AI features
- **Ethics** — Never unsafe guidance; hazardous items always directed to authorized channels
- **Privacy** — No data collection, no login required, no tracking
- **Limitations** — Explicit uncertainty acknowledgment; local variation clearly noted

---

## IBM BOB

IBM BOB was meaningfully incorporated throughout the development of EcoSort AI:

- **Ideation** — Problem framing, SDG alignment, solution selection
- **Architecture** — Project structure, data model design, AI workflow design
- **Development** — Code generation, component implementation, logic refinement
- **Content** — Waste category data, AI responses, documentation writing
- **Responsible AI** — Reviewing for safety, transparency, and ethical design

See [`docs/IBM_BOB_USAGE.md`](docs/IBM_BOB_USAGE.md) for detailed contribution documentation with screenshot placeholders.

---

## Run Locally

### Prerequisites
- **Node.js** version 16 or later
- **npm** (comes with Node.js)

### Installation

```bash
# Navigate to the project folder
cd eco-sort-ai

# Install dependencies
npm install

# Start the development server
npm start
```

The application will open at **http://localhost:3000**

### Build for production

```bash
npm run build
```

---

## Project Structure

```
eco-sort-ai/
│
├── public/
│   └── index.html              # HTML entry point
│
├── src/
│   ├── components/
│   │   ├── Navbar.js           # Navigation with mobile menu
│   │   └── Footer.js           # Footer with links and SDG badges
│   │
│   ├── data/
│   │   ├── wasteData.js        # Waste database + classifyWaste() function
│   │   ├── aiResponses.js      # AI assistant responses + getAIResponse()
│   │   └── categoriesData.js   # Waste categories + sustainability tips
│   │
│   ├── pages/
│   │   ├── Home.js             # Landing page
│   │   ├── WasteChecker.js     # Waste classification tool
│   │   ├── AIAssistant.js      # Conversational AI interface
│   │   ├── AIWorkflow.js       # AI pipeline documentation
│   │   ├── WasteCategories.js  # Educational categories section
│   │   ├── SustainabilityTips.js # 5 R's tips
│   │   ├── ImpactDashboard.js  # Expected impact + future scope
│   │   ├── DesignThinking.js   # 5-phase design thinking docs
│   │   └── ResponsibleAI.js    # Responsible AI principles
│   │
│   ├── App.js                  # Router + layout
│   ├── App.css                 # Application styles
│   ├── index.js                # React entry point
│   └── index.css               # Global styles + CSS variables
│
├── docs/
│   ├── PROJECT_DESCRIPTION.md  # Project overview and context
│   ├── DESIGN_THINKING.md      # Full design thinking documentation
│   ├── RESPONSIBLE_AI.md       # Responsible AI documentation
│   ├── AI_WORKFLOW.md          # AI pipeline and prompt documentation
│   ├── IBM_BOB_USAGE.md        # IBM BOB contribution documentation
│   └── DEMO_SCRIPT.md          # 3–5 minute evaluation demo script
│
├── package.json
└── README.md
```

---

## Future Scope

| Enhancement | Description |
|-------------|-------------|
| 📷 Image Recognition | Photograph waste items for visual AI classification |
| 🗺️ Local Municipal Integration | Location-specific disposal rules from authority APIs |
| 🌐 Multilingual Support | Extend to multiple languages for wider community reach |
| 📊 Community Analytics | Aggregate anonymized usage for community waste insights |
| 🏫 Campus Monitoring | Dashboard for school and college waste tracking |
| 🤖 LLM Integration | Connect to IBM Granite or open-source LLMs for richer responses |
| 🎯 Personalized Recommendations | Privacy-respecting user profiles for tailored sustainability guidance |
| 🤝 Community Challenges | Gamified sustainability challenges for schools and offices |

---

## Disclaimer

EcoSort AI is a **prototype** developed for educational purposes as part of the 1M1B AI for Sustainability Virtual Internship. 

- All impact metrics are **illustrative targets**, not measured real-world results
- Waste disposal guidance is based on general best practices — **always verify with your local municipality** for specific rules
- The AI operates in **demonstration mode** — no live AI model is connected in this prototype version

---

*Built with ❤️ and 🤖 IBM BOB — 1M1B AI for Sustainability Virtual Internship 2024*
