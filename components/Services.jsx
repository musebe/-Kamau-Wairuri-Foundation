import { Lightbulb, Award, Users } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const valuesData = [
  {
    icon: <Lightbulb size={72} strokeWidth={0.8} />,
    title: 'Vision',
    description:
      'A society where access to quality education enables children and adults to fulfill their potential and contribute to the development of their communities.',
  },
  {
    icon: <Award size={72} strokeWidth={0.8} />,
    title: 'Mission',
    description:
      'To transform communities in Kenya through education by breaking down barriers of access to formal education, facilitating skills acquisition, and promoting community education.',
  },
  {
    icon: <Users size={72} strokeWidth={0.8} />,
    title: 'Our Pillars',
    description:
      '1. Improving access, retention, and progression of children in formal education in Kenya.\n2. Empowering educators.\n3. Community Education for a changing world.',
  },
];

const Services = () => {
  return (
    <section className='mb-12 xl:mb-36'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-12 xl:mb-24 text-center mx-auto'>
          Our Values
        </h2>
        {/* Grid items */}
        <div className='grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8'>
          {valuesData.map((item, index) => {
            return (
              <Card
                className='w-full max-w-[424px] h-[360px] flex flex-col pt-16 pb-10 justify-center items-center relative'
                key={index}
              >
                <CardHeader className='text-primary absolute -top-[60px]'>
                  <div className='w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center rounded-full shadow-lg'>
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className='text-center'>
                  <CardTitle className='mb-4'>{item.title}</CardTitle>
                  <CardDescription className='text-lg'>
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
