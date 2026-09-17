# Gowrob Dash — Interactive Electronics Portfolio

## Goal
Build a premium single-page portfolio that feels like a working electronics lab and robotics control center, using Gowrob’s uploaded portrait as the authentic focal image.

## Visual direction
- Deep charcoal instrument surfaces with restrained cyan signal light and small copper details.
- Precision technical typography, compact equipment labels, fine grid lines, and realistic circuit traces.
- Glass used sparingly for instrument readouts; sharp, engineered panels rather than generic floating cards.
- Smooth, lightweight motion with reduced-motion support; no gaming aesthetic or excessive neon.

## Homepage experience
- Sticky transparent navigation that darkens on scroll, tracks the active section, and becomes a mobile menu.
- Full-screen hero with the supplied portrait, technical framing, circuit overlays, clear identity, status, and two calls to action.
- Interactive PCB signal path with selectable components, illuminated relationships, technical explanations, and a sequential “Build the System” activation.
- About/profile instrumentation, skills, education, project gallery, AI content gallery, interactive tech lab, technology map, learning journey, certificate placeholder, exploration status, contact, and footer.
- Project details open in accessible dialogs and use clearly labeled visual placeholders where images or specifications are unavailable.
- Provided social links remain exact; the missing first YouTube URL stays visibly editable rather than invented.

## Interaction and accessibility
- Pointer hover interactions become tap interactions on touch devices.
- Keyboard-accessible navigation, controls, dialogs, and focus states.
- Desktop technical cursor modes and restrained magnetic movement; standard cursor on touch/mobile.
- Contact form validates locally and opens a prepared email to the supplied address without pretending a message was sent.
- No horizontal overflow, stable responsive layouts, lazy-loaded secondary visuals, semantic headings, and descriptive alt text.

## Technical implementation
- Create reusable portfolio data and focused React components for navigation, PCB, projects, lab, technology map, dialog, cursor, and shared section framing.
- Use CSS/SVG for circuit-board visuals and component diagrams so visuals remain crisp and fast without fake project photography.
- Store the uploaded transparent portrait through the project asset flow and render it responsively.
- Define the full token system, animations, and responsive behavior centrally in the global stylesheet.
- Add route-level title, description, Open Graph fields, Twitter card metadata, keywords, and canonical URL.
- Verify the finished page at desktop and mobile sizes, test core interactions, inspect console/runtime output, and resolve build errors.
