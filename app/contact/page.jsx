'use client';

import { MailIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import Form from '@/components/Form';

const Page = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Or a loading spinner
  }

  return (
    <section className='py-12 md:py-24'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Text & Illustration */}
        <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12'>
          {/* Text */}
          <div className='flex flex-col justify-center'>
            <div className='flex items-center gap-x-4 text-primary text-lg mb-4'>
              <span className='w-[30px] h-[2px] bg-primary'></span>
              Say Hello 👋
            </div>
            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-foreground'>
              Let's Work Together.
            </h1>
            <p className='text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-md'>
              Do you have questions or want to learn more about our programs?
              Get in touch with us today via info@kamauwairuri.org or our social
              media accounts.
            </p>
            <p className='text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-md'>
              The Kamau Wairuri Foundation is committed to creating lasting
              change through education. Together, we can build a brighter future
              for all!
            </p>
          </div>
          {/* Illustration */}
          <div className='hidden md:flex lg:flex w-full'>
            <img
              src='/contact/contact.jpg'
              alt='Contact Illustration'
              className='w-full h-auto rounded-lg shadow-lg'
            />
          </div>
        </div>
        {/* Info Text & Form */}
        <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12'>
          {/* Info Text */}
          <div className='flex flex-col gap-y-6 text-lg'>
            <div className='flex items-center gap-x-4'>
              <MailIcon size={24} className='text-primary' />
              <span className='text-gray-800 dark:text-gray-200'>
                info@kamauwairuri.org
              </span>
            </div>
          </div>
          {/* Form */}
          <Form />
        </div>
      </div>
      <div className='py-12'></div> {/* Space before footer */}
    </section>
  );
};

export default Page;
