// Configuración de Google Reviews
// Actualiza estos datos con tus reseñas reales de Google My Business

export const googleReviewsConfig = {
  businessName: 'Hmmcode - Formateo de Computadores',
  googleUrl: 'https://www.google.com/maps/place/Hmmcode',
  averageRating: 4.9,
  totalReviews: 48,
  
  reviews: [
    {
      id: 1,
      author: 'Carlos M.',
      rating: 5,
      date: '2024-12-15',
      text: 'Excelente servicio. El técnico fue muy profesional y rápido. Mi computador funciona como nuevo.',
      verified: true,
    },
    {
      id: 2,
      author: 'María González',
      rating: 5,
      date: '2024-12-10',
      text: 'Muy satisfecha con el trabajo. Vinieron a domicilio, muy puntuales y eficientes.',
      verified: true,
    },
    {
      id: 3,
      author: 'Juan Pérez',
      rating: 5,
      date: '2024-12-08',
      text: 'Precio justo y excelente atención. Recomendado 100%.',
      verified: true,
    },
    {
      id: 4,
      author: 'Patricia R.',
      rating: 5,
      date: '2024-12-05',
      text: 'Servicio a domicilio muy bueno. Recuperé todos mis datos y el PC está optimizado.',
      verified: true,
    },
  ],
};

export type GoogleReview = typeof googleReviewsConfig.reviews[0];
