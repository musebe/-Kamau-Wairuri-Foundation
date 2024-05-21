import React from 'react';
import Image from 'next/image';
import { Heart, DollarSign, Users, ArrowRight } from 'lucide-react'; // Using Lucide icons
import Link from 'next/link'; // Ensure to import Link from Next.js

const Page = () => {
  return (
    <div className='flex flex-col min-h-screen bg-gray-100 dark:bg-gray-800'>
      <div className='flex-grow'>
        <div className='py-24 sm:py-32'>
          <div className='container mx-auto max-w-7xl px-6 lg:px-8'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              <div className='relative h-96 w-full overflow-hidden rounded-3xl shadow-lg'>
                <Image
                  layout='fill'
                  objectFit='cover'
                  src='/involved/inv.webp'
                  alt='Volunteering'
                  className='transition-opacity duration-500 hover:opacity-80'
                />
                <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black' />
              </div>
              <div className='bg-white dark:bg-gray-900 p-6 rounded-lg shadow-xl'>
                <h1 className='text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl'>
                  Get Involved
                </h1>
                <p className='mt-4 text-lg text-gray-700 dark:text-gray-300'>
                  You are welcome to be part of our mission to transform lives
                  through education. There are many ways to get involved:
                </p>
                <ul className='mt-4 space-y-2'>
                  <li className='flex items-center'>
                    <Heart className='text-red-500 dark:text-red-400 mr-2' />{' '}
                    Volunteer in our activities
                  </li>
                  <li className='flex items-center'>
                    <DollarSign className='text-green-600 dark:text-green-400 mr-2' />{' '}
                    Donate to support our various projects
                  </li>
                  <li className='flex items-center'>
                    <Users className='text-blue-600 dark:text-blue-400 mr-2' />{' '}
                    Partner with us
                  </li>
                </ul>
                <p className='mt-6 text-gray-600 dark:text-gray-400'>
                  <strong>Send your donations to:</strong>
                  <br />
                  M-Pesa Till Number <strong>xxxxxx</strong>
                  <br />
                  or to our account at
                  <br />
                  Sidian Bank, RiverRoad Branch, A/c No: <strong>_____</strong>.
                </p>
                <Link href='/about'>
                  <span className='mt-6 inline-flex items-center text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300'>
                    Learn more about our mission <ArrowRight className='ml-1' />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer should be adjusted if it's being pushed out of the viewpoint, this needs to be handled outside of this code or ensure that `min-h-screen` doesn't stretch beyond the viewport */}
    </div>
  );
};

export default Page;
