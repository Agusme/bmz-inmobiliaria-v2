import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Cargar los estilos de Slick Carousel de forma asíncrona
setTimeout(() => {
  const link1 = document.createElement('link');
  link1.rel = 'stylesheet';
  link1.href = 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css'; // Usar CDN para Slick CSS
  document.head.appendChild(link1);

  const link2 = document.createElement('link');
  link2.rel = 'stylesheet';
  link2.href = 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css'; // Usar CDN para Slick Theme CSS
  document.head.appendChild(link2);
}, 0);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
