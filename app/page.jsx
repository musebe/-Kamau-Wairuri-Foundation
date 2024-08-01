// components
import About from '@/components/About';
import Hero from '@/components/Hero';
import Cta from '@/components/Cta';
import HomeGallery from '@/components/HomeGallery';

export default function Home() {
  return (
    <main>
      <Hero />
      <HomeGallery />
      <Cta />
    </main>
  );
}
