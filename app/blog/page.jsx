import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { client, urlFor } from '@/lib/sanity';
import Image from 'next/image';
import Link from 'next/link';

export const revalidate = 30; // Revalidate at most every 30 seconds

async function getData() {
  const query = `
  *[_type == 'blog'] | order(_createdAt desc) {
    title,
    smallDescription,
    "currentSlug": slug.current,
    titleImage,
  }`;

  const data = await client.fetch(query);
  return data;
}

export default async function Page() {
  const data = await getData();
  return (
    <div className='flex flex-col min-h-screen justify-center'>
      <div className='container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow'>
        <div className='text-left mb-8'>
          <div className='flex items-center gap-x-2 text-primary text-lg mb-2'>
            <span className='w-[30px] h-[2px] bg-primary'></span>
            Insights & Stories 📝
          </div>
          <div className='text-center'>
            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-foreground'>
              From the Blog
            </h1>
            <p className='text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto'>
              Discover how we are making a difference with our community
              initiatives.
            </p>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {data.map((post, idx) => (
            <Card
              key={idx}
              className='flex flex-col w-full h-full overflow-hidden rounded-lg shadow-lg'
            >
              <div className='relative w-full h-48 md:h-56'>
                <Image
                  src={urlFor(post.titleImage).url()}
                  alt='Blog image'
                  layout='fill'
                  objectFit='cover'
                  className='rounded-t-lg'
                  priority={true}
                />
              </div>
              <CardContent className='flex flex-col p-4'>
                <h3 className='text-xl font-semibold text-foreground mb-2'>
                  {post.title}
                </h3>
                <p className='text-base text-gray-600 dark:text-gray-300 mb-4'>
                  {post.smallDescription}
                </p>
                <div className='mt-auto'>
                  <Button asChild variant='primary' className='w-full'>
                    <Link href={`/blog/${post.currentSlug}`}>
                      <span className='w-full text-center'>Read More</span>
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <div className='py-12'></div> {/* Space before footer */}
    </div>
  );
}
