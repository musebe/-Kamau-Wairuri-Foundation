import { PortableText } from '@portabletext/react';
import { client } from '@/lib/sanity';
import { Card } from '@/components/ui/card';
import MyImageComponent from '@/components/MyImageComponent';

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

// Add metadata for Open Graph
export async function generateMetadata({ params }) {
  const data = await getData(params.slug);

  return {
    title: data.title,
    description: 'Read our latest blog post!',
    openGraph: {
      title: data.title,
      description: 'Read our latest blog post!',
      images: [
        {
          url: data.titleImage || 'fallback-image-url.jpg',
          width: 800,
          height: 600,
          alt: data.title,
        },
      ],
    },
  };
}

export default async function BlogArticle({ params }) {
  const data = await getData(params.slug);

  const components = {
    types: {
      image: MyImageComponent,
    },
  };

  return (
    <div className='flex flex-col items-center justify-center p-8 space-y-8'>
      <Card className='mb-8 w-full max-w-4xl bg-white shadow-lg p-8 rounded-lg'>
        <h1 className='text-4xl font-bold text-center text-gray-800'>
          {data.title}
        </h1>
      </Card>
      <article className='prose prose-lg lg:prose-xl dark:prose-invert mx-auto px-4 py-2'>
        <PortableText value={data.content} components={components} />
      </article>
    </div>
  );
}
