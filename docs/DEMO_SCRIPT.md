# EcoSort AI — Demo Script

## Overview

**Duration:** 3–5 minutes
**Audience:** 1M1B AI for Sustainability Virtual Internship evaluator
**Format:** Live walkthrough of the running application

---

## Pre-Demo Checklist

- [ ] Application is running (`npm start` in the `eco-sort-ai` folder)
- [ ] Browser is open at `http://localhost:3000`
- [ ] Screen is at a comfortable zoom level (100–110%)
- [ ] Browser window is full-screen or maximized

---

## Step 1: Open EcoSort AI (30 seconds)

**Action:** Open `http://localhost:3000` — the Home page loads.

**Say:**
> "This is EcoSort AI — an AI-powered waste segregation and sustainability assistant built for the 1M1B AI for Sustainability internship."

> "The tagline is: _Understand Waste. Sort Smarter. Build a Sustainable Future._"

**Point to:**
- The hero section with the tagline
- The two primary CTAs: "Check Your Waste" and "Ask Sustainability AI"

---

## Step 2: Explain the Sustainability Problem (30 seconds)

**Action:** Scroll down to the "The Problem" section on the Home page.

**Say:**
> "The core problem is that most people don't know how to correctly sort their everyday waste. They don't know which bin it goes in, whether it's recyclable, or how to handle special items like batteries and old phones."

> "This leads to recyclable materials going to landfill, organic waste generating greenhouse gas, and hazardous materials being handled unsafely."

**Point to:**
- The 4 problem cards (Incorrect segregation, Lack of knowledge, Organic waste, Recyclability confusion)

---

## Step 3: Show SDG 12 Alignment (20 seconds)

**Action:** Scroll up slightly to show the SDG banner under the hero.

**Say:**
> "EcoSort AI is primarily aligned with **SDG 12 — Responsible Consumption and Production**. It also supports SDG 11 (Sustainable Cities) and SDG 13 (Climate Action)."

**Point to:**
- The SDG banner showing all three SDGs
- The SDG 12 badge on the hero section

---

## Step 4: Waste Checker — Plastic Bottle (45 seconds)

**Action:** Click "Check Your Waste" button — navigate to the Waste Checker page.

**Say:**
> "Let me show the Waste Checker. I'll type a common waste item."

**Action:** Type "Plastic water bottle" in the input field and click Check (or press Enter).

**Say:**
> "The AI classifies it as Plastic Waste, recommends Recycling, shows recyclability information, and gives a specific disposal instruction."

> "It also gives a sustainability tip — switch to a reusable bottle — and an environmental note about microplastics."

> "Notice the caution at the bottom — recycling rules vary by municipality. The system is transparent about local variation."

**Point to:**
- Waste Category badge
- Recommended Action
- Sustainability Tip
- Caution note

---

## Step 5: Waste Checker — Banana Peel (30 seconds)

**Action:** Click the "Banana peel" quick example chip.

**Say:**
> "Now let me try organic waste. Banana peel."

> "The system correctly identifies this as Organic Waste and recommends Composting. It explains that composting converts waste into valuable fertilizer and notes that organic waste in landfill generates methane — a potent greenhouse gas."

**Point to:**
- Organic Waste category
- Compost action
- Environmental note about methane

---

## Step 6: AI Sustainability Assistant (45 seconds)

**Action:** Navigate to the AI Assistant page via the navbar.

**Say:**
> "Now let me show the AI Sustainability Assistant. Users can ask open-ended sustainability questions."

**Action:** Type in the chat: "How can my college reduce plastic waste?"

**Say:**
> "The assistant provides a structured, practical response — immediate steps, awareness campaigns, and procurement changes."

> "Notice the prototype banner at the top — the system is transparent that this is a demonstration mode, not a live AI model. This is part of our responsible AI design."

**Point to:**
- The response
- The "AI Prototype / Demonstration Mode" banner

---

## Step 7: AI Workflow (30 seconds)

**Action:** Navigate to the AI Workflow page via the navbar.

**Say:**
> "Here's the AI Workflow — the pipeline from user input to sustainability guidance."

**Action:** Click through the 5 steps: Input → AI Understanding → Waste Classification → Recommendation → Sustainability Guidance.

**Say:**
> "Each step can be clicked to see details. We also have a Prompt Lab showing an example AI prompt structure — demonstrating how this prototype could be enhanced with a real language model in future."

**Point to:**
- The 5-step flow diagram
- The Prompt Lab section

---

## Step 8: Responsible AI (30 seconds)

**Action:** Navigate to the Responsible AI page via the navbar.

**Say:**
> "Responsible AI is a core part of this project, not an afterthought. We address five principles: Fairness, Transparency, Ethics, Privacy, and Limitations."

**Action:** Click "Ethics" tab.

**Say:**
> "For example — the system never provides unsafe guidance for hazardous materials. It always escalates to authorized disposal channels. And no personal data is collected — no login required."

---

## Step 9: Expected Impact (20 seconds)

**Action:** Navigate to the Impact page via the navbar.

**Say:**
> "The Impact Dashboard shows expected potential outcomes — all clearly labeled as illustrative targets, not real-world results. This is a prototype."

> "We project improvements in waste segregation awareness, recycling knowledge, and sustainable behavior intent — all supporting SDG 12."

**Point to:**
- The "Prototype / Illustrative Metrics" notice
- The awareness metrics bars
- The SDG contribution framework

---

## Step 10: IBM BOB Contribution (20 seconds)

**Action:** Open the `docs/IBM_BOB_USAGE.md` file in a text editor OR navigate to the Responsible AI page which mentions IBM BOB.

**Say:**
> "IBM BOB was used throughout this project — for ideation, code development, content writing, and documentation. The `docs/IBM_BOB_USAGE.md` file documents each contribution area with placeholders for screenshots from our IBM BOB sessions."

> "This demonstrates the human + AI collaboration model that the 1M1B program encourages."

---

## Closing Statement

**Say:**
> "EcoSort AI addresses a real sustainability problem — waste literacy — using an accessible AI prototype. It's aligned with SDG 12, built responsibly, and demonstrates a clear path from problem to AI solution to potential real-world impact."

> "Thank you."

---

## Backup Questions & Answers

**Q: Is this connected to a real AI model?**
> A: "Currently it operates in demonstration/prototype mode using a curated knowledge base. The architecture is designed to connect to a language model in future without UI changes."

**Q: Why not use IBM Watson or watsonx?**
> A: "The 1M1B guidelines required no mandatory external credentials or paid APIs. IBM BOB was the IBM-specific requirement, which was meaningfully incorporated throughout development."

**Q: How does the classification work?**
> A: "The system uses direct item matching plus fuzzy keyword matching — so 'old phone' maps to e-waste through keyword recognition. Unknown items return an explicit 'not recognized' state rather than a false result."

**Q: What would be the next step?**
> A: "Image-based waste recognition via computer vision, location-specific municipal disposal rule integration, and multilingual support are the top three future scope items."
