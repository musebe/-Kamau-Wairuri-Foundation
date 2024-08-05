import { client, urlFor } from '@/lib/sanity';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Card } from '@/components/ui/card';

export const revalidate = 30; // Revalidate at most every 30 seconds

async function getData(slug) {
  const normalizedSlug = decodeURIComponent(slug).trim();
  const query = `
    *[_type == 'gallery' && "${normalizedSlug}" in tags] | order(_createdAt desc) {
      image,
      tags
    }`;

  const data = await client.fetch(query);

  console.log('Fetched data from Sanity:', data); // Log the fetched data

  return data;
}

// Helper function to capitalize the first letter of each word
function capitalizeTitle(title) {
  return title.replace(/\b\w/g, (char) => char.toUpperCase());
}

export default async function Page({ params }) {
  const { slug } = params;
  const data = await getData(slug);

  if (!data || data.length === 0) {
    notFound();
  }

  const capitalizedSlug = capitalizeTitle(decodeURIComponent(slug));

  return (
    <div className='flex flex-col min-h-screen justify-center bg-gray-100 dark:bg-gray-900'>
      <div className='container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow'>
        <div className='text-left mt-12 mb-8'>
          <div className='flex items-center gap-x-2 text-primary text-lg mb-4'>
            <span className='w-[30px] h-[2px] bg-primary'></span>
            Gallery Tag: {capitalizedSlug}
          </div>
          <div className='text-center'>
            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-foreground'>
              {capitalizedSlug}
            </h1>
            <p className='text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto'>
              Explore our curated gallery of images tagged with "
              {capitalizedSlug}".
            </p>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {data.map((item, idx) => (
            <Card
              key={idx}
              className='w-full h-full overflow-hidden rounded-xl shadow-lg'
            >
              <div className='relative w-full h-64 md:h-80'>
                <Image
                  src={urlFor(item.image).url()}
                  alt={item.image.alt || 'Gallery image'}
                  fill
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                  className='object-cover rounded-t-xl'
                  priority
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
      <div className='py-12'></div> {/* Space before footer */}
    </div>
  );
}
