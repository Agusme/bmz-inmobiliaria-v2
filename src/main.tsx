import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Cargar los estilos de Slick Carousel de forma asíncrona
// Defer non-critical CSS to improve FCP and LCP
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadSlickStyles);
} else {
  requestIdleCallback(loadSlickStyles, { timeout: 2000 });
}

function loadSlickStyles() {
  const link1 = document.createElement('link');
  link1.rel = 'stylesheet';
  link1.href = 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css';
  link1.media = 'print';
  link1.onload = () => { link1.media = 'all'; };
  document.head.appendChild(link1);

  const link2 = document.createElement('link');
  link2.rel = 'stylesheet';
  link2.href = 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css';
  link2.media = 'print';
  link2.onload = () => { link2.media = 'all'; };
  document.head.appendChild(link2);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
