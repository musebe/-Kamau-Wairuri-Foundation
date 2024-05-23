// components/MyImageComponent.jsx
import { getImageDimensions } from '@sanity/asset-utils';
import { urlFor } from '@/lib/sanity'; // Adjust this path if necessary based on your project structure

const MyImageComponent = ({ value, isInline }) => {
  const { width, height } = getImageDimensions(value);
  const maxHeight = 600; // Define the maximum height you want for images
  const shouldResize = height > maxHeight;
  const aspectRatio = width / height;
  const newWidth = shouldResize ? maxHeight * aspectRatio : width;

  return (
    <img
      src={urlFor(value)
        .width(newWidth) // Apply new width calculated based on aspect ratio
        .height(shouldResize ? maxHeight : height) // Only adjust the height if necessary
        .fit('max')
        .auto('format')
        .url()}
      alt={value.alt || ''}
      loading='lazy'
      style={{
        display: isInline ? 'inline-block' : 'block',
        width: 'auto', // Let the browser handle the width to match calculated width
        maxWidth: '100%', // Ensure the image does not exceed the container width
        height: 'auto', // Auto height to maintain aspect ratio
      }}
    />
  );
};

export default MyImageComponent;
