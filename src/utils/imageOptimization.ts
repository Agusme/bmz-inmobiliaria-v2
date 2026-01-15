/**
 * Utility for lazy-loading images and iframes
 * Reduces LCP and improves Core Web Vitals
 */

export const lazyLoadImage = (img: HTMLImageElement) => {
  if ('loading' in img) {
    img.loading = 'lazy';
  } else {
    // Fallback for browsers that don't support native lazy loading
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src || '';
          observer.unobserve(img);
        }
      });
    });
    imageObserver.observe(img);
  }
};

export const lazyLoadIframe = (
  callback: () => void,
  trigger: 'scroll' | 'interaction' = 'scroll'
): ((element?: HTMLElement) => void) => {
  if (trigger === 'scroll') {
    const iframeObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback();
          iframeObserver.disconnect();
        }
      });
    });

    // Return function to attach observer
    return (element?: HTMLElement) => {
      if (element) {
        iframeObserver.observe(element);
      }
    };
  } else {
    // On-demand loading (click or scroll into view)
    return callback;
  }
};

export const getCloudinaryOptimizedUrl = (
  url: string,
  width: number,
  height: number,
  format: 'auto' | 'webp' | 'avif' = 'auto'
): string => {
  if (!url.includes('res.cloudinary.com')) return url;

  // Extract Cloudinary components
  const urlParts = url.split('/upload/');
  if (urlParts.length !== 2) return url;

  const baseUrl = urlParts[0] + '/upload/';
  const imagePath = urlParts[1];

  // Add optimization parameters: format, quality, width, height
  const optimizations = `f_${format},q_auto,w_${width},h_${height},c_limit/`;

  return baseUrl + optimizations + imagePath;
};
