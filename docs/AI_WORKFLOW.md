# EcoSort AI — AI Workflow Documentation

## Overview

This document describes how AI is used in EcoSort AI — what inputs are processed, how the classification works, and what outputs are generated.

**Current implementation:** AI Prototype / Demonstration Mode using a structured knowledge base.
**Future enhancement path:** Compatible with integration of large language models (e.g., IBM Granite, open-source models) without architectural changes.

---

## Where AI is Used

### 1. Waste Checker (Primary AI Feature)
**Location:** `/waste-checker` page
**Function:** Classifies user-entered waste items and generates disposal guidance

### 2. AI Sustainability Assistant (Conversational AI)
**Location:** `/ai-assistant` page
**Function:** Answers open-ended sustainability and waste management questions

---

## Waste Checker — AI Pipeline

### Input
- **Format:** Free text (natural language)
- **Examples:** "plastic water bottle", "banana peel", "old mobile phone"
- **Constraints:** Any reasonable item name (up to 200 characters)

### Processing — Step 1: Input Normalization
```
rawInput → toLowerCase() → trim() → normalizedQuery
```

### Processing — Step 2: Direct Database Match
```
normalizedQuery → check against WASTE_DATABASE keys
→ If match found: return specific item data
→ If no match: proceed to Step 3
```

**Direct match examples:**
- "plastic bottle" → Plastic Water Bottle entry
- "banana peel" → Banana Peel entry
- "battery" → Battery (Household) entry

### Processing — Step 3: Fuzzy Keyword Classification
```
normalizedQuery → scan against KEYWORD_MAP
→ Keywords organized by 8 waste categories
→ If keyword found: return category-level default with user's item name
→ If no keywords match: return "Unknown" state
```

**Fuzzy match examples:**
- "plastic cup" → matches keyword "plastic" → Plastic category default
- "coffee grounds" → matches keyword "coffee grounds" → Organic category default
- "old tablet" → matches keyword "tablet" → E-waste category default

### Classification Output Structure

```json
{
  "name": "Item name (user input)",
  "category": "Waste category name",
  "categoryKey": "category identifier",
  "icon": "Visual emoji identifier",
  "action": "Recommended disposal action",
  "actionColor": "Color coding for action type",
  "recyclability": "Recyclability assessment",
  "suggestedAction": "Specific disposal instructions",
  "sustainabilityTip": "Practical sustainability advice",
  "environmentalNote": "Environmental impact context",
  "sdg": "Relevant SDG connection",
  "caution": "Important safety/local variation note (if applicable)",
  "matched": "Boolean — was item recognized?",
  "fuzzy": "Boolean — was fuzzy matching used?"
}
```

---

## AI Sustainability Assistant — Workflow

### Input
- **Format:** Free text question or statement
- **Examples:** "Can I recycle this plastic bottle?", "How do I dispose of batteries?"

### Processing
```
userMessage → toLowerCase() → scan RESPONSE_DATABASE keywords
→ If keyword match: return matched response entry
→ If no match: return DEFAULT_RESPONSE
```

### Response topics covered
- Recycling guidance (general)
- Battery and hazardous waste disposal
- Food waste and composting
- Institutional/college waste reduction
- Plastic reduction strategies
- Recyclable vs. biodegradable vs. compostable explanation
- Sustainable daily habits
- E-waste handling
- SDG 12 and sustainability framework

### Response Format
Responses use lightweight markdown:
- `**bold**` for emphasis
- `- bullets` for lists
- Emoji indicators for visual scanning

---

## Example Prompt Workflow

### System Role
```
You are a sustainability assistant specializing in responsible waste management.
Your role is to:
1. Classify waste items into the correct category
2. Provide safe, responsible disposal recommendations
3. Offer practical sustainability tips
4. Clearly state when local rules may vary
5. Never provide unsafe instructions for hazardous materials
```

### User Input
```
"I have an empty plastic water bottle. What should I do with it?"
```

### Expected Output Structure

| Field | Value |
|-------|-------|
| Waste Category | Plastic Waste |
| Recommended Action | Recycle |
| Recyclability | Potentially recyclable depending on local facilities |
| Disposal Guidance | Rinse, remove cap, flatten, place in plastic recycling |
| Sustainability Tip | Switch to a reusable bottle |
| Environmental Note | Plastic takes up to 450 years to decompose |
| Caution | Recycling rules for plastics vary by municipality |

---

## Waste Categories Handled

| Category | Key | Action Type |
|----------|-----|-------------|
| Organic Waste | organic | Compost |
| Paper Waste | paper | Recycle |
| Plastic Waste | plastic | Recycle (check type) |
| Glass Waste | glass | Recycle |
| Metal Waste | metal | Recycle |
| E-Waste | ewaste | Special Disposal |
| Hazardous/Special Waste | hazardous | Special Disposal |
| General Waste | general | General Bin |

---

## Responsible AI in the Pipeline

- **Uncertainty handling:** Items not recognized return explicit "not found" state — no false confidence
- **Hazardous materials:** Always escalate to "use authorized channels" — no unsafe DIY instructions
- **Local variation:** Caution notes included for plastics, glass types, and location-dependent rules
- **Transparency:** All AI features labeled "AI Prototype / Demonstration Mode"
- **No fabrication:** Classification results are based on curated knowledge, not invented statistics

---

## Future AI Enhancement Path

The current architecture is designed to be compatible with LLM integration:

1. Replace `classifyWaste()` with an API call to a language model
2. Replace `getAIResponse()` with streaming LLM response
3. The UI components (Waste Checker, AI Assistant) require no changes
4. Add appropriate API key management and rate limiting

Suitable future models: IBM Granite, open-source models (Llama, Mistral), or any sustainability-tuned LLM.

---

*This document was prepared as part of the 1M1B AI for Sustainability Virtual Internship 2024.*
