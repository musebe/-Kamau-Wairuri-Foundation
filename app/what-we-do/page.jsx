import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Lightbulb, Server, BookOpen, Users, Globe } from 'lucide-react';

const WhatWeDoPage = () => {
  return (
    <div className='py-12 px-4 sm:px-6 md:px-6 lg:px-8'>
      <div className='max-w-screen-xl mx-auto'>
        {/* Hero Section with Image of What We Do */}
        <div className='shadow overflow-hidden sm:rounded-lg mb-8 md:mb-12 lg:mb-16 flex flex-col md:flex-row lg:flex-row items-center'>
          <div className='px-6 py-5 md:w-1/2 lg:w-1/2 md:order-2'>
            <h1 className='text-3xl font-semibold mb-6'>
              {' '}
              {/* Increased bottom margin */}
              What We Do
            </h1>
            <p className='leading-loose mb-6'>
              {' '}
              {/* Adjusted line height and margin */}
              To achieve our mission, we have organized our work under five
              programs.
            </p>
            {/* Call to Action Button */}
            <div className='mt-6'>
              <Link href='/gallery' passHref>
                <span className='inline-block cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full animate-bounce'>
                  Visit Our Gallery
                </span>
              </Link>
            </div>
          </div>
          <div className='md:w-1/2 lg:w-1/2 md:order-1'>
            <Image
              src='/about/we_do.jpg'
              alt='What We Do'
              width={600}
              height={600}
              className='rounded-lg'
              priority
            />
          </div>
        </div>

        {/* Detailed Section about Activities and Strategies */}
        <div>
          {/* Digital Skills Program */}
          <div className='shadow overflow-hidden sm:rounded-lg mb-8 md:mb-12 lg:mb-16 p-6 flex items-stretch'>
            <div className='flex-shrink-0 flex items-center'>
              <Lightbulb className='h-10 w-10 text-yellow-500' />
            </div>
            <div className='ml-4'>
              <h3 className='text-xl font-semibold mb-6'>
                Digital Skills Program:
              </h3>{' '}
              {/* Increased bottom margin */}
              <p className='leading-loose mb-6'>
                Possession of digital Skills is crucial for young people to be
                able to access opportunities that allow them to fulfil their
                potential in the present-day world. We are committed to ensuring
                that young people, especially those in rural areas, have access
                to equipment and training that allows them to acquire and deepen
                digital skills. We do this by equipping computer labs in
                learning facilities and offering training sessions for young
                people at various stages in partnership with our partners.
              </p>
            </div>
          </div>

          {/* Dignified Learning Program */}
          <div className='shadow overflow-hidden sm:rounded-lg mb-8 md:mb-12 lg:mb-16 p-6 flex items-stretch'>
            <div className='flex-shrink-0 flex items-center'>
              <Server className='h-10 w-10 text-blue-500' />
            </div>
            <div className='ml-4'>
              <h3 className='text-xl font-semibold mb-6'>
                Dignified Learning Program:
              </h3>{' '}
              {/* Increased bottom margin */}
              <p className='leading-loose mb-6'>
                We support children from under-privileged backgrounds to access
                formal education in a dignified manner. This includes providing
                them with school uniforms and dignity packs that include basic
                hygiene supplies. We also support learning more broadly by
                providing mentorship sessions to the students through school
                visits.
              </p>
            </div>
          </div>

          {/* Empowering Educators */}
          <div className='shadow overflow-hidden sm:rounded-lg mb-8 md:mb-12 lg:mb-16 p-6 flex items-stretch'>
            <div className='flex-shrink-0 flex items-center'>
              <Users className='h-10 w-10 text-yellow-500' />
            </div>
            <div className='ml-4'>
              <h3 className='text-xl font-semibold mb-6'>
                Empowering Educators:
              </h3>{' '}
              {/* Increased bottom margin */}
              <p className='leading-loose mb-6'>
                We recognize that teachers are key players within the
                educational ecosystem and thus key drivers of educational
                outcomes within communities. However, even as the teaching
                context and the demands on teachers expand, they are not always
                provided with the skills and tools they require to remain
                effective in their practice. We run a 5-day teacher’s training
                fellowship where we train teachers on various topics including
                mental health and wellbeing, pedagogical strategies, digital
                skills and child protection.
              </p>
            </div>
          </div>

          {/* Community Education and Service */}
          <div className='shadow overflow-hidden sm:rounded-lg mb-8 md:mb-12 lg:mb-16 p-6 flex items-stretch'>
            <div className='flex-shrink-0 flex items-center'>
              <BookOpen className='h-10 w-10 text-green-500' />
            </div>
            <div className='ml-4'>
              <h3 className='text-xl font-semibold mb-6'>
                Community Education and Service:
              </h3>{' '}
              {/* Increased bottom margin */}
              <p className='leading-loose mb-6'>
                We promote life-long learning by providing community education
                that empowers community members to contribute meaningfully to
                local development. Through public seminars, clinics, and
                cultural productions, we educate communities or social groups on
                relevant topics such as financial literacy, public health, legal
                rights, climate change & environmental management, drugs and
                substance abuse, and disputes and conflict management.
              </p>
            </div>
          </div>

          {/* Youth Skills & Employability */}
          <div className='shadow overflow-hidden sm:rounded-lg mb-8 md:mb-12 lg:mb-16 p-6 flex items-stretch'>
            <div className='flex-shrink-0 flex items-center'>
              <Globe className='h-10 w-10 text-green-500' />
            </div>
            <div className='ml-4'>
              <h3 className='text-xl font-semibold mb-6'>
                Youth Skills & Employability:
              </h3>{' '}
              {/* Increased bottom margin */}
              <p className='leading-loose mb-6'>
                We support young people in rural areas who have completed higher
                education to access skills training that prepare them for jobs
                or self-employment. We do this in partnership with local
                vocational education providers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDoPage;
