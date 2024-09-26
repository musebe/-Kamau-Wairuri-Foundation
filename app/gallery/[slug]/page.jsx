// pages/gallery/[slug].jsx

import { client } from '@/lib/sanity';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Card } from '@/components/ui/card';

export const revalidate = 30; // Revalidate at most every 30 seconds

async function getData(slug) {
  const albumId = slug; // Using the album's _id as the slug

  // GROQ query to fetch the album and its images
  const query = `
    *[_type == "photoAlbum" && _id == $albumId][0]{
      title,
      description,
      coverImage {
        asset->{
          url
        }
      },
      eventTag->{
        _id,
        title
      },
      "images": *[
        _type == "sanity.imageAsset" &&
        references(^.eventTag._ref)
      ]{
        _id,
        url,
        originalFilename,
        metadata {
          dimensions,
          lqip
        }
      }
    }
  `;

  // Fetch the album data from Sanity
  const album = await client.fetch(query, { albumId });

  return album;
}

export default async function Page({ params }) {
  const { slug } = params;
  const album = await getData(slug);

  if (!album) {
    notFound();
  }

  return (
    <div className='flex flex-col min-h-screen justify-center bg-gray-100 dark:bg-gray-900'>
      <div className='container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow'>
        {/* Album Header */}
        <div className='text-left mt-12 mb-8'>
          <div className='flex items-center gap-x-2 text-primary text-lg mb-4'>
            <span className='w-[30px] h-[2px] bg-primary'></span>
            Album: {album.title}
          </div>
          <div className='text-center'>
            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-foreground'>
              {album.title}
            </h1>
            <p className='text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 text-justify mx-8'>
              {album.description}
            </p>
          </div>
        </div>

        {/* Images Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {album.images && album.images.length > 0 ? (
            album.images.map((image, idx) => (
              <Card
                key={image._id || idx}
                className='w-full h-full overflow-hidden rounded-xl shadow-lg'
              >
                <div className='relative w-full h-64 md:h-80'>
                  <Image
                    src={image.url}
                    alt={image.originalFilename || `Image ${idx + 1}`}
                    fill
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    className='object-cover rounded-t-xl'
                    placeholder='blur'
                    blurDataURL={image.metadata.lqip}
                    priority
                  />
                </div>
              </Card>
            ))
          ) : (
            <p className='text-center text-gray-500 dark:text-gray-400 col-span-full'>
              No images found for this album.
            </p>
          )}
        </div>
      </div>
      <div className='py-12'></div>
    </div>
  );
}
