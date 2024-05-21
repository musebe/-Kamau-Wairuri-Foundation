import Link from 'next/link';

const Logo = () => {
  return (
    <Link href='/'>
      <span className='cursor-pointer text-red-600 font-bold hover:text-black'>
        Kamau Wairuri Foundation
      </span>
    </Link>
  );
};

export default Logo;
