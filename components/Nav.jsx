import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const links = [
  { path: '/', name: 'home' },
  { path: '/about', name: 'about' },
  { path: '/what-we-do', name: 'what we do' },
  { path: '/gallery', name: 'gallery' },
  { path: '/blog', name: 'blog' },
  { path: '/contact', name: 'get involved' },
];

const Nav = ({
  containerStyles,
  linkStyles,
  underlineStyles,
  onNavLinkClick,
}) => {
  const path = usePathname();

  const handleLinkClick = () => {
    if (onNavLinkClick) {
      onNavLinkClick();
    }
  };

  return (
    <nav className={containerStyles}>
      {links.map((link, index) => {
        return (
          <Link href={link.path} key={index}>
            <span className={`capitalize ${linkStyles}`} onClick={handleLinkClick}>
              {link.path === path && (
                <motion.span
                  initial={{ y: '-100%' }}
                  animate={{ y: 0 }}
                  transition={{ type: 'tween' }}
                  layoutId='underline'
                  className={underlineStyles}
                />
              )}
              {link.name}
            </span>
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
