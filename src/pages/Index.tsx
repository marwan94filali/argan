import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductShowcase from '@/components/ProductShowcase';
import CompanyValues from '@/components/CompanyValues';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ProductShowcase />
        <CompanyValues />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
