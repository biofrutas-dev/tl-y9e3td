# CLAUDE.md — Propuestas Titans Logopedia v2

- Webs estáticas (Tailwind CDN 3.4.16, Lucide 0.460.0), sin build. `cita.js` compartido: iconos + envío de cita (botón value="wa" o "mail").
- Logo `./logo-horizontal.png` con fallback de texto vía `onerror`.
- No inventar reseñas, horarios ni colegiado: marcadores `[... a confirmar]`.
- Pie con crédito Biofrutas enlazado en todas.
- PDF: Edge headless `--print-to-pdf` por página + pdf-lib (Node) para unir. No hay Python.
