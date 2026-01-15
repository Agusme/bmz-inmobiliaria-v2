export const getOptimizedCloudinaryUrl = (imageUrl: string, width?: number, height?: number): string => {
  if (!imageUrl.includes('res.cloudinary.com')) {
    return imageUrl; // No es una URL de Cloudinary, devolver original
  }

  // Extraer la parte de la URL antes del identificador de imagen y transformaciones
  const parts = imageUrl.split('/upload/');
  if (parts.length !== 2) {
    return imageUrl; // Formato de URL inesperado
  }

  let transformation = 'f_auto,q_auto';
  if (width && height) {
    transformation += `,w_${width},h_${height},c_fill`; // c_fill para asegurar que se ajuste sin distorsión
  } else if (width) {
    transformation += `,w_${width}`; 
  } else if (height) {
    transformation += `,h_${height}`; 
  }

  return `${parts[0]}/upload/${transformation}/${parts[1]}`;
};
