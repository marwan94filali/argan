import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-argan-green to-argan-green-light py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-white">
                Nous Contacter
              </h1>
              <div className="w-24 h-1 bg-argan-yellow mx-auto"></div>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Une question ? Un projet ? Notre équipe est à votre disposition pour vous accompagner.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-argan-green mb-4">
                    Envoyez-nous un message
                  </h2>
                  <p className="text-argan-earth-light">
                    Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
                  </p>
                </div>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-argan-green mb-2">
                        Prénom *
                      </label>
                      <Input placeholder="Votre prénom" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-argan-green mb-2">
                        Nom *
                      </label>
                      <Input placeholder="Votre nom" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-argan-green mb-2">
                      Email *
                    </label>
                    <Input type="email" placeholder="votre.email@exemple.com" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-argan-green mb-2">
                      Entreprise
                    </label>
                    <Input placeholder="Nom de votre entreprise" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-argan-green mb-2">
                      Sujet *
                    </label>
                    <Input placeholder="Objet de votre message" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-argan-green mb-2">
                      Message *
                    </label>
                    <Textarea 
                      placeholder="Décrivez votre demande ou votre projet..."
                      className="min-h-[120px]"
                    />
                  </div>

                  <Button 
                    size="lg" 
                    className="w-full bg-argan-green hover:bg-argan-green-light text-white"
                  >
                    Envoyer le message
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-argan-green mb-4">
                    Informations de contact
                  </h2>
                  <p className="text-argan-earth-light">
                    Retrouvez toutes nos coordonnées pour nous joindre facilement.
                  </p>
                </div>

                <div className="space-y-6">
                  <Card className="border-argan-green/20">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-argan-green rounded-full flex items-center justify-center flex-shrink-0">
                          <MapPin className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-argan-green mb-2">Adresse</h3>
                          <p className="text-argan-earth-light">
                            123 Avenue des Huiles Végétales<br />
                            75001 Paris, France
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-argan-green/20">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-argan-green rounded-full flex items-center justify-center flex-shrink-0">
                          <Phone className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-argan-green mb-2">Téléphone</h3>
                          <p className="text-argan-earth-light">
                            +33 1 23 45 67 89
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-argan-green/20">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-argan-green rounded-full flex items-center justify-center flex-shrink-0">
                          <Mail className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-argan-green mb-2">Email</h3>
                          <p className="text-argan-earth-light">
                            contact@argan-oils.com
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-argan-green/20">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-argan-green rounded-full flex items-center justify-center flex-shrink-0">
                          <Clock className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-argan-green mb-2">Horaires</h3>
                          <p className="text-argan-earth-light">
                            Lundi - Vendredi : 9h00 - 18h00<br />
                            Samedi : 9h00 - 12h00
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;