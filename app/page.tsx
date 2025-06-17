import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import FeaturedTalent from '@/components/sections/FeaturedTalent';
import News from '@/components/sections/News';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <About />
      <Services />
      <FeaturedTalent />
      <News />
      <Contact />
      <Footer />
    </main>
  );
}