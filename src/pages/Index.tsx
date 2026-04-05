import Layout from "@/components/Layout";
import { FuturisticHero } from "@/components/three/FuturisticHero";
import { Button3D } from "@/components/ui/Button3D";
import { FlaskConical, ShieldCheck, Truck } from "lucide-react";

const trustBadges = [
  { icon: ShieldCheck, label: "3rd Party Tested", desc: "Janoshik Verified" },
  { icon: FlaskConical, label: "99%+ Purity", desc: "Every Batch" },
  { icon: Truck, label: "Free Ship $200+", desc: "Domestic Orders" },
];

const metrics = [
  { value: "30+", label: "Research Compounds" },
  { value: "99%+", label: "Average Purity" },
];

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

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-12">
            {trustBadges.map((badge) => (
              <div key={badge.label} className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-accent flex items-center justify-center shadow-sm">
                  <badge.icon className="w-5 h-5 text-secondary" />
                </div>
                <div className="text-left">
                  <p className="font-heading font-bold text-sm text-foreground">{badge.label}</p>
                  <p className="font-body text-xs text-muted-foreground">{badge.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <Button3D label="Browse Products" to="/shop" />
        </div>
      </section>

      {/* ── Metrics Bar ──────────────────────────────────────────────────── */}
      <section className="bg-background border-t border-border py-14 md:py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-16 md:gap-24">
            {metrics.map((m) => (
              <div key={m.label} className="text-center">
                <p className="text-4xl md:text-5xl font-heading font-black text-secondary mb-2">
                  {m.value}
                </p>
                <p className="text-xs font-heading font-semibold tracking-[0.2em] uppercase text-muted-foreground">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
