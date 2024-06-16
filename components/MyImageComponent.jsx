import { getImageDimensions } from '@sanity/asset-utils';
import { urlFor } from '@/lib/sanity'; 

const MyImageComponent = ({ value, isInline }) => {
  const { width, height } = getImageDimensions(value);
  const maxHeight = 600; 
  const shouldResize = height > maxHeight;
  const aspectRatio = width / height;
  const newWidth = shouldResize ? maxHeight * aspectRatio : width;

  return (
    <img
      src={urlFor(value)
        .width(newWidth) 
        .height(shouldResize ? maxHeight : height) 
        .fit('max')
        .auto('format')
        .url()}
      alt={value.alt || ''}
      loading='lazy'
      style={{
        display: isInline ? 'inline-block' : 'block',
        width: 'auto', 
        maxWidth: '100%', 
        height: 'auto', 
      }}
    />
  );
};

export default MyImageComponent;
