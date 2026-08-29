const CLOUDINARY_UPLOAD_SEGMENT = '/image/upload/';

export const cloudinaryImage = (url: string, width = 1600) => {
  if (!url.includes('res.cloudinary.com') || !url.includes(CLOUDINARY_UPLOAD_SEGMENT)) {
    return url;
  }

  if (url.includes('/image/upload/f_auto,')) {
    return url;
  }

  return url.replace(
    CLOUDINARY_UPLOAD_SEGMENT,
    `${CLOUDINARY_UPLOAD_SEGMENT}f_auto,q_auto:eco,w_${width},c_limit/`
  );
};
