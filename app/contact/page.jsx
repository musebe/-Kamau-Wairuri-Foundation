'use client';

import { MailIcon } from 'lucide-react'; // Corrected the import
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
    <section>
      <div className='container mx-auto'>
        {/* text & illustration */}
        <div className='grid md:grid-cols-2 lg:grid-cols-2 pt-12 md:h-[480px] lg:h-[480px] mb-6 md:mb-24 lg:mb-24'>
          {/* text */}
          <div className='flex flex-col justify-center'>
            <div className='flex items-center gap-x-4 text-primary text-lg mb-4'>
              <span className='w-[30px] h-[2px] bg-primary'></span>
              Say Hello 👋
            </div>
            <h1 className='h1 max-w-md mb-8'>Let's Work Together.</h1>
            <p className='subtitle max-w-[400px]'>
              Do you have questions or want to learn more about our programs?
              Get in touch with us today via info@kamauwairuri.org or via
              accounts on Social Media.
            </p>
            <p>
              The Kamau Wairuri Foundation is committed to creating lasting
              change through education. Together, we can build a brighter future
              for all!
            </p>
          </div>
          {/* illustration */}
          <div className='hidden md:flex lg:flex w-full'>
            <img
              src='/contact/contact.jpg'
              alt='Contact Illustration'
              className='w-full h-auto bg-top bg-no-repeat'
            />
          </div>
        </div>
        {/* info text & form */}
        <div className='grid md:grid-cols-2 lg:grid-cols-2 mb-24 md:mb-32 lg:mb-32'>
          {/* info text */}
          <div className='flex flex-col gap-y-4 md:gap-y-14 lg:gap-y-14 mb-12 md:mb-24 lg:mb-24 text-base md:text-lg lg:text-lg'>
            {/* mail */}
            <div className='flex items-center gap-x-8'>
              <MailIcon size={18} className='text-primary' />
              <div>info@kamauwairuri.org</div>
            </div>
            {/* phone */}
          </div>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Page;
