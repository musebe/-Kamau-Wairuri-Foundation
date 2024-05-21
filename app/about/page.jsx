import React from 'react';
import Image from 'next/image';
import {
  Lightbulb,
  Server,
  BookOpen,
  CheckCircle,
  HandsHelping,
} from 'lucide-react';
import { CloudArrowUpIcon, LockClosedIcon } from '@heroicons/react/20/solid';

const page = () => {
  return (
    <div className='py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-screen-xl mx-auto'>
        {/* Hero Section with Image of the Founder */}
        <div className='shadow overflow-hidden sm:rounded-lg mb-8 flex flex-col md:flex-row items-center'>
          <div className='md:w-1/2'>
            <Image
              src='/hero/hero.jpg'
              alt='Dr. Kamau Wairuri'
              width={500}
              height={600}
              className='rounded-lg'
            />
          </div>
          <div className='px-6 py-5 md:w-1/2'>
            <h1 className='text-3xl font-semibold'>
              About The Kamau Wairuri Foundation
            </h1>
            <p className='mt-2'>
              The Kamau Wairuri Foundation is a nonprofit making organization
              based in Kenya which strives to empower communities through
              education.
            </p>
            <p className='mt-4'>
              It is inspired by the personal journey of our Founder and Patron,
              Dr Kamau Wairuri, a well-respected scholar and consultant in the
              areas of research, strategy and public policy. He credits his
              achievements to the seed of education that was sown at Mjini
              Primary School in Murang’a and nurtured at Starehe Boys’ Center in
              Nairobi. He continued his academic pursuits, achieving remarkable
              success in higher education both in Kenya (University of Nairobi)
              and abroad (University of Oxford and University of Edinburgh)
              culminating in his career in academia.
            </p>
            <p className='mt-2'>
              Based on the impact on his own life, Dr Wairuri firmly believe in
              the transformative power of education at individual and societal
              levels. As a beneficiary of tremendous support, he is determined
              to provide support to children and adults in Kenya to access
              education that will have a positive impact on their lives. This is
              in keeping with the mantra he learned at Starehe, “From those to
              whom much is given, much will be required (Luke 12:48).”
            </p>
          </div>
        </div>

        {/* Core Values Section */}
        <div className='shadow overflow-hidden sm:rounded-lg mb-8 p-6'>
          <h2 className='text-2xl font-semibold'>Our Core Values</h2>
          <div className='flex flex-col md:flex-row justify-between mt-4 space-y-4 md:space-y-0'>
            <p className='md:flex-1'>
              <strong>
                Transformational Power of Education & Lifelong learning:
              </strong>{' '}
              Education is the key to unlocking the potential of individuals
              from cradle to grave and transforming communities.
            </p>
            <p className='md:flex-1'>
              <strong>Needs-based Interventions:</strong> Communities understand
              their needs and resources available. We work with them to identify
              and prioritise those needs, identify appropriate interventions and
              implement them.
            </p>
            <p className='md:flex-1'>
              <strong>Collaboration:</strong> We believe in working with
              existing institutions and community mechanisms to deliver
              identified interventions.
            </p>
          </div>
        </div>

        {/* What We Do Section */}
        <div className='shadow overflow-hidden sm:rounded-lg p-6'>
          <h2 className='text-2xl font-semibold'>What We Do</h2>
          <p className='mt-2'>
            To achieve our aims under the three core pillars, we deploy various
            strategies.
          </p>
          <ul className='list-none pl-4 mt-4 space-y-2'>
            <li>
              <strong>
                Improving access, retention and progression of children in
                formal education in Kenya:
              </strong>{' '}
              We help children and families overcome barriers that hinder
              access, retention and transition within and across the various
              levels of formal education. We seek to address these challenges
              through:
              <ul className='list-disc pl-6 space-y-1'>
                <li>
                  Provision of basic educational supplies such as uniforms,
                  menstrual health products and learning materials.
                </li>
                <li>
                  Improving the learning environment to facilitate learning
                  including provision of desks and computers to schools.
                </li>
                <li>
                  Digital Literacy: We offer digital skills training to children
                  in Kenya through establishing computer labs and running
                  computer camps.
                </li>
                <li>
                  Mentorship and coaching of students to help students identify
                  their passions and achieve their goals on topics such as
                  self-development, career planning, drugs and substance abuse.
                </li>
              </ul>
            </li>
            <li>
              <strong>Empowering Educators:</strong> We recognise that teachers
              are key players within the educational ecosystem and thus key
              drivers of educational outcomes within communities. However, even
              as the teaching context and the demands on teachers expand, they
              are not always provided with the skills and tools they require in
              order to remain effective in their practice. We focus on:
              <ul className='list-disc pl-6 space-y-1'>
                <li>
                  Mental health and wellbeing of teachers: We provide practical
                  training to teachers to help them better protect their mental
                  health and well being.
                </li>
                <li>
                  Evidence-based pedagogy: We provide opportunities for teachers
                  to improve their pedagogical strategies through observation,
                  feedback and reflection session. This includes organizing
                  seminars, workshops and exchange visits in order to help
                  teachers to enhance their practice, improve learning and
                  cultivate a passion for learning.
                </li>
                <li>
                  Creating enabling environments for teachers: We support
                  teachers by providing educational aids that they require for
                  their classrooms.
                </li>
                <li>
                  Digital skills for Teachers: We equip school teachers with the
                  necessary tools and skills to be able to impart digital
                  knowledge to children in classrooms and beyond the classroom.
                </li>
              </ul>
            </li>
            <li>
              <strong>Community education for a changing world:</strong> We
              promote life-long learning by providing community education that
              empowers community members to contribute meaningfully to local
              development such as financial literacy, public health, legal
              rights, climate change & environmental management, drugs and
              substance abuse, and disputes and conflict management. We do this
              through:
              <ul className='list-disc pl-6 space-y-1'>
                <li>
                  Public Seminars & Clinics held at the grassroots levels.
                </li>
                <li>
                  Press and Media including publishing articles, producing
                  podcasts, social media activations.
                </li>
                <li>
                  Exchange programs for various occupational groups including
                  farmers and teachers.
                </li>
                <li>
                  Sport and Cultural productions as avenues for social change.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default page;
