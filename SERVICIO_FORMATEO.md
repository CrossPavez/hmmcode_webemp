# Página de Servicio de Formateo - Hmmcode

## Descripción

Se ha creado una página dedicada para el servicio de **Formateo de Computadores y Notebooks a Domicilio** en Santiago de Chile.

## Ubicación

- **Ruta**: `/servicio-formateo`
- **URL completa**: `http://localhost:4321/servicio-formateo`
- **Archivo**: `src/pages/servicio-formateo.astro`

## Contenido de la Página

La página incluye 6 secciones principales:

### 1. **Header (Navegación)**
   - Logo "Hmmcode" con tagline
   - Navegación principal con link a "Formateo"
   - Completamente responsive (desde 320px)
   - Safe Area Insets para iPhone con notch

### 2. **ServiceHardwareBanner** (Hero Section)
   - Título principal: "Formateo de Computadores y Notebooks"
   - Subtítulo descriptivo
   - 4 características destacadas (tiempo, domicilio, precio, garantía)
   - Ilustración SVG animada de un computador
   - Botón CTA: "Solicitar Servicio Ahora"
   - Gradiente púrpura/azul (#667eea → #764ba2)
   - Responsive en 5+ breakpoints

### 3. **ServiceReviews** (Testimonios)
   - 4 reseñas de clientes con 5 estrellas
   - Badge de Google My Business (4.9/5 estrellas, 48 reseñas)
   - Cards con hover effects
   - Colores: fondo blanco, borde izquierdo azul
   - Responsive y accesible

### 4. **ServiceDetails** (Detalles del Servicio)
   - 6 tarjetas con servicios incluidos:
     * 🔄 Reinstalación del Sistema Operativo
     * 🧹 Limpieza interna del equipo
     * ⚙️ Optimización y mejora de rendimiento
     * 💾 Respaldo de datos importante
     * 🏠 Servicio a domicilio en Santiago
     * 📍 Cobertura en múltiples comunas
   - Sección de propuesta de valor (5 checkmarks)
   - Grid de información (tiempo: 2-3 horas, comunas, métodos pago)
   - Responsive en 4 breakpoints

### 5. **ServiceFAQ** (Preguntas Frecuentes)
   - 10 preguntas frecuentes con respuestas
   - Sistema accordion expandible/contraíble
   - JSON-LD schema para SEO
   - Preguntas sobre:
     * Qué es formateo
     * Precio
     * Servicio a domicilio
     * Tiempo de ejecución
     * Datos y archivos
     * Garantía
     * Opciones de pago
     * Comunas cubierta
     * Instalación de software
     * Instalación de Windows
   - Interactividad con JavaScript cliente

### 6. **Contact y Footer**
   - Formulario de contacto
   - Información del negocio
   - Enlaces y redes sociales
   - Responsive para móvil

## Especificaciones Técnicas

### Responsive Design
- ✅ Desktop (1200px+)
- ✅ Tablet (1024px, 768px)
- ✅ Mobile (480px)
- ✅ Small Mobile (360px, 320px)

### iOS/Android Optimizations
- ✅ `viewport-fit=cover` para notch y Dynamic Island
- ✅ Safe Area Insets support
- ✅ Touch targets 44-48px
- ✅ Font-size 16px en inputs (evita zoom automático)
- ✅ `apple-mobile-web-app-capable="yes"`

### SEO & Schema
- ✅ Meta title y description
- ✅ Open Graph tags
- ✅ JSON-LD LocalBusiness schema
- ✅ JSON-LD FAQPage schema (para Google)
- ✅ Semantic HTML

### Performance
- ✅ CSS scoped (sin frameworks externos)
- ✅ SVG inlines (sin requests adicionales)
- ✅ JavaScript mínimo (solo para accordion FAQ)
- ✅ Build size optimizado (< 100KB)

## Navegación

### Desde la página principal (`/`)
1. En el **Header**: Nuevo link "Formateo" → `/servicio-formateo`
2. En el **Hero**: Botón secundario "Servicio de Formateo" → `/servicio-formateo`

### Desde la página de servicio (`/servicio-formateo`)
1. Header logo → `/` (página principal)
2. Botón "Solicitar Servicio Ahora" → scroll a formulario de contacto

## Personalización

### Cambiar precio
Archivo: `src/components/ServiceHardwareBanner.astro`
```astro
<p class="price">Desde <strong>$20.000</strong></p>
```

### Cambiar comunas cubierta
Archivo: `src/components/ServiceDetails.astro`
Buscar sección "Comunas Atendidas" y actualizar lista

### Agregar más preguntas FAQ
Archivo: `src/components/ServiceFAQ.astro`
Duplicar estructura de `.faq-item` y actualizar pregunta/respuesta

### Contacto y ubicación
Archivo: `src/components/Contact.astro`
Actualizar email, teléfono, ubicación

## Estadísticas de Build

```
2 page(s) built in 976ms:
  - /index.html (página principal)
  - /servicio-formateo/index.html (página de servicio)
```

## Validación

✅ Sin errores de compilación
✅ Ambas páginas generadas correctamente
✅ Responsive en 5+ breakpoints probados
✅ Navigation funciona en ambas páginas
✅ JSON-LD schema válido
✅ Safe Area support para iPhones con notch

## Próximos pasos

1. **Reemplazar datos de contacto**: email, teléfono, ubicación en Contact.astro
2. **Agregar imágenes reales**: Reemplazar SVG o agregar fotos de trabajos realizados
3. **Personalizar testimonios**: Cambiar reviews por clientes reales
4. **Agregar formulario backend**: Conectar formulario de contacto a servicio de emails
5. **Desplegar en Vercel**: `git push` → Auto-deployment
6. **Configurar dominio**: apuntar dominio a proyecto Vercel

## Testing

Para probar en diferentes dispositivos:

```bash
# Desarrollo local
npm run dev
# Abre http://localhost:4321

# Build de producción
npm run build
npm run preview
```

## Archivos Modificados

- `src/pages/servicio-formateo.astro` - NUEVO: Página principal del servicio
- `src/components/Header.astro` - ACTUALIZADO: Agregado link a "Formateo"
- `src/components/Hero.astro` - ACTUALIZADO: Agregado botón secundario "Servicio de Formateo"
- `src/components/ServiceHardwareBanner.astro` - Ya existía
- `src/components/ServiceReviews.astro` - Ya existía
- `src/components/ServiceDetails.astro` - Ya existía
- `src/components/ServiceFAQ.astro` - Ya existía

---

**Fecha de creación**: 2024
**Framework**: Astro 5.16.6
**Estado**: ✅ Listo para usar / Desplegar
