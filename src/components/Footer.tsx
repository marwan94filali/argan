import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Mail, Phone, MapPin, Youtube, Linkedin } from 'lucide-react';
import arganLogo from '@/assets/argan-logo.png';

const Footer = () => {
  const footerSections = [
    {
      title: "Présentation",
      links: [
        { name: "Qui sommes-nous ?", href: "/qui-sommes-nous" },
        { name: "Qualité et certifications", href: "/qualite-certifications" },
        { name: "Nos valeurs", href: "/valeurs" },
        { name: "Développement durable", href: "/developpement-durable" }
      ]
    },
    {
      title: "Nos Productions",
      links: [
        { name: "Production au Maroc", href: "/production-maroc" },
        { name: "Production au Chine", href: "/production-chine" },
        { name: "Production au Japon", href: "/production-japon" },
      ]
    },
    {
      title: "Huiles Végétales",
      links: [
        { name: "Toutes nos huiles", href: "/toutes-nos-huiles" },
        { name: "Huiles OLVE'True™", href: "/olvetrue" },
        { name: "Huiles 100% naturelles", href: "/huiles-naturelles" },
        { name: "Huiles biologiques", href: "/huiles-biologiques" }
      ]
    },
    {
      title: "Services",
      links: [
        { name: "Nos filières", href: "/filieres" },
        { name: "OLVE'Act With Us", href: "/arganct" },
        { name: "Actualités", href: "/actualites" },
        { name: "Contact", href: "/contact" }
      ]
    }
  ];

  return (
    <footer className="bg-argan-green text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <img
                src={arganLogo}
                alt="argan Vegetable Oils"
                className="h-16 w-auto brightness-0 invert"
              />
              <p className="text-white/80 leading-relaxed">
                argan offre une large gamme d'huiles végétales pures et naturelles 
                pour la cosmétique et la nutrition, issues de filières durables en Afrique.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-argan-yellow" />
                  <span className="text-sm text-white/80">
                    France • Maroc • Burkina Faso • Kenya
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-argan-yellow" />
                  <a 
                    href="mailto:contact@argan.com" 
                    className="text-sm text-white/80 hover:text-argan-yellow transition-colors"
                  >
                    contact@argan.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-argan-yellow" />
                  <span className="text-sm text-white/80">
                    +33 (0)1 XX XX XX XX
                  </span>
                </div>
              </div>
            </div>

            {/* Links Sections */}
            {footerSections.map((section) => (
              <div key={section.title} className="space-y-4">
                <h3 className="text-lg font-semibold text-argan-yellow">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm text-white/80 hover:text-argan-yellow transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter Section */}
          <div className="mt-12 bg-argan-green-light/20 rounded-lg p-6">
            <div className="text-center space-y-4">
              <h3 className="text-xl font-semibold text-argan-yellow">
                Restez informé de nos actualités
              </h3>
              <p className="text-white/80">
                Inscrivez-vous à notre newsletter pour recevoir nos dernières nouvelles
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-argan-yellow"
                />
                <Button className="bg-argan-yellow text-argan-green hover:bg-argan-yellow-light font-medium">
                  S'inscrire
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-white/20" />

        {/* Bottom Footer */}
        <div className="py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-white/60">
              © 2024 argan Vegetable Oils. Tous droits réservés.
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-white/60 hover:text-argan-yellow transition-colors"
                >
                  <Youtube className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-white/60 hover:text-argan-yellow transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
              
              <div className="flex space-x-4 text-sm">
                <a href="/mentions-legales" className="text-white/60 hover:text-argan-yellow transition-colors">
                  Mentions légales
                </a>
                <a href="/politique-confidentialite" className="text-white/60 hover:text-argan-yellow transition-colors">
                  Politique de confidentialité
                </a>
                <a href="/cookies" className="text-white/60 hover:text-argan-yellow transition-colors">
                  Cookies
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;