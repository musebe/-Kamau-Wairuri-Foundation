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

  return (
    <Card
      className='w-full h-full overflow-hidden rounded-lg cursor-pointer'
      onClick={handleClick}
    >
      <div className='relative w-full' style={{ paddingTop: '66.66%' }}>
        {' '}
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
        <p className='text-gray-600 dark:text-gray-300'>{album.description}</p>
      </div>
    </Card>
  );
};

export default Folder;
