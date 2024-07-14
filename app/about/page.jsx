import React from 'react';
import Image from 'next/image';

const Page = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <div className='flex-grow py-12 px-4 sm:px-6 md:px-6 lg:px-8'>
        <div className='max-w-screen-xl mx-auto'>
          {/* Hero Section with Image of the Founder */}
          <div className='shadow overflow-hidden sm:rounded-lg mb-8 flex flex-col md:flex-row lg:flex-row items-center mt-8'>
            <div className='w-full md:w-1/2 lg:w-1/2'>
              <Image
                src='/about/about.jpg'
                alt='Dr. Kamau Wairuri'
                width={500}
                height={600}
                className='rounded-lg'
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px'
                priority
              />
            </div>
            <div className='px-6 py-5 w-full md:w-1/2 lg:w-1/2'>
              <h1 className='text-3xl font-semibold mb-6'>
                About The Kamau Wairuri Foundation
              </h1>
              <p className='mt-2 leading-loose mb-6'>
                The Kamau Wairuri Foundation is a nonprofit making organization
                based in Kenya which strives to empower communities through
                education.
              </p>
              <p className='mt-4 leading-loose mb-6'>
                It is inspired by the personal journey of our Founder and
                Patron, Dr Kamau Wairuri, a well-respected scholar and
                consultant in the areas of research, strategy and public policy.
                He credits his achievements to the seed of education that was
                sown at Mjini Primary School in Murang’a and nurtured at Starehe
                Boys’ Center in Nairobi. He continued his academic pursuits,
                achieving remarkable success in higher education both in Kenya
                (University of Nairobi) and abroad (University of Oxford and
                University of Edinburgh) culminating in his career in academia.
              </p>
              <p className='mt-2 leading-loose mb-6'>
                Based on the impact on his own life, Dr Wairuri firmly believe
                in the transformative power of education at individual and
                societal levels. As a beneficiary of tremendous support, he is
                determined to provide support to children and adults in Kenya to
                access education that will have a positive impact on their
                lives. This is in keeping with the mantra he learned at Starehe,
                “From those to whom much is given, much will be required (Luke
                12:48).”
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
