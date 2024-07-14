import React from 'react';
import { BookOpen, Globe, Users } from 'lucide-react';

const CoreValues = () => {
  return (
    <section className='shadow overflow-hidden sm:rounded-lg mb-8 mx-4 sm:mx-auto p-6 mt-12'>
      <h2 className='text-3xl font-semibold text-center text-gray-900 dark:text-gray-100'>
        Our Core Values
      </h2>
      <div className='flex flex-col gap-6 mt-6 md:grid md:grid-cols-1 lg:grid-cols-3'>
        <div className='flex flex-col md:flex-row lg:flex-col bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8'>
          <BookOpen className='h-10 w-10 mb-4 md:mb-0 md:mr-4 lg:mr-0 lg:mb-4 text-blue-500 flex-shrink-0' />
          <p className='text-lg font-medium text-gray-700 dark:text-gray-300'>
            <strong className='text-gray-900 dark:text-gray-100'>
              Transformational Power of Education & Lifelong Learning:
            </strong>{' '}
            Education is the key to unlocking the potential of individuals from
            cradle to grave and transforming communities.
          </p>
        </div>
        <div className='flex flex-col md:flex-row lg:flex-col bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8'>
          <Globe className='h-10 w-10 mb-4 md:mb-0 md:mr-4 lg:mr-0 lg:mb-4 text-green-500 flex-shrink-0' />
          <p className='text-lg font-medium text-gray-700 dark:text-gray-300'>
            <strong className='text-gray-900 dark:text-gray-100'>
              Needs-based Interventions:
            </strong>{' '}
            Communities understand their needs and resources available. We work
            with them to identify and prioritize those needs, identify
            appropriate interventions, and implement them.
          </p>
        </div>
        <div className='flex flex-col md:flex-row lg:flex-col bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8'>
          <Users className='h-10 w-10 mb-4 md:mb-0 md:mr-4 lg:mr-0 lg:mb-4 text-yellow-500 flex-shrink-0' />
          <p className='text-lg font-medium text-gray-700 dark:text-gray-300'>
            <strong className='text-gray-900 dark:text-gray-100'>
              Collaboration:
            </strong>{' '}
            We believe in working with existing institutions and community
            mechanisms to deliver identified interventions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
