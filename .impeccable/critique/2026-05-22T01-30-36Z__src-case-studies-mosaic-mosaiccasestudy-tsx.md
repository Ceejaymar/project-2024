---
target: mosaic case study page
total_score: 26
p0_count: 0
p1_count: 3
timestamp: 2026-05-22T01-30-36Z
slug: src-case-studies-mosaic-mosaiccasestudy-tsx
---
#### Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | Static page is clear, but no current-location cue beyond the URL and no section progress. |
| 2 | Match System / Real World | 3 | The emotional-product framing is strong, but stack language needs more translation into user or business impact. |
| 3 | User Control and Freedom | 3 | Back link exists and is obvious, but there are no jump links or next-step exits after reading. |
| 4 | Consistency and Standards | 3 | Components are consistent with the portfolio, but case study CTA behavior disappeared from the detail page. |
| 5 | Error Prevention | 3 | Low-risk static page. Not-found state exists. |
| 6 | Recognition Rather Than Recall | 2 | Reader must infer the case study arc and remember sections while scrolling. No contents, anchors, or summary milestones. |
| 7 | Flexibility and Efficiency | 1 | No skim path, jump navigation, share/permalink affordances, or accelerated route through the story. |
| 8 | Aesthetic and Minimalist Design | 2 | Clean, but too generic. The repeated section pattern and duplicated hero image flatten the story. |
| 9 | Error Recovery | 3 | Unknown slugs recover to a simple not-found state with a back link. |
| 10 | Help and Documentation | 4 | The page itself is documentation of the project and the writing is readable. |
| **Total** | | **26/40** | **Acceptable, with strong foundation and clear gaps before it feels portfolio-defining** |

#### Anti-Patterns Verdict

**LLM assessment**: The page does not scream "AI made this," but it does drift toward a common case-study template: giant title, summary, meta rail, large hero image, repeating text sections, one callout. The brand brief says the portfolio should prove craft through the interface itself. Right now the structure proves engineering tidiness more than product/design judgment.

**Deterministic scan**: The bundled detector was attempted against `src/case-studies/mosaic/MosaicCaseStudy.tsx`, but this install returned `Error: bundled detector not found.` No deterministic findings were available.

**Visual overlays**: Browser automation and overlay injection were not available in this session, so no reliable user-visible overlay was created.

#### Overall Impression

The Mosaic case study has a good skeleton: clean registry architecture, readable layout, a strong product premise, and a reusable component foundation. The biggest opportunity is to make it feel like evidence, not an essay. A hiring manager should leave with a crisp sense of what problem you solved, what decisions you owned, what tradeoffs you made, and what changed because of your work.

#### What's Working

- **The premise is memorable**: "see your year in color" gives the case study a real center of gravity.
- **The component architecture is future-friendly**: `CaseStudyLayout`, `CaseStudySection`, `CaseStudyFigure`, and `CaseStudyCallout` create a good base for bespoke case studies.
- **Reading comfort is decent**: body line length, section spacing, and metadata are restrained enough that the page does not feel crowded.

#### Priority Issues

**[P1] The page lacks evidence density**

**Why it matters**: A case study should prove craft. The current page says the right things, but it does not yet show the app, decisions, iterations, screens, constraints, results, or impact. Recruiters and engineering leads need proof they can scan.

**Fix**: Add 2-4 concrete artifacts: app screenshots, a check-in flow figure, a calendar visualization figure, and one "decision/result" section that connects design choices to user value.

**Suggested command**: `impeccable polish`

**[P1] The visual structure is too generic for the product**

**Why it matters**: Mosaic is color, memory, mood, and ritual. The page currently uses a conventional editorial layout with minimal Mosaic-specific visual language. The design does not yet embody the product.

**Fix**: Introduce Mosaic-specific motifs: color swatches, calendar-tile rhythm, emotion-color pairings, or a lightweight visual timeline. Keep it calm, but let the product idea shape the page.

**Suggested command**: `impeccable bolder`

**[P1] The case study page has no strong next action**

**Why it matters**: The cards show "Learn More" and "Read Case Study," but the detail page itself does not expose external links or a closing CTA. After reading, the user hits a dead end.

**Fix**: Add a small links panel or closing section in `CaseStudyLayout` using the registry `links` field, with `Learn More`, relevant external links, and a route back to projects.

**Suggested command**: `impeccable layout`

**[P2] Accessibility polish is incomplete**

**Why it matters**: The back link has hover styling but no explicit `:focus-visible` treatment. The hero image and inline figure reuse the same asset, which can become redundant for screen reader users and visually repetitive for everyone.

**Fix**: Add visible focus states to case-study links. Make figures optional and genuinely distinct, or remove duplicate imagery until real screenshots are ready.

**Suggested command**: `impeccable harden`

**[P2] The page needs a better skim path**

**Why it matters**: Hiring managers scan before they read. The current flow is readable but linear. The page does not surface "problem, role, decisions, outcome" quickly.

**Fix**: Add a compact "At a glance" band or restructure the first fold so role, problem, user value, and one outcome are visible before the hero image.

**Suggested command**: `impeccable clarify`

#### Persona Red Flags

**Jordan, first-time recruiter**

Jordan understands that Mosaic is a mood app, but has to read several paragraphs to know what you specifically owned and why it matters. The page lacks a fast proof layer: no outcome, no screenshots of the actual flow, no "my role" detail beyond the metadata.

**Sam, accessibility-dependent user**

Sam can navigate the semantic headings, but focus treatment is not explicitly handled in the case-study components. The repeated hero image and figure can also create redundant image announcements once real screen reader testing is done.

**Casey, distracted mobile reader**

Casey gets a large hero, then a long vertical read with no sticky context, contents, or final CTA. On a phone, the story asks for attention but does not give enough scan anchors.

**Hiring lead, technical evaluator**

This person wants tradeoffs, constraints, and engineering judgment. The Architecture section names tools, but does not yet explain the decision criteria deeply enough: why Unistyles, why local-first, what constraints shaped the data model, what you rejected.

#### Minor Observations

- `CaseStudyLayout` supports rich meta, but not `links`, even though `CaseStudyMeta` includes `links`.
- `CaseStudyFigure` should eventually support width variants or grouped figures for galleries.
- `CaseStudyCallout` is useful, but a single generic callout risks feeling decorative unless paired with concrete evidence.
- The route not-found state is simple and solid, but could offer "Back to all projects" copy with stronger affordance.

#### Questions to Consider

- What is the one proof point you want a hiring manager to remember after 15 seconds?
- Should Mosaic feel like a quiet product memo, a visual design story, or a founder/engineer build log?
- Where can the page show a tradeoff instead of describing a feature?
