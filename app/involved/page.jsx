import React from 'react';

const Page = () => {
  return (
    <div className='bg-white py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='flex flex-col md:flex-row gap-8'>
          <div className='md:flex-1'>
            <div className='relative h-96 w-full overflow-hidden rounded-3xl shadow-lg'>
              <img
                className='absolute inset-0 h-full w-full object-cover'
                src='https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
                alt='Volunteering'
              />
              <div className='absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 mix-blend-multiply' />
            </div>
          </div>
          <div className='md:flex-1'>
            <div className='bg-white p-6 rounded-lg shadow-xl'>
              <h1 className='text-3xl font-bold text-gray-900 sm:text-4xl'>
                Get Involved
              </h1>
              <p className='mt-4 text-lg text-gray-700'>
                You are welcome to be part of our mission to transform lives
                through education. There are many ways to get involved:
              </p>
              <ul className='mt-4 list-disc list-inside text-gray-700'>
                <li>Volunteer in our activities</li>
                <li>Donate to support our various projects</li>
                <li>Partner with us</li>
              </ul>
              <p className='mt-6 text-gray-600'>
                Send your donation to M-Pesa Till Number <strong>xxxxxx</strong>{' '}
                or to our account at Sidian Bank, RiverRoad Branch, A/c No:{' '}
                <strong>_____</strong>.
              </p>
              <a
                href='#'
                className='mt-6 inline-block text-indigo-600 hover:text-indigo-800'
              >
                Learn more about our mission{' '}
                <span aria-hidden='true'>&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
