import Link from 'next/link';
import Image from 'next/image';
import { ArrowRightCircle } from 'lucide-react'; // Import an appropriate icon for a call to action

const Cta = () => {
  return (
    <section className='py-24 bg-tertiary dark:bg-secondary/40'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col-reverse md:flex-row items-center justify-between text-center md:text-left'>
          <div className='md:w-1/2 mt-8 md:mt-0'>
            <h2 className='text-3xl font-semibold mb-4'>
              Want to contribute to a better future? Join us in empowering
              communities through education.
            </h2>
            <Link href='/involved' passHref>
              <span className='inline-flex items-center bg-primary text-white hover:bg-primary-dark focus:outline-none focus:ring-4 focus:ring-primary/50 font-medium rounded-lg text-lg px-6 py-3 cursor-pointer animate-bounce'>
                Get Involved <ArrowRightCircle size={24} className='ml-2' />
              </span>
            </Link>
          </div>
          <div className='md:w-1/2'>
            <Image
              src='/cta/involved.webp'
              alt='Get Involved'
              width={500} // Adjust the width as needed
              height={300} // Adjust the height as needed
              className='rounded-xl'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
