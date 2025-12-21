# 🎨 Guía: Personalizar tu Portafolio

## Ubicación del Portafolio

El componente se encuentra en: `src/components/Portfolio.astro`

## Cómo personalizar tus proyectos

### Opción 1: Cambiar proyectos existentes

Abre `src/components/Portfolio.astro` y encuentra la sección `<Portfolio.astro>`:

Cada proyecto está definido así:
```astro
<ProjectCard
  title="Nombre del Proyecto"
  description="Descripción breve del proyecto"
  technologies={['React', 'Node.js', 'MongoDB']}
  image="URL_DE_IMAGEN"
  link="https://url-proyecto.com"
  github="https://github.com/usuario/repo"
/>
```

### Parámetros explicados:

- **title**: Nombre de tu proyecto
- **description**: Descripción corta (una o dos líneas)
- **technologies**: Array con las tecnologías usadas (máximo 4)
- **image**: URL de imagen (640x480px recomendado)
- **link**: URL del proyecto en vivo (opcional)
- **github**: URL del repositorio (opcional)

### Ejemplo personalizado:

```astro
<ProjectCard
  title="Mi Tienda Online"
  description="E-commerce con React, integración con Stripe y gestión de inventario."
  technologies={['React', 'Firebase', 'Stripe']}
  image="https://mi-imagen.com/tienda.jpg"
  link="https://mi-tienda.com"
  github="https://github.com/yo/tienda"
/>
```

## Dónde obtener imágenes

### Opciones gratuitas:

1. **Unsplash**: https://unsplash.com
2. **Pexels**: https://pexels.com
3. **Pixabay**: https://pixabay.com
4. **Cloudinary**: https://cloudinary.com (subir tus imágenes)
5. **Imgur**: https://imgur.com

### Cómo usarlas:

1. Descarga o copia la URL de la imagen
2. Reemplaza la URL en el parámetro `image`
3. Tamaño recomendado: 640x480px o similar

## Agregar más proyectos

1. Copia uno de los bloques `<ProjectCard />`
2. Pégalo después del último proyecto
3. Modifica los datos

Ejemplo:
```astro
<ProjectCard
  title="Tu nuevo proyecto"
  description="Descripción"
  technologies={['Tech1', 'Tech2']}
  image="https://imagen.jpg"
  link="https://demo.com"
  github="https://github.com/usuario"
/>
```

## Cambiar el mensaje de contacto

En `src/components/Portfolio.astro`, busca esta sección:

```astro
<div class="portfolio-note">
  <p>💡 <strong>¿Tienes un proyecto en mente?</strong> Contactanos para discutir cómo podemos ayudarte a hacerlo realidad.</p>
  <a href="#contacto" class="cta-link">Solicitar Presupuesto</a>
</div>
```

Personaliza el texto según tus necesidades.

## Recomendaciones

- Incluye entre 3 y 6 proyectos
- Usa imágenes de buena calidad
- Describe en una línea qué hace cada proyecto
- Mantén las tecnologías entre 2-4 por proyecto
- Incluye enlaces a demos o código si es posible

## Estilos de la galería

La galería es responsiva y se adapta automáticamente a:
- 3 columnas en desktop
- 2 columnas en tablet  
- 1 columna en móvil

Puedes cambiar los estilos en la sección `<style>` del archivo `Portfolio.astro`.

---

¡Tu portafolio ahora muestra tus mejores trabajos! 🚀
