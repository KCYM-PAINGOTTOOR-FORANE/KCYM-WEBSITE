# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js 16 (App Router) + React 19 + TypeScript, Tailwind CSS v4, bun. Feature-based folder structure (`src/features/{parishes,events,home}`, each with `types/`, `data/`, `components/` barrels). Already built; this record documents the existing codebase rather than a greenfield choice.

## Users

Whole forane community, all ages, not a youth-only audience:

- KCYM youth members — check events, their own parish's page, leadership rosters.
- Prospective/curious youth — deciding whether to get involved, exploring what KCYM does.
- Parish and diocese leadership/clergy — reference the site, share it, expect it to represent the church with dignity.
- Parents and the wider parish community — older and non-youth visitors, checking events, trusting the site reflects the church well.

The design must read as welcoming and legible to a grandparent and a teenager alike — not a youth-brand skin over a church.

## Product Purpose

KCYM Paingottoor Forane's public site: presents the forane's identity, its seven member parishes (each with its own page — history, current focus, unit leadership), forane-level leadership, and the events/activities calendar (upcoming + past). Exists to inform the community, give each parish youth unit a real presence, and invite participation.

## Positioning

Not a generic church-website template. It is one forane's own site — built around its actual structure (forane → 7 parishes → each parish's unit leadership), not a stock "find a church near you" product. The forane-then-parishes hierarchy is the thing a neighboring diocese or a generic template could not truthfully replicate.

## Operating Context

- Visited on phones as often as desktop, most likely after Mass, during events, or when sharing a parish link.
- Content is largely static/informational (no login, no ordering, no dynamic user accounts at present).
- Real content is not yet in hand: leadership names, histories, and photos are current placeholders, filled in by the forane over time.
- No CMS yet — content lives in TypeScript data files (`src/features/*/data`).

## Capabilities and Constraints

- 7 parish pages + forane home + events page, all statically generated.
- Undecided/open: no CMS, no auth, no forms/contact submission backend yet — informational only for now.
- Dark mode: must support system theme (light/dark), not just light.

## Brand Commitments

- KCYM logo/mark is fixed and must be preserved through any redesign.
- Color palette, typography, layout, and component styling are otherwise open — not tied to the current red/gold Material-3-ish look.
- Name "KCYM Paingottoor Forane" and the "Ignite & Unite" tagline are existing brand facts (tagline may be revisited, not fabricated as new claims elsewhere).

## Evidence on Hand

No real photos of the actual churches, priests, or leadership exist yet. Current imagery is stock (Unsplash) placeholders. Redesign should treat imagery as intentional placeholder (e.g. a considered icon/pattern/abstract treatment) so real photos can be dropped in later without a further redesign — do not fabricate specific-looking "real" photography.

## Product Principles

1. Legible and dignified across all ages — not a youth-only aesthetic, not a corporate-generic church template either.
2. The forane → parish hierarchy is the structural backbone; the redesign should make that structure clearer, not flatten it.
3. Content is provisional (placeholder names/photos) — the design must not lean on specific fake content to look finished; it should hold up honestly with placeholders.
4. Sacred without kitsch — avoid both clip-art religious iconography and cold corporate minimalism.
5. Works fully in light and dark (system theme), not as an afterthought.

## Accessibility & Inclusion

Must be comfortably usable by older parishioners (larger legible type, sufficient contrast, no fine-print-only interactions) alongside younger, mobile-native users.
