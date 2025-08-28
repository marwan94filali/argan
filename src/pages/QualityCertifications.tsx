import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Shield, Award, Leaf, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const QualityCertifications = () => {
  const certifications = [
    {
      icon: Shield,
      title: "ECOCERT",
      description: "Certification biologique pour nos huiles issues de l'agriculture biologique",
      scope: "Huiles biologiques"
    },
    {
      icon: Award,
      title: "Fair for Life",
      description: "Commerce équitable et responsabilité sociale",
      scope: "Filières durables"
    },
    {
      icon: Leaf,
      title: "COSMOS",
      description: "Standard international pour les cosmétiques biologiques et naturels",
      scope: "Cosmétique naturelle"
    },
    {
      icon: CheckCircle,
      title: "ISO 22000",
      description: "Management de la sécurité des denrées alimentaires",
      scope: "Sécurité alimentaire"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-argan-green to-argan-green-light py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-white">
                Qualité & Certifications
              </h1>
              <div className="w-24 h-1 bg-argan-yellow mx-auto"></div>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Nos certifications garantissent la qualité, la traçabilité et la durabilité de nos huiles végétales.
              </p>
            </div>
          </div>
        </section>

        {/* Quality Process */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-argan-green mb-6">
                Notre Démarche Qualité
              </h2>
              <p className="text-lg text-argan-earth-light max-w-3xl mx-auto">
                De la graine au produit fini, chaque étape est contrôlée et certifiée pour vous garantir des huiles d'exception.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-argan-green rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-bold text-argan-green">Sélection</h3>
                <p className="text-argan-earth-light">
                  Sélection rigoureuse des matières premières directement auprès des producteurs locaux
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-argan-green rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-bold text-argan-green">Transformation</h3>
                <p className="text-argan-earth-light">
                  Procédés de transformation respectueux pour préserver les propriétés naturelles
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-argan-green rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-bold text-argan-green">Contrôle</h3>
                <p className="text-argan-earth-light">
                  Analyses en laboratoire et contrôles qualité à chaque étape de production
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-16 bg-gradient-to-br from-argan-green/5 to-argan-yellow/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-argan-green text-center mb-12">
              Nos Certifications
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {certifications.map((cert, index) => {
                const Icon = cert.icon;
                return (
                  <Card key={index} className="group bg-white/90 backdrop-blur-sm border-none hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <CardContent className="p-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-argan-green rounded-full group-hover:bg-argan-green-light transition-colors duration-300">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-argan-green">
                        {cert.title}
                      </h3>
                      
                      <p className="text-argan-earth-light text-sm leading-relaxed">
                        {cert.description}
                      </p>
                      
                      <div className="pt-2">
                        <span className="text-xs font-medium text-argan-yellow bg-argan-yellow/10 px-3 py-1 rounded-full">
                          {cert.scope}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default QualityCertifications;