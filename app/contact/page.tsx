import ContactForm from '../../src/components/sections/ContactForm';

export default function Contact() {
  return (
    <div className="pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Kontakt
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Spremni smo da saslušamo vaše ideje i ostvarimo vaše fotografske vizije. 
            Kontaktirajte nas za besplatnu konsultaciju.
          </p>
        </div>
      </div>
      <ContactForm />
    </div>
  );
}
