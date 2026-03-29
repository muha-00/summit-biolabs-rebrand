import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import heroImage from "@/assets/hero-mountain.jpg";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[85vh] overflow-hidden">
        <img
          src={heroImage}
          alt="Summit BioLabs - Mountain peak with DNA helix"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-primary/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <p className="text-primary-foreground/80 text-xs md:text-sm font-heading tracking-[0.4em] uppercase mb-4">
            Summit BioLabs
          </p>
          <h1 className="text-primary-foreground text-4xl md:text-6xl lg:text-7xl font-heading font-black uppercase tracking-wider leading-tight mb-8">
            At the Summit<br />of Science
          </h1>
          <Link
            to="/shop"
            className="bg-primary-foreground text-primary px-10 py-3 font-heading font-bold text-sm tracking-widest uppercase hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
          >
            SHOP NOW
          </Link>
        </div>

        {/* Frost particles */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Featured section */}
      <section className="bg-frost py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary tracking-wider uppercase mb-4">
            Premium Research Compounds
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8 font-body">
            Industry-leading purity backed by third-party lab verification. Every batch tested. Every result published.
          </p>
          <Link
            to="/shop"
            className="inline-block bg-gradient-cyan text-secondary-foreground px-8 py-3 font-heading font-bold text-sm tracking-widest uppercase hover:opacity-90 transition-opacity"
          >
            BROWSE PRODUCTS
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
