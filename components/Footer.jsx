import Socials from './Socials';
import { MailIcon } from 'lucide-react';

const Footer = () => {
  return (
    <footer className='bg-secondary py-12'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col items-center justify-between'>
          {/* Socials */}
          <Socials
            containerStyles='flex gap-x-6 mx-auto xl:mx-0 mb-4'
            iconsStyles='text-primary dark:text-white/70 text-[20px] hover:text-white dark:hover:text-primary transition-all'
          />
          {/* Email */}
          <div className='flex items-center gap-x-2 mb-4 text-muted-foreground'>
            <MailIcon size={20} className='text-primary dark:text-white/70' />
            <span>info@kamauwairuri.org</span>
          </div>
          {/* Copyright */}
          <div className='text-muted-foreground text-center'>
            Copyright &copy; Kamau Wairuri Foundation. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
