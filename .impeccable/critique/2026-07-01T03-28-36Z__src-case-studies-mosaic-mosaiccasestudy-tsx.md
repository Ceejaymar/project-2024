---
target: mosaiccasestudy padding/margin
total_score: 29
p0_count: 0
p1_count: 2
timestamp: 2026-07-01T03-28-36Z
slug: src-case-studies-mosaic-mosaiccasestudy-tsx
---
#### Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | The case study clearly shows what each section is about, but placeholder-heavy visual zones need stronger spacing hierarchy to distinguish proof from supporting copy. |
| 2 | Match System / Real World | 3 | The narrative maps well to a case study, but the even section pacing makes research, visuals, architecture, and next steps feel more equal than they are. |
| 3 | User Control and Freedom | 3 | Static reading surface, no major control issue. Back navigation and external links live in the shared layout. |
| 4 | Consistency and Standards | 3 | Shared case-study spacing is consistent, but the Mosaic-specific nested grids add extra margins that do not always align with the section rhythm. |
| 5 | Error Prevention | 3 | Not a transactional interface. Main risk is misreading placeholder blocks as equally important content. |
| 6 | Recognition Rather Than Recall | 3 | Section titles and labels are clear. More distinct spacing around visual proof would make scanning easier. |
| 7 | Flexibility and Efficiency | 3 | Scannable enough, but dense sections require more vertical parsing than they should. |
| 8 | Aesthetic and Minimalist Design | 2 | The strongest issue: too many areas use similar padding, border, and grid rhythms, flattening the page. |
| 9 | Error Recovery | 3 | Not applicable beyond navigation; no major issue. |
| 10 | Help and Documentation | 3 | Case-study explanation is sufficient, but visual placeholders need better spatial framing to communicate their temporary status. |
| **Total** | | **29/40** | **Good foundation, spacing rhythm needs tightening** |

#### Anti-Patterns Verdict

**LLM assessment**: The Mosaic case study no longer reads as loudly AI-generated after the recent tone pass, but the spacing still has a template smell in a few places. The main tell is not color or typography now; it is uniform section cadence. Most sections sit in the same shared shell with `padding: 2rem 0`, the same top border, and similar inner gaps. For a portfolio case study, that makes research, product decisions, visual-system proof, architecture, and release learning feel too evenly weighted.

**Deterministic scan**: Clean. `detect.mjs --json src/case-studies/mosaic/MosaicCaseStudy.tsx` returned `[]`. The detector did not flag layout anti-patterns, so this critique is based on manual spacing review.

**Visual overlays**: No reliable user-visible overlay is available in this session because browser automation tools are not exposed. Fallback signal: source review of `MosaicCaseStudy.tsx`, `CaseStudySection.tsx`, `CaseStudyLayout.tsx`, and `CaseStudyCallout.tsx`.

#### Overall Impression

The page has a calmer voice and stronger proof ordering than before, but the vertical rhythm is still too even. The biggest opportunity is to give the case study three different pacing modes: compact narrative sections, proof-heavy visual sections, and final decision/list sections. Right now several of those modes share nearly the same margin and padding behavior.

#### What's Working

1. The hero spacing is mostly successful. `HeroScene` uses a strong internal layout with fluid padding and a clear phone visual, so the opening has a real focal point.
2. The new Overview proof strip improves pacing by bringing visual evidence earlier, and its compact placeholder cards avoid pretending there are real screenshots.
3. The visual-system section has useful internal variety: the foundations panel, feature layout, paired insight placeholders, and accessibility layout do not all use the same structure.

#### Priority Issues

**[P1] Shared section padding is too uniform for a long case study**

**Why it matters**: `CaseStudySection` applies `padding: 2rem 0` and the same top border to every section. In a short article, that would be fine. Here it creates a steady beat where every section feels like the same unit of importance. The page needs more hierarchy between short narrative sections, proof-heavy sections, and final synthesis.

**Fix**: Add a section-spacing variant or local wrapper pattern so high-density sections can breathe more. A conservative move: increase shared section padding to `clamp(2.5rem, 6vw, 4rem) 0`, then reduce inner margins where needed. A better move: add optional density/tone props to `CaseStudySection` only if the shared component is meant to support case-study variation.

**Suggested command**: `$impeccable layout src/case-studies/mosaic/MosaicCaseStudy.tsx`

**[P1] The Overview proof strip creates a second card cadence immediately after paragraph copy**

**Why it matters**: `OverviewProofStrip` appears after two paragraphs with `margin-top: 1.5rem`, and each item has `min-height: 8.5rem` plus `padding: 1rem`. It gives useful early proof, but the spacing is close enough to the paragraph rhythm that it reads like another content block instead of a deliberate “first proof” moment.

