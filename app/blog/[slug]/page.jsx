import { PortableText } from '@portabletext/react';
import { client, urlFor } from '@/lib/sanity'; // Assuming urlFor is a helper function from Sanity
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

// Add metadata for Open Graph with title and image only
export async function generateMetadata({ params }) {
  const data = await getData(params.slug);

  return {
    title: data.title,
    openGraph: {
      title: data.title,
      images: [
        {
          url: data.titleImage
            ? urlFor(data.titleImage).url()
            : 'fallback-image-url.jpg',
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
        {data.titleImage && (
          <MyImageComponent
            src={urlFor(data.titleImage).url()}
            alt={data.title}
            className='w-full h-auto'
          />
        )}
      </Card>
      <article className='prose prose-lg lg:prose-xl dark:prose-invert mx-auto px-4 py-2'>
        <PortableText value={data.content} components={components} />
      </article>
    </div>
  );
}
