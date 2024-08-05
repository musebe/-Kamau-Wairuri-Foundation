import Link from 'next/link';
import { client } from '@/lib/sanity';
import Folder from './Folder';
import { Button } from './ui/button';

export const revalidate = 30; // Revalidate at most every 30 seconds

// Helper function to capitalize the first letter of each word
function capitalizeTitle(title) {
  return title.replace(/\b\w/g, (char) => char.toUpperCase());
}

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
        const capitalizedTag = capitalizeTitle(normalizedTag); // Capitalize tag
        if (!acc[capitalizedTag]) {
          acc[capitalizedTag] = [];
        }
        acc[capitalizedTag].push(item);
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
    <div className='py-12 md:py-24'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-foreground'>
            Events Gallery
          </h2>
          <p className='text-lg sm:text-xl text-gray-600 mb-4'>
            Explore a preview of our curated gallery of events.
          </p>
        </div>
        {folders.length === 0 ? (
          <p className='text-lg text-foreground'>No folders available.</p>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {folders.map((folder, idx) => (
              <Folder key={idx} folder={folder} />
            ))}
          </div>
        )}
        <div className='text-center mt-12'>
          <Link href='/gallery'>
            <Button className='py-2 px-4 text-sm sm:py-3 sm:px-6 sm:text-base gap-x-2'>
              View All Events
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
