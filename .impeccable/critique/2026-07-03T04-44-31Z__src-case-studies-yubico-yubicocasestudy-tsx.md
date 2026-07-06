---
target: src/case-studies/yubico/YubicoCaseStudy.tsx
total_score: 28
p0_count: 0
p1_count: 1
timestamp: 2026-07-03T04-44-31Z
slug: src-case-studies-yubico-yubicocasestudy-tsx
---
## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Static page is clear; footer links provide navigation, no process state needed. |
| 2 | Match System / Real World | 3 | Product-finder story is understandable; “Skilled” and “Customer Success” could be more human and explicit. |
| 3 | User Control and Freedom | 3 | Back-to-projects and live quiz links are clear; no local table of contents or jump aid for scanners. |
| 4 | Consistency and Standards | 3 | Strong consistency with case-study system; Yubico local styling is restrained. |
| 5 | Error Prevention | 3 | Mostly not applicable for static content; unsupported metric guardrails are handled in the outcome note. |
| 6 | Recognition Rather Than Recall | 3 | Headings and path cards explain the story; sequence numerals are visual only. |
| 7 | Flexibility and Efficiency of Use | 2 | Recruiters can scan, but technical readers have no fast summary of decisions beyond the list. |
| 8 | Aesthetic and Minimalist Design | 3 | Quiet and credible, though several sections fall into similar card-panel rhythm. |
| 9 | Error Recovery | 3 | Mostly not applicable; navigation exits are present. |
| 10 | Help and Documentation | 2 | Technical detail is intentionally incomplete because source review is pending. |
| **Total** | | **28/40** | **Good foundation** |

## Anti-Patterns Verdict

**LLM assessment**: It does not scream AI-made. The restraint matches the portfolio brand better than a heavy case-study spectacle would. The main AI-adjacent tell is structural: card grid, muted panels, outcome callout, learned paragraph. It is competent and calm, but it needs one sharper artifact of engineering judgment to feel more authored.

**Deterministic scan**: `detect.mjs --json src/case-studies/yubico/YubicoCaseStudy.tsx` returned `[]`. No detector findings.

**Visual overlays**: Browser automation and overlay injection are unavailable in this session, so there is no reliable user-visible overlay. Fallback signal is source review plus deterministic CLI scan.

## Overall Impression

This is a solid, honest case-study shell. It respects the role boundary and avoids unsupported conversion claims. The biggest opportunity is to make the frontend engineering contribution feel more concrete without inventing details: right now the page tells me you implemented the quiz, but only the technical list and Cypress note prove it.

## What's Working

1. The role section is calibrated. `YubicoCaseStudy.tsx:169` through `176` is honest about joining after structure and visual direction were underway, while still claiming frontend ownership.
2. The four-path structure is readable. `YubicoCaseStudy.tsx:26` through `43` keeps the product decision model simple, which matches the story.
3. The outcome disclaimer is responsible. `YubicoCaseStudy.tsx:272` through `279` states the only supported metric and blocks purchase attribution.

## Priority Issues

**[P1] Technical credibility is still deferred**
- **Why it matters**: For a frontend portfolio, the technical section is where a technical lead decides whether the work sounds real. The Lorem ipsum placeholder at `YubicoCaseStudy.tsx:258` through `262` currently breaks trust.
- **Fix**: Replace it after source-code review with 2 to 4 verified implementation details: state shape, branching rules, WordPress integration boundary, Cypress path coverage, or accessibility constraints. Keep it specific and short.
- **Suggested command**: `$impeccable clarify`

**[P2] Path labels risk sounding like user grading**
- **Why it matters**: “Novice / Intermediate / Skilled” at `YubicoCaseStudy.tsx:28`, `32`, and `36` explains branching, but “Novice” and “Skilled” can read like judging the visitor rather than meeting their context.
- **Fix**: If these are not locked product labels, rewrite them as customer-state labels: “New to security keys,” “Some setup context,” “Know my requirements,” and “Buying for a team.” If they are real quiz labels, keep them but add a short sentence that frames them as starting points.
- **Suggested command**: `$impeccable clarify`

**[P2] Sequence numbers are visual-only polish**
- **Why it matters**: The card numbers are generated in CSS at `YubicoCaseStudy.module.css:87` through `105`. They help sighted users see sequence, but screen readers may not announce generated content consistently. This is not a blocker because titles are clear, but the visible sequence is not semantic.
- **Fix**: If order matters, render the number in JSX with `aria-hidden="true"` plus a semantic list wrapper, or use an ordered list styled as cards. If order does not matter, keep titles as the source of meaning and treat numbers as decorative.
- **Suggested command**: `$impeccable audit`

**[P2] The page is calm, but a little too evenly calm**
- **Why it matters**: Ignoring the media placeholders, the current experience has one visual beat: bordered cards and panels. For a portfolio, craft is the proof. The page could use one stronger authored moment that is not fake UI and not a custom hero.
- **Fix**: Once real assets are available, let the entry-path product screenshot carry the visual peak. Before assets, a small verified implementation note or code-adjacent rule table could create a more distinctive engineering moment.
- **Suggested command**: `$impeccable layout`

## Persona Red Flags

**Hiring manager scanning in 20 seconds**: The high-level story is clear, but the section order delays concrete proof. They understand “frontend engineer,” yet may not remember a signature contribution beyond “built the quiz.”

**Technical lead validating depth**: The technical list is directionally useful, but the Lorem ipsum placeholder blocks a serious read. They need one verified implementation detail before this feels complete.

**Sam, accessibility-dependent user**: Heading hierarchy is sound and no hover-only behavior appears. Main risk is the visual-only CSS sequence numbers on path cards if the sequence is meant to be meaningful.

## Minor Observations

- `YubicoCaseStudy.tsx:128` through `139`: a one-item metadata `dl` is semantically valid, but visually it may feel heavier than the value of “Company: Yubico.”
- `YubicoCaseStudy.tsx:220` through `229`: “Customer Success handoff” is clear enough for a case study, but if the public audience includes non-SaaS readers, “contact Customer Success” may be plainer.
- `YubicoCaseStudy.module.css:68` through `85`: border plus a very broad, faint shadow is subtle enough, but it sits near the ghost-card pattern. Keep it restrained.

## Questions to Consider

- What is the one implementation decision only you could explain from this project?
- Are “Novice,” “Intermediate,” and “Skilled” actual product labels, or are they case-study shorthand?
- Should this page optimize for recruiter scan speed, technical lead credibility, or a balance between both?
