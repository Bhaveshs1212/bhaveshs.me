# Design Language System — Minimal Editorial Lab

## 1. Core Design Philosophy

This design follows a **minimal editorial + personal lab notebook** aesthetic.

The page feels:
- Quiet, confident, and intentional
- Writer-first, content-forward
- Personal, not corporate
- Designed to reduce noise and amplify thought

The interface never competes with content. It acts as a silent frame.

---

## 2. Visual Tone & Mood

- **Mood:** Calm, introspective, intellectual
- **Energy:** Low-contrast, slow, deliberate
- **Personality:** Curious, experimental, thoughtful
- **Inspiration:** Personal blogs, research notes, indie developer journals

No visual aggression. No unnecessary color. No decorative UI.

---

## 3. Color System

### Base Colors
- **Background:** Near-black (not pure black)
  - Example: `#0B0B0C` – `#111111`
- **Primary Text:** Soft white
  - Example: `#F2F2F2`
- **Secondary Text:** Muted gray
  - Example: `#9A9A9A`
- **Tertiary Text / Metadata:** Dark gray
  - Example: `#6F6F6F`

### Accent Usage
- Accent color is **minimal or absent**
- Interactive emphasis comes from:
  - Contrast
  - Weight
  - Spacing
  - Subtle motion
- Buttons use **white background + dark text**, not color

---

## 4. Typography System

### Font Philosophy
- Typography is the hero.
- One expressive serif for headlines.
- One neutral sans-serif for UI and metadata.

### Headings (Hero Text)
- **Font Style:** Serif
- **Characteristics:**
  - High contrast strokes
  - Elegant curves
  - Editorial feel
- **Usage:**
  - Large hero statement
  - Short, human sentences
- **Line Height:** Tight but breathable (1.1–1.2)
- **Max Width:** Never full-width; readable line length

Example:
> “I experiment with things that fascinate me.”

### Body Text
- **Font Style:** Clean sans-serif
- **Size:** Small to medium
- **Color:** Muted gray
- **Purpose:** Explanation, not storytelling
- **Line Height:** Relaxed (1.5–1.7)

### Metadata Text
- Very small
- Low contrast
- Used for:
  - Roles
  - Username
  - Tech stack notes
- Never bold

---

## 5. Layout System

### Structure
- Single-column layout
- Left-aligned content
- Strong vertical rhythm

### Spacing Rules
- Large negative space
- Content occupies **less than 50% of screen width**
- Generous padding from viewport edges

### Alignment
- No center alignment
- Everything aligns to a vertical reading axis

---

## 6. Content Hierarchy

Order of importance:
1. **Primary Thought** (Hero sentence)
2. **Context** (Short description)
3. **Identity / Credibility** (Name, handle, tools)
4. **Action** (Read, Explore, Learn more)

Nothing else competes.

---

## 7. Buttons & Links

### Primary Button
- White background
- Dark text
- Rounded corners (soft, not pill)
- Minimal shadow or none
- Text-based CTA (e.g. “Read writing →”)

### Secondary Action
- Text-only link
- Muted color
- Appears quieter than primary CTA

### Interaction
- Hover effects are subtle:
  - Slight brightness change
  - Very small translate or opacity shift
- No aggressive animations

---

## 8. Motion & Interaction Principles

- Motion is optional, never required
- If used:
  - Fade in
  - Gentle slide (2–6px)
  - Slow easing
- No bouncing
- No flashy transitions

---

## 9. Iconography

- Icons are optional
- If used:
  - Line-based
  - Thin strokes
  - Neutral color
- Icons never dominate text

---

## 10. Writing & Copy Style

- First-person
- Human and reflective
- Short sentences
- No marketing language
- No buzzwords

Bad:
> “Building innovative solutions at scale”

Good:
> “I share my experiments in software, design, and computer science.”

---

## 11. Page Consistency Rules (For Other Pages)

All pages should:
- Start with a **clear thought or idea**
- Use the same typography scale
- Maintain the same quiet tone
- Avoid UI-heavy components
- Feel like pages from the same notebook

Each page should feel written, not assembled.

---

## 12. What to Avoid

- Cards with borders
- Bright accent colors
- Gradients
- Excessive icons
- Dense grids
- Over-explaining UI

If something feels decorative, remove it.

---

## 13. Mental Model for LLM Agents

When designing new pages, ask:
> “Does this help the reader think, or does it distract them?”

If it distracts, remove it.

---

## 14. One-Line Design Summary

**A minimal, typography-led personal lab where thoughts come before UI.**
