# Guía Completa - De cero a Vercel 🚀

## ✅ Proyecto completado

Tu sitio web con Astro está completamente creado y listo para usar. Aquí está todo lo que necesitas saber:

## 📦 Qué incluye el proyecto

✅ **Sitio web profesional** con:
- Página principal responsiva
- Presentación de 3 servicios de mantenimiento
- Formulario de contacto
- Navegación fluida
- Diseño moderno y atractivo

✅ **Configuración lista para:**
- Desarrollo local
- Compilación a producción
- Despliegue en Vercel

## 🚀 Pasos para publicar en GitHub y Vercel

### Paso 1: Crear repositorio en GitHub

1. Ve a https://github.com/new
2. Llena los datos:
   - **Repository name**: Ej: `techmaint` o `nombre-empresa-web`
   - **Description**: "Sitio web de servicios de mantenimiento"
   - Selecciona **Public** o **Private**
   - NO marques "Initialize with README"
3. Click en **Create repository**

### Paso 2: Conectar proyecto local con GitHub

En tu terminal (desde la carpeta del proyecto):

```bash
git remote add origin https://github.com/TU-USUARIO/TU-REPO.git
git branch -M main
git add .
git commit -m "Proyecto TechMaint - Sitio web de servicios"
git push -u origin main
```

**Nota**: Reemplaza `TU-USUARIO` y `TU-REPO` con tus datos reales

### Paso 3: Conectar Vercel

#### Opción 1: Desde Vercel (Recomendado)

1. Ve a https://vercel.com
2. Si no tienes cuenta, crea una (puedes usar GitHub)
3. Click en **Add New** → **Project**
4. Selecciona tu repositorio de GitHub
5. Click en **Import**
6. En Settings, puedes dejar todo por defecto
7. Click en **Deploy**

**¡Listo!** Tu sitio estará en vivo en una URL como:
```
https://tu-repo.vercel.app
```

#### Opción 2: Con Vercel CLI

```bash
npm i -g vercel
vercel login
vercel
```

## 🎨 Personalizar el sitio

Antes de publicar, personaliza estos archivos:

### 1. Cambiar nombre de empresa

**Archivo**: `src/components/Header.astro` (línea ~8)
```astro
<h1>TU EMPRESA</h1>
```

**Archivo**: `src/components/Footer.astro` (línea ~25)
```astro
<h4>TU EMPRESA</h4>
```

### 2. Cambiar información de contacto

**Archivo**: `src/components/Contact.astro`

Busca y actualiza:
- Email: `info@techmaint.com` → `tu-email@tudominio.com`
- Teléfono: `+34 123 456 789` → tu teléfono
- Ubicación: `Tu ciudad, Tu país`

### 3. Personalizar servicios

**Archivo**: `src/components/Services.astro`

Modifica los `ServiceCard` para cambiar:
- Nombres (Ej: "Soporte Técnico 24/7")
- Descripciones
- Características (lista de features)
- Precios

### 4. Cambiar colores (opcional)

Busca estos colores en los componentes:
- `#667eea` (Morado azulado)
- `#764ba2` (Morado oscuro)

Reemplaza con tus colores preferidos.

## 🧪 Pruebas antes de publicar

```bash
# Iniciar servidor local
npm run dev

# Ver en http://localhost:3000
```

Verifica:
- ✅ Todos los textos están correctos
- ✅ Los links funcionan
- ✅ Formulario de contacto se ve bien
- ✅ El diseño se ve bien en móvil (abre DevTools: F12)

## 📱 Probar en dispositivos

1. Anota tu IP local (en la terminal donde corres `npm run dev`)
2. Desde tu teléfono, accede a: `http://TU-IP:3000`

## 📞 Información importante

- **Build time**: ~1-2 minutos en Vercel
- **Tamaño**: ~50-100 KB comprimido (muy rápido)
- **Actualizaciones**: Cada push a main se despliega automáticamente
- **Dominio custom**: Puedes agregar tu dominio en Vercel Settings

## 🔗 Links útiles

- [Documentación Astro](https://docs.astro.build)
- [Vercel Dashboard](https://vercel.com/dashboard)
- [GitHub](https://github.com)

## ❓ Preguntas frecuentes

**P: ¿Cuánto tiempo tarda en desplegarse en Vercel?**
R: Normalmente 1-2 minutos desde que haces push a GitHub

**P: ¿Puedo usar mi propio dominio?**
R: Sí, en Vercel Settings > Domains

**P: ¿Cómo agrego más secciones?**
R: Crea nuevos componentes en `src/components/` e impórtalos en `index.astro`

**P: ¿Es gratis Vercel?**
R: Sí, el plan gratuito incluye todo lo necesario

---

**¡Tu sitio web está listo! 🎉**

Siguiendo estos pasos tendrás tu página web profesional en vivo en menos de 10 minutos.
