import React from 'react';
import Image from 'next/image';
import {
  Lightbulb,
  Server,
  BookOpen,
  CheckCircle,
  HeartHandshake,
  Users,
  Layers,
  Award,
  Briefcase,
  Monitor,
  UserCheck,
  Heart,
  Globe,
} from 'lucide-react';

const WhatWeDoPage = () => {
  return (
    <div className='py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-screen-xl mx-auto'>
        {/* Hero Section with Image of What We Do */}
        <div className='shadow overflow-hidden sm:rounded-lg mb-8 flex flex-col md:flex-row items-center'>
          <div className='px-6 py-5 md:w-1/2 md:order-2'>
            <h1 className='text-3xl font-semibold'>What We Do</h1>
            <p className='mt-2'>
              To achieve our aims under the three core pillars, we deploy
              various strategies.
            </p>
          </div>
          <div className='md:w-1/2 md:order-1'>
            <Image
              src='/work/do.webp'
              alt='What We Do'
              width={500}
              height={600}
              className='rounded-lg'
            />
          </div>
        </div>

        {/* Detailed Section about Activities and Strategies */}
        <div className='shadow overflow-hidden sm:rounded-lg mb-8 p-6'>
         
          <div className='space-y-6'>
            {/* Improving Education Section */}
            <div>
              <h3 className='text-xl font-semibold flex items-center'>
                <Lightbulb className='mr-2 text-yellow-500' />
                Improving access, retention and progression of children in
                formal education in Kenya.
              </h3>
              <p>
                By helping children and families overcomes barriers that hinder
                access, retention and transition within and across the various
                levels of formal education. We seek to address these challenges
                through:
              </p>
              <ul className='list-disc pl-6'>
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
            </div>

            {/* Empowering Educators Section */}
            <div>
              <h3 className='text-xl font-semibold flex items-center'>
                <Server className='mr-2 text-blue-500' />
                Empowering Educators.
              </h3>
              <p>
                We recognise that teachers are key players within the
                educational ecosystem and thus key drivers of educational
                outcomes within communities. However, even as the teaching
                context and the demands on teachers expand, they are not always
                provided with the skills and tools they require in order to
                remain effective in their practice. We focus on:
              </p>
              <ul className='list-disc pl-6'>
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
            </div>

            {/* Community Education Section */}
            <div>
              <h3 className='text-xl font-semibold flex items-center'>
                <BookOpen className='mr-2 text-green-500' />
                Community education for a changing world.
              </h3>
              <p>
                We promote life-long learning by providing community education
                that empowers community member to contribute meaningfully to
                local development such as financial literacy, public health,
                legal rights, climate change & environmental management, drugs
                and substance abuse, and disputes and conflict management. We do
                this through:
              </p>
              <ul className='list-disc pl-6'>
                <li>
                  Public Seminars & Clinics held at the grassroots levels.
                </li>
                <li>
                  Press and Media including publishing articles, producing
                  podcasts, social media activities.
                </li>
                <li>
                  Exchange programs for various occupational groups including
                  farmers and teachers.
                </li>
                <li>
                  Sport and Cultural productions as avenues for social change.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDoPage;
