// ============================================================
// EcoSort AI — AI Assistant Response Data
// ============================================================

const RESPONSE_DATABASE = [
  // --- Recycling questions ---
  {
    keywords: ['recycle', 'recycling', 'recyclable', 'recycle plastic bottle', 'can i recycle'],
    response: `**Recycling guidance** depends on the specific material and your local facilities, but here are key principles:

- **Plastic bottles**: Most PET (#1) and HDPE (#2) bottles are widely recyclable. Check the resin code on the base. Always rinse before recycling.
- **Paper & cardboard**: Highly recyclable when clean and dry. Wet or food-contaminated paper should go in general or organic waste.
- **Glass**: 100% recyclable and infinitely recyclable without quality loss. Use glass recycling banks.
- **Metals**: Aluminium and steel cans are among the most recyclable materials. Rinse and recycle.

📌 **Important**: Recycling rules vary by location. Always check your local municipality's guidelines for accepted materials.`,
    category: 'recycling',
  },
  {
    keywords: ['battery', 'batteries', 'dispose battery', 'old battery'],
    response: `**Batteries** are classified as **hazardous waste** and must NEVER be placed in household bins.

**Why?** Batteries contain heavy metals including mercury, cadmium, and lead that can leach into soil and groundwater if improperly disposed.

**What to do:**
- Take to a designated battery collection point (many supermarkets and electronics stores have these)
- Use municipal hazardous waste collection services
- Check if the retailer where you bought them offers take-back

**Better yet — reduce battery use:**
- Switch to **rechargeable batteries** (a single rechargeable can replace 500–1000 disposables over its lifetime)
- Look for devices with built-in rechargeable batteries

📌 Lithium batteries require special care — never crush, puncture, or place near heat.`,
    category: 'hazardous',
  },
  {
    keywords: ['food waste', 'food scrap', 'leftovers', 'organic', 'compost', 'composting'],
    response: `**Food waste** is best handled through **composting** — converting it into valuable soil amendment rather than landfill waste.

**What can be composted (home compost)?**
- Fruit and vegetable scraps and peels
- Coffee grounds and tea bags (remove staples)
- Eggshells
- Garden waste (leaves, grass clippings)

**What to avoid in open compost piles:**
- Meat, fish, or dairy (attract pests)
- Cooked food with oils/sauces
- Diseased plant material

**Options:**
1. **Home composting**: Set up a compost bin in your garden
2. **Municipal organic collection**: Many cities collect food waste separately
3. **Bokashi composting**: A fermentation method that handles all food types including meat

🌱 **Impact**: Composting diverts waste from landfill and reduces methane emissions — a greenhouse gas 25× more potent than CO₂.`,
    category: 'organic',
  },
  {
    keywords: ['college reduce', 'college waste', 'campus waste', 'school reduce', 'reduce plastic', 'office reduce', 'workplace'],
    response: `**Reducing plastic and waste at your college/school/office** — here's a practical action plan:

**Immediate steps:**
- Set up clearly labeled segregation bins (organic, paper, plastic, general)
- Replace single-use plastic cups/cutlery in canteens with reusable alternatives
- Install refill water stations to eliminate plastic water bottles
- Introduce a composting system for food waste

**Awareness and education:**
- Organize a waste audit to understand your current waste profile
- Run sustainability workshops and campaigns
- Create a student/staff sustainability committee
- Display visual infographics near waste bins to guide correct sorting

**Procurement changes:**
- Switch to recycled/sustainable stationery
- Reduce paper printing with digital alternatives
- Buy in bulk to reduce packaging waste

**Track progress:**
- Monitor waste volumes monthly
- Set reduction targets
- Share progress updates to keep the community engaged

📌 Every institution has unique challenges — start with a waste audit to identify your biggest impact opportunities.`,
    category: 'institution',
  },
  {
    keywords: ['plastic', 'reduce plastic', 'single use', 'less plastic'],
    response: `**Reducing plastic usage** — actionable steps for everyday life:

**At home:**
- Replace plastic bags with reusable cloth or jute bags
- Use a reusable water bottle and coffee cup
- Choose bar soap over liquid soap in plastic bottles
- Buy fresh produce without plastic packaging when possible
- Store food in glass jars or stainless steel containers

**Shopping smarter:**
- Buy in bulk to reduce packaging
- Choose products with minimal or recyclable packaging
- Support businesses with sustainable packaging practices
- Avoid single-use plastic cutlery and straws

**In the bathroom:**
- Switch to bamboo toothbrushes
- Use shampoo and conditioner bars
- Choose refillable products

💡 **Key principle**: The most sustainable option is to **not generate the waste in the first place**. Reduction beats recycling every time.`,
    category: 'plastic',
  },
  {
    keywords: ['difference', 'recyclable vs', 'biodegradable', 'compostable', 'what is the difference'],
    response: `Here's a clear explanation of key sustainability terms:

**Recyclable** 🔄
Material that can be collected, processed, and converted into new products. Examples: glass bottles, aluminium cans, most cardboard. Requires industrial recycling facilities.

**Biodegradable** 🌱
Material that can be broken down by microorganisms into natural substances. Most organic matter is biodegradable. Note: "biodegradable" doesn't mean it should go to landfill — landfill conditions are often unsuitable for proper biodegradation.

**Compostable** 🌿
A specific type of biodegradable material that breaks down into nutrient-rich compost under specific conditions (heat, moisture, microbes). All compostable items are biodegradable, but not all biodegradable items are compostable.

**Key distinctions:**
- Recyclable → industrial processing → new product
- Compostable → biological breakdown → soil amendment
- Biodegradable → eventually breaks down, but timeframe varies hugely

📌 **Caution about "biodegradable plastic"**: Some products labeled biodegradable only fragment into microplastics rather than fully decomposing. Look for certified compostable alternatives.`,
    category: 'education',
  },
  {
    keywords: ['sustainable', 'sustainability', 'habit', 'tips', 'advice'],
    response: `**Building sustainable habits** — start small, build consistently:

**The 5 R's hierarchy** (most to least preferred):
1. **Refuse** — Say no to items you don't need (free pens, plastic bags, unnecessary packaging)
2. **Reduce** — Consume less; choose quality over quantity
3. **Reuse** — Repair, repurpose, and use items multiple times
4. **Recycle** — Properly sort and recycle what remains
5. **Rot** — Compost organic waste

**Quick daily wins:**
- Carry a reusable bag, bottle, and coffee cup
- Plan meals to reduce food waste
- Unsubscribe from unnecessary postal mailing
- Choose digital receipts over paper ones
- Turn off lights and electronics when not in use

**Bigger impact actions:**
- Reduce meat and dairy consumption
- Choose public transport, cycling, or walking
- Buy second-hand before buying new
- Support sustainable businesses

🌍 Sustainable living is not about perfection — it's about making better choices consistently.`,
    category: 'habits',
  },
  {
    keywords: ['e-waste', 'electronic', 'old phone', 'laptop', 'computer', 'electronics'],
    response: `**E-waste (Electronic Waste)** requires careful handling because electronics contain both valuable materials and hazardous substances.

**Why it matters:**
- E-waste contains recoverable precious metals (gold, silver, copper, rare earth elements)
- It also contains hazardous materials (lead, mercury, cadmium) that are dangerous if released into the environment
- Only ~20% of global e-waste is formally recycled

**Responsible options (in preferred order):**
1. **Extend the life** — Repair devices, update software, use protective cases
2. **Donate** — Working devices can be donated to schools, charities, or digital-access programs
3. **Manufacturer take-back** — Many brands offer trade-in or take-back programs
4. **Certified e-waste recycler** — Use authorized facilities that handle materials responsibly
5. **Municipal e-waste collection** — Many cities have dedicated e-waste collection points

**Before disposal:**
- Back up your data
- Perform a factory reset / wipe personal data
- Remove and safely dispose of batteries separately

⚠️ Never place e-waste in household bins or general landfill.`,
    category: 'ewaste',
  },
  {
    keywords: ['sdg', 'sustainable development', 'goal', 'sdg 12'],
    response: `**SDG 12 — Responsible Consumption and Production** is the primary SDG that EcoSort AI addresses.

**What SDG 12 aims to achieve:**
- Sustainable management and efficient use of natural resources
- Halving per capita global food waste
- Achieving environmentally sound management of chemicals and waste
- Encouraging sustainable practices and sustainability reporting

**How waste segregation supports SDG 12:**
- Proper recycling reduces demand for virgin raw materials
- Composting reduces food waste sent to landfill
- Responsible disposal of hazardous waste protects ecosystems
- Reuse extends product lifetimes, reducing manufacturing demand

**Supporting SDGs:**
- **SDG 11** (Sustainable Cities): Better waste systems make cities cleaner and more livable
- **SDG 13** (Climate Action): Reducing landfill waste lowers methane emissions

💡 Every correct waste-segregation decision is a small action toward SDG 12. Collectively, they create significant positive change.`,
    category: 'sdg',
  },
  {
    keywords: ['hazardous', 'dangerous', 'chemical', 'paint', 'medication', 'medicine'],
    response: `**Hazardous and special waste** requires careful handling to protect both human health and the environment.

**Common household hazardous materials:**
- Batteries and accumulators
- Paints, varnishes, and solvents
- Medications and pharmaceuticals
- Fluorescent and CFL light bulbs (contain mercury)
- Motor oil and engine fluids
- Pesticides, herbicides, and fertilizers
- Cleaning chemicals and bleach

**Key principles:**
- **Never** pour chemicals down drains or into the ground
- **Never** place in household general waste bins
- **Never** mix different chemicals together
- **Always** keep in original labeled containers if possible

**Disposal options:**
- Municipal hazardous waste collection days
- Pharmacy take-back programs (for medications)
- Battery collection points at retailers
- Authorized hazardous waste facilities

📌 Check your local municipality's website for specific collection points and schedules in your area.`,
    category: 'hazardous',
  },
];

