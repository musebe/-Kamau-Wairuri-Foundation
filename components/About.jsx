// components/About.js
import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <section className='py-12 md:py-24 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground'>
            About The Kamau Wairuri Foundation
          </h1>
        </div>
        <div className='flex flex-col lg:flex-row justify-between gap-x-8 items-start'>
          <div className='w-full lg:w-1/2 mb-8 lg:mb-0'>
            <Image
              src='/about/about.jpg'
              alt='Dr. Kamau Wairuri'
              width={500}
              height={600}
              className='rounded-xl shadow-lg w-full h-auto'
              sizes='(max-width: 1023px) 100vw, 50vw'
              priority
            />
          </div>
          <div className='flex w-full lg:w-1/2 flex-col justify-center mx-auto lg:mx-0 text-left'>
            <p className='text-base sm:text-lg lg:text-xl subtitle mb-4'>
              The Kamau Wairuri Foundation is a nonprofit making organization
              based in Kenya which strives to empower communities through
              education.
            </p>
            <p className='text-base sm:text-lg lg:text-xl subtitle mb-4'>
              It is inspired by the personal journey of our Founder and Patron,
              Dr Kamau Wairuri, a well-respected scholar and consultant in the
              areas of research, strategy and public policy. He credits his
              achievements to the seed of education that was sown at Mjini
              Primary School in Murang'a and nurtured at Starehe Boys' Center in
              Nairobi. He continued his academic pursuits, achieving remarkable
              success in higher education both in Kenya (University of Nairobi)
              and abroad (University of Oxford and University of Edinburgh)
              culminating in his career in academia.
            </p>
            <p className='text-base sm:text-lg lg:text-xl subtitle'>
              Based on the impact on his own life, Dr Wairuri firmly believe in
              the transformative power of education at individual and societal
              levels. As a beneficiary of tremendous support, he is determined
              to provide support to children and adults in Kenya to access
              education that will have a positive impact on their lives. This is
              in keeping with the mantra he learned at Starehe, "From those to
              whom much is given, much will be required (Luke 12:48)."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
