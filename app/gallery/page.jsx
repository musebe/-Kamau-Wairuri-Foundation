// pages/gallery/page.jsx

import Folder from '@/components/Folder';
import { client } from '@/lib/sanity';

export const revalidate = 30; // Revalidate at most every 30 seconds

async function getData() {
  const query = `
    *[_type == 'photoAlbum'] {
      _id,
      title,
      description,
      coverImage{
        asset->{
          url
        }
      },
      eventTag->{
        _id,
        title
      }
    }
  `;

  const albums = await client.fetch(query, { cache: 'no-cache' });
  return albums;
}

export default async function Page() {
  const albums = await getData();

  return (
    <div className='flex flex-col min-h-screen justify-center'>
      <div className='container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow'>
        <div className='text-left mb-8'>
          <div className='flex items-center gap-x-2 text-primary text-lg mb-2'>
            <span className='w-[30px] h-[2px] bg-primary'></span>
            Moments Captured 📸
          </div>
          <div className='text-center'>
            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-foreground'>
              Gallery
            </h1>
            <p className='text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto'>
              Explore our curated gallery of images.
            </p>
          </div>
        </div>
        {albums.length === 0 ? (
          <p className='text-lg text-foreground'>No albums available.</p>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {albums.map((album) => (
              <Folder key={album._id} album={album} />
            ))}
          </div>
        )}
      </div>
      <div className='py-12'></div>
    </div>
  );
}
