import { Button } from './ui/button';
import Link from 'next/link';

const Cta = () => {
  return (
    <section className='py-24 bg-tertiary dark:bg-secondary/40'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col items-center'>
          <h2 className='text-3xl font-semibold text-center mb-8 max-w-2xl'>
            Want to contribute to a better future? Join us in empowering
            communities through education.
          </h2>
          <Link href='/involved' passHref>
            <span className='inline-block bg-primary text-white hover:bg-primary-dark focus:outline-none focus:ring-4 focus:ring-primary/50 font-medium rounded-lg text-lg px-6 py-3 text-center cursor-pointer'>
              Get Involved
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cta;
