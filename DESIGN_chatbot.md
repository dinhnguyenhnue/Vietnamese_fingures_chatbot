# High-End Editorial Design System Document

## 1. Overview & Creative North Star: "The Digital Curator"

This design system is built to bridge the gap between historical reverence and modern digital sophistication. Moving away from the static nature of traditional educational archives, our Creative North Star is **"The Digital Curator."** 

Imagine a high-end gallery space where ancient manuscripts meet contemporary architecture. We achieve this through:
*   **Intentional Asymmetry:** Breaking the "template" look by using offset grids and varying column widths to guide the eye through historical narratives.
*   **Editorial Pacing:** Using generous white space (defined by our `16` and `24` spacing tokens) to allow content to breathe, mimicking the layout of a premium art magazine.
*   **Tonal Depth:** Replacing harsh lines with a hierarchy of parchment-like surfaces to create an immersive, tactile experience.

---

## 2. Colors & Surface Philosophy

The palette is rooted in Vietnamese heritage: the warmth of aged paper (`background: #fcf9f0`), the authority of deep lacquer (`primary: #690008`), and the earthiness of traditional woodcraft (`tertiary: #472a07`).

### The "No-Line" Rule
To maintain a premium, seamless aesthetic, **1px solid borders are prohibited for sectioning.** 
*   **Boundary Definition:** Separate sections exclusively through background color shifts. Use `surface-container-low` (#f6f3ea) to distinguish a sidebar from a `surface` (#fcf9f0) main content area.
*   **The Layering Principle:** Treat the UI as stacked sheets of fine paper. An inner card should use `surface-container-lowest` (#ffffff) to appear slightly "lifted" above a `surface-container` (#f1eee5) background.

### Glass & Texture
*   **Glassmorphism:** For floating navigation or modal overlays, use a semi-transparent `surface` color with a `20px` backdrop-blur. This ensures the historical textures of the background "bleed" through, creating depth without clutter.
*   **Signature Gradients:** For primary CTAs or Hero headers, use a subtle radial gradient transitioning from `primary` (#690008) to `primary_container` (#8b1a1a). This adds a "soulful" luster that flat colors cannot replicate.

---

## 3. Typography: The Scholarly Dialogue

Hierarchy is established through a dialogue between the formal **Newsreader** (Serif) and the modern **Manrope** (Sans-serif).

*   **Display & Headlines (Newsreader):** Used for titles and historical quotes. The high contrast of the serif letterforms conveys the weight of history and educational authority.
    *   *Example:* `display-lg` (3.5rem) should be used for main historical figures or era titles.
*   **Title & Body (Manrope):** Used for navigation, labels, and long-form educational text. The geometric clarity of Manrope ensures legibility across all devices.
    *   *Example:* `body-lg` (1rem) provides a comfortable reading experience for biographies.
*   **Intentional Contrast:** Always pair a `headline-md` Serif with a `label-md` Sans-serif in `secondary` (#755750) to create an editorial "caption" feel.

---

## 4. Elevation & Depth

We eschew "material" shadows in favor of **Tonal Layering** and **Ambient Light.**

*   **Ambient Shadows:** If a floating element (like a "Quiz" card) requires a shadow, it must be extra-diffused.
    *   *Spec:* `0px 12px 32px rgba(28, 28, 23, 0.06)`. The shadow color is a low-opacity version of `on-surface` (#1c1c17), making it feel like a natural light shadow on paper.
*   **The "Ghost Border" Fallback:** If a container requires definition against an identical background color, use a "Ghost Border": `outline-variant` (#e0bfbc) at 15% opacity. High-contrast, 100% opaque borders are strictly forbidden.
*   **Roundedness Scale:** Apply `sm` (0.125rem) or `md` (0.375rem) for a subtle, professional soften. Avoid "bubbly" large radiuses; we want the edges to feel like hand-cut vellum.

---

## 5. Components

### Buttons
*   **Primary:** Solid `primary` (#690008) with `on-primary` text. Radius: `md`. Use for "Begin Lesson" or "Enter Archive."
*   **Secondary:** `surface-container-high` background with `on-surface` text. No border.
*   **Tertiary:** Text-only in `primary` with a subtle `2px` underline that appears on hover, echoing scholarly annotations.

### Cards & Lists
*   **Dividerless Design:** Never use horizontal lines to separate list items. Use spacing token `4` (1.4rem) and a subtle background shift on hover (`surface-container-highest`).
*   **Educational Chips:** Use `secondary_container` (#ffd7ce) with `on-secondary_container` (#7a5b54) for tags like "Le Dynasty" or "Poetry." Apply radius `full`.

### Input Fields
*   **Form Style:** Use a "Minimalist Ledger" style. Only a bottom border using `outline` (#8c716e) at 40% opacity. Upon focus, the border transitions to `primary` (#690008).

### Interactive Timeline (Custom Component)
*   A vertical line using `outline-variant` (#e0bfbc) at 20% opacity. Milestones are marked with `primary` dots. Active years use `display-sm` Newsreader typography to act as visual anchors.

---

## 6. Do's and Don'ts

### Do:
*   **Do** use asymmetrical layouts. Place a portrait of a historical figure slightly overlapping a text container to create a "layered" feel.
*   **Do** prioritize "Reading Rhythm." Use the `spacing-16` (5.5rem) token between major thematic sections to reset the user's focus.
*   **Do** use `tertiary` (#472a07) for small metadata or footnotes to provide a soft, scholarly contrast to the main text.

### Don't:
*   **Don't** use pure black (#000000). Always use `on-surface` (#1c1c17) to maintain the warmth of the "Tinh Hoa Việt" aesthetic.
*   **Don't** use standard "Drop Shadows." They feel "cheap" and digital. Use the Tonal Layering or Ambient Shadow specs defined in section 4.
*   **Don't** crowd the interface. If a screen feels "full," increase the spacing between elements rather than shrinking the typography.