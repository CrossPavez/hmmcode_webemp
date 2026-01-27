# 🔍 GUÍA RÁPIDA - VALIDAR SEO EN GOOGLE

## 1. Google Search Console

### Paso 1: Enviar Sitemap
1. Ve a [Google Search Console](https://search.google.com/search-console)
2. Selecciona tu propiedad (hmmcode.vercel.app)
3. Menú izquierdo → **Sitemaps**
4. Pega: `https://hmmcode.vercel.app/sitemap.xml`
5. Click "Enviar"

### Paso 2: Validar Indexación
- Menú izquierdo → **Cobertura**
- Busca: `página indexada`
- Debe mostrar 2 páginas indexadas

### Paso 3: Revisar Errors
- No debe haber "errores" en rojo
- Algunos "warnings" en naranja es normal

---

## 2. PageSpeed Insights

Verifica Core Web Vitals:

1. Ve a [PageSpeed Insights](https://pagespeed.web.dev)
2. Ingresa: `https://hmmcode.vercel.app`
3. Espera análisis (1-2 minutos)

### Métricas Objetivo:
| Métrica | Target | Actual |
|---------|--------|--------|
| **LCP** | < 2.5s | ? |
| **FID** | < 100ms | ? |
| **CLS** | < 0.1 | ? |
| **Desktop Score** | > 90 | ? |
| **Mobile Score** | > 80 | ? |

**Si Mobile < 80:** Necesita optimización de imágenes

---

## 3. Validar Structured Data

### Rich Results Test (Recomendado)
1. Ve a [Google Rich Results Test](https://search.google.com/test/rich-results)
2. Ingresa URL: `https://hmmcode.vercel.app/servicio-formateo`
3. Haz click "Test URL"

### Qué buscar:
```
✅ No errors
✅ LocalBusiness (detected)
✅ FAQPage (detected) <- IMPORTANTE para servicios
✅ BreadcrumbList (detected)
```

### Schema.org Validator
1. Ve a [Schema.org Validator](https://validator.schema.org/)
2. Pega tu HTML
3. Busca errores en rojo

---

## 4. Verificar Keywords

### Posicionamiento Actual
1. Ve a [Google Search Console](https://search.google.com/search-console)
2. Menú izquierdo → **Rendimiento**
3. Busca estas keywords:

```
"formateo notebook santiago"
"mantenimiento pc a domicilio"
"reparación laptop chile"
"servicio técnico computador"
```

### Métrica a Monitorear:
- **CTR** (Click-Through Rate)
  - Objetivo: > 5% en posiciones 1-3
  - Si < 3%: Mejorar title/description

---

## 5. Checklist Antes de Deploy

- [ ] Backup realizado (`_backup_2026-01-27_*`)
- [ ] Build sin errores (`npm run build` ✅)
- [ ] Sitemap.xml generado (`/dist/sitemap.xml`)
- [ ] Robots.txt presente (`/public/robots.txt`)
- [ ] No hay errores en schema
- [ ] Core Web Vitals decentes

---

## 6. Monitoreo Post-Deploy

### Semana 1:
- ✅ Enviar sitemap a GSC
- ✅ Validar indexación

### Semana 2-4:
- ✅ Revisar Google Search Console
- ✅ Monitorear impresiones
- ✅ Monitorear CTR

### Mes 2:
- ✅ Revisar cambios en ranking
- ✅ Verificar tráfico orgánico
- ✅ Ajustar si es necesario

---

## 7. Herramientas Útiles

| Herramienta | URL | Propósito |
|------------|-----|----------|
| **Search Console** | search.google.com/search-console | Datos de Google |
| **PageSpeed** | pagespeed.web.dev | Velocidad/Core Web Vitals |
| **Rich Results** | search.google.com/test/rich-results | Structured Data |
| **Schema Validator** | validator.schema.org | Validar JSON-LD |
| **Mobile Friendly** | search.google.com/mobile-friendly-test | Mobile |
| **Lighthouse** | chrome.google.com/webstore | Performance (Chrome ext) |
| **Semrush** | semrush.com | Competitor analysis (pago) |
| **Ahrefs** | ahrefs.com | Backlinks (pago) |

---

## 8. Preguntas Frecuentes

### ¿Cuándo aparecerá en Google?
**2-4 semanas** después de enviar sitemap. Indexación no = ranking.

### ¿Por qué no aparece en posición 1?
Necesita:
- Contenido de calidad (blog posts)
- Backlinks de autoridad
- Histórico de CTR alto
- Edad del dominio (>3-6 meses)

### ¿Qué es "indexado sin servir"?
Google encontró la página pero la consideró de baja calidad. Mejorar contenido.

### ¿Cuántas keywords debo tener?
- 5-10 keywords principales
- 20-30 keywords secundarias (long-tail)
- 1 keyword por página

### ¿Google va a penalizar el multiidioma?
No si uses `hreflang` correctamente (ya implementado ✅)

---

## 9. Próximas Mejoras (Después de Deploy)

### Prioridad Alta:
1. **Optimizar imágenes** - Usar Astro `<Image>`
2. **Agregar blog** - 5-10 artículos SEO
3. **Google Business Profile** - Local SEO

### Prioridad Media:
1. **Link building** - Buscar menciones en directorios
2. **Schema Reviews** - Agregar reviews auténticas
3. **SSL/HTTPS** - ✅ Ya tienes

### Prioridad Baja:
1. **AMP** - No necesario (Astro es rápido)
2. **PWA** - Si necesitas offline
3. **Multiidioma completo** - Si hay usuarios

---

**¿Necesitas ayuda con cualquier paso? Revisa la consola o contacta soporte.**
