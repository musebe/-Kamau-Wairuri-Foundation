// pages/BlogArticle.jsx or wherever you host this component
import { PortableText } from '@portabletext/react';
import { client } from '@/lib/sanity'; // Ensure this is configured correctly
import { Card } from '@/components/ui/card'; // Ensure you have a Card component or similar styled component
import MyImageComponent from '@/components/MyImageComponent'; // Adjust the import path as necessary

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

  const components = {
    types: {
      image: MyImageComponent, // Use the imported MyImageComponent
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
