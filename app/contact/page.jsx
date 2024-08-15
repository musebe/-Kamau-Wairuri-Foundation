"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  DollarSign,
  Users,
  ArrowRight,
  Mail as MailIcon,
  CreditCard,
  HeartHandshake,
} from "lucide-react";
import Link from "next/link";
import { FaPaypal } from "react-icons/fa";
import Form from "@/components/Form";
import { Button } from "@/components/ui/button";

const Page = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Or a loading spinner
  }

  const handleScrollToContact = () => {
    document
      .getElementById("contact-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col min-h-screen justify-center">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow">
        {/* Get Involved Section */}
        <section className="pt-2 md:pt-4 pb-4 md:pb-8">
          {" "}
          {/* Further reduced padding-bottom */}
          <div className="text-left mb-8">
            <div className="flex items-center gap-x-2 text-primary text-lg mb-10 md:mb-8">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              Join Us in Making a Difference 🤝
            </div>
            <div className="text-center mb-20">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
                Get Involved
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto text-center">
                Be part of our mission to transform lives through education.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div
              className="relative w-full"
              style={{ height: "auto", minHeight: "200px" }} // Adjusted height
            >
              <Image
                src="/involved/involved.jpg"
                alt="Volunteering"
                layout="responsive"
                width={500}
                height={300}
                style={{ objectFit: "cover" }}
                className="transition-opacity duration-500 hover:opacity-80 rounded-xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-transparent" />
            </div>
            <div className="bg-white dark:bg-gray-800">
              <div className="flex items-center">
                <DollarSign className="text-green-600 dark:text-green-400 mr-2" />
                <h2 className="text-2xl font-bold text-foreground">
                  Donate to support our various projects
                </h2>
              </div>
              <ul className="mt-12 space-y-12">
                <li className="flex items-start">
                  <Image
                    src="/icons8-mpesa-48.png"
                    alt="Mpesa Icon"
                    width={24}
                    height={24}
                    className="mr-2"
                  />
                  <div className="text-left">
                    <span className="font-semibold text-lg text-indigo-600 dark:text-indigo-400">
                      Donate with Mpesa
                    </span>
                    <div className="ml-0">
                      <span className="block select-all text-sm text-gray-500 dark:text-gray-300">
                        Till Number: 5728345
                      </span>
                      <span className="block text-sm text-gray-500 dark:text-gray-300">
                        Name: KAMAU WAIRURI FOUNDATION
                      </span>
                    </div>
                  </div>
                </li>
                <li className="flex items-center">
                  <CreditCard className="text-yellow-600 dark:text-yellow-400 mr-2" />
                  <Link
                    href="https://www.mchanga.africa/fundraiser/98856#donatenow"
                    target="_blank"
                    className="inline-flex items-center font-bold text-lg text-yellow-600 hover:text-yellow-800 dark:text-yellow-400 dark:hover:text-yellow-300"
                  >
                    Donate With Card <ArrowRight className="ml-1" />
                  </Link>
                </li>
                <li className="flex items-center">
                  <FaPaypal className="text-blue-600 dark:text-blue-400 mr-2" />
                  <Link
                    href="https://www.mchanga.africa/fundraiser/98856#donatenow"
                    target="_blank"
                    className="inline-flex items-center font-bold text-lg text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    Donate With PayPal <ArrowRight className="ml-1" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Us Section */}
        <section id="contact-section" className="pt-16 md:pt-28 pb-12 md:pb-24">
          {" "}
          {/* Further reduced padding-top */}
          <div className="text-center mb-20">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
              Let's Work Together.
            </h1>
          </div>
          <div className="flex flex-col lg:flex-row justify-between gap-16 items-start">
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
              <Image
                src="/contact/contact.jpg"
                alt="Contact Illustration"
                layout="responsive"
                width={500}
                height={600}
                className="rounded-xl shadow-lg w-full h-auto"
                priority
              />
            </div>
            <div className="flex w-full lg:w-1/2 flex-col justify-center mx-auto lg:mx-0 text-left">
              <div className="text-base sm:text-lg lg:text-xl mb-4">
                Do you have questions or want to learn more about our programs?
                Get in touch with us today via info@kamauwairuri.org or our
                social media accounts. The Kamau Wairuri Foundation is committed
                to creating lasting change through education. Together, we can
                build a brighter future for all!
              </div>
              <Form />
            </div>
          </div>
        </section>
      </div>
      <div className="py-12"></div> {/* Space before footer */}
    </div>
  );
};

export default Page;
