# 📊 INSTRUCCIONES: Google Analytics 4 + Google Search Console

## 1️⃣ INSTALAR GOOGLE ANALYTICS 4

### Paso 1: Crear cuenta de Google Analytics
1. Ve a [analytics.google.com](https://analytics.google.com)
2. Haz clic en **"Comenzar"**
3. Crear nueva propiedad:
   - Nombre: **Hmmcode**
   - Zona horaria: **Región (Santiago, Chile)**
   - Moneda: **CLP**

### Paso 2: Crear stream web
1. En Analytics → Admin → Propiedades → Streams de datos
2. **Crear stream web**
3. URL del sitio: `https://hmmcode.vercel.app`
4. Nombre: `Hmmcode Website`
5. Copiar el **Measurement ID** (formato: `G-XXXXX`)

### Paso 3: Instalar código de rastreo (HAZ ESTO)
Necesito agregar este script a tu página. Proporciona tu Measurement ID y haré:

```html
<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXXXX');
</script>
```

Reemplaza `G-XXXXXXXXXXXX` con tu Measurement ID

---

## 2️⃣ CONFIGURAR GOOGLE SEARCH CONSOLE

### Paso 1: Verificar sitio en GSC
1. Ve a [search.google.com/search-console](https://search.google.com/search-console)
2. Haz clic en **"Agregar propiedad"**
3. URL del sitio: `https://hmmcode.vercel.app`
4. Google te mostrará dos opciones de verificación:
   - **Recomendado**: Verificación por DNS (mejor)
   - Alternativa: Etiqueta HTML

### Paso 2: Verificación por DNS (Recomendado)
Si tu dominio está en un registrador (Vercel, Namecheap, GoDaddy, etc.):

1. En GSC, selecciona **"Verificación por DNS"**
2. Google te dará un registro TXT
3. Ve a tu registrador de dominios
4. Agrega ese registro TXT a los DNS
5. Espera 24-48 horas para que se propague
6. GSC confirmará automáticamente

### Paso 3: Enviar Sitemap
1. En GSC → Sitemaps
2. Haz clic en **"Agregar/probar nuevo sitemap"**
3. Ingresa: `https://hmmcode.vercel.app/sitemap.xml`
4. Google rastreará tu sitio automáticamente

### Paso 4: Inspeccionar URLs
1. En GSC → Inspección de URL
2. Ingresa: `https://hmmcode.vercel.app`
3. Haz clic en **"Solicitar indexación"**
4. Repite para `/servicio-formateo`

---

## 3️⃣ CONECTAR ANALYTICS CON SEARCH CONSOLE

1. En Analytics → Admin → Configuración de propiedad
2. Busca **"Conexiones de Google Search Console"**
3. Haz clic en **"Vincular"**
4. Selecciona tu propiedad de GSC
5. ✅ Listo, ahora verás datos de búsqueda en Analytics

---

## 4️⃣ CONFIGURAR CONVERSIONES EN ANALYTICS

Para rastrear contactos vía formulario:

1. Analytics → Admin → Eventos
2. Haz clic en **"Crear evento"**
3. Evento de origen: **form_submit** (debe coincidir con tu formulario)
4. Nombre del evento: **Contact Form Submit**
5. Guardar

---

## 5️⃣ MONITOREAR MÉTRICAS CLAVE

### En Google Analytics
- **Sesiones**: Visitas totales
- **Usuarios**: Visitantes únicos
- **Bounce Rate**: % que se van sin interactuar
- **Conversiones**: Envíos de formulario
- **Adquisición**: De dónde vienen los usuarios

### En Google Search Console
- **Posiciones**: Promedio de ranking para keywords
- **CTR**: Click-through rate desde búsquedas
- **Impresiones**: Veces que aparece en resultados
- **Clics**: Veces que hacen clic desde Google

---

## 📋 CHECKLIST

- [ ] Crear cuenta Google Analytics 4
- [ ] Crear stream web y copiar Measurement ID
- [ ] **Me das el Measurement ID para agregar a tu sitio**
- [ ] Verificar sitio en Google Search Console
- [ ] Enviar sitemap a GSC
- [ ] Inspeccionar y solicitar indexación de URLs
- [ ] Conectar Analytics con GSC
- [ ] Configurar eventos de conversión
- [ ] Monitorear métricas por 2-4 semanas

---

## 🔗 LINKS ÚTILES

- [Google Analytics 4](https://analytics.google.com)
- [Google Search Console](https://search.google.com/search-console)
- [Google My Business](https://business.google.com)
- [PageSpeed Insights](https://pagespeed.web.dev)

