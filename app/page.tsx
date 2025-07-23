import Hero from '../src/components/sections/Hero';
import PortfolioGrid from '../src/components/sections/PortfolioGrid';
import ServiceCards from '../src/components/sections/ServiceCards';
import ContactForm from '../src/components/sections/ContactForm';

export default function Home() {
  return (
    <main>
      <Hero />
      <PortfolioGrid />
      <ServiceCards />
      <ContactForm />
    </main>
  );
}
