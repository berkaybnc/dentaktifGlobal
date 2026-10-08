/**
 * Client-Side Image Optimizer for Dental Photos and X-Rays
 * Resizes large high-res images and compresses them into high-quality JPEG
 * to ensure fast uploads and low mobile bandwidth consumption.
 */

export interface OptimizedFile {
  originalName: string;
  dataUrl: string;
  sizeBytes: number;
  width: number;
  height: number;
}

export async function compressDentalImage(
  file: File,
  maxWidth = 1920,
  maxHeight = 1080,
  quality = 0.82
): Promise<OptimizedFile> {
  // If not standard image or raw DICOM, return file as dataUrl without resizing
  if (!file.type.startsWith('image/')) {
    const buffer = await file.arrayBuffer();
    const base64 = Buffer.from(buffer).toString('base64');
    return {
      originalName: file.name,
      dataUrl: `data:${file.type || 'application/octet-stream'};base64,${base64}`,
      sizeBytes: file.size,
      width: 0,
      height: 0,
    };
  }

  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = (event) => {
      const img = new Image();
      img.onerror = reject;
      img.onload = () => {
        let { width, height } = img;

        if (width > maxWidth || height > maxHeight) {
          const ratio = Math.min(maxWidth / width, maxHeight / height);
          width = Math.round(width * ratio);
          height = Math.round(height * ratio);
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext('2d');
        if (!ctx) {
          return reject(new Error('Unable to create canvas context'));
        }

        // High quality rendering
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';
        ctx.drawImage(img, 0, 0, width, height);

        const compressedDataUrl = canvas.toDataURL('image/jpeg', quality);
        const approxSize = Math.round((compressedDataUrl.length * 3) / 4);

        resolve({
          originalName: file.name.replace(/\.[^/.]+$/, "") + ".jpg",
          dataUrl: compressedDataUrl,
          sizeBytes: approxSize,
          width,
          height,
        });
      };
      img.src = event.target?.result as string;
    };
    reader.readAsDataURL(file);
  });
}
