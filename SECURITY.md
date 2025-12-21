# 🔐 GUÍA DE SEGURIDAD - DATOS CONFIDENCIALES

## ⚠️ INFORMACIÓN CONFIDENCIAL EN TU GIT

Se encontró la siguiente información que podría ser sensible:

### 🚨 CRÍTICO - CAMBIAR/ELIMINAR:
1. **Formspree ID**: `mgvgqdap` en `Contact.astro`
   - Esta es tu ID pública de formularios
   - ⚠️ Cualquiera puede abusar del formulario
   - **ACCIÓN**: Cambiar a variable de entorno o crear nuevo form

2. **Email público**: `hmmcodecl@gmail.com`
   - ✅ OK - Es intencional que sea público
   - Se ve en Contact.astro, Footer.astro
   - Se usa en JSON-LD Schema

### ✅ INFORMACIÓN PÚBLICA (Sin riesgo):
- Número de teléfono: +56948645816
- Nombre del negocio: Hmmcode
- URL del sitio: hmmcode.vercel.app
- Meta información en Schema.org

### 🔒 INFORMACIÓN PRIVADA (Nunca en Git):
- Google API Keys
- Contraseñas de Gmail
- Tokens de Formspree completos
- Credenciales de bases de datos
- Claves de API privadas

---

## 🛡️ PROTECCIÓN: ARCHIVO `.env`

### 1️⃣ Crear `.env.local` (NUNCA COMMITEAR)
```bash
# .env.local
PUBLIC_FORMSPREE_ID=mgvgqdap
PUBLIC_CONTACT_EMAIL=hmmcodecl@gmail.com
PUBLIC_GA_MEASUREMENT_ID=G-XXXXX
```

### 2️⃣ Verificar `.gitignore`
Tu `.gitignore` YA tiene:
```
.env
.env.production
```

✅ **ESTÁ BIEN** - Los archivos `.env*` no se commitean

### 3️⃣ Usar variables en Astro
**Antes (en Contact.astro):**
```astro
<form action="https://formspree.io/f/mgvgqdap" method="POST">
```

**Después:**
```astro
<form action={`https://formspree.io/f/${import.meta.env.PUBLIC_FORMSPREE_ID}`} method="POST">
```

---

## 📋 CHECKLIST DE SEGURIDAD

- [x] `.gitignore` contiene `.env`
- [x] Email público (OK)
- [x] Teléfono público (OK)
- [ ] **REVISAR**: Formspree ID en URL pública
- [ ] **AGREGAR**: Variables de entorno para datos sensibles
- [ ] **VERIFICAR**: No hay contraseñas/tokens en código
- [ ] **REVISAR**: GitHub no tiene datos privados históricos

---

## 🚀 PRÓXIMOS PASOS

### Opción 1: AHORA (Recomendado)
1. Crea `.env.local` localmente (no en Git)
2. Mueve Formspree ID a variables de entorno
3. Reemplaza URLs hardcodeadas con `import.meta.env`

### Opción 2: DESPUÉS
1. Monitorea [GitHub Secret Scanner](https://github.com/settings/security/alerts)
2. Si filtra accidentalmente: [GitHub revoke tokens](https://github.com/settings/tokens)

---

## 💡 MEJORES PRÁCTICAS

✅ **HACER:**
- Usar `.env` para datos sensibles
- Prefijar variables públicas con `PUBLIC_`
- Documentar en `.env.example`
- Revisar antes de cada commit

❌ **NO HACER:**
- Hardcodear contraseñas en código
- Commitear `.env` o archivos secretos
- Compartir URLs privadas públicamente
- Usar tokens en frontend

---

## 🔍 REVISAR HISTORIAL DE GIT

Si cometiste error:
```bash
# Ver qué archivos se commiteron
git log --name-status --oneline

# Ver contenido de archivo en commit anterior
git show COMMIT_ID:ruta/al/archivo

# Limpiar histórico (difícil, evita si es posible)
git filter-branch --tree-filter 'rm -f secreto.txt' -- --all
```

---

## 📞 EN CASO DE FUGA

1. **GitHub**: Regenera tokens en Settings → Developer settings
2. **Formspree**: Crea nuevo form ID en formspree.io
3. **Email**: No hay riesgo si es pública
4. **Historial Git**: No se puede borrar completamente (es distribuido)

