import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';
import { HeartHandshake, Send } from 'lucide-react';
import Socials from './Socials';

const Hero = () => {
  return (
    <section className='py-12 md:py-24 h-auto md:h-[84vh] md:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col md:flex-row justify-between gap-x-8 items-center'>
          {/* text */}
          <div className='flex max-w-lg md:max-w-xl flex-col justify-center mx-auto md:mx-0 text-center md:text-left'>
            {/* socials and image on smaller screens */}
            <div className='md:hidden flex flex-col items-center mb-4'>
              <Socials
                containerStyles='flex gap-x-6 justify-center mb-4'
                iconsStyles='text-foreground text-[22px] hover:text-primary transition-all'
              />
              <Image
                src='/hero/image2.webp'
                alt='Kamau Wairuri Foundation'
                width={350}
                height={318} // Adjusted for a better aspect ratio
                className='rounded-xl shadow-lg'
              />
            </div>
            <h1 className='text-4xl sm:text-5xl lg:text-6xl mb-4'>
              Kamau Wairuri Foundation
            </h1>
            <p className='text-base sm:text-lg lg:text-xl subtitle max-w-lg mx-auto md:mx-0'>
              exists to transform communities in Kenya through education.
              Inspired by the journey of our Founder and Patron, Dr. Kamau
              Wairuri, we are committed to providing support and opportunities
              for children and adults to access education that enables them to
              fulfil their potential and contribute positively to community
              development.
            </p>
            {/* buttons */}
            <div className='flex flex-row gap-y-3 gap-x-3 justify-center md:justify-start mb-12'>
              <Link href='/contact'>
                <Button className='py-2 px-4 text-sm sm:py-3 sm:px-6 sm:text-base gap-x-2'>
                  Contact us <Send size={18} />
                </Button>
              </Link>
              <Link href='/involved'>
                <Button
                  variant='secondary'
                  className='py-2 px-4 text-sm sm:py-3 sm:px-6 sm:text-base gap-x-2'
                >
                  Get Involved <HeartHandshake size={18} />
                </Button>
              </Link>
            </div>

            {/* socials on medium and larger screens */}
            <div className='hidden md:flex gap-x-6 justify-start'>
              <Socials
                containerStyles='flex gap-x-6 justify-start'
                iconsStyles='text-foreground text-[22px] hover:text-primary transition-all'
              />
            </div>
          </div>
          {/* image on medium and larger screens */}
          <div className='hidden md:flex relative'>
            <Image
              src='/hero/image2.webp'
              alt='Kamau Wairuri Foundation'
              width={550}
              height={500}
              className='rounded-xl shadow-lg'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
