import { getImageDimensions } from '@sanity/asset-utils';
import { urlFor } from '@/lib/sanity';

const MyImageComponent = ({ value, isInline }) => {
  if (!value) {
    console.error('Image value is undefined or null');
    return null;
  }

  // Get width and height from Sanity image metadata
  const { width, height } = getImageDimensions(value);
  const maxHeight = 600;
  const shouldResize = height > maxHeight;
  const aspectRatio = width / height;
  const newWidth = shouldResize ? maxHeight * aspectRatio : width;

  return (
    <img
      src={urlFor(value)
        .width(Math.round(newWidth)) // Rounding to avoid potential rendering issues
        .height(shouldResize ? maxHeight : Math.round(height))
        .fit('max')
        .auto('format')
        .url()}
      alt={value.alt || 'Image'} // Use alt if provided; default to "Image"
      loading='lazy'
      style={{
        display: isInline ? 'inline-block' : 'block',
        width: '100%', // Ensures responsiveness
        maxWidth: '100%', // Ensures the image fits its container
        height: 'auto',
      }}
    />
  );
};

export default MyImageComponent;
