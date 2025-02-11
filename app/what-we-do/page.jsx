import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const WhatWeDoPage = () => {
  const programsData = [
    {
      title: "Digital Skills Program",
      description:
        "Possession of digital skills is crucial for young people to access opportunities that allow them to fulfill their potential in the present-day world. We are committed to ensuring that young people, especially those in rural areas, have access to equipment and training that allows them to acquire and deepen digital skills. We do this by equipping computer labs in learning facilities and offering training sessions for young people at various stages in partnership with our partners.",
      imageUrl: "/about/digital.jpg",
    },
    {
      title: "Dignified Learning Program",
      description:
        "We support children from underprivileged backgrounds to access formal education in a dignified manner. This includes providing them with school uniforms and dignity packs that include basic hygiene supplies. We also support learning more broadly by providing mentorship sessions to the students through school visits.",
      imageUrl: "/about/dignified.jpg",
    },
    {
      title: "Promoting Health and Wellbeing",
      description:
        "As physical and mental health challenges compound, there is a need to shift focus from mainly treating illness to promoting wellbeing in our communities. This enables people to live well, in the ways which matter to them, even when things are difficult. We are committed to supporting wellbeing in our communities.<br/><br/>We do this through provision of group-based learning in the communities, such a through health talks, raising awareness on critical threats to public health (e.g. drugs and substance abuse, road safety) and providing appropriate short-term and long-term support to people in need in our communities. We particularly support the elderly, people with disabilities, and families going through crisis and grief.",
      imageUrl: "/about/1.jpg",
    },
    {
      title: "Youth Empowerment through Sports and the Creative Economy (YESC)",
      description: `
      Sports and the Creative Economy are often overlooked, yet they are an important driver of development. They generate economic wealth, create jobs and promote social cohesion. 
      We are committed to nurturing the artistic and sporting aspirations of young people. We help them to develop their skills, build confidence and become more socially connected through our investments in sports and the creative sector.<br/><br/>
      We do this by:
      <ul class='list-disc ml-4'>
        <li>Supporting training and mentorship of young people who are interested in sports and creative industries.</li>
        <li>Organising sports and cultural activities including sports tournaments and cultural festivals that bring young people together.</li>
        <li>Partnering with and supporting existing sporting clubs and creative organisations, both within and outside learning institutions such as schools and colleges.</li> 
      </ul>
      <br/>
      We use our activities to also promote behaviour change amongst young people especially on matters relating to sexual health, alcohol and drug use, interpersonal relationships and other relevant topics.
      `,
      imageUrl: "/about/4.jpg",
    },
    {
      title: "Women Economic Empowerment",
      description: `
        It is now widely recognised that the empowerment of women and girls is crucial for attaining sustainable development. However, women and girls still face many barriers in realising their full potential, worth and strength politically, socially and economically. 
        We are committed to promoting the empowerment of women and girls to enhance their self-worth, and so that they can make the right choices, access resources and opportunities and gain their voice to influence economic and social policy.<br/><br/>We make effort to include groups of women, such as single mothers, who are further excluded from women’s economic empowerment activities.  
        To achieve this, we train women groups on various relevant topics especially on financial management (including VSLAs/Table banking) and enterprise development and also support them to access financing so that they can grow their activities.
      `,
      imageUrl: "/about/6.webp",
    },
  ];

  return (
    <section className="py-12 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Introductory Section */}
        <div className="text-left mb-8">
          <div className="flex items-center gap-x-2 text-primary text-lg mb-2">
            <span className="w-[30px] h-[2px] bg-primary"></span>
            Transforming Lives Through Education 🌟
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-foreground text-center">
            What We Do
          </h1>
          <p className="text-lg sm:text-xl leading-relaxed text-foreground mb-8 max-w-2xl mx-auto text-center">
            To achieve our mission, we have organized our work under five
            programs.
          </p>
          <div className="flex justify-center">
            <div className="w-24 h-1 bg-blue-500 rounded-full"></div>
          </div>
          <div className="mt-6 text-center">
            <Link href="/about">
              <Button className="py-2 px-4 text-sm sm:py-3 sm:px-6 sm:text-base gap-x-2">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>

        {/* Programs Section */}

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-y-12 md:gap-y-12 lg:gap-y-16">
          {programsData.map((program, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg border p-6 flex flex-col lg:flex-row bg-white dark:bg-transparent"
            >
              <div className="w-full lg:w-1/2 h-auto rounded-lg shadow-lg">
                <Image
                  src={program.imageUrl}
                  alt={program.title}
                  width={600}
                  height={400}
                  className="min-w-full min-h-full object-cover"
                />
              </div>
              <div className="mt-6 lg:mt-0 lg:ml-6 w-full lg:w-1/2 flex flex-col justify-center">
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {program.title}
                </h3>
                <div
                  className="text-lg leading-relaxed text-foreground"
                  dangerouslySetInnerHTML={{ __html: program.description }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoPage;
