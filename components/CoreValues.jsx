import React from 'react';
import { BookOpen, Globe, Users } from 'lucide-react';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const CoreValues = () => {
  const coreValuesData = [
    {
      icon: <BookOpen size={72} strokeWidth={0.8} className='text-blue-500' />,
      title: 'Transformational Power of Education & Lifelong Learning',
      description:
        'Education is the key to unlocking the potential of individuals from cradle to grave and transforming communities.',
    },
    {
      icon: <Globe size={72} strokeWidth={0.8} className='text-green-500' />,
      title: 'Needs-based Interventions',
      description:
        'Communities understand their needs and resources available. We work with them to identify and prioritize those needs, identify appropriate interventions, and implement them.',
    },
    {
      icon: <Users size={72} strokeWidth={0.8} className='text-yellow-500' />,
      title: 'Collaboration',
      description:
        'We believe in working with existing institutions and community mechanisms to deliver identified interventions.',
    },
  ];

  return (
    <section className='py-12 md:py-24'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-12 text-center text-foreground'>
          Our Core Values
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 md:gap-y-16 gap-x-8'>
          {coreValuesData.map((item, index) => (
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
      </div>
    </section>
  );
};

export default CoreValues;
