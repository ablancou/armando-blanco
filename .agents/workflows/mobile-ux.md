---
description: How to ensure perfect mobile responsiveness and UX for the portfolio
---

# Mobile UX Audit Workflow

When building or modifying UI components in this application, you **MUST** follow these steps to ensure perfect rendering across all devices:

1. **Verify Overflow Constraints:**
   - Ensure you are not clipping critical elements with `overflow: hidden` on cards (like `.glass-card` elements), especially if they have decorative children with negative absolute positioning (`-top-X`, `-left-X`).
   - If a hover effect prevents you from removing `overflow: hidden`, move the absolute child to a parent wrapper `<div>` instead of inside the card.

2. **Check Margin and Padding Adjustments:**
   - Do not use excessively large margins or padding on the base breakpoints (e.g. avoid `p-12` as the only class). Always use responsive modifiers. Example: `p-6 sm:p-8 md:p-12`.
   - Avoid `ml-10` or fixed margins that push elements out of bounds in portrait mode. Use `md:ml-10` if it's explicitly for desktop layouts.

3. **Validate the Grid Layouts:**
   - For grids that contain text (e.g., `BentoGrid`), test if the fixed `auto-rows-[18rem]` forces clipping. Ensure the mobile view falls back to `auto-rows-min` or removes a fixed absolute height if the content is highly variable.

4. **Verify Text Wrapping:**
   - Keep long words or absolute titles tracked properly. Avoid `text-6xl` bare classes on mobile. Use `text-4xl md:text-6xl`.

**// turbo-all**
