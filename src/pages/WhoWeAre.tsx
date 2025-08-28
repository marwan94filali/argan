import Header from '@/components/Header';
import Footer from '@/components/Footer';

const WhoWeAre = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-argan-green to-argan-green-light py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-white">
                Qui sommes-nous ?
              </h1>
              <div className="w-24 h-1 bg-argan-yellow mx-auto"></div>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                ARGAN est un spécialiste des huiles végétales pures et naturelles pour la cosmétique et la nutrition.
              </p>
            </div>
          </div>
        </section>

        {/* About Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-argan-green">
                  Notre Histoire
                </h2>
                <p className="text-argan-earth-light leading-relaxed">
                  Fondée avec la vision de rapprocher la nature des marques, ARGAN développe des filières durables d'approvisionnement en Afrique depuis de nombreuses années.
                </p>
                <p className="text-argan-earth-light leading-relaxed">
                  Notre expertise nous permet de maîtriser chaque étape de la production, de la sélection des matières premières jusqu'à la livraison du produit fini.
                </p>
              </div>
              
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-argan-green">
                  Notre Mission
                </h2>
                <p className="text-argan-earth-light leading-relaxed">
                  Nous nous engageons à fournir des huiles végétales d'exception tout en respectant l'environnement et en soutenant les communautés locales productrices.
                </p>
                <p className="text-argan-earth-light leading-relaxed">
                  Chaque partenariat que nous développons vise à créer un impact positif durable sur les régions de production.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Figures */}
        <section className="py-16 bg-gradient-to-br from-argan-green/5 to-argan-yellow/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-argan-green text-center mb-12">
              ARGAN en chiffres
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-argan-green mb-2">25+</div>
                <p className="text-argan-earth">Années d'expérience</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-argan-green mb-2">3</div>
                <p className="text-argan-earth">Pays de production</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-argan-green mb-2">50+</div>
                <p className="text-argan-earth">Huiles végétales</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-argan-green mb-2">100%</div>
                <p className="text-argan-earth">Traçabilité</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default WhoWeAre;