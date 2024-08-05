'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import {
  DollarSign,
  Users,
  ArrowRight,
  Mail as MailIcon,
  CreditCard,
  HeartHandshake,
} from 'lucide-react';
import Link from 'next/link';
import { FaPaypal } from 'react-icons/fa';
import Form from '@/components/Form';
import { Button } from '@/components/ui/button';

const Page = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Or a loading spinner
  }

  const handleScrollToContact = () => {
    document
      .getElementById('contact-section')
      .scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='flex flex-col min-h-screen justify-center'>
      <div className='container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow'>
        {/* Get Involved Section */}
        <section className='py-12 md:py-24'>
          <div className='text-left mb-8'>
            <div className='flex items-center gap-x-2 text-primary text-lg mb-2'>
              <span className='w-[30px] h-[2px] bg-primary'></span>
              Join Us in Making a Difference 🤝
            </div>
            <div className='text-center'>
              <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-foreground'>
                Get Involved
              </h1>
              <p className='text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto text-center'>
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
                  <div className='flex items-center'>
                    <Image
                      src='/icons8-mpesa-48.png'
                      alt='Mpesa Icon'
                      width={24}
                      height={24}
                      className='mr-2'
                    />
                    <span className='font-semibold text-lg text-indigo-600 dark:text-indigo-400'>
                      Donate with Mpesa
                    </span>
                  </div>
                  <div className='ml-8'>
                    <span className='block select-all text-sm text-gray-500 dark:text-gray-300'>
                      Till Number: 5728345
                    </span>
                  </div>
                  <div className='ml-8'>
                    <span className='block text-sm text-gray-500 dark:text-gray-300'>
                      Name: KAMAU WAIRURI FOUNDATION
                    </span>
                  </div>
                  <div className='flex items-center'>
                    <CreditCard className='text-indigo-600 dark:text-indigo-400 mr-2' />
                    <Link
                      href='https://www.mchanga.africa/fundraiser/98856#donatenow'
                      target='_blank'
                    >
                      <span className='inline-flex items-center text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300'>
                        Donate With Card <ArrowRight className='ml-1' />
                      </span>
                    </Link>
                  </div>
                  <div className='flex items-center'>
                    <FaPaypal className='text-indigo-600 dark:text-indigo-400 mr-2' />
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
                  <Button
                    variant='secondary'
                    className='py-2 px-4 text-sm sm:py-3 sm:px-6 sm:text-base gap-x-2'
                    onClick={handleScrollToContact}
                  >
                    Contact Us <HeartHandshake size={18} />
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Us Section */}
        <section id='contact-section' className='py-12 md:py-24'>
          <div className='text-left mb-8'>
            <div className='flex items-center gap-x-2 text-primary text-lg mb-2'>
              <span className='w-[30px] h-[2px] bg-primary'></span>
              <MailIcon size={24} className='text-primary mr-2' />
              <span className='text-gray-800 dark:text-gray-200'>
                info@kamauwairuri.org
              </span>
            </div>
          </div>
          <div className='text-center mb-8'>
            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground'>
              Let's Work Together.
            </h1>
          </div>
          <div className='flex flex-col lg:flex-row justify-between gap-x-8 items-start'>
            <div className='w-full lg:w-1/2 mb-8 lg:mb-0'>
              <Image
                src='/contact/contact.jpg'
                alt='Contact Illustration'
                width={500}
                height={600}
                className='rounded-xl shadow-lg w-full h-auto'
                sizes='(max-width: 1023px) 100vw, 50vw'
                priority
              />
            </div>
            <div className='flex w-full lg:w-1/2 flex-col justify-center mx-auto lg:mx-0 text-left'>
              <div className='text-base sm:text-lg lg:text-xl mb-4'>
                Do you have questions or want to learn more about our programs?
                Get in touch with us today via info@kamauwairuri.org or our
                social media accounts. The Kamau Wairuri Foundation is committed
                to creating lasting change through education. Together, we can
                build a brighter future for all!
              </div>
              <Form />
            </div>
          </div>
        </section>
      </div>
      <div className='py-12'></div> {/* Space before footer */}
    </div>
  );
};

export default Page;
