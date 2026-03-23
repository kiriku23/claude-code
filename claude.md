# Claude.md — Project Constitution

> This file is **law**. All data schemas, behavioral rules, and architectural invariants are defined here.

---

## Project Identity

- **Name:** Car Detailing Pro — Landing Page
- **North Star:** A stunning, premium single-page website for a car detailing business that creates a WOW effect and makes visitors stay and scroll.
- **Created:** 2026-03-23

---

## Discovery Answers

| Question | Answer |
|----------|--------|
| North Star | Beautiful, engaging website with WOW hero section for car detailing |
| Integrations | None — static website, no APIs |
| Source of Truth | None — static content, no database |
| Delivery Payload | Visual overview website to collect customer information |
| Behavioral Rules | Look great, premium feel. No specific constraints. |

---

## Data Schema

### Input Schema (Contact Form)
```json
{
  "name": "string (required)",
  "email": "string, email format (required)",
  "message": "string (required)"
}
```

### Output Schema (Static Site)
```json
{
  "type": "static_single_page",
  "framework": "React + Vite",
  "styling": "Tailwind CSS",
  "sections": ["hero", "social_proof", "features", "testimonials", "contact", "footer"]
}
```

---

## Design System

### Color Palette
- **Primary:** Deep slate/charcoal (#0F172A) — authority, premium
- **Accent:** Warm amber/gold (#F59E0B → #D97706) — luxury, car culture
- **Surface:** Soft warm white (#FAFAF9) — clean, breathable
- **Card BG:** White (#FFFFFF) with soft shadows
- **Text Primary:** Slate-900 (#0F172A)
- **Text Secondary:** Slate-500 (#64748B)
- **Gradient:** Subtle amber-to-orange for CTAs

### Typography
- **Font:** Inter (Google Fonts)
- **Hero Headline:** 4xl–6xl, bold
- **Section Titles:** 3xl, semibold
- **Body:** base–lg, regular

### Design Tokens
- Border radius: rounded-xl to rounded-2xl
- Shadows: soft (shadow-sm, shadow-md)
- Spacing: generous whitespace, sections must have significant breathing room (`py-32`)
- Animations: Silky smooth, physics-based spring animations, staggered reveals, and a custom interactive cursor tracking mouse movement.

---

## Behavioral Rules

1. Premium, clean aesthetic — never looks cheap or generic
2. Real, business-specific copy — no lorem ipsum
3. Fully responsive — phone and desktop
4. CTA button ("Ready!") appears above fold AND near bottom
5. **Animations must be buttery smooth, utilizing physics-based springs (via Framer Motion) for entries, hovers, and reveals.**
6. **Every section must have distinct, generous padding/margin to stand on its own momentarily during scroll.**
7. **The site features a custom interactive cursor that follows the user's mouse and reacts to actionable elements.**

---

## Architectural Invariants

1. Single-page, no routing
2. React + Vite + Tailwind CSS + **Framer Motion**
3. All components in `src/components/`
4. Production-ready, clean code
5. `claude.md` is updated before code when schemas/rules change

---

## Maintenance Log

| Date | Change | Reason |
|------|--------|--------|
| 2026-03-23 | Initial skeleton created | Protocol 0 |
| 2026-03-23 | Discovery answers + schema + design system defined | Phase 1 Blueprint |
| 2026-03-23 | Added Framer Motion and custom cursor behavioral rules | Post-launch enhancements |
