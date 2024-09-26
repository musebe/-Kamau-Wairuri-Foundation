// components/Folder.jsx

'use client';

import { Card } from '@/components/ui/card';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Folder = ({ album }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/gallery/${encodeURIComponent(album._id)}`);
  };

  // Helper function to truncate the description to a specific number of words
  const truncateDescription = (text, maxWords) => {
    if (!text) return '';
    const words = text.split(' ');
    if (words.length <= maxWords) {
      return text;
    } else {
      return words.slice(0, maxWords).join(' ') + '...';
    }
  };

  return (
    <Card
      className='w-full h-full overflow-hidden rounded-lg cursor-pointer'
      onClick={handleClick}
    >
      <div className='relative w-full' style={{ paddingTop: '66.66%' }}>
        {/* 3:2 Aspect Ratio */}
        {album.coverImage &&
        album.coverImage.asset &&
        album.coverImage.asset.url ? (
          <Image
            src={album.coverImage.asset.url}
            alt={album.title || 'Gallery image'}
            layout='fill'
            objectFit='cover'
            className='rounded-t-lg'
          />
        ) : (
          <Image
            src='/placeholder-image.jpg'
            alt='Placeholder image'
            layout='fill'
            objectFit='cover'
            className='rounded-t-lg'
          />
        )}
      </div>
      <div className='p-4'>
        <div className='text-lg font-bold'>{album.title}</div>
        <p className='text-gray-600 dark:text-gray-300'>
          {truncateDescription(album.description, 40)}
        </p>
      </div>
    </Card>
  );
};

export default Folder;
