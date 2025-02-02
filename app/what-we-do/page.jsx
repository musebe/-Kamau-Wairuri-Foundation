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
        "As physical and mental health challenges compound, there is a need to shift focus from mainly treating illness to promoting wellbeing in our communities.  This enables people to live well, in the ways which matter to them, even when things are difficult. We are committed to supporting wellbeing in our communities, We do this through provision of group-based learning in the communities, such a through health talks, raising awareness on critical threats to public health (e.g. drugs and substance abuse, road safety) and providing appropriate short-term and long-term support to people in need in our communities. We particularly support the elderly, people with disabilities, and families going through crisis and grief.",
      imageUrl: "/about/1.jpg",
    },
    {
      title: "Community Education and Service",
      description:
        "We promote lifelong learning by providing community education that empowers community members to contribute meaningfully to local development. Through public seminars, clinics, and cultural productions, we educate communities or social groups on relevant topics such as financial literacy, public health, legal rights, climate change & environmental management, drugs and substance abuse, and disputes and conflict management.",
      imageUrl: "/about/5.jpg",
    },
    {
      title: "Youth Skills & Employability",
      description:
        "We support young people in rural areas who have completed higher education to access skills training that prepare them for jobs or self-employment. We do this in partnership with local vocational education providers.",
      imageUrl: "/about/4.jpg",
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
              <div className="w-full lg:w-1/2 h-auto">
                <Image
                  src={program.imageUrl}
                  alt={program.title}
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                />
              </div>
              <div className="mt-6 lg:mt-0 lg:ml-6 w-full lg:w-1/2 flex flex-col justify-center">
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {program.title}
                </h3>
                <p className="text-lg leading-relaxed text-foreground">
                  {program.description.split(". ").map((sentence, i) => (
                    <span key={i}>
                      {sentence}.
                      {i < program.description.split(". ").length - 1 && (
                        <>
                          <br />
                          <br />
                        </>
                      )}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoPage;
