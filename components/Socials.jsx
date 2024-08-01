'use client';

import {
  RiFacebookFill,
  RiInstagramFill,
  RiLinkedinFill,
} from 'react-icons/ri';
import Link from 'next/link';

const icons = [
  {
    path: 'https://www.facebook.com/share/1vuaHYPbcn1zaueg/?mibextid=LQQJ4d',
    name: <RiFacebookFill />,
  },
  {
    path: 'https://www.instagram.com/kamau_wairuri_foundation?igsh=Y3EyZmw3M3JtNW81',
    name: <RiInstagramFill />,
  },
  {
    path: 'https://www.linkedin.com/company/kamau-wairuri-foundation/about/',
    name: <RiLinkedinFill />,
  },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => (
        <Link
          href={icon.path}
          key={index}
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className={`${iconsStyles}`}>{icon.name}</div>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
