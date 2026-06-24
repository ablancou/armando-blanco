# 🎨 AI Image Generation Guide — Portfolio Project Covers

> **For the AI agent (e.g. Antigravity):** This file is a complete work order.
> Generate the 11 cover images listed below and save each one to the exact path
> given. No code changes are required — the website already references these
> paths. When a file exists, the corresponding project card swaps automatically
> from its placeholder poster to the real image.

---

## Instructions

1. For **each** row in the table below, generate **one image** using the **Full prompt**.
2. Save it as a **PNG** to the **exact destination path** shown (relative to the
   project root). The folder is `public/projects/`.
3. Use a **16:9 landscape** aspect ratio (≈ 1600×900 px). The cards crop with
   `object-cover`, so 16:9 keeps every cover framed consistently.
4. **Do not rename** the files and **do not edit any code.** The paths are already
   wired in `src/data/portfolioData.ts`.
5. Files that **already exist** (see "Already done" section) should be **left as-is**.

---

## Shared visual style (already baked into every Full prompt)

All covers must share this look so the whole portfolio feels uniform:

```
photorealistic 3D product render, dark navy background with subtle circuit-board
texture and soft office bokeh, glowing holographic UI, volumetric lighting,
cinematic depth of field, ultra-detailed 8k, sleek futuristic tech aesthetic
```

---

## Images to generate (11)

| # | Destination path | Full prompt |
|---|------------------|-------------|
| 1 | `public/projects/statura-predict.png` | Holographic pediatric growth-percentile chart with glowing height curves on a floating glass medical dashboard, anthropometric data points, blue and cyan accent. photorealistic 3D product render, dark navy background with subtle circuit-board texture and soft office bokeh, glowing holographic UI, volumetric lighting, cinematic depth of field, ultra-detailed 8k, sleek futuristic tech aesthetic |
| 2 | `public/projects/genetics-3d.png` | A glowing 3D DNA double helix with colored nucleotide bases and a CRISPR molecular editing scene floating in space, emerald and green accent. photorealistic 3D product render, dark navy background with subtle circuit-board texture and soft office bokeh, glowing holographic UI, volumetric lighting, cinematic depth of field, ultra-detailed 8k, sleek futuristic tech aesthetic |
| 3 | `public/projects/anatomy-3d.png` | A translucent holographic human anatomy figure revealing layered skeletal and muscular systems, medical atlas hologram, rose and red accent. photorealistic 3D product render, dark navy background with subtle circuit-board texture and soft office bokeh, glowing holographic UI, volumetric lighting, cinematic depth of field, ultra-detailed 8k, sleek futuristic tech aesthetic |
| 4 | `public/projects/chess-3d.png` | A futuristic crystal-glass 3D chess board with glowing translucent pieces and light refraction, amber and gold neon accent. photorealistic 3D product render, dark navy background with subtle circuit-board texture and soft office bokeh, glowing holographic UI, volumetric lighting, cinematic depth of field, ultra-detailed 8k, sleek futuristic tech aesthetic |
| 5 | `public/projects/aether.png` | A parametric luxury building and a suspension bridge rendered as glowing 3D blueprints on a generative-design studio screen, blue and cyan accent. photorealistic 3D product render, dark navy background with subtle circuit-board texture and soft office bokeh, glowing holographic UI, volumetric lighting, cinematic depth of field, ultra-detailed 8k, sleek futuristic tech aesthetic |
| 6 | `public/projects/coastline-drive.png` | A sleek neon sports car on a coastal highway at sunset in Acapulco, synthwave retro-futuristic mood, amber and orange glow. photorealistic 3D product render, dark navy background with subtle circuit-board texture and soft office bokeh, glowing holographic UI, volumetric lighting, cinematic depth of field, ultra-detailed 8k, sleek futuristic tech aesthetic |
| 7 | `public/projects/tennis-3d.png` | A stylized 3D tennis court with a glowing ball trajectory arc and a floating holographic tournament bracket, emerald and green accent. photorealistic 3D product render, dark navy background with subtle circuit-board texture and soft office bokeh, glowing holographic UI, volumetric lighting, cinematic depth of field, ultra-detailed 8k, sleek futuristic tech aesthetic |
| 8 | `public/projects/aetherlynx.png` | A sci-fi spacecraft in space combat firing glowing pulse cannons, radar HUD, nebula backdrop, blue and cyan accent. photorealistic 3D product render, dark navy background with subtle circuit-board texture and soft office bokeh, glowing holographic UI, volumetric lighting, cinematic depth of field, ultra-detailed 8k, sleek futuristic tech aesthetic |
| 9 | `public/projects/soccer-3d.png` | A 3D stadium with a glowing soccer ball and holographic field lines and goal, emerald and green neon accent. photorealistic 3D product render, dark navy background with subtle circuit-board texture and soft office bokeh, glowing holographic UI, volumetric lighting, cinematic depth of field, ultra-detailed 8k, sleek futuristic tech aesthetic |
| 10 | `public/projects/surf-3d.png` | A surfer riding a towering glowing 3D ocean wave with dynamic spray, stylized motion, cyan and blue accent. photorealistic 3D product render, dark navy background with subtle circuit-board texture and soft office bokeh, glowing holographic UI, volumetric lighting, cinematic depth of field, ultra-detailed 8k, sleek futuristic tech aesthetic |
| 11 | `public/projects/worldcup-vault.png` | A golden World Cup trophy beside a holographic tournament bracket and a glowing world map, archive-vault aesthetic, amber and gold over navy. photorealistic 3D product render, dark navy background with subtle circuit-board texture and soft office bokeh, glowing holographic UI, volumetric lighting, cinematic depth of field, ultra-detailed 8k, sleek futuristic tech aesthetic |

---

## Already done — do NOT regenerate

These covers already exist and look good. Leave them untouched:

- `public/projects/smartmedcalc.png` — SmartMedCalc Suite (Data Science hub)
- `public/projects/diabetes-ai-v2.png` — Diabetes Prediction App

---

## After generating

Nothing else to do. Refresh the site (`npm run dev`) and each new card will show its
real cover instead of the placeholder poster. If any image is missing or fails to
load, the card safely falls back to a designed gradient+icon poster — so the site
never shows a broken image.
