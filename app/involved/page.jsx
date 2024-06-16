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
              <div
                className='relative w-full overflow-hidden rounded-3xl shadow-lg'
                style={{ height: '60vh', minHeight: '300px' }}
              >
                {/* Using inline style for more control over height */}
                <Image
                  layout='fill'
                  objectFit='cover'
                  src='/involved/involved.jpg'
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
                <ul className='mt-4 space-y-4'>
                  <li className='flex items-center'>
                    <DollarSign className='text-green-600 dark:text-green-400 mr-2' />
                    <span className='font-semibold'>
                      Donate to support our various projects
                    </span>
                  </li>
                  <li className='ml-8 space-y-2'>
                    <div>
                      <Link
                        href='https://www.mchanga.africa/fundraiser/98856#donatenow'
                        target='_blank'
                      >
                        <span className='inline-flex items-center text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300'>
                          Donate With Card <ArrowRight className='ml-1' />
                        </span>
                      </Link>
                    </div>
                    <div>
                      <Link
                        href='https://www.mchanga.africa/fundraiser/98856#donatenow'
                        target='_blank'
                      >
                        <span className='inline-flex items-center text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300'>
                          Donate With Paypal <ArrowRight className='ml-1' />
                        </span>
                      </Link>
                    </div>
                  </li>
                  <li className='flex items-center mt-4'>
                    <Users className='text-blue-600 dark:text-blue-400 mr-2' />
                    <span className='font-semibold'>Partner with us</span>
                  </li>
                  <li className='ml-8'>
                    <Link href='/contact'>
                      <span className='inline-flex items-center text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300'>
                        Contact Us <ArrowRight className='ml-1' />
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
