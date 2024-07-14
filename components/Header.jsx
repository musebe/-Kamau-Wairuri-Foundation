'use client';
import React, { useState, useEffect } from 'react';

// components
import Logo from './Logo';
import ThemeToggler from './ThemeToggler';
import Nav from './Nav';
import MobileNav from './MobileNav';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [header, setHeader] = useState(false);
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Small screens are considered less than 768px
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setHeader(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    // Remove event listener on cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`${
        header
          ? 'py-4 bg-white shadow-lg dark:bg-accent'
          : 'py-6 dark:bg-transparent'
      } sticky top-0 z-30 transition-all ${pathname === '/' && 'bg-[#fef9f5]'}`}
    >
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <Logo />
          <div className='flex items-center gap-x-6'>
            {/* nav */}
            {!isMobile && (
              <Nav
                containerStyles='hidden md:flex gap-x-8 items-center'
                linkStyles='relative hover:text-primary transition-all'
                underlineStyles='absolute left-0 top-full h-[2px] bg-primary w-full'
              />
            )}
            <ThemeToggler />
            {/* mobile nav */}
            {isMobile && (
              <div className='md:hidden'>
                <MobileNav />
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
