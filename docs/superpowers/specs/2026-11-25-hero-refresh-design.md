# Hero refresh — short design

**Intent:** Brian finds the hero plain. Add his photo and some visual life without breaking the site's calm, fast, skimmable feel.

**Decided (Brian approved Claude's suggestions):**
- **Photo:** the old headshot (`profile.jpg` from git history, 354×472). Circle on the right half of the hero on desktop; smaller, above the name on phones. Swap the file in `src/assets/profile.jpg` to update it.
- **Effects — "soft ambient glow":** slowly drifting blurred accent-colour blobs behind the hero over a faint dot grid that fades out at the edges; name/title/pitch/buttons fade up in sequence on load; a slowly rotating gradient ring around the photo.

**Constraints:** CSS only (no new JS, no libraries). All motion off under `prefers-reduced-motion: reduce`. Content fully visible with JS off and when printing. No horizontal overflow at 360px. Works in light and dark.

**Approaches considered:**
| Approach | Trade-off |
| --- | --- |
| **Soft ambient glow** (chosen) | Alive but calm; CSS only. |
| Cursor spotlight + photo tilt | More playful; needs a little JS; nothing on touch. Easy to add later. |
| Animated data-network canvas | Most gimmicky, battery cost, dates quickly. |

**Change to the main design doc:** the anti-goal on effects is narrowed: subtle, CSS-only motion that respects reduced-motion is fine; typing animations, heavy parallax and skill bars stay out.

**Left to the builder:** blob colours/sizes/timings, ring colours, exact photo size.

## Revision — "Figure 1" portrait (Brian, same day)

Brian found the rotating rainbow ring and violet/teal blobs generic ("commonly seen AI generated stuff") and off-palette. Replaced with:
- **Portrait as a technical-drawing figure:** square photo on the dot grid, accent-blue crop marks at the corners, muted ruler ticks along the left and bottom edges, monospace caption `fig. 1 — London, 51.51°N 0.13°W`.
- **Palette:** only the site's own neutrals plus the single accent (`--accent`). Coloured blobs removed; at most one faint static accent glow behind the figure.
- **Motion:** crop marks ease in on load; text entrance stays. Same rules: CSS only, off under reduced motion, never hides content without JS or in print.
- Options considered: editorial duotone (calm, less personal); gauge ring (more motion, closer to the generic look).
