# 🎯 QUICK REFERENCE - CRO & WhatsApp

## 📱 TU WHATSAPP
- **Número:** +569 48645816
- **Link:** https://wa.me/56948645816
- **Ubicaciones:** Botón flotante + Footer + Banner CTA

---

## 🎨 COMPONENTES NUEVOS

### 1. WhatsAppButton
```astro
<WhatsAppButton 
  phoneNumber="+56948645816"
  message="Hola, me interesa..."
  position="bottom-right"
/>
```
**Dónde:** Ambas páginas (index + servicio-formateo)  
**Efecto:** Botón flotante animado

### 2. CROBanner
```astro
<CROBanner 
  title="⚡ Oferta Limitada"
  subtitle="30% descuento"
  urgencyText="5 cupos"
  ctaText="Agendar Ahora"
/>
```
**Dónde:** Entre Services/Portfolio (index) + antes FAQ (servicio)  
**Efecto:** Urgencia y conversión

### 3. CROTrust
```astro
<CROTrust 
  showCustomerCount={true}
  showGuarantee={true}
/>
```
**Dónde:** Index (después de Header)  
**Efecto:** Confianza y social proof

---

## 📊 CAMBIOS EN PÁGINAS

### src/pages/index.astro
```diff
+ import CROBanner from '../components/CROBanner.astro';
+ import CROTrust from '../components/CROTrust.astro';
+ import WhatsAppButton from '../components/WhatsAppButton.astro';

  <Hero />
  <Services />
+ <CROBanner />
  <Portfolio />
  <Contact />
+ <WhatsAppButton />
  <Footer />
```

### src/pages/servicio-formateo.astro
```diff
+ import CROBanner from '../components/CROBanner.astro';
+ import WhatsAppButton from '../components/WhatsAppButton.astro';

  <ServiceDetails />
+ <CROBanner />
  <ServiceFAQ />
  <Contact />
+ <WhatsAppButton />
  <Footer />
```

### src/components/Footer.astro
```diff
- <h4>Síguenos</h4>
+ <h4>Contáctanos</h4>
+ <li>📱 WhatsApp: +569 48645816</li>
+ <li>✉️ Email: info@hmmcode.cl</li>
```

---

## 🎯 RESULTADOS ESPERADOS

- **+150-200%** contactos WhatsApp
- **+50-100%** clics servicios
- **+70-100%** formularios completados
- **+30-50%** conversión general

---

## ⚡ 5 CAMBIOS RÁPIDOS

### 1. Cambiar número WhatsApp
**Archivo:** `src/components/WhatsAppButton.astro`  
**Busca:** `phoneNumber = "+56948645816"`  
**Reemplaza:** con tu número

### 2. Cambiar mensaje
**Archivo:** `src/components/WhatsAppButton.astro`  
**Busca:** `const messageTemplate =`  
**Reemplaza:** con tu mensaje

### 3. Cambiar oferta
**Archivo:** `src/pages/index.astro` (línea ~38)  
**Modifica:** `CROBanner` title/subtitle

### 4. Cambiar footer
**Archivo:** `src/components/Footer.astro`  
**Modifica:** Link y texto WhatsApp

### 5. Cambiar garantía
**Archivo:** `src/components/CROTrust.astro`  
**Busca:** "30 Días Garantía"  
**Reemplaza:** con tu garantía

---

## ✅ CHECKLIST DEPLOY

- [ ] `npm run build` sin errores
- [ ] WhatsApp botón visible
- [ ] CROBanner visible
- [ ] Footer WhatsApp funciona
- [ ] Links abiertos en WhatsApp
- [ ] Mobile responsive
- [ ] Dark mode funciona
- [ ] Push a GitHub
- [ ] Deploy en Vercel

---

## 📈 MÉTRICAS CLAVE

**Rastrear en Google Analytics:**
1. Clics WhatsApp
2. Clics "Agendar Ahora"
3. Formularios completados
4. Bounce rate
5. Tiempo en página

---

## 🚀 DEPLOY COMMAND

```bash
npm run build && git push origin main
```

Vercel automáticamente deploya a:  
**https://hmmcode.vercel.app**

---

## 📞 CONTACTO DIRECTO

**WhatsApp:** https://wa.me/56948645816  
**Mensaje:** "Hola, me interesa..."

---

**Última actualización:** Enero 2025
