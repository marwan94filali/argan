import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import arganLogo from '@/assets/argan-logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Accueil', href: '/' },
    {
      name: 'Présentation',
      href: '#',
      submenu: [
        { name: 'Qui sommes-nous ?', href: '/qui-sommes-nous' },
        { name: 'Qualité et certifications', href: '/qualite-certifications' },
        { name: 'Nos valeurs', href: '/valeurs' },
        { name: 'Production au Maroc', href: '/production-maroc' },
        { name: 'Production au Chine', href: '/production-chine' },
        { name: 'Production au Japon', href: '/production-japon' },
      ]
    },
    {
      name: 'Huiles végétales',
      href: '#',
      submenu: [
        { name: 'Présentation', href: '/huiles-vegetales' },
        { name: 'Toutes nos huiles', href: '/toutes-nos-huiles' },
        { name: 'Huiles ARGAN\'True™', href: '/argantrue' },
        { name: 'Huiles 100% naturelles', href: '/huiles-naturelles' },
        { name: 'Huiles biologiques', href: '/huiles-biologiques' },
      ]
    },
    { name: 'Nos filières', href: '/filieres' },
    { name: 'ARGAN\'Act With Us', href: '/arganact' },
    { name: 'Développement durable', href: '/developpement-durable' },
    { name: 'Actualités', href: '/actualites' },
    { name: 'Nous contacter', href: '/contact' },
	
	{ name: 'FR', href: '/' },
	{ name: 'EN', href: '/EN' },
  ];

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-background/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src={arganLogo}
              alt="ARGAN Vegetable Oils"
              className="h-16 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <div className="flex items-center space-x-1">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                   <a 
					 key={item.name}
					 href={item.href}
					 className="block"
				  >
				  
				 
				  <Button
                    variant="ghost"
                    className="flex items-center space-x-1 text-foreground hover:text-argan-green transition-colors"
                  >
				 
                    <span className="text-sm font-medium">{item.name}</span>
					
                    {item.submenu && <ChevronDown className="h-4 w-4" />}
                  </Button>
                   </a>
                  {item.submenu && (
                    <div className="absolute top-full left-0 w-64 bg-background border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="py-2">
                        {item.submenu.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-argan-green transition-colors"
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </nav>

         

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
              {navigation.map((item) => (
                <div key={item.name}>
                  <a
                    href={item.href}
                    className="block px-3 py-2 text-base font-medium text-foreground hover:text-argan-green hover:bg-muted transition-colors"
                  >
                    {item.name}
                  </a>
                  {item.submenu && (
                    <div className="pl-4 space-y-1">
                      {item.submenu.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-3 py-2 text-sm text-muted-foreground hover:text-argan-green transition-colors"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;