**Fix**: Give the strip clearer separation from prose, for example `margin-top: clamp(1.75rem, 4vw, 2.5rem)`, slightly larger item padding on desktop, and possibly a wider gap at desktop. If keeping it compact, reduce `min-height` so it feels like a proof rail instead of three small cards.

**Suggested command**: `$impeccable layout src/case-studies/mosaic/MosaicCaseStudy.tsx`

**[P2] Interaction decisions stack too many spacing systems at once**

**Why it matters**: `InteractionDecisionList` uses both a list gap and top padding on every child, then the first decision adds `InteractionFlowVisual` with its own top margin and grid gap. The result is clear, but a little over-measured: the list separator, child padding, visual margin, visual gap, and caption all compete to define rhythm.

**Fix**: Make the list own vertical spacing and let child visuals use `gap` inside the article instead of individual `margin-top` values. For example, increase `InteractionDecision` gap for decisions with visuals, remove `margin-top` from `InteractionFlowVisual` and `ReflectionViewsPair`, or wrap visual/caption pairs in a single rhythm container.

**Suggested command**: `$impeccable layout src/case-studies/mosaic/MosaicCaseStudy.tsx`

**[P2] Visual-system subsections need stronger distinction between text/visual and visual/visual blocks**

**Why it matters**: `VisualSubsection` uses `gap: 1rem` and `margin-top: clamp(2rem, 5vw, 3.5rem)` for every subsection. The “Quiet chrome” text-plus-placeholder block, the two insight placeholders, and the accessibility text-plus-placeholder block have different narrative jobs but similar vertical rhythm.

**Fix**: Use a slightly larger subsection gap for visual-heavy subsections, such as `gap: clamp(1.1rem, 3vw, 1.75rem)`, and tune pair layouts so the placeholder blocks feel like grouped proof. Keep the current section order, but make “Insights without a dashboard” feel more like a distinct gallery moment.

**Suggested command**: `$impeccable layout src/case-studies/mosaic/MosaicCaseStudy.tsx`

**[P3] The final callout spacing works, but the ending label breaks polish**

**Why it matters**: The closing `CaseStudyCallout` now gives the page a better ending, but its label is `key takeaway` while another callout above uses `Key takeaway`. Because `CaseStudyCallout` uppercases labels visually, the rendered result may hide the inconsistency, but the source breaks the editorial rhythm.

**Fix**: Rename the final label to a distinct sentence-case label such as `Product judgment`, `Looking ahead`, or `A deliberate next step`, and ensure the final callout has enough space from `NextDirectionsList`. If the list retains `padding-bottom: 0` on the last item, the callout relies entirely on the parent grid/section flow, which may feel tight depending on shared body margins.

**Suggested command**: `$impeccable polish src/case-studies/mosaic/MosaicCaseStudy.tsx`

#### Persona Red Flags

**Jordan, hiring manager scanning in 90 seconds**: The uniform `CaseStudySection` padding makes the page slower to skim. Jordan can understand the story, but has to work harder to distinguish “research proof,” “interaction decision,” and “visual system” because the vertical cadence is too similar.

**Sam, design lead looking for craft**: Sam will notice the polished copy and visual hierarchy, but the spacing around placeholders still reads provisional. The Overview proof strip and later screenshot placeholders need clearer rhythm so placeholders feel intentional rather than unfinished.

**Riley, recruiter on mobile**: The one-column stacking is safe, but multiple sections use `2rem` vertical padding and dense paragraph blocks. Riley may experience the page as a long sequence of similarly weighted text sections before reaching the most concrete visuals.

#### Minor Observations

- `HeroScene` has `border-radius: 28px`, which is not a padding issue, but it visually increases the card-like feel of the hero. If the page starts feeling too soft, this is one place to reduce visual bulk.
- `PhoneFrame` uses `border-radius: 2rem`; it is defensible as a phone frame, but together with the hero radius it contributes to a rounded visual language.
- `TileProgression` uses a small `margin-top: 0.65rem`, while its caption has `margin-top: 0.75rem`. Those values are close but not quite the same rhythm. Consider consolidating under a wrapper gap.
- `ArchitectureContent` uses a clean global gap, and is one of the better-paced internal sections. It is a good model for the interaction section.

#### Questions to Consider

- Should short narrative sections like “Overview” and “The problem” be compact, while proof-heavy sections get more vertical air?
- Should visual placeholders read as temporary production notes, or as intentionally framed evidence slots?
- Would a single “proof rhythm” wrapper make the check-in flow, monthly/yearly pair, insight pair, and accessibility placeholder feel more cohesive?
