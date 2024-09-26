// components/HomeGallery.jsx

import Link from 'next/link';
import { client } from '@/lib/sanity';
import Folder from './Folder';
import { Button } from './ui/button';

export const revalidate = 30; // Revalidate at most every 30 seconds

async function getData() {
  const query = `
    *[_type == 'photoAlbum'] | order(_createdAt desc) {
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
    }[0...3]
  `;

  const albums = await client.fetch(query);

  return albums;
}

export default async function HomeGallery() {
  const albums = await getData();

  return (
    <div className='py-12 md:py-24'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-foreground'>
            Events Gallery
          </h2>
          <p className='text-lg sm:text-xl text-gray-600 mb-4'>
            Explore a preview of our curated gallery of events.
          </p>
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
        <div className='text-center mt-12'>
          <Link href='/gallery'>
            <Button className='py-2 px-4 text-sm sm:py-3 sm:px-6 sm:text-base gap-x-2'>
              View All Events
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
