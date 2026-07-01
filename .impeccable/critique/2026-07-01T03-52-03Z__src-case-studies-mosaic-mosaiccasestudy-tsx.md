---
target: Mosaic visual system foundations panel
total_score: 27
p0_count: 0
p1_count: 2
timestamp: 2026-07-01T03-52-03Z
slug: src-case-studies-mosaic-mosaiccasestudy-tsx
---
#### Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | The section explains the visual system, but the foundations panel does not clearly signal which system elements matter most. |
| 2 | Match System / Real World | 3 | Palette and type specimens are relevant, but their presentation feels like raw inventory rather than a designed specimen. |
| 3 | User Control and Freedom | 3 | Static reading surface, no control issue. |
| 4 | Consistency and Standards | 3 | The panel matches the case-study component language, but its internal spacing is less refined than the surrounding sections. |
| 5 | Error Prevention | 3 | Not transactional. Main risk is interpretive: readers may miss the hierarchy of the design system. |
| 6 | Recognition Rather Than Recall | 2 | The palette, emotion colors, and type roles are all visible, but their grouping makes the reader work to parse relationships. |
| 7 | Flexibility and Efficiency | 2 | Scannability is weaker here than in the interaction and architecture sections. |
| 8 | Aesthetic and Minimalist Design | 2 | The panel is cluttered, especially in the left column where palette, copy, and emotion families compete. |
| 9 | Error Recovery | 3 | Not applicable. |
| 10 | Help and Documentation | 3 | The labels are understandable, but the specimen needs more editorial staging. |
| **Total** | | **27/40** | **Useful content, inelegant specimen layout** |

#### Anti-Patterns Verdict

**LLM assessment**: This part of the Mosaic case study has the strongest remaining “assembled” feeling. It is not broken, but it reads like a compact inventory table instead of an elegant design-system specimen. The issue is concentrated in `VisualFoundationsPanel`: the panel has enough content to deserve more top padding, more internal hierarchy, and a more editorial split between system palette, emotion colors, and type roles.

**Deterministic scan**: Clean. `detect.mjs --json src/case-studies/mosaic/MosaicCaseStudy.tsx` returned `[]`.

**Visual overlays**: No reliable user-visible overlay is available in this session because browser automation tools are not exposed. Fallback signal: source review of the Mosaic visual-system section and shared case-study section shell.

#### Overall Impression

The “Designing the visual system” section has good content, but the foundations panel is doing too much at once. It should feel like a designed specimen: calm, spaced, and intentional. Right now the top of the panel lands too close to the lead copy, and the panel columns are packed with the same internal spacing pattern from top to bottom.

#### What's Working

1. The content choices are right: system palette, emotion families, and type roles are exactly the right ingredients for this section.
2. The two-column structure is directionally useful because it separates visual tokens from typography.
3. The color tokens and type specimens are real, concrete details, which makes the section more credible than pure prose.

#### Priority Issues

**[P1] The foundations panel needs more breathing room before it starts**

**Why it matters**: `VisualFoundationsPanel` follows the visual-system lead immediately after the shared body flow. The panel is dense enough that it needs a stronger entrance. Without more top separation, it feels dropped into the prose instead of introduced as a specimen.

**Fix**: Add a dedicated wrapper rhythm or margin above the panel, for example `margin-top: clamp(1.5rem, 4vw, 2.5rem)` on `VisualFoundationsPanel`. This should be specific to this panel, not every subsection.

**Suggested command**: `$impeccable layout src/case-studies/mosaic/MosaicCaseStudy.tsx`

**[P1] The left column is cluttered because system palette and emotion families compete**

**Why it matters**: `VisualFoundationColumn` currently uses one column gap for everything. In the left column, the system palette grid, a second eyebrow, explanatory text, and emotion color strip all share the same density. The eye cannot tell whether “System palette” or “Emotion families” is the main specimen.

**Fix**: Split the left column into two grouped blocks, such as `FoundationGroup`, with a larger gap or top border before the emotion-family block. Keep the same content, but make the grouping visible through spacing: palette group first, emotion group second.

**Suggested command**: `$impeccable layout src/case-studies/mosaic/MosaicCaseStudy.tsx`

**[P2] The panel padding is too even and too tight for a specimen**

**Why it matters**: `VisualFoundationColumn` uses `padding: clamp(1.1rem, 2.5vw, 1.5rem)`. That works for a compact card, but this is a case-study specimen. The panel wants more top and side air, especially on desktop.

**Fix**: Increase column padding to something like `clamp(1.35rem, 3vw, 2rem)` or give the first row extra top padding. Keep the border and background quiet.

**Suggested command**: `$impeccable layout src/case-studies/mosaic/MosaicCaseStudy.tsx`

**[P2] The color token grid feels like a settings table, not a visual system sample**

**Why it matters**: The swatches are small and uniformly arranged, which is efficient but not elegant. For a portfolio case study, the palette should feel inspected, not merely listed.

**Fix**: Slightly enlarge swatches, loosen the grid gap, and make token rows breathe. Do not create a decorative card inside the panel. Keep the data simple, but stage it more generously.

**Suggested command**: `$impeccable polish src/case-studies/mosaic/MosaicCaseStudy.tsx`

**[P3] Type role rows are clear but mechanically compressed**

**Why it matters**: The type specimens are valuable, but each `TypeRole` row uses the same `padding: 0.85rem 0` and a border. That makes the type system feel like a settings list rather than a specimen sheet.

**Fix**: Increase row padding slightly, reduce the label shout, and consider a wider gap between role label, specimen text, and description. Preserve the existing specimen copy and fonts.

**Suggested command**: `$impeccable polish src/case-studies/mosaic/MosaicCaseStudy.tsx`

#### Persona Red Flags

**Sam, design lead reviewing craft**: Sam will see the right tokens, but the specimen does not yet feel art-directed. The panel says “these are the values” more than “this is how the system behaves.”

**Jordan, hiring manager scanning quickly**: Jordan can understand that Mosaic has a palette and type system, but the dense panel makes it hard to absorb the difference between app chrome colors, emotion colors, and typography roles.

**Riley, recruiter on mobile**: Riley sees a long stack of small labels, swatches, and descriptions. Without stronger spacing groups, it may read as clutter instead of proof of design-system thinking.

#### Minor Observations

- `VisualFoundationsPanel` should probably be the hero artifact of the visual-system section. Give it more ceremony.
- The color swatches are accurate, but they are not visually weighted enough to carry the section.
- The type role label text remains uppercase inside `TypeRole`; it is acceptable as a tiny specimen label, but it contributes to the mechanical feeling.
- The panel is currently one container with two columns. A subtle grouped structure inside each column would solve most of the clutter without changing the section order.

#### Questions to Consider

- Should the foundations panel feel like a compact reference table or an editorial specimen board?
- Should emotion-family colors be visually separated from system chrome colors, since they represent a different design role?
- Would larger swatches and looser type rows make the section feel more confident without adding new content?
