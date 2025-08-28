import { Leaf, Heart, Shield, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const CompanyValues = () => {
  const values = [
    {
      icon: Leaf,
      title: "Filières Durables",
      description: "Des partenariats directs avec les producteurs locaux en Afrique pour garantir la traçabilité et la qualité",
      highlight: "Maroc • Burkina Faso • Kenya"
    },
    {
      icon: Shield,
      title: "Qualité Premium",
      description: "Certifications biologiques, équitables et COSMOS pour répondre aux plus hauts standards",
      highlight: "ECOCERT • Fair for Life • COSMOS"
    },
    {
      icon: Heart,
      title: "Commerce Équitable",
      description: "Un engagement social fort pour améliorer les conditions de vie des communautés productrices",
      highlight: "Impact social positif"
    },
    {
      icon: Globe,
      title: "Éco-raffinage",
      description: "Technologies vertes en France pour le raffinage écologique de nos huiles végétales",
      highlight: "Innovation environnementale"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-argan-green/5 to-argan-yellow/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-argan-green">
            Shorten the distance from Nature to Brands
          </h2>
          <div className="w-24 h-1 bg-argan-yellow mx-auto"></div>
          <p className="text-lg text-argan-earth-light max-w-4xl mx-auto leading-relaxed">
            Afin de maîtriser la qualité, la traçabilité et la régularité de l'approvisionnement 
            de ses matières premières, ARGAN a mis en place des <strong>filières d'approvisionnement durables</strong> en Afrique.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card key={index} className="group bg-white/90 backdrop-blur-sm border-none hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-argan-green rounded-full group-hover:bg-argan-green-light transition-colors duration-300">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-argan-green">
                    {value.title}
                  </h3>
                  
                  <p className="text-argan-earth-light text-sm leading-relaxed">
                    {value.description}
                  </p>
                  
                  <div className="pt-2">
                    <span className="text-xs font-medium text-argan-yellow bg-argan-yellow/10 px-3 py-1 rounded-full">
                      {value.highlight}
                    </span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Production Locations */}
        <div className="mt-16 bg-white/50 backdrop-blur-sm rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-argan-green text-center mb-8">
            Nos Filières de Production
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-3">
              <div className="text-2xl font-bold text-argan-green">🇲🇦 Maroc</div>
              <p className="text-argan-earth">
                Production d'<strong>huile d'argan</strong> et d'<strong>huile de noisette</strong>
              </p>
              <div className="text-sm text-argan-earth-light">
                ARGAN'True™ Argan • ARGAN'True™ Hazelnut
              </div>
            </div>
            
            <div className="text-center space-y-3">
              <div className="text-2xl font-bold text-argan-green">🇧🇫 Burkina Faso</div>
              <p className="text-argan-earth">
                Production de <strong>beurre de Karité</strong> et d'<strong>huile de sésame</strong>
              </p>
              <div className="text-sm text-argan-earth-light">
                ARGAN'True™ Shea • ARGAN'True™ Sesame
              </div>
            </div>
            
            <div className="text-center space-y-3">
              <div className="text-2xl font-bold text-argan-green">🇰🇪 Kenya</div>
              <p className="text-argan-earth">
                Production d'<strong>huile d'avocat</strong> et d'<strong>huile de macadamia</strong>
              </p>
              <div className="text-sm text-argan-earth-light">
                ARGAN'True™ Avocado • ARGAN'True™ Macadamia
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyValues;