import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-image.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-argan-green/80 to-argan-earth/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              ARGAN
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-light text-argan-yellow">
              Vegetable Oils
            </h2>
            <div className="w-24 h-1 bg-argan-yellow mx-auto"></div>
          </div>
          
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-relaxed">
            FROM SOURCES<br />
            YOU CAN TRUST
          </p>
          
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Découvrez notre filière intégrée d'huiles végétales pures et naturelles
            pour la cosmétique et la nutrition
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg" 
              className="bg-argan-yellow text-argan-earth hover:bg-argan-yellow-light px-8 py-4 text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Découvrir nos huiles
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-black hover:bg-white hover:text-argan-green px-8 py-4 text-lg font-medium transition-all duration-300 hover:scale-105"
            >
              Nos filières
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;