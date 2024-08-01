import Folder from '@/components/Folder';
import { client } from '@/lib/sanity';

export const revalidate = 30; // Revalidate at most every 30 seconds

async function getData() {
  const query = `
    *[_type == 'gallery'] | order(_createdAt desc) {
      image,
      tags
    }`;

  const data = await client.fetch(query);

  // Group images by tags with trimmed whitespace
  const groupedData = data.reduce((acc, item) => {
    if (Array.isArray(item.tags)) {
      item.tags.forEach((tag) => {
        const normalizedTag = tag.trim(); // Normalize tag by trimming whitespace
        if (!acc[normalizedTag]) {
          acc[normalizedTag] = [];
        }
        acc[normalizedTag].push(item);
      });
    }
    return acc;
  }, {});

  // Convert to an array of folders with a preview image
  const folders = Object.keys(groupedData).map((tag) => ({
    tag,
    preview: groupedData[tag][0], // First image as preview
    images: groupedData[tag],
  }));

  return folders;
}

export default async function Page() {
  const folders = await getData();

  return (
    <div className='flex flex-col min-h-screen justify-center'>
      <div className='container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow'>
        <div className='text-center py-12'>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-foreground'>
            Gallery
          </h1>
          <p className='text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto'>
            Explore our curated gallery of images.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {folders.map((folder, idx) => (
            <Folder key={idx} folder={folder} />
          ))}
        </div>
      </div>
      <div className='py-12'></div> {/* Space before footer */}
    </div>
  );
}
