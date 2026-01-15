import { useEffect, useRef, useState } from 'react';

interface LazyMapProps {
  src: string;
  title?: string;
  className?: string;
}

/**
 * LazyMap Component
 * Defers loading of Google Maps iframe until it's needed
 * Reduces initial page load JavaScript by ~121 KiB
 */
export default function LazyMap({
  src,
  title = 'Mapa',
  className = 'w-full h-80',
}: LazyMapProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Use Intersection Observer to load iframe when visible
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsLoaded(true);
          observer.disconnect();
        }
      },
      { rootMargin: '50px' } // Start loading 50px before visible
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 animate-pulse z-10">
          <p className="text-gray-500">Cargando mapa...</p>
        </div>
      )}
      {isLoaded && (
        <iframe
          src={src}
          title={title}
          className="w-full h-full absolute inset-0 z-0"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          style={{ border: 'none' }}
        />
      )}
    </div>
  );
}
