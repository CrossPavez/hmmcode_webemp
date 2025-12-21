# Guía de Despliegue en Vercel - Hmmcode

## Paso 1: Preparar el Repositorio en GitHub

### 1.1 Crear cuenta en GitHub (si no tienes)
Visita [github.com](https://github.com) y crea una cuenta gratuita.

### 1.2 Crear repositorio en GitHub
1. Entra a tu GitHub
2. Haz click en "+" (arriba a la derecha)
3. Selecciona "New repository"
4. Nombre: `hmmcode` (o el que prefieras)
5. Descripción: "Sitio web profesional de Hmmcode - PC, Laptop y Console maintenance"
6. Visibilidad: "Public"
7. No inicialices con README (ya lo tenemos)
8. Haz click "Create repository"

### 1.3 Conectar repositorio local con GitHub
En la terminal de tu proyecto:

```bash
cd "c:\Users\hansp\OneDrive\Escritorio\proyectos web\hmmcodecl"

# Inicializar git (si no está)
git init

# Configurar email y nombre
git config user.name "Tu Nombre"
git config user.email "tu.email@example.com"

# Agregar todos los archivos
git add .

# Crear commit inicial
git commit -m "Sitio web Hmmcode - Astro + páginas de servicios"

# Cambiar rama principal a main (si es necesario)
git branch -M main

# Agregar origen remoto (REEMPLAZA CON TU URL)
git remote add origin https://github.com/TU_USUARIO/hmmcode.git

# Subir a GitHub
git push -u origin main
```

## Paso 2: Conectar Vercel

### 2.1 Crear cuenta en Vercel
Visita [vercel.com](https://vercel.com) y:
1. Haz click "Sign Up"
2. Selecciona "Continue with GitHub"
3. Autoriza Vercel a acceder a tu GitHub

### 2.2 Importar proyecto
1. En dashboard de Vercel, haz click "Add New..."
2. Selecciona "Project"
3. Busca el repositorio "hmmcode"
4. Haz click "Import"

### 2.3 Configurar proyecto
La mayoría de configuraciones ya están en `vercel.json`, pero verifica:

**Framework Preset**: Astro (debería detectarse automáticamente)

**Build Command**: 
```
npm run build
```

**Output Directory**: 
```
dist
```

**Root Directory**: 
```
./
```

**Environment Variables**: (Si necesitas en el futuro)
- Deja vacío por ahora

Haz click "Deploy"

## Paso 3: Dominio Personalizado (Opcional)

### 3.1 Si tienes dominio
En Vercel:
1. Abre tu proyecto
2. Settings → Domains
3. Agrega tu dominio
4. Sigue las instrucciones para apuntar los DNS

### 3.2 Sin dominio
Vercel te da una URL gratis como:
```
hmmcode-seven.vercel.app
```

## Paso 4: Actualizar Código (Después)

Cada vez que quieras actualizar el sitio:

```bash
# Hacer cambios en el código

# Guardar cambios
git add .
git commit -m "Descripción de cambios"

# Subir a GitHub
git push

# ¡Vercel se actualiza automáticamente!
```

## Verificar Despliegue

1. Abre [vercel.com](https://vercel.com) dashboard
2. Busca proyecto "hmmcode"
3. Verás un estado de "Deployment"
4. Cuando esté verde ✅ está listo
5. Haz click en la URL para visitar tu sitio

## Troubleshooting

### El build falla
Verifica en Vercel dashboard → Deployments → Ver logs

### Quiero desplegar con cambios locales
```bash
git status              # Ver cambios
git add .              # Agregar todos
git commit -m "Mensaje"
git push               # Envía a GitHub
# Vercel se actualiza automáticamente
```

### Quiero volver a una versión anterior
En Vercel → Deployments → Selecciona deployment anterior → "Promote to Production"

## Estructura del Proyecto Para Vercel

```
hmmcode/
├── src/
│   ├── pages/
│   │   ├── index.astro           (página principal)
│   │   └── servicio-formateo.astro (página de servicio)
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── Services.astro
│   │   ├── ServiceCard.astro
│   │   ├── Portfolio.astro
│   │   ├── ProjectCard.astro
│   │   ├── Contact.astro
│   │   ├── Footer.astro
│   │   ├── ServiceHardwareBanner.astro
│   │   ├── ServiceReviews.astro
│   │   ├── ServiceDetails.astro
│   │   └── ServiceFAQ.astro
│   └── styles/
│       └── global.css
├── public/
├── dist/                          (generado en build)
├── astro.config.mjs
├── vercel.json                    (configuración Vercel)
├── package.json
├── tsconfig.json
└── README.md

```

## Performance & Monitoring

Una vez desplegado en Vercel:

1. **Analytics**: Vercel → Analytics (ver tráfico)
2. **Web Vitals**: Vercel monitorea automáticamente LCP, CLS, FID
3. **Logs**: Vercel → Logs (ver errores/warnings)
4. **Preview URLs**: Cada PR genera URL de preview

## Precios Vercel

- **Hobby (Gratis)**: 100 GB bandwidth/mes, builds limitados
- **Pro**: $20/mes, más bandwidth y builds
- **Enterprise**: Contactar

Para hobby plan es suficiente para comenzar.

## Conclusión

¡Tu sitio estará en línea en minutos! 🚀

**URL después del despliegue**: `https://hmmcode.vercel.app`

O tu dominio personalizado si configuraste uno.

---

**Preguntas?** 
- Documentación Vercel: [vercel.com/docs](https://vercel.com/docs)
- Documentación Astro: [docs.astro.build](https://docs.astro.build)
