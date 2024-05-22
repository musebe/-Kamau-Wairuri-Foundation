import React from 'react';
import Image from 'next/image';

import { CloudArrowUpIcon, LockClosedIcon } from '@heroicons/react/20/solid';

const page = () => {
  return (
    <div className='py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-screen-xl mx-auto'>
        {/* Hero Section with Image of the Founder */}
        <div className='shadow overflow-hidden sm:rounded-lg mb-8 flex flex-col md:flex-row items-center'>
          <div className='md:w-1/2'>
            <Image
              src='/hero/hero.jpg'
              alt='Dr. Kamau Wairuri'
              width={500}
              height={600}
              className='rounded-lg'
            />
          </div>
          <div className='px-6 py-5 md:w-1/2'>
            <h1 className='text-3xl font-semibold'>
              About The Kamau Wairuri Foundation
            </h1>
            <p className='mt-2'>
              The Kamau Wairuri Foundation is a nonprofit making organization
              based in Kenya which strives to empower communities through
              education.
            </p>
            <p className='mt-4'>
              It is inspired by the personal journey of our Founder and Patron,
              Dr Kamau Wairuri, a well-respected scholar and consultant in the
              areas of research, strategy and public policy. He credits his
              achievements to the seed of education that was sown at Mjini
              Primary School in Murang’a and nurtured at Starehe Boys’ Center in
              Nairobi. He continued his academic pursuits, achieving remarkable
              success in higher education both in Kenya (University of Nairobi)
              and abroad (University of Oxford and University of Edinburgh)
              culminating in his career in academia.
            </p>
            <p className='mt-2'>
              Based on the impact on his own life, Dr Wairuri firmly believe in
              the transformative power of education at individual and societal
              levels. As a beneficiary of tremendous support, he is determined
              to provide support to children and adults in Kenya to access
              education that will have a positive impact on their lives. This is
              in keeping with the mantra he learned at Starehe, “From those to
              whom much is given, much will be required (Luke 12:48).”
            </p>
          </div>
        </div>

        {/* Core Values Section */}
        <div className='shadow overflow-hidden sm:rounded-lg mb-8 p-6'>
          <h2 className='text-2xl font-semibold'>Our Core Values</h2>
          <div className='flex flex-col md:flex-row justify-between mt-4 space-y-4 md:space-y-0'>
            <p className='md:flex-1'>
              <strong>
                Transformational Power of Education & Lifelong learning:
              </strong>{' '}
              Education is the key to unlocking the potential of individuals
              from cradle to grave and transforming communities.
            </p>
            <p className='md:flex-1'>
              <strong>Needs-based Interventions:</strong> Communities understand
              their needs and resources available. We work with them to identify
              and prioritise those needs, identify appropriate interventions and
              implement them.
            </p>
            <p className='md:flex-1'>
              <strong>Collaboration:</strong> We believe in working with
              existing institutions and community mechanisms to deliver
              identified interventions.
            </p>
          </div>
        </div>

      
      </div>
    </div>
  );
};

export default page;
