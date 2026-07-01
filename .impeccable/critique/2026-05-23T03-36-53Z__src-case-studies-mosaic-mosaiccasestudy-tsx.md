---
target: mosaic case study page, especially What the research showed
total_score: 28
p0_count: 0
p1_count: 2
timestamp: 2026-05-23T03-36-53Z
slug: src-case-studies-mosaic-mosaiccasestudy-tsx
---
#### Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | Static page has clear content, but no section progress or current reading position. |
| 2 | Match System / Real World | 3 | Product language is strong, but the research section needs clearer provenance and method. |
| 3 | User Control and Freedom | 3 | Back/project/live exits exist; long-form reading has no jump navigation. |
| 4 | Consistency and Standards | 3 | Cohesive section system, though several sections use similar card/list grammar. |
| 5 | Error Prevention | 3 | Low-risk static page; no major error paths in this surface. |
| 6 | Recognition Rather Than Recall | 3 | Glance cards and headings help scanning, but research source and decision chain require inference. |
| 7 | Flexibility and Efficiency | 2 | Recruiters can skim, but technical leads lack a fast path from evidence to decisions. |
| 8 | Aesthetic and Minimalist Design | 3 | Calm and polished, but the research section adds volume without enough hierarchy. |
| 9 | Error Recovery | 3 | Not-found/back patterns are serviceable for the route. |
| 10 | Help and Documentation | 3 | The case study explains intent, but research methodology is under-documented. |
| **Total** | | **28/40** | **Good foundation, with research credibility and evidence-to-decision traceability as the next ceiling** |

#### Anti-Patterns Verdict

**LLM assessment**: The page does not look obviously AI-generated. The Mosaic-specific hero, color calendar metaphor, and local-first framing feel specific. The main risk is not visual slop, it is research-section slop: the section has the shape of credible product research, but not yet enough method, source context, or synthesis to fully earn the claim.

**Deterministic scan**: The bundled detector was attempted against `src/case-studies/mosaic/MosaicCaseStudy.tsx`, but this install returned `Error: bundled detector not found.` Fallback source scan found no gradient-text, side-stripe, or backdrop-blur matches. It did flag 8 hex color usages in color-story cards, 3 OKLCH neutral extremes in decorative phone styling, and two `aria-label` usages on generic styled `div` containers.

**Visual overlays**: Browser automation and overlay injection were unavailable in this session, so no reliable user-visible overlay was created.

#### Overall Impression

The Mosaic page is now much stronger than the earlier version. It has a distinctive hero, a clearer product frame, and a research-informed narrative. The biggest opportunity is to turn the “What the research showed” section from attractive supporting evidence into a credible product-decision bridge.

The research section currently says, “I studied the space.” It needs to say, “Here is how I studied it, here is the pattern I found, and here is what changed in the product because of that.”

#### What’s Working

- **The page has a memorable product metaphor**: color tiles, emotional memory, and a calendar rhythm make Mosaic easy to remember.
- **The new research content gives the case study a better spine**: adding “The problem” before the visual system makes the design decisions feel less arbitrary.
- **The tone is calm and human**: the writing avoids hype and fits the portfolio’s quiet-confidence brand.

#### Priority Issues

**[P1] Research credibility is under-earned**

**Why it matters**: The section title says “What the research showed,” but the page does not yet explain the research method beyond “competitive app review research.” The quote cards can read like interview quotes, direct app-review quotes, or paraphrased patterns. That ambiguity weakens trust at exactly the moment the page is trying to prove product judgment.

**Fix**: Add a compact methodology note before the cards: what sources were reviewed, what kind of public feedback was analyzed, and how the themes were grouped. If the excerpts are paraphrased or lightly edited, label them as representative review signals rather than raw quotes.

**Suggested command**: `impeccable clarify`

**[P1] The quote cards need a stronger evidence-to-decision chain**

**Why it matters**: “Friction,” “Emotional nuance,” and “Trust” are good themes, and the implications are directionally right. But a technical lead still has to infer how each research signal changed the product. This is the difference between a beautiful narrative and a strong case study.

**Fix**: Restructure each card into three fields: `Observed signal`, `Product risk`, and `Design response`. Examples: friction leads to a one-tap check-in, emotional nuance leads to mixed or layered emotions, trust leads to local-first storage and on-device insights.

**Suggested command**: `impeccable polish`

**[P2] “What the research showed” slightly overclaims**

**Why it matters**: “Research showed” implies a validated finding. The work described is legitimate competitive research, but it is closer to app-store review mining and synthesis than live user research. Precision makes the work sound more senior, not less.

**Fix**: Rename the section to something more specific, such as `Signals from competitive research`, `What review mining revealed`, or `Research signals that shaped the product`.

**Suggested command**: `impeccable clarify`

**[P2] The recurring issues list is too broad after the quote cards**

**Why it matters**: Nine bullets after three cards creates a cognitive-load spike. Readers get the message, but they lose the priority. The list starts to feel like a backlog dump instead of synthesis.

**Fix**: Group the issues into three clusters: `Flow friction`, `Emotional expressiveness`, and `Trust and data ownership`. Put 2-3 examples under each cluster, or only show the top 5 issues and leave the rest implied.

**Suggested command**: `impeccable layout`

**[P3] Small accessibility and system-polish signals remain**

**Why it matters**: None of these are page-breaking, but they chip away at the “craft is the argument” standard. The detector fallback found `aria-label` on generic styled `div` containers and list-style removal on semantic lists. The source also still uses hex colors for the color-story swatches while the design system is moving toward OKLCH.

**Fix**: Use semantic wrappers or explicit roles for named visual groups, restore list semantics if needed for Safari/VoiceOver, and convert Mosaic-specific swatches from hex to OKLCH.

**Suggested command**: `impeccable harden`

#### Persona Red Flags

**Jordan, first-time recruiter**: Jordan understands the product quickly because the hero and glance cards are strong. The research section may still feel a little unverified, though. If they cannot tell whether the quotes are direct public reviews, paraphrases, or interview snippets, the trust-building section becomes slightly trust-eroding.

**Riley, skeptical technical lead**: Riley wants to know what Carlos learned and what changed in the build. The current cards stop at implications, so Riley has to connect the research section to the later architecture section manually. The strongest fix is a clear research signal to product decision to technical choice chain.

**Casey, distracted mobile scanner**: Casey can scan the three quote cards, but the recurring issues list is long enough to become a gray wall on mobile. Grouped clusters would make the section easier to understand while scrolling quickly.

#### Minor Observations

- The hero’s `24-day streak` badge may imply pressure or gamification, while the copy emphasizes low-pressure reflection.
- The purple-tinted research-card gradient is subtle, but a more documentary treatment may feel more credible for research evidence.
- The repeated uppercase label pattern is controlled, but it is appearing often enough that it could start to feel like scaffolding.
- `aria-label` on visual containers should be checked against the rendered DOM, because a semantic `figure`, `section`, or explicit role may communicate intent better.

#### Questions to Consider

- Are the research excerpts verbatim public reviews, lightly edited excerpts, or synthesized representative complaints?
- What should each research card prove: user pain, product opportunity, or a design decision?
- Should the research section feel more like a product memo or more like editorial storytelling?
