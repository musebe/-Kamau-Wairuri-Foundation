// components
import About from '@/components/About';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Corevalues from '@/components/CoreValues';
import Cta from '@/components/Cta';
import HomeGallery from '@/components/HomeGallery';

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <HomeGallery />
      <Corevalues />
      <Cta />
    </main>
  );
}
