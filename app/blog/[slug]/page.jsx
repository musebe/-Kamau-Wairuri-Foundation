import { client, urlFor } from '@/lib/sanity';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import { Card } from '@/components/ui/card'; // Ensure you have a Card component or similar styled component

export const revalidate = 30; // Revalidate at most every 30 seconds

async function getData(slug) {
  const query = `
    *[_type == "blog" && slug.current == '${slug}'] {
        "currentSlug": slug.current,
        title,
        content,
        titleImage
    }[0]`;

  const data = await client.fetch(query);
  return data;
}

export default async function BlogArticle({ params }) {
  const data = await getData(params.slug);

  return (
    <div className='flex flex-col items-center justify-center p-8'>
      <Card className='mb-8 w-full max-w-4xl bg-white shadow-lg p-4 rounded-lg'>
        <h1 className='text-4xl font-bold text-center text-gray-800'>
          {data.title}
        </h1>
      </Card>
      <div className='prose prose-lg dark:prose-invert prose-li:marker:text-primary prose-a:text-primary mx-auto'>
        <PortableText value={data.content} />
      </div>
    </div>
  );
}
