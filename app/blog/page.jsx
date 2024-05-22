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
      titleImage
  }`;

  const data = await client.fetch(query);
  return data;
}

export default async function Page() {
  const data = await getData();
  return (
    <div className='flex flex-col min-h-screen justify-center'>
      <div className='container max-w-10xl p-14 flex-grow'>
        <div className='text-center py-8'>
          <h1 className='text-3xl font-bold mb-2'>From the Blog</h1>
          <p className='text-lg text-gray-600'>
            Discover how we are making a difference with our community
            initiatives.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
          {data.map((post, idx) => (
            <Card
              key={idx}
              className='flex flex-col w-full md:w-auto md:h-auto overflow-hidden'
            >
              <div className='relative w-full h-auto'>
                <Image
                  src={urlFor(post.titleImage).url()}
                  alt='image'
                  width={500}
                  height={500}
                  className='rounded-t-lg'
                  priority={true}
                />
              </div>
              <CardContent className='flex-grow p-4'>
                <h3 className='text-lg line-clamp-4 font-bold'>{post.title}</h3>
                <p className='line-clamp-3 text-sm mt-2 text-gray-600 dark:text-gray-300'>
                  {post.smallDescription}
                </p>
                <div className='mt-auto'>
                  <Button asChild className='w-full mt-4'>
                    <Link href={`/blog/${post.currentSlug}`}>
                      <span className='inline-block w-full text-center'>
                        Read More
                      </span>
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
