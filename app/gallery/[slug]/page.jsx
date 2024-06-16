import { client, urlFor } from '@/lib/sanity';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Card } from '@/components/ui/card';

export const revalidate = 30; // Revalidate at most every 30 seconds

async function getData(slug) {
  const query = `
    *[_type == 'gallery' && "${decodeURIComponent(slug)}" in tags] | order(_createdAt desc) {
      image,
      tags
    }`;

  const data = await client.fetch(query);
  return data;
}

export default async function Page({ params }) {
  const { slug } = params;
  const data = await getData(slug);

  if (!data || data.length === 0) {
    notFound();
  }

  return (
    <div className='flex flex-col min-h-screen justify-center'>
      <div className='container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow'>
        <div className='text-center py-8'>
          <h1 className='text-3xl font-bold mb-2'>
            {decodeURIComponent(slug)}
          </h1>
          <p className='text-lg text-gray-600'>
            Explore our curated gallery of images tagged with "
            {decodeURIComponent(slug)}".
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          {data.map((item, idx) => (
            <Card
              key={idx}
              className='w-full h-full overflow-hidden rounded-lg'
            >
              <div className='relative w-full h-64 md:h-80'>
                <Image
                  src={urlFor(item.image).url()}
                  alt={item.image.alt || 'Gallery image'}
                  fill
                  className='object-cover rounded-t-lg'
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
