import Layout from "@/components/Layout";
import { FuturisticHero } from "@/components/three/FuturisticHero";
import { Button3D } from "@/components/ui/Button3D";

const Index = () => {
  return (
    <Layout>
      {/* ── Futuristic Hero ──────────────────────────────────────────────── */}
      <FuturisticHero />

      {/* ── Featured section ─────────────────────────────────────────────── */}
      <section className="bg-frost py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary tracking-wider uppercase mb-4">
            Premium Research Compounds
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-10 font-body">
            Industry-leading purity backed by third-party lab verification.
            Every batch tested. Every result published.
          </p>
          <Button3D label="Browse Products" to="/shop" />
        </div>
      </section>

      {/* ── Research Disclaimer ──────────────────────────────────────────── */}
      <section className="bg-background border-t border-border py-10 md:py-14">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <p className="text-[10px] font-heading font-bold tracking-[0.22em] uppercase text-muted-foreground/70 mb-3">
            Research Disclaimer
          </p>
          <p className="text-xs font-heading font-semibold tracking-widest uppercase text-muted-foreground/80 mb-3">
            Research Use Only. Not for Human Consumption.
          </p>
          <p className="text-xs font-body text-muted-foreground/60 leading-relaxed">
            All products sold by Summit BioLabs are intended strictly for laboratory research purposes only.
            These products are not intended for human consumption, medical use, or diagnostic purposes.
            By purchasing from this website you agree that the products will be used for laboratory research purposes only.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
