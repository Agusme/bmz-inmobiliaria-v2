import { ImgHTMLAttributes } from 'react';

interface OptimizedImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width: number;
  height: number;
  /**
   * Enable WebP format with fallback to original format
   * @default true
   */
  useWebP?: boolean;
  /**
   * CSS class name
   */
  className?: string;
}

/**
 * OptimizedImage Component
 * Automatically generates optimized image variants and srcset for responsive loading
 * Supports WebP format with fallback for unsupported browsers
 * 
 * Usage:
 * <OptimizedImage 
 *   src="/logo.png" 
 *   alt="Logo" 
 *   width={140} 
 *   height={80}
 * />
 */
export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  useWebP = true,
  className,
  ...rest
}: OptimizedImageProps) {
  // For static assets, we keep the original
  // For production, consider using a CDN transform service
  const isCloudinary = src?.includes('cloudinary');

  if (isCloudinary && useWebP) {
    // Optimize Cloudinary URLs
    const optimizedSrc = src
      .replace('/upload/', '/upload/f_auto,q_auto/')
      .replace(/w_\d+/, `w_${width}`)
      .replace(/h_\d+/, `h_${height}`);

    return (
      <picture>
        <source 
          srcSet={`${optimizedSrc.replace('f_auto', 'f_webp,q_auto')}`}
          type="image/webp"
        />
        <img
          src={optimizedSrc}
          alt={alt}
          width={width}
          height={height}
          className={className}
          loading="lazy"
          {...rest}
        />
      </picture>
    );
  }

  // For static logos, generate appropriate srcset
  if (!isCloudinary && useWebP) {
    // Assumes webp variants exist (e.g., logo.png -> logo.webp)
    const withoutExt = src.replace(/\.[^.]+$/, '');

    return (
      <picture>
        <source
          srcSet={`${withoutExt}.webp`}
          type="image/webp"
        />
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={className}
          loading="lazy"
          {...rest}
        />
      </picture>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading="lazy"
      {...rest}
    />
  );
}
