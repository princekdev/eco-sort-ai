# EcoSort AI — Design Thinking Documentation

## Overview

EcoSort AI was developed using the 5-phase Design Thinking methodology:
**Empathize → Define → Ideate → Prototype → Test & Refine**

---

## Phase 1: Empathize

### Who faces the problem?

Incorrect waste disposal is a widespread challenge affecting nearly everyone:

**Students and young people** often lack practical waste management education. Schools teach about sustainability in theory but rarely provide hands-on guidance for everyday disposal decisions.

**Households** face confusing bin systems, unclear labeling, and limited local guidance on what goes where. Many people default to "when in doubt, throw it out" — putting recyclables in general waste.

**Office workers** generate significant paper, plastic, and e-waste but often have no clear guidance on correct segregation at their workplace.

**Communities in developing regions** may have limited waste infrastructure and even less access to sustainability education, making accessible digital guidance especially valuable.

**Waste management workers** receive contaminated recycling loads because of incorrect sorting upstream — increasing processing costs and reducing recycling efficiency.

### What difficulties do they experience?

- Complex, inconsistent recycling rules that vary by location
- No simple, accessible tool to answer "where does this go?"
- Confusing recycling symbols and plastic resin codes
- Lack of awareness about composting and organic waste options
- Uncertainty about hazardous waste handling (batteries, e-waste, chemicals)
- No immediate feedback mechanism when making disposal decisions

### Why does the problem continue?

- Sustainability education is not consistently embedded in school curricula
- Municipality websites are often hard to navigate and not mobile-friendly
- Waste bin labeling is inconsistent and often unclear
- There is no engaging, interactive tool that makes learning waste management easy
- People are busy — guidance needs to be instant, simple, and accessible on demand

---

## Phase 2: Define

### Problem Statement

> **"How might we use AI to help people correctly identify, segregate, and responsibly manage everyday waste so that communities can become more sustainable?"**

### Target Users

**Primary users:**
- Students (secondary school and college level) — learning sustainability
- Households — making daily waste decisions
- School and college sustainability committees

**Secondary users:**
- Office sustainability coordinators
- Community leaders and NGO workers
- Waste management awareness educators

### Current Gaps

- No simple, conversational AI tool specifically for waste classification guidance
- Existing sustainability apps are too complex or require accounts
- No tool that combines classification + disposal guidance + sustainability tip in one interaction
- No responsible AI waste tool that honestly acknowledges local variation and uncertainty
- Limited tools designed specifically for student and community education contexts

---

## Phase 3: Ideate

### Solution Ideas Considered

**Idea 1: Simple static waste guide website**
A lookup table mapping items to categories. Rejected — too rigid, doesn't handle natural language, and provides no conversational guidance.

**Idea 2: Image recognition waste classifier**
Users photograph waste for AI classification. Excellent future idea but requires camera access, ML model training data, and significant infrastructure — not suitable for a prototype.

**Idea 3: Municipal-linked waste rulebook**
Connect to local authority APIs for location-specific rules. Excellent future enhancement but requires ongoing maintenance and API access.

**Idea 4 (Selected): EcoSort AI — AI-powered waste checker + conversational assistant**
A web application combining:
- Natural language waste checker with AI classification
- Conversational sustainability assistant for open questions
- Educational waste categories section
- Practical sustainability tips
- Responsible AI design throughout

### Why EcoSort AI Was Selected

- Achievable as a prototype with no paid APIs or external infrastructure
- Broad coverage — handles both specific item questions and general sustainability queries
- Educational value — supports students and communities, not just individuals
- Responsible AI design is achievable from the start
- Directly addresses SDG 12 through behavior change guidance
- IBM BOB was used throughout ideation and development — demonstrating the human+AI collaboration model aligned with 1M1B principles

---

## Phase 4: Prototype

### Core Prototype Features

**Waste Checker:**
Natural language input → AI classification → waste category, recommended action, recyclability, disposal guidance, sustainability tip, and environmental note. Supports 10 specific items in detail plus category-level matching for hundreds of item types.

**AI Sustainability Assistant:**
Conversational interface where users ask open questions about waste, recycling, composting, and sustainability. Suggested questions make it easy to explore during demos.

**AI Workflow Visualization:**
Step-by-step diagram (Input → Understanding → Classification → Recommendation → Guidance) with interactive prompt lab.

**Waste Categories Education:**
Eight waste categories with examples, handling guidance, reuse/recycle information, and sustainability tips.

**Sustainability Tips:**
Organized by the 5 R's hierarchy (Refuse, Reduce, Reuse, Recycle, Rot) with actionable tips.

**Impact Dashboard:**
Illustrative metrics and expected impact — clearly labeled as prototype targets.

**Responsible AI Section:**
Dedicated section covering fairness, transparency, ethics, privacy, and limitations.

**Design Thinking Documentation:**
This document — accessible within the application.

### Technology Choices

- React — component-based UI, responsive
- React Router — multi-page navigation without backend
- Vanilla CSS — clean, maintainable, no framework overhead
- Local data structures — no database, no API keys, fully offline capable
- IBM BOB — used for project ideation, code assistance, and documentation

---

## Phase 5: Test & Refine

### Key Improvements Made During Development

**Classification accuracy:**
- Added fuzzy keyword matching to handle natural language variations
- Expanded waste database to cover 10 most common everyday waste items in detail
- Added category-level defaults so any item with known keywords gets a useful response

**Responsible uncertainty handling:**
- Added "Item Not Recognized" state for unknown items — no false confidence
- Added caution notes for items where local rules vary significantly
- Hazardous and e-waste results include strong disposal warnings

**Accessibility improvements:**
- Clear keyboard navigation (Enter to submit)
- High contrast text and clearly labeled form elements
- Mobile-responsive layout across all pages

**Recommendation quality:**
- Sustainability tips made specific and actionable rather than generic
- Environmental notes provide context for why correct disposal matters
- SDG 12 connection made explicit in multiple places

**Responsible AI improvements:**
- "AI Prototype / Demonstration Mode" clearly labeled on all AI features
- No false claims about model accuracy or real-world deployment
- Local variation acknowledged in all relevant classifications

### Planned Next Improvements

- Expand waste database to cover more specific items
- Add image upload feature for visual waste recognition (future scope)
- Add location-specific disposal guidance via API integration
- Conduct user testing with actual students to validate classification accuracy
- Add multilingual support starting with languages relevant to 1M1B communities
