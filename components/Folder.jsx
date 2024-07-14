'use client';

import { Card } from '@/components/ui/card';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { urlFor } from '@/lib/sanity';

const Folder = ({ folder }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/gallery/${encodeURIComponent(folder.tag)}`);
  };

  return (
    <Card
      className='w-full h-full overflow-hidden rounded-lg cursor-pointer'
      onClick={handleClick}
    >
      <div className='relative w-full h-64 md:h-80'>
        <Image
          src={urlFor(folder.preview.image).url()}
          alt={folder.preview.image.alt || 'Gallery image'}
          fill
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          className='object-cover rounded-t-lg'
        />
      </div>
      <div className='p-4'>
        <div className='text-lg font-bold'>
          {folder.tag.replace(/%20/g, ' ')}
        </div>
      </div>
    </Card>
  );
};

export default Folder;
