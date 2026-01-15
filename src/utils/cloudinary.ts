/**
 * Optimize Cloudinary image URLs with WebP format and advanced compression
 * @param imageUrl - Original Cloudinary URL
 * @param width - Desired width in pixels
 * @param height - Desired height in pixels
 * @param quality - Quality level 1-100 (auto for auto-quality)
 * @returns Optimized URL with f_auto,q_auto compression
 */
export const getOptimizedCloudinaryUrl = (
  imageUrl: string,
  width?: number,
  height?: number,
  quality: 'auto' | number = 'auto'
): string => {
  if (!imageUrl.includes('res.cloudinary.com')) {
    return imageUrl; // No es una URL de Cloudinary, devolver original
  }

  // Extraer la parte de la URL antes del identificador de imagen y transformaciones
  const parts = imageUrl.split('/upload/');
  if (parts.length !== 2) {
    return imageUrl; // Formato de URL inesperado
  }

  // Base transformation with auto-format and quality
  // f_auto serves WebP, AVIF, or original based on browser support
  let transformation = `f_auto,q_${quality}`;
  
  if (width && height) {
    // c_fill crops to exact dimensions; c_limit scales down maintaining aspect ratio
    transformation += `,w_${width},h_${height},c_limit`;
  } else if (width) {
    transformation += `,w_${width}`;
  } else if (height) {
    transformation += `,h_${height}`;
  }

  return `${parts[0]}/upload/${transformation}/${parts[1]}`;
};

/**
 * Generate WebP and AVIF srcset variants for Cloudinary images
 * Useful for <picture> elements with multiple format support
 */
export const getCloudinaryImageVariants = (
  imageUrl: string,
  width: number,
  height: number
) => {
  if (!imageUrl.includes('res.cloudinary.com')) {
    return { webp: imageUrl, avif: imageUrl, original: imageUrl };
  }

  const parts = imageUrl.split('/upload/');
  if (parts.length !== 2) {
    return { webp: imageUrl, avif: imageUrl, original: imageUrl };
  }

  const baseTransform = `w_${width},h_${height},c_limit`;

  return {
    avif: `${parts[0]}/upload/${baseTransform},f_avif,q_auto/${parts[1]}`,
    webp: `${parts[0]}/upload/${baseTransform},f_webp,q_auto/${parts[1]}`,
    original: `${parts[0]}/upload/${baseTransform},f_auto,q_auto/${parts[1]}`,
  };
};

