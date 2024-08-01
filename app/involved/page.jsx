import React from 'react';
import Image from 'next/image';
import { Heart, DollarSign, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const Page = () => {
  return (
    <div className='flex flex-col min-h-screen justify-center bg-gray-100 dark:bg-gray-900'>
      <div className='container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow'>
        <div className='text-left mt-12 mb-8'>
          {' '}
          {/* Added margin-top */}
          <div className='flex items-center gap-x-2 text-primary text-lg mb-2'>
            <span className='w-[30px] h-[2px] bg-primary'></span>
            Join Us in Making a Difference 🤝
          </div>
          <div className='text-center'>
            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-foreground'>
              Get Involved
            </h1>
            <p className='text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto text-left'>
              Be part of our mission to transform lives through education.
            </p>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div
            className='relative w-full overflow-hidden rounded-xl shadow-lg'
            style={{ height: '60vh', minHeight: '300px' }}
          >
            <Image
              src='/involved/involved.jpg'
              alt='Volunteering'
              fill
              style={{ objectFit: 'cover' }}
              className='transition-opacity duration-500 hover:opacity-80'
              priority
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            />
            <div className='absolute inset-0 bg-gradient-to-b from-transparent to-transparent' />
          </div>

          <div className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl'>
            <h2 className='text-3xl font-bold text-foreground sm:text-4xl mb-4'>
              Ways to Contribute
            </h2>
            <p className='text-lg text-gray-600 dark:text-gray-300 mb-6'>
              There are several ways to make a positive impact:
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
                  <span className='font-semibold text-lg text-indigo-600 dark:text-indigo-400'>
                    Donate with Mpesa
                  </span>
                </div>
                <div>
                  <span className='block select-all text-sm text-gray-500 dark:text-gray-300'>
                    Till Number: 5728345
                  </span>
                </div>
                <div>
                  <span className='block text-sm text-gray-500 dark:text-gray-300'>
                    Name: KAMAU WAIRURI FOUNDATION
                  </span>
                </div>
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
                      Donate With PayPal <ArrowRight className='ml-1' />
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
      <div className='py-12'></div> {/* Space before footer */}
    </div>
  );
};

export default Page;
