import Hero from '../src/components/sections/Hero';
import PortfolioGrid from '../src/components/sections/PortfolioGrid';
import OurStory from '../src/components/sections/OurStory';
import ContactForm from '../src/components/sections/ContactForm';

export default function Home() {
  return (
    <main>
      <Hero />
      <PortfolioGrid />
      
      {/* Our Story Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <OurStory />
          </div>
        </div>
      </section>
      <ContactForm />
    </main>
  );
}
