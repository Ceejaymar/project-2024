---
target: Mosaiccasestudy.tsx
total_score: 31
p0_count: 0
p1_count: 2
timestamp: 2026-07-01T02-55-00Z
slug: src-case-studies-mosaic-mosaiccasestudy-tsx
---
#### Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Hero calendar communicates active product behavior, but placeholder sections weaken progress/proof signals. |
| 2 | Match System / Real World | 4 | The check-in, mosaic, and reflection metaphors map well to mood-tracking language. |
| 3 | User Control and Freedom | 3 | The case study is readable, but there is no in-page wayfinding for a long narrative. |
| 4 | Consistency and Standards | 3 | Section language is consistent, though repeated uppercase labels and placeholder panels become formulaic. |
| 5 | Error Prevention | 3 | Not interaction-heavy; future-facing AI/privacy copy avoids overpromising. |
| 6 | Recognition Rather Than Recall | 3 | Visual motifs help, but placeholder filenames require the reader to imagine too much. |
| 7 | Flexibility and Efficiency | 2 | Recruiters scanning quickly must move through many similar text sections to find proof. |
| 8 | Aesthetic and Minimalist Design | 3 | Strong restraint and improved hero, but the page still relies on repeated card/panel grammar. |
| 9 | Error Recovery | 3 | Mostly not applicable, but external links and fallback navigation are present via shared layout. |
| 10 | Help and Documentation | 4 | The case study explains context, research, design choices, architecture, and next learning clearly. |
| **Total** | | **31/40** | **Strong, with proof-density and pacing issues** |

#### Anti-Patterns Verdict

**LLM assessment**: This does not immediately read as AI-generated. The Mosaic hero has a real point of view: dynamic previous-month mosaic tiles, emotion-color segmentation, and a quiet phone card create a specific artifact rather than a generic case-study hero. The main AI-adjacent tells are lower on the page: repeated all-caps eyebrows, bordered panels, placeholder screenshot cards, and a long rhythm of "heading, paragraph, card grid." Those are not fatal, but they flatten the craft signal in a portfolio whose stated purpose is to prove frontend taste quickly.

**Deterministic scan**: `detect.mjs --json src/case-studies/mosaic/MosaicCaseStudy.tsx` returned `[]`. No automated slop patterns or rule findings were detected. The detector missed the larger design issue because placeholder density and proof sequencing require judgment, not syntax scanning.

**Visual overlays**: No reliable user-visible overlay is available in this run. Browser automation is not exposed in this Codex session, so I could not open a fresh tab, inject `detect.js`, or show `[Human]` overlays. Fallback signal: source-level review plus deterministic CLI scan.

#### Overall Impression

The case study is much stronger than a generic portfolio write-up. The hero now feels built, the research-to-design logic is credible, and the early-release ending is honest. The biggest opportunity is to convert the middle of the page from a placeholder-backed narrative into visible product proof. A recruiter should not have to imagine the app after reading this much about it.

#### What's Working

1. **The hero finally behaves like Mosaic.** The generated calendar, split daily tiles, real emotion palette, and theme-aware phone surface make the first viewport feel custom to the product rather than decorative.
2. **The research framing is clear.** The competitive review signals connect complaint, product risk, and design response in a way technical leads can evaluate quickly.
3. **The ending is more mature than a fake-results section.** "Early release, ongoing learning" avoids invented metrics and shows good product judgment.

#### Priority Issues

**[P1] Placeholder proof interrupts the case study's credibility**

**Why it matters**: The page repeatedly promises real screens, then shows placeholder panels: check-in flow placeholders, monthly/yearly placeholders, Today/insights/accessibility placeholders. In a portfolio, this is the moment a hiring manager asks, "Is the product real enough to evaluate?" It makes the strongest parts of the story feel unfinished.

**Fix**: Replace the highest-value placeholders first: the three check-in flow screens, Today composite, monthly mosaic, yearly mosaic, and one insights screen. If real screenshots are not ready, use cropped product UI stills or one carefully composed screenshot strip rather than many placeholder cards.

**Suggested command**: `$impeccable polish src/case-studies/mosaic/MosaicCaseStudy.tsx`

**[P1] The hero title is visually loud relative to the case-study system**

