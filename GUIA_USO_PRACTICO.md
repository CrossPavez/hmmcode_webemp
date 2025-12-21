# 💡 GUÍA DE USO - Ejemplos Prácticos

## Cómo Usar Las Nuevas Funcionalidades

---

## 1️⃣ Google Reviews Widget

### Ejemplo Básico
```astro
---
import GoogleReviewsWidget from '../components/GoogleReviewsWidget.astro';
---

<GoogleReviewsWidget />
```

### Con Opciones Personalizadas
```astro
---
import GoogleReviewsWidget from '../components/GoogleReviewsWidget.astro';
---

<GoogleReviewsWidget 
  title="Qué dicen nuestros clientes"
  subtitle="Reseñas verificadas de Google"
  maxReviews={6}
  layout="carousel"
  showBadge={true}
/>
```

### Editar Reviews
Archivo: `src/data/googleReviewsConfig.ts`

```typescript
export const googleReviewsConfig = {
  businessName: 'Hmmcode - Mi Empresa',
  googleUrl: 'https://www.google.com/maps/place/Hmmcode',
  averageRating: 4.9,
  totalReviews: 52,
  reviews: [
    {
      id: 1,
      author: 'Juan Pérez',
      rating: 5,
      date: '2024-12-20',
      text: 'Excelente servicio, muy recomendado',
      verified: true,
    },
    {
      id: 2,
      author: 'María López',
      rating: 5,
      date: '2024-12-19',
      text: 'Servicio rápido y profesional',
      verified: true,
    },
    // Agrega más...
  ],
};
```

### Props Disponibles
| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `title` | string | "Lo que dicen nuestros clientes" | Título de la sección |
| `subtitle` | string | "Reseñas verificadas..." | Subtítulo |
| `maxReviews` | number | 4 | Número de reviews a mostrar |
| `showBadge` | boolean | true | Mostrar badge de Google |
| `layout` | 'grid' \| 'carousel' | 'grid' | Grid o carousel |

---

## 2️⃣ Formulario Avanzado

### Uso Básico
```astro
---
import ContactFormAdvanced from '../components/ContactFormAdvanced.astro';
---

<ContactFormAdvanced />
```

### Personalizado
```astro
---
import ContactFormAdvanced from '../components/ContactFormAdvanced.astro';
---

<ContactFormAdvanced
  title="¿Tienes preguntas?"
  subtitle="Rellena el formulario y nos contactaremos en 24 horas"
  showPhone={true}
  showSubject={true}
  submitText="Enviar Consulta"
/>
```

### Cambiar Email de Contacto
Archivo: `src/components/ContactFormAdvanced.astro`

Busca esta línea:
```astro
<a href="mailto:info@hmmcode.cl">info@hmmcode.cl</a>
```

Y cambia por tu email:
```astro
<a href="mailto:tu@email.com">tu@email.com</a>
```

### Cambiar Teléfono
Busca:
```astro
<a href="tel:+56912345678">+56 9 1234 5678</a>
```

Cambia por:
```astro
<a href="tel:+56987654321">+56 9 8765 4321</a>
```

### Props Disponibles
| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `title` | string | "Ponte en contacto" | Título formulario |
| `subtitle` | string | "Completa el formulario..." | Subtítulo |
| `showPhone` | boolean | true | Mostrar campo teléfono |
| `showSubject` | boolean | true | Mostrar selector asunto |
| `submitText` | string | "Enviar Mensaje" | Texto botón |

### Validación Automática
El formulario valida automáticamente:
- ✅ Nombre: 3-100 caracteres
- ✅ Email: formato válido
- ✅ Teléfono: patrón opcional
- ✅ Mensaje: 10-2000 caracteres
- ✅ Términos: deben aceptarse

Mensajes de error aparecen al lado de cada campo.

---

## 3️⃣ SEO - Utilities

