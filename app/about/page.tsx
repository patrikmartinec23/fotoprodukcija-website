import Card from '../../src/components/ui/Card';
import Button from '../../src/components/ui/Button';

export default function About() {
  return (
    <div className="pt-8">
      {/* Hero Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                O nama
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Sa više od 10 godina iskustva u fotografiji, naš tim stručnjaka 
                posvećen je stvaranju nezaboravnih slika koje će vam omogućiti 
                da ponovo proživite svaki poseban trenutak.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Verujemo da svaka fotografija treba da priča priču. Naš cilj je 
                da uhvatimo autentične emocije i spontane trenutke koji čine 
                vaše uspomene jedinstvenim.
              </p>
              <Button variant="primary" size="lg">
                Pogledajte naš rad
              </Button>
            </div>
            
            {/* Image placeholder */}
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl shadow-xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gray-400 rounded-full mx-auto flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <p className="text-gray-500 text-sm">Team Photo Placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Naše vrednosti
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vodimo se principima koji garantuju izuzetno iskustvo za sve naše klijente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card padding="lg" className="text-center">
              <div className="w-16 h-16 bg-gray-900 text-white rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Profesionalnost</h3>
              <p className="text-gray-600">
                Pristupamo svakom projektu sa najvišim standardima profesionalnosti 
                i pažnje prema detaljima.
              </p>
            </Card>

            <Card padding="lg" className="text-center">
              <div className="w-16 h-16 bg-gray-900 text-white rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Strast</h3>
              <p className="text-gray-600">
                Našu strast prema fotografiji prenosimo u svaki kadar, stvarajući 
                slike koje inspirišu i diraju.
              </p>
            </Card>

            <Card padding="lg" className="text-center">
              <div className="w-16 h-16 bg-gray-900 text-white rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Kreativnost</h3>
              <p className="text-gray-600">
                Kombinujemo tehnično znanje sa kreativnim vidom kako bismo 
                stvorili jedinstvene i zapamtljive fotografije.
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
              Upoznajte talentovane fotografe koji stoje iza svake uspešne sesije.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Ana Petrović",
                role: "Glavni fotograf",
                speciality: "Vjenčanja i portreti"
              },
              {
                name: "Marko Nikolić",
                role: "Event fotograf",
                speciality: "Korporativni eventi"
              },
              {
                name: "Jelena Stanković",
                role: "Fashion fotograf",
                speciality: "Modna fotografija"
              }
            ].map((member, index) => (
              <Card key={index} padding="lg" className="text-center">
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
            Spremni ste da sa nama stvorite nezaboravne uspomene?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Kontaktirajte nas danas i dogovorite besplatnu konsultaciju.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Pogledajte portfolio
            </Button>
            <Button variant="outline" size="lg">
              Rezervišite termin
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
