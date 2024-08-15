import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { HeartHandshake, Send } from "lucide-react";
import Socials from "./Socials";

const Hero = () => {
  return (
    <section className="py-12 md:py-24 h-auto md:h-[84vh] md:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between gap-x-8 items-center">
          {/* text */}
          <div className="flex max-w-full lg:max-w-xl flex-col justify-center lg:mx-0">
            {/* socials and image on smaller screens */}
            <div className="lg:hidden flex flex-col items-center mb-4">
              <Image
                src="/hero/home.JPG"
                alt="Kamau Wairuri Foundation"
                width={1000}
                height={455}
                className="rounded-xl shadow-lg mx-auto"
                style={{ width: "auto", height: "auto" }}
              />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl my-8 text-center lg:text-left">
              Kamau Wairuri Foundation
            </h1>
            <p className="text-base sm:text-lg lg:text-xl subtitle mx-auto lg:mx-0 text-left">
              Kamau Wairuri Foundation exists to transform communities in Kenya
              through education. Inspired by the journey of our Founder and
              Patron, Dr. Kamau Wairuri, we are committed to providing support
              and opportunities for children and adults to access education that
              enables them to fulfil their potential and contribute positively
              to community development.
            </p>
            {/* buttons */}
            <div className="flex flex-row gap-y-3 gap-x-3 justify-center lg:justify-start mb-12">
              <Link href="/contact">
                <Button className="py-2 px-4 text-sm sm:py-3 sm:px-6 sm:text-base gap-x-2">
                  Contact us <Send size={18} />
                </Button>
              </Link>
            </div>

            {/* socials on medium and larger screens */}
          </div>
          {/* image on medium and larger screens */}
          <div className="hidden lg:flex relative">
            <Image
              src="/hero/home.JPG"
              alt="Kamau Wairuri Foundation"
              width={550}
              height={500}
              className="rounded-xl shadow-lg"
              style={{ width: "auto", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
