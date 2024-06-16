import Folder from '@/components/ Folder';
import { client } from '@/lib/sanity';

export const revalidate = 30; // Revalidate at most every 30 seconds

async function getData() {
  const query = `
    *[_type == 'gallery'] | order(_createdAt desc) {
      image,
      tags
    }`;

  const data = await client.fetch(query);

  console.log('Fetched data:', data);

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

  console.log('Grouped data:', groupedData);

  // Convert to an array of folders with a preview image
  const folders = Object.keys(groupedData).map((tag) => ({
    tag,
    preview: groupedData[tag][0], // First image as preview
    images: groupedData[tag],
  }));

  console.log('Folders:', folders);

  return folders;
}

export default async function Page() {
  const folders = await getData();

  console.log('Resulting folders:', folders);

  return (
    <div className='flex flex-col min-h-screen justify-center'>
      <div className='container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow'>
        <div className='text-center py-8'>
          <h1 className='text-3xl font-bold mb-2'>Gallery</h1>
          <p className='text-lg text-gray-600'>
            Explore our curated gallery of images.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          {folders.map((folder, idx) => (
            <Folder key={idx} folder={folder} />
          ))}
        </div>
      </div>
    </div>
  );
}
