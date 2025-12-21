# 🚀 DEPLOYMENT A VERCEL - PASO A PASO

## ✅ Pre-requisitos

Antes de desplegar, asegúrate de tener:
- [ ] Cuenta en GitHub (https://github.com)
- [ ] Cuenta en Vercel (https://vercel.com)
- [ ] Git instalado en tu computadora
- [ ] Proyecto en una carpeta local

---

## 🔧 PASO 1: Preparar el Proyecto Localmente

### 1.1 Verificar que todo funciona

```bash
# Ir a la carpeta del proyecto
cd "c:\Users\hansp\OneDrive\Escritorio\proyectos web\hmmcodecl"

# Instalar dependencias
npm install

# Compilar el proyecto
npm run build

# Verificar que salga: "2 page(s) built in 1.08s - Complete!"
```

**Resultado esperado:**
```
✓ Completed in 1.08s
2 page(s) built in 1.08s
Build complete!
```

### 1.2 Verificar en local

```bash
# Correr servidor local
npm run dev

# Abre en navegador: http://localhost:4321
# Verifica:
# ✅ Página carga
# ✅ WhatsApp botón visible
# ✅ CROBanner visible
# ✅ Footer con WhatsApp
# ✅ Links funcionan
```

**Ctrl+C** para detener el servidor

---

## 📌 PASO 2: Subir a GitHub

### 2.1 Crear repositorio en GitHub

1. Abre https://github.com/new
2. Nombre del repositorio: `hmmcode` (o lo que prefieras)
3. Descripción: "Website CRO optimizado con WhatsApp"
4. Selecciona: Public (para que Vercel pueda leer)
5. Click: Create repository

### 2.2 Conectar git local con GitHub

```bash
# Ir a la carpeta del proyecto
cd "c:\Users\hansp\OneDrive\Escritorio\proyectos web\hmmcodecl"

# Inicializar git (si no está iniciado)
git init

# Agregar GitHub como origen
git remote add origin https://github.com/TU_USUARIO/hmmcode.git

# Cambiar rama a main (si no está)
git branch -M main

# Agregar todos los archivos
git add .

# Crear commit inicial
git commit -m "Initial commit: Hmmcode website with CRO implementation"

# Subir a GitHub
git push -u origin main
```

**Resultado esperado:**
```
✓ Pushing to https://github.com/TU_USUARIO/hmmcode.git
✓ Done
```

---

## 🌐 PASO 3: Desplegar en Vercel

### 3.1 Conectar Vercel con GitHub

1. Abre https://vercel.com
2. Click: "Login" (usa cuenta de GitHub)
3. Autoriza Vercel a acceder a GitHub
4. Click: "Add new..." → "Project"
5. Selecciona: El repositorio `hmmcode`
6. Click: "Import"

### 3.2 Configurar el Deploy

En la página de configuración:

- **Project Name:** hmmcode (o personalizado)
- **Framework:** Astro (debería detectarlo automáticamente)
- **Root Directory:** . (raíz)
- **Build Command:** `npm run build` (automático)
- **Output Directory:** `dist` (automático)

Click: **Deploy**

⏳ Espera 1-2 minutos mientras Vercel construye y despliega.

### 3.3 ¡Éxito!

Una vez completado, verás:
```
✓ Deployment successful!
🎉 Your site is live at: https://hmmcode.vercel.app
```

---

## 🎁 PASO 4: Configurar Dominio (Opcional)

Si quieres usar tu propio dominio en lugar de vercel.app:

### 4.1 Comprar dominio

Opciones:
- **Namecheap** (barato, confiable)
- **GoDaddy** (popular)
- **Google Domains** (simple)
- **Local.com.ar** (regional)

Costo: ~$10-15/año

### 4.2 Conectar con Vercel

1. En Vercel, ve a tu proyecto
2. Settings → Domains
3. Click: "Add Domain"
4. Ingresa tu dominio
5. Sigue las instrucciones de DNS

Una vez conectado:
```
https://midominio.com ← Tu sitio aquí
```

---

## ✅ VERIFICACIONES POST-DEPLOY

Después de desplegar, verifica:

### En el navegador:
- [ ] Sitio carga en https://hmmcode.vercel.app
- [ ] Header y navegación visibles
- [ ] Hero section funciona
- [ ] Servicios se ven bien
- [ ] WhatsApp button flotante (esquina inf-derecha)
- [ ] CROBanner aparece
- [ ] CROTrust con testimonios
- [ ] Footer con WhatsApp link
- [ ] Formulario de contacto
- [ ] Dark mode funciona (si lo activas)

### En Mobile:
- [ ] Todo se ve responsive
- [ ] WhatsApp botón clickeable
- [ ] CTA buttons son grandes (48px+)
- [ ] No hay overflow horizontal

### Links Importantes:
- [ ] WhatsApp button abre https://wa.me/56948645816
- [ ] CROBanner CTA funciona
- [ ] Footer link abre WhatsApp
- [ ] Links internos funcionan
- [ ] Formulario se puede enviar

---

## 📊 MONITOREAR DEPLOYMENT

### En Vercel Dashboard:

1. Ve a https://vercel.com/dashboard
2. Selecciona tu proyecto `hmmcode`
3. Verifica:
   - **Deployments:** Último debe estar "✓ Production"
   - **Analytics:** Pages, web vitals, etc.
   - **Logs:** Si hay errores

### Google Analytics (Opcional pero Recomendado):

1. Crea cuenta en https://analytics.google.com
2. Agrega tu sitio
3. Rastrea:
   - Page views
   - Bounce rate
   - WhatsApp clicks
   - Form submissions

---

## 🔄 ACTUALIZACIONES FUTURAS

Una vez desplegado, cualquier cambio que hagas:

```bash
# 1. Haz cambios en tu editor
# Ej: Cambiar número WhatsApp en WhatsAppButton.astro

# 2. Confirma cambios en git
git add .
git commit -m "feat: Update WhatsApp number to new contact"
git push origin main

# 3. Vercel automáticamente redeploya
# Verifica en: https://vercel.com/dashboard
```

**¡No necesitas hacer nada más! Vercel se encarga del deploy automático.**

---

## 🐛 TROUBLESHOOTING

### Problema: "Build failed"

**Solución:**
```bash
# 1. Verifica localmente
npm run build

# 2. Si hay error, corrígelo
# 3. Sube de nuevo
git push origin main
```

### Problema: "My custom domain doesn't work"

**Solución:**
1. Ve a dominio registrador (Namecheap, GoDaddy, etc.)
2. Busca DNS o Name Servers
3. Sigue instrucciones de Vercel
4. Espera 24-48 horas para que propague

### Problema: "Page loads but styles are broken"

**Solución:**
```bash
# Vercel cache, espera 5 minutos o:
# En Vercel Dashboard → Deployments → Redeploy
```

### Problema: "WhatsApp button no funciona en mobile"

**Solución:**
1. Verifica que el número esté correcto (+569...)
2. Revisa console (F12 → Console) por errores
3. Prueba el link directamente: https://wa.me/56948645816

---

## 🎉 ¡HECHO!

Tu sitio está ahora en vivo en:

```
🌐 https://hmmcode.vercel.app
```

O con dominio personalizado:
```
🌐 https://tudominio.com
```

### Próximos pasos:
1. ✅ Compartir link en redes sociales
2. ✅ Agregar a Google Search Console
3. ✅ Configurar Google Analytics
4. ✅ Monitorear conversiones
5. ✅ Hacer A/B testing
6. ✅ Optimizar basado en datos

---

## 📱 COMPARTIR EN REDES

```
¡Hola! 🎉 Ahora puedes encontrarnos en:
🌐 https://hmmcode.vercel.app
📱 +569 48645816 (WhatsApp)

Servicio profesional de mantenimiento de PCs y laptops.
```

---

## 📞 SOPORTE VERCEL

Si necesitas ayuda:
- **Documentación:** https://vercel.com/docs
- **Status Page:** https://vercel.com/status
- **Support:** https://vercel.com/support

---

**Última actualización:** Enero 2025  
**Estado:** Deploy Step-by-Step Ready  

¡Tu web Hmmcode está lista para el mundo! 🚀
