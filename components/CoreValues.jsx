import React from 'react';
import { BookOpen, Globe, Users } from 'lucide-react';

const CoreValues = () => {
  return (
    <section className='mx-4 sm:mx-auto p-6 mt-16'>
      {' '}
      {/* Further increased top margin */}
      <h2 className='text-3xl font-semibold text-center text-gray-900 dark:text-gray-100 mb-8'>
        {' '}
        {/* Further increased bottom margin */}
        Our Core Values
      </h2>
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-8'>
        {' '}
        {/* Increased gap between columns */}
        <div className='bg-white dark:bg-gray-800 rounded-lg shadow-lg p-10'>
          {' '}
          {/* Increased padding */}
          <BookOpen className='h-10 w-10 mb-6 text-blue-500' />{' '}
          {/* Increased bottom margin */}
          <p className='text-lg font-medium text-gray-700 dark:text-gray-300 leading-loose mb-8'>
            {' '}
            {/* Further increased margin and line height */}
            <strong className='text-gray-900 dark:text-gray-100'>
              Transformational Power of Education & Lifelong Learning:
            </strong>{' '}
            Education is the key to unlocking the potential of individuals from
            cradle to grave and transforming communities.
          </p>
        </div>
        <div className='bg-white dark:bg-gray-800 rounded-lg shadow-lg p-10'>
          {' '}
          {/* Increased padding */}
          <Globe className='h-10 w-10 mb-6 text-green-500' />{' '}
          {/* Increased bottom margin */}
          <p className='text-lg font-medium text-gray-700 dark:text-gray-300 leading-loose mb-8'>
            {' '}
            {/* Further increased margin and line height */}
            <strong className='text-gray-900 dark:text-gray-100'>
              Needs-based Interventions:
            </strong>{' '}
            Communities understand their needs and resources available. We work
            with them to identify and prioritize those needs, identify
            appropriate interventions, and implement them.
          </p>
        </div>
        <div className='bg-white dark:bg-gray-800 rounded-lg shadow-lg p-10'>
          {' '}
          {/* Increased padding */}
          <Users className='h-10 w-10 mb-6 text-yellow-500' />{' '}
          {/* Increased bottom margin */}
          <p className='text-lg font-medium text-gray-700 dark:text-gray-300 leading-loose mb-8'>
            {' '}
            {/* Further increased margin and line height */}
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
