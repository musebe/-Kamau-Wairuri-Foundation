import React from 'react';
import Image from 'next/image';

const posts = [
  {
    id: 1,
    title: 'Visit to Muranga Rescue Center',
    href: '#',
    description:
      'Kamau Wairuri Foundation Brings Hope to Muranga Childrens Rescue Center',
    imageUrl: '/work/3.png',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    author: {
      name: 'Kamau Wairuri Foundation',
      imageUrl: '/path/to/author/image.jpg', // Placeholder, replace with actual image path
    },
  },
  // Add more posts as needed
];

const Blog = () => {
  return (
    <div className='py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl text-center'>
          <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>
            From the blog
          </h2>
          <p className='mt-2 text-lg leading-8'>
            Discover how we are making a difference with our community
            initiatives.
          </p>
        </div>
        <div className='mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
          {posts.map((post) => (
            <article
              key={post.id}
              className='relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-80 sm:pt-48 lg:pt-80'
            >
              <Image
                src={post.imageUrl}
                alt=''
                layout='fill'
                className='absolute inset-0 -z-10 h-full w-full object-cover'
              />
              <div className='absolute inset-0 -z-10 bg-gradient-to-t from-transparent via-transparent to-black' />
              <div className='absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-black/10' />

              <div className='flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6'>
                <time dateTime={post.datetime} className='mr-8'>
                  {post.date}
                </time>
                <div className='-ml-5 flex items-center gap-x-4'>
                  {post.author.name}
                </div>
              </div>
              <h3 className='mt-3 text-lg font-semibold leading-6'>
                <a href={post.href}>
                  <span className='absolute inset-0' />
                  {post.title}
                </a>
              </h3>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
