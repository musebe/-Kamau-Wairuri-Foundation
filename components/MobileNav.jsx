"use client"

import React, { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { AlignJustify } from 'lucide-react';

import Nav from './Nav';
import Logo from './Logo';
import Socials from './Socials';

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the Sheet open/close state
  const toggleSheet = () => {
    setIsOpen(!isOpen);
  };

  // Close the sheet when a nav link is clicked
  const closeSheet = () => {
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button onClick={toggleSheet}>
          <AlignJustify className='cursor-pointer' />
        </button>
      </SheetTrigger>
      <SheetContent>
        <div className='flex flex-col items-center justify-between h-full py-8'>
          <div className='flex flex-col items-center gap-y-32'>
            <Logo />
            {/* Pass closeSheet function to Nav component to be called on link click */}
            <Nav
              containerStyles='flex flex-col items-center gap-y-6'
              linkStyles='text-2xl'
              onNavLinkClick={closeSheet}
            />
          </div>
          <Socials containerStyles='flex gap-x-4' iconsStyles='text-2xl' />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
