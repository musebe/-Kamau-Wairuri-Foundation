import Link from 'next/link'; // Import Link from next/link
import { client } from '@/lib/sanity';
import Folder from './ Folder';

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

  return folders.slice(0, 3); // Return only the first 3 folders
}

export default async function HomeGallery() {
  const folders = await getData();

  return (
    <div className='flex flex-col items-center min-h-screen'>
      <div className='container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow'>
        <div className='text-center py-8'>
          <h2 className='text-3xl font-bold mb-2'>Events Gallery</h2>
          <p className='text-lg text-gray-600'>
            Explore a preview of our curated gallery of events.
          </p>
        </div>
        {folders.length === 0 ? (
          <p>No folders available.</p>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-8'>
            {folders.map((folder, idx) => (
              <Folder key={idx} folder={folder} />
            ))}
          </div>
        )}
        <div className='text-center mt-8'>
          <Link href='/gallery'>
            <span className='inline-block px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 cursor-pointer'>
              View All Events
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
