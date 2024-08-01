import React from 'react';
import Link from 'next/link';
import { Lightbulb, Award, Users } from 'lucide-react';
import { Button } from './ui/button'; // Assuming Button component is in ui folder

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const Services = () => {
  const valuesData = [
    {
      icon: <Lightbulb size={72} strokeWidth={0.8} />,
      title: 'Vision',
      description:
        'A society of empowered people who can fulfil their potential and contribute to the development of their communities.',
    },
    {
      icon: <Award size={72} strokeWidth={0.8} />,
      title: 'Mission',
      description:
        'To transform communities in Kenya through education by breaking down barriers of access to education, facilitating skills acquisition and promoting community education.',
    },
    {
      icon: <Users size={72} strokeWidth={0.8} />,
      title: 'Our Pillars',
      description: (
        <ul className='list-none pl-0 space-y-3'>
          <li className='flex items-start'>
            <span className='mr-2'>→</span>
            <span>
              Improving access, retention, and progression of children in formal
              education in Kenya.
            </span>
          </li>
          <li className='flex items-start'>
            <span className='mr-2'>→</span>
            <span>Empowering educators.</span>
          </li>
          <li className='flex items-start'>
            <span className='mr-2'>→</span>
            <span>Community Education for a changing world.</span>
          </li>
        </ul>
      ),
    },
  ];

  return (
    <section className='py-12 md:py-24'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-12 text-center text-foreground'>
          Our Values
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 md:gap-y-16 gap-x-8'>
          {valuesData.map((item, index) => (
            <Card
              className='w-full max-w-[424px] mx-auto flex flex-col pt-12 pb-8'
              key={index}
            >
              <CardHeader className='text-primary mb-8'>
                <div className='w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center rounded-full shadow-lg mx-auto'>
                  {item.icon}
                </div>
              </CardHeader>
              <CardContent className='text-left'>
                <CardTitle className='mb-4 text-center text-2xl font-semibold text-foreground'>
                  {item.title}
                </CardTitle>
                <CardDescription className='text-lg leading-relaxed text-foreground'>
                  {item.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className='text-center mt-12'>
          <Link href='/gallery'>
            <Button className='py-2 px-4 text-sm sm:py-3 sm:px-6 sm:text-base gap-x-2'>
              View All Events
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
