import ContactForm from '../../src/components/sections/ContactForm';
import Card from '../../src/components/ui/Card';
import Button from '../../src/components/ui/Button';

export default function About() {
  return (
    <div className="pt-8">
      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Naše vrednosti
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tri temelja koji vode naš rad i garantuju izuzetne rezultate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card padding="lg" className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Kvalitet</h3>
              <p className="text-gray-600">
                Svaka fotografija je pažljivo obrađena i usavršena do najmanjeg 
                detalja za vrhunske rezultate.
              </p>
            </Card>

            <Card padding="lg" className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Strast</h3>
              <p className="text-gray-600">
                Fotografisanje nije samo naš posao, već naša strast koja se odražava 
                u svakom kadru koji napravimo.
              </p>
            </Card>

            <Card padding="lg" className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Inovativnost</h3>
              <p className="text-gray-600">
                Kombinujemo tehničko znanje sa kreativnim pristupom da stvorimo 
                jedinstvene i nezaboravne fotografije.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Naš tim
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Upoznajte talentovane fotografe koji stoje iza svakog uspešnog fotografisanja.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Ana Novak",
                role: "Glavna fotografkinja",
                speciality: "Venčanja i portreti"
              },
              {
                name: "Marko Novak",
                role: "Event fotograf",
                speciality: "Korporativni događaji"
              },
              {
                name: "Jelena Petrović",
                role: "Modna fotografkinja",
                speciality: "Modna fotografija"
              }
            ].map((member, index) => (
              <Card 
                key={index} 
                padding="lg" 
                className="text-center"
              >
                <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center w-32 h-32">
                  <svg className="w-12 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-gray-600 mb-2">{member.role}</p>
                <p className="text-sm text-gray-500">{member.speciality}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Spremni ste da stvorite nezaboravne uspomene sa nama?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Kontaktirajte nas danas i dogovorite besplatno konsultovanje.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
              Rezervišite termin
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900">
              Pogledajte naš portfolio
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
