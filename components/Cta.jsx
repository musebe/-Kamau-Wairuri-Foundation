import Link from 'next/link';
import Image from 'next/image';
import { ArrowRightCircle } from 'lucide-react';
import { Button } from './ui/button';

const Cta = () => {
  return (
    <section className='py-12 md:py-24'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col-reverse md:flex-row items-center justify-between'>
          <div className='md:w-1/2 mt-8 md:mt-0 text-left'>
            <h2 className='text-3xl sm:text-4xl lg:text-5xl mb-4 text-foreground'>
              Want to contribute to a better future? Join us in empowering
              communities through education.
            </h2>
            <p className='text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-6'>
              Your involvement can make a significant difference in creating
              educational opportunities and building a brighter future for many.
            </p>
            <div className='flex justify-center md:justify-start'>
              <Link href='/contact' passHref>
                <Button className='py-2 px-4 text-sm sm:py-3 sm:px-6 sm:text-base gap-x-2 mt-4 flex items-center'>
                  Get Involved <ArrowRightCircle size={20} className='ml-2' />
                </Button>
              </Link>
            </div>
          </div>
          <div className='md:w-1/2 mb-8 md:mb-0'>
            <Image
              src='/hero/h2.jpg'
              alt='Get Involved'
              width={500}
              height={300}
              className='rounded-xl shadow-lg'
              style={{ width: 'auto', height: 'auto' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