const DEFAULT_RESPONSE = {
  response: `Thank you for your question about sustainability and waste management.

EcoSort AI is currently operating as an **AI Prototype / Demonstration Mode**. For your specific question, here are some general principles:

- **When in doubt about an item**: Check your local municipality's waste management guidelines — rules vary by region.
- **General priority order**: Refuse → Reduce → Reuse → Recycle → Compost → Dispose responsibly.
- **For hazardous materials**: Always use authorized collection points, never regular household bins.
- **For e-waste**: Use certified e-waste recycling facilities or manufacturer take-back programs.

You can also use the **Waste Checker** tool to get specific guidance for individual items, or browse the **Waste Categories** section for educational information.

🌍 Every sustainable action matters — collectively, small choices create large impact.`,
  category: 'general',
};

export function getAIResponse(userMessage) {
  if (!userMessage || userMessage.trim() === '') return null;

  const query = userMessage.toLowerCase();

  for (const item of RESPONSE_DATABASE) {
    for (const keyword of item.keywords) {
      if (query.includes(keyword)) {
        return item;
      }
    }
  }

  return DEFAULT_RESPONSE;
}

export const SUGGESTED_QUESTIONS = [
  'Can I recycle a plastic bottle?',
  'How should I dispose of an old battery?',
  'What can I do with food waste?',
  'How can my college reduce plastic waste?',
  'What is the difference between recyclable and biodegradable?',
  'How can I reduce plastic usage at home?',
  'What is SDG 12?',
  'How do I dispose of old electronics?',
  'What are sustainable daily habits?',
];
