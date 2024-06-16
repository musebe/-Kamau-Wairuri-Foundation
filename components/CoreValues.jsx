import React from 'react';
import { BookOpen, Globe, Users } from 'lucide-react';

const CoreValues = () => {
  return (
    <section className='shadow overflow-hidden sm:rounded-lg mb-8 mx-4 sm:mx-auto p-6 mt-12'>
      <h2 className='text-3xl font-semibold text-center'>Our Core Values</h2>
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6'>
        <div className='bg-white rounded-lg shadow-lg p-8'>
          <BookOpen className='h-10 w-10 mb-4 text-blue-500' />
          <p className='text-lg font-medium'>
            <strong>
              Transformational Power of Education & Lifelong Learning:
            </strong>{' '}
            Education is the key to unlocking the potential of individuals from
            cradle to grave and transforming communities.
          </p>
        </div>
        <div className='bg-white rounded-lg shadow-lg p-8'>
          <Globe className='h-10 w-10 mb-4 text-green-500' />
          <p className='text-lg font-medium'>
            <strong>Needs-based Interventions:</strong> Communities understand
            their needs and resources available. We work with them to identify
            and prioritize those needs, identify appropriate interventions, and
            implement them.
          </p>
        </div>
        <div className='bg-white rounded-lg shadow-lg p-8'>
          <Users className='h-10 w-10 mb-4 text-yellow-500' />
          <p className='text-lg font-medium'>
            <strong>Collaboration:</strong> We believe in working with existing
            institutions and community mechanisms to deliver identified
            interventions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
