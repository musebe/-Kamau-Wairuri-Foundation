import React from 'react';
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from '@heroicons/react/20/solid';

const page = () => {
  return (
    <div className='bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-screen-xl mx-auto'>
        <div className='bg-white shadow overflow-hidden sm:rounded-lg mb-8'>
          <div className='px-4 py-5 sm:px-6'>
            <h3 className='text-lg leading-6 font-medium text-gray-900'>
              About The Kamau Wairuri Foundation
            </h3>
            <p className='mt-1 max-w-2xl text-sm text-gray-500'>
              Empowering Through Education
            </p>
          </div>
          <div className='border-t border-gray-200'>
            <dl>
              <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                <dt className='text-sm font-medium text-gray-500'>
                  Foundation Overview
                </dt>
                <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                  The Kamau Wairuri Foundation is a nonprofit organization in
                  Kenya dedicated to empowering communities through education,
                  inspired by the transformative journey of our founder, Dr.
                  Kamau Wairuri.
                </dd>
              </div>
              <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                <dt className='text-sm font-medium text-gray-500'>
                  Mission Statement
                </dt>
                <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                  Our mission is guided by the belief that education can change
                  lives, as demonstrated by Dr. Wairuri’s own path from a local
                  primary school to prestigious universities. We aim to provide
                  the necessary support to children and adults in Kenya,
                  enabling them to pursue their educational goals.
                </dd>
              </div>
              <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                <dt className='text-sm font-medium text-gray-500'>
                  Core Values
                </dt>
                <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                  <ul className='list-disc pl-5 space-y-1'>
                    <li>
                      Transformational Power of Education & Lifelong Learning
                    </li>
                    <li>Needs-based Interventions</li>
                    <li>
                      Collaboration with Institutions and Community Mechanisms
                    </li>
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <div className='bg-white shadow overflow-hidden sm:rounded-lg'>
          <div className='px-4 py-5 sm:px-6'>
            <h3 className='text-lg leading-6 font-medium text-gray-900'>
              What We Do
            </h3>
          </div>
          <div className='border-t border-gray-200'>
            <dl>
              <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                <dt className='text-sm font-medium text-gray-500'>
                  Key Activities
                </dt>
                <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                  <ul className='list-disc pl-5 space-y-1'>
                    <li>
                      Providing educational supplies and improving learning
                      environments.
                    </li>
                    <li>
                      Offering digital literacy training and establishing
                      computer labs.
                    </li>
                    <li>
                      Mentorship and coaching to help students identify and
                      pursue their goals.
                    </li>
                    <li>
                      Empowering educators with skills and tools for effective
                      teaching.
                    </li>
                    <li>
                      Community education for lifelong learning in areas like
                      financial literacy and public health.
                    </li>
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