### En página index.astro
```astro
---
import { generateLocalBusinessSchema } from '../lib/seoUtils';

const localBusinessSchema = generateLocalBusinessSchema({
  name: 'Hmmcode',
  description: 'Especialistas en mantenimiento de PC y laptops',
  image: 'https://hmmcode.vercel.app/og-image.png',
  phone: '+56912345678',
  email: 'info@hmmcode.cl',
  address: 'Santiago',
  city: 'Santiago',
  region: 'RM',
  postalCode: '',
  url: 'https://hmmcode.vercel.app',
});
---

<head>
  <script type="application/ld+json" set:html={localBusinessSchema} />
</head>
```

### Schema para FAQ
```astro
---
import { generateFAQSchema } from '../lib/seoUtils';

const faqs = [
  {
    question: '¿Cuáles son tus horarios?',
    answer: 'Estamos disponibles de lunes a viernes de 9 a 18 horas.',
  },
  {
    question: '¿Hacen servicio a domicilio?',
    answer: 'Sí, ofrecemos servicio a domicilio en toda Santiago.',
  },
];

const faqSchema = generateFAQSchema(faqs);
---

<script type="application/ld+json" set:html={faqSchema} />
```

### Validar Schemas
1. Abre [Google Schema Validator](https://schema.org/docs/schemas.html)
2. Copia el JSON de tu schema
3. Verifica que esté correcto

---

## 4️⃣ Sitemap & Robots

### Acceder
- Sitemap: `/sitemap.xml`
- Robots: `/robots.txt`

### Agregar Nueva Página
Archivo: `src/pages/sitemap.xml.ts`

```typescript
const pages = [
  {
    url: '/',
    lastmod: new Date().toISOString().split('T')[0],
    priority: '1.0',
    changefreq: 'weekly',
  },
  {
    url: '/servicio-formateo',
    lastmod: new Date().toISOString().split('T')[0],
    priority: '0.9',
    changefreq: 'weekly',
  },
  // Agrega nueva página aquí:
  {
    url: '/blog',  // NUEVA
    lastmod: new Date().toISOString().split('T')[0],
    priority: '0.8',
    changefreq: 'monthly',
  },
];
```

### Cambiar Robots.txt
Archivo: `public/robots.txt`

Ejemplo para bloquear rutas:
```
User-agent: *
Allow: /
Disallow: /admin
Disallow: /private
Disallow: /temp

Sitemap: https://hmmcode.vercel.app/sitemap.xml
Crawl-delay: 1
```

---

## 5️⃣ Caché & Headers

### Verificar Headers en DevTools
1. Abre tu sitio
2. F12 → Network
3. Selecciona un archivo HTML
4. Tab "Headers"
5. Busca "Cache-Control"

Deberías ver:
```
Cache-Control: public, max-age=3600, s-maxage=86400
```

### Limpiar Caché en Vercel
1. Abre [vercel.com](https://vercel.com)
2. Proyecto → Deployments
3. Click en último deployment
4. Click "..." → "Redeploy"

---

## 🔄 Ejemplos de Integración

### Opción 1: Reemplazar Contact Actual
En `src/pages/servicio-formateo.astro`:

**Antes:**
```astro
import Contact from '../components/Contact.astro';

<Contact />
```

**Después:**
```astro
import ContactFormAdvanced from '../components/ContactFormAdvanced.astro';

<ContactFormAdvanced 
  title="Solicita el Servicio"
  submitText="Agendar Formateo"
/>
```

### Opción 2: Agregar Reviews en Servicio
En `src/pages/servicio-formateo.astro`:

**Agrega antes de Contact:**
```astro
import GoogleReviewsWidget from '../components/GoogleReviewsWidget.astro';

<GoogleReviewsWidget 
  maxReviews={4}
  layout="grid"
/>
```

### Opción 3: Reviews en Página Principal
En `src/pages/index.astro`:

```astro
import GoogleReviewsWidget from '../components/GoogleReviewsWidget.astro';

<!-- Después de Services: -->
<GoogleReviewsWidget 
  title="Testimonios de Clientes"
  layout="carousel"
  maxReviews={6}
/>
```

---

## 🧪 Testing

### Test de Formulario
```javascript
// Abre consola (F12 → Console)

// Llenar formulario
document.getElementById('name').value = 'Test User';
document.getElementById('email').value = 'test@example.com';
document.getElementById('subject').value = 'formateo';
document.getElementById('message').value = 'Test message with more than 10 characters';
document.getElementById('terms').checked = true;

// Submit
document.getElementById('contactForm').requestSubmit();
```

### Test de Reviews
```javascript
// Verificar que cargaron
console.log(document.querySelectorAll('.review-card').length);
// Debería mostrar número de reviews
```

### Test de Sitemap
```bash
# Abre en navegador
http://localhost:4321/sitemap.xml

# Debería mostrar XML con páginas
```

---

## 📱 Testing en Móvil

### iOS
1. Abre en Safari
2. Espera a que cargue
3. Verifica:
   - ✅ Input no hace zoom (16px)
   - ✅ Botones clickeables (44px+)
   - ✅ Notch no oculta contenido
   - ✅ Forms responsive

### Android
1. Abre en Chrome
2. Toca campos
3. Verifica:
   - ✅ Teclado no oculta botones
   - ✅ Touch targets 48px+
   - ✅ Scroll suave
   - ✅ Formulario visible

---

## ⚡ Performance

### Verificar Métricas
1. Lighthouse (F12 → Lighthouse)
2. Resultados:
   - ✅ Performance: 95+
   - ✅ Accessibility: 95+
   - ✅ Best Practices: 100
   - ✅ SEO: 100

### Optimize Images
Si agregas imágenes:
```astro
<Image
  src={imageFile}
  alt="Descripción"
  width={400}
  height={300}
  quality={80}
/>
```

---

## 🚀 Deploy

### Pre-Deploy Checklist
- [ ] npm run build (sin errores)
- [ ] Actualizar googleReviewsConfig.ts
- [ ] Cambiar email/teléfono
- [ ] Verificar /sitemap.xml
- [ ] Verificar /robots.txt
- [ ] Test en móvil

### Deploy
```bash
git add .
git commit -m "Agregar funcionalidades avanzadas"
git push origin main

# Vercel automáticamente despliega
# Espera 1-2 minutos
# Tu sitio estará en vivo
```

---

## 📞 Soporte

### Archivos de Referencia
- Componentes: `src/components/`
- Config: `src/data/googleReviewsConfig.ts`
- Utils: `src/lib/seoUtils.ts`
- Build: `vercel.json`
- Docs: `FUNCIONALIDADES_AVANZADAS.md`

### Errores Comunes

**"Script not working in form"**
→ Verifica que el `id` del formulario coincida

**"Reviews not showing"**
→ Verifica `googleReviewsConfig.ts` tiene datos

**"Email no funciona"**
→ Cambia `info@techmaint.com` por tu email real

**"Sitemap vacío"**
→ Corre `npm run build` para generar

---

## ✨ Tips & Tricks

### Agregar Más Campos al Formulario
1. Abre `ContactFormAdvanced.astro`
2. Duplica una sección `<div class="form-group">`
3. Cambia id, name, label
4. Agrega validación en el script

### Cambiar Colores
En componentes, busca:
- `#667eea` (azul)
- `#764ba2` (púrpura)

Y reemplaza por tus colores.

### Agregar Animaciones
```css
/* En componente */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.elemento {
  animation: fadeIn 0.5s ease;
}
```

---

## 🎓 Aprende Más

- **Astro Docs**: https://docs.astro.build
- **Vercel Docs**: https://vercel.com/docs
- **SEO**: https://schema.org
- **Accesibilidad**: https://www.w3.org/WAI/

---

**¡Ahora estás listo para usar todas las funcionalidades!** 🎉

Cualquier pregunta, revisa los archivos `.md` de documentación.

**Happy coding!** 🚀