**Why it matters**: `SceneTitle` reaches `clamp(3.6rem, 10vw, 7rem)` with `line-height: 0.86` (lines 66-72). The product name is short, so it can survive the scale, but it pushes beyond the portfolio's quieter craft language and the Impeccable display ceiling. It risks making the hero feel like a poster instead of an evidence-led case study.

**Fix**: Bring the max closer to `6rem`, loosen line-height slightly, and let the phone visual carry more of the emotional impact. The title should feel confident, not oversized.

**Suggested command**: `$impeccable typeset src/case-studies/mosaic/MosaicCaseStudy.tsx`

**[P2] Repeated uppercase labels create a mechanical rhythm**

**Why it matters**: The page has many uppercase micro-labels: hero meta, research labels, interaction eyebrows, visual foundation labels, architecture eyebrows, final-section labels. A few are useful, but the cumulative effect becomes case-study scaffolding. It is especially noticeable because PRODUCT.md says "calm, crafted, intentional."

**Fix**: Keep uppercase only where it adds scan value: research categories and metadata. Convert some section-internal labels into sentence-case headings or structural text. The "Key interaction decisions" and "Early release" rows can still scan without shouting each row category.

**Suggested command**: `$impeccable quieter src/case-studies/mosaic/MosaicCaseStudy.tsx`

**[P2] The narrative has a long text-first valley after the hero**

**Why it matters**: After the strong hero, the reader moves through Overview, Problem, Competitive review, and long interaction explanation before the next meaningful product visual. For recruiters scanning in 10 seconds, the emotional peak happens early and then the page becomes dense before screenshots arrive.

**Fix**: Move one proof visual earlier, likely a compact check-in flow or Today composite immediately after Overview or inside "Key interaction decisions." Keep the research section, but make the visual payoff arrive sooner.

**Suggested command**: `$impeccable layout src/case-studies/mosaic/MosaicCaseStudy.tsx`

**[P3] The final section loses the closing callout**

**Why it matters**: The page now ends after three learning rows. The copy is honest, but the ending is flatter than the architecture section's "Key takeaway." For a portfolio case study, the final impression should resolve the product judgment.

**Fix**: Add back a concise final callout or closing sentence that names the design principle: useful reflection without heavier tracking. Do not invent results.

**Suggested command**: `$impeccable clarify src/case-studies/mosaic/MosaicCaseStudy.tsx`

#### Persona Red Flags

**Maya, recruiter scanning a shortlist**: The hero makes a strong first impression, but Maya hits multiple placeholder panels before she sees finished app evidence. She may read "SCREENSHOT PLACEHOLDER" as unfinished work rather than planned asset slots. The lack of in-page shortcuts also means she has to scroll through every section to find role, process, and technical proof.

**Sam, frontend lead evaluating craft**: Sam will appreciate the dynamic hero calendar and theme-aware styling, then notice the component has many one-off styled blocks and repeated card/panel patterns. The craft signal is mixed: strong hero implementation, weaker middle-section artifact quality.

**Jordan, first-time reader with limited context**: Jordan understands the product idea quickly, but the distinction between Mosaic app UI, portfolio placeholders, and future feature ideas can blur. The placeholder filenames are useful to the author, but they are not meaningful product evidence to an outside reader.

#### Minor Observations

- `PhoneFrame` pairs a border with a large soft shadow. It works visually in the hero, but it is close to the ghost-card pattern the design rules warn about.
- `VisualFoundationsPanel` is useful, but the Type Roles specimens use Fraunces and Space Mono, both reflex-reject fonts in the brand register. This is acceptable if it truly documents Mosaic, but it should remain clearly scoped as app evidence, not portfolio identity.
- The architecture section is one of the better text-heavy sections because it turns abstract implementation into concrete records and reuse logic.
- The final "AI-assisted pattern reflection" copy is careful, but it may invite scrutiny. The phrase should remain framed as exploration, not capability.

#### Questions to Consider

- What single finished screen would most quickly prove Mosaic is real?
- Does every uppercase label earn its scan value, or are some labels there because the section pattern expects them?
- What should the reader remember at the end: the app's feature set, or your product judgment?
- Could the research and interaction sections trade one paragraph for one stronger product image?
