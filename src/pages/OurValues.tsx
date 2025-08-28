import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Heart, Globe, Users, Sprout } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const OurValues = () => {
  const values = [
    {
      icon: Heart,
      title: "Respect",
      description: "Respect de l'environnement, des traditions locales et des communautés productrices",
      details: "Nous valorisons les savoir-faire ancestraux tout en préservant la biodiversité"
    },
    {
      icon: Globe,
      title: "Durabilité",
      description: "Développement durable de nos filières pour les générations futures",
      details: "Nos pratiques visent à maintenir l'équilibre écologique sur le long terme"
    },
    {
      icon: Users,
      title: "Partenariat",
      description: "Relations de confiance et collaboration équitable avec nos partenaires",
      details: "Nous privilégions les partenariats durables basés sur le respect mutuel"
    },
    {
      icon: Sprout,
      title: "Excellence",
      description: "Recherche constante de l'excellence dans tous nos processus",
      details: "Innovation et amélioration continue pour offrir des produits d'exception"
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
                Nos Valeurs
              </h1>
              <div className="w-24 h-1 bg-argan-yellow mx-auto"></div>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Les valeurs qui guident notre action quotidienne et nos relations avec nos partenaires.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-argan-green mb-6">
                Ce qui nous anime
              </h2>
              <p className="text-lg text-argan-earth-light max-w-3xl mx-auto">
                Nos valeurs sont le fondement de notre entreprise et guident chacune de nos décisions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={index} className="group bg-white border-argan-green/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <CardContent className="p-8 space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-argan-green rounded-full group-hover:bg-argan-green-light transition-colors duration-300 flex-shrink-0">
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                        
                        <div className="space-y-3">
                          <h3 className="text-2xl font-bold text-argan-green">
                            {value.title}
                          </h3>
                          
                          <p className="text-argan-earth-light leading-relaxed">
                            {value.description}
                          </p>
                          
                          <p className="text-sm text-argan-earth italic">
                            {value.details}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Commitment Section */}
        <section className="py-16 bg-gradient-to-br from-argan-green/5 to-argan-yellow/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-8">
              <h2 className="text-4xl font-bold text-argan-green">
                Notre Engagement
              </h2>
              
              <div className="max-w-4xl mx-auto space-y-6">
                <p className="text-lg text-argan-earth-light leading-relaxed">
                  Chez ARGAN, nous croyons fermement que le succès commercial et l'impact social positif 
                  peuvent aller de pair. C'est pourquoi nous nous engageons dans une démarche de 
                  <strong> développement durable</strong> qui respecte à la fois l'environnement et les communautés locales.
                </p>
                
                <p className="text-lg text-argan-earth-light leading-relaxed">
                  Nos valeurs ne sont pas seulement des mots sur papier : elles se traduisent par des actions 
                  concrètes dans nos filières de production, nos relations commerciales et notre engagement 
                  envers l'innovation responsable.
                </p>
              </div>
              
              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-argan-green mb-4">
                  "From Sources You Can Trust"
                </h3>
                <p className="text-argan-earth italic">
                  Cette devise résume notre approche : offrir des produits de qualité issus de sources 
                  fiables et durables, dans le respect de nos valeurs fondamentales.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default OurValues;