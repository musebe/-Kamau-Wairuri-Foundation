import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <section className='py-12 md:py-24 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-left mb-8'>
          <div className='flex items-center gap-x-2 text-primary text-lg mb-2'>
            <span className='w-[30px] h-[2px] bg-primary'></span>
            Empowering Through Education 📚
          </div>
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
            <div className='text-base sm:text-lg lg:text-xl subtitle mb-4'>
              The Kamau Wairuri Foundation is a nonprofit organization based in
              Kenya, striving to empower communities through education.
            </div>
            <div className='text-base sm:text-lg lg:text-xl subtitle mb-4'>
              It is inspired by the personal journey of our Founder and Patron,
              Dr. Kamau Wairuri, a respected scholar and consultant in research,
              strategy, and public policy. He attributes his achievements to the
              education he received at Mjini Primary School in Murang'a and
              Starehe Boys' Center in Nairobi. He pursued higher education with
              great success both in Kenya (University of Nairobi) and abroad
              (University of Oxford and University of Edinburgh), culminating in
              a distinguished academic career.
            </div>
            <div className='text-base sm:text-lg lg:text-xl subtitle'>
              Dr. Wairuri firmly believes in the transformative power of
              education at individual and societal levels. As a beneficiary of
              tremendous support, he is committed to providing children and
              adults in Kenya with access to education that can positively
              impact their lives. This mission is guided by the mantra he
              learned at Starehe, "From those to whom much is given, much will
              be required" (Luke 12:48).
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
