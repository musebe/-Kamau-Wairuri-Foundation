import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
  return (
    <Link href='/'>
      <div className='flex items-center cursor-pointer'>
        <div className='relative w-28 h-auto'>
          <Image
            src='/logo.png'
            alt='Kamau Wairuri Foundation'
            width={120}
            height={120}
            className='object-contain'
            style={{ width: 'auto', height: 'auto' }}
            priority
          />
        </div>
      </div>
    </Link>
  );
};

export default Logo;
