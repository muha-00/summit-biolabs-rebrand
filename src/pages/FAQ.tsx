import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import Layout from "@/components/Layout";

const faqs = [
  {
    q: "What are research peptides, and how are they used?",
    a: "Research peptides are short chains of amino acids synthesized for use in scientific and laboratory research. They are used by researchers to study biological processes such as tissue repair, metabolic function, hormone regulation, and neurological activity. All peptides sold by Summit BioLabs are intended exclusively for in vitro and in vivo laboratory research by qualified professionals.",
  },
  {
    q: "Are your peptides tested for purity?",
    a: "Yes. Every batch produced by Summit BioLabs undergoes rigorous third-party testing through Janoshik Analytical, an independent accredited laboratory. Certificates of Analysis (CoA) verifying purity and potency are available for all products. We maintain a minimum purity standard of 98% across our entire catalog.",
  },
  {
    q: "Are your products legal to purchase in the U.S. and Canada?",
    a: "Research peptides and compounds are legal to purchase and possess for legitimate scientific research purposes in the United States and Canada. They are not approved by the FDA or Health Canada for human consumption or therapeutic use. It is your responsibility to ensure compliance with all applicable local, state, provincial, and federal laws in your jurisdiction before ordering.",
  },
  {
    q: "Who can order from Summit BioLabs?",
    a: "Our products are intended for licensed researchers, scientists, academic institutions, and biotechnology professionals who require high-purity compounds for laboratory research. By placing an order, you confirm that you are at least 18 years of age and that the products will be used solely for research purposes in a controlled laboratory setting.",
  },
  {
    q: "Do you offer fast domestic shipping?",
    a: "Yes. We offer fast domestic shipping with discreet, professional packaging. Most domestic orders are processed and dispatched within 1–2 business days. Expedited shipping options are available at checkout. We ship from within the U.S. to minimize transit times.",
  },
  {
    q: "Can I track my order?",
    a: "Yes. Once your order is dispatched, you will receive a tracking number via email. You can use this number to monitor your shipment in real time through the carrier's tracking portal. If you have not received your tracking information within 2 business days of ordering, please contact our support team.",
  },
  {
    q: "Do you ship internationally?",
    a: "We currently ship to select international destinations. International customers are responsible for ensuring that importing research compounds complies with the laws and regulations of their country. Customs duties, taxes, and import fees are the responsibility of the recipient. Please contact us before ordering internationally to confirm availability in your region.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept a variety of payment methods to ensure a smooth ordering experience. Please contact our support team at support@summitbiolabs.com for current accepted payment options. All transactions are handled with full discretion and professionalism.",
  },
  {
    q: "Why choose Summit BioLabs?",
    a: "Summit BioLabs is committed to supplying the research community with the highest-purity compounds available. Every product is independently tested by Janoshik Analytical, manufactured under strict GMP-aligned conditions, and backed by our quality guarantee. We offer no order minimums, free shipping on orders over $150, and responsive customer support — because serious research deserves serious supply.",
  },
];

function FAQItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
        aria-expanded={open}
      >
        <span className="text-sm md:text-base font-heading font-semibold text-primary tracking-wide group-hover:text-secondary transition-colors duration-200">
          {q}
        </span>
        <ChevronDown
          className="w-4 h-4 flex-shrink-0 text-secondary transition-transform duration-300"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </button>

      {/* Animated expand */}
      <div
        className="overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ maxHeight: open ? "400px" : "0px", opacity: open ? 1 : 0 }}
      >
        <p className="font-body text-sm text-muted-foreground leading-relaxed pb-5 pr-8">
          {a}
        </p>
      </div>
    </div>
  );
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Layout>
      {/* ── Page header ─────────────────────────────────────────────────── */}
      <div className="bg-frost border-b border-border">
        <div className="container mx-auto px-4 py-3">
          <p className="text-xs font-heading tracking-wider text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">HOME</Link>
            <span className="mx-2">/</span>
            <span className="text-primary font-semibold">FAQ</span>
          </p>
        </div>
      </div>

      {/* ── Hero strip ──────────────────────────────────────────────────── */}
      <section className="bg-gradient-navy py-14 md:py-20 relative overflow-hidden">
        {/* Subtle top cyan glow line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <p className="text-xs font-heading tracking-[0.35em] uppercase text-cyan-400/80 mb-3">
            Support
          </p>
          <h1 className="text-3xl md:text-4xl font-heading font-black uppercase tracking-wider text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="font-body text-sm text-white/55 max-w-xl mx-auto">
            Everything you need to know about our products, ordering, and shipping.
          </p>
        </div>
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* ── Accordion ───────────────────────────────────────────────────── */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white border border-border shadow-[0_2px_24px_rgba(0,30,80,0.06)] divide-y-0">
            {faqs.map((item, i) => (
              <FAQItem
                key={i}
                q={item.q}
                a={item.a}
                open={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>

          {/* Still have questions CTA */}
          <div className="mt-12 text-center">
            <p className="font-body text-sm text-muted-foreground mb-4">
              Still have questions? Our team is happy to help.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground font-heading font-bold text-xs tracking-widest uppercase hover:bg-secondary transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* ── Research disclaimer ─────────────────────────────────────────── */}
      <section className="border-t border-border py-8">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <p className="text-[10px] font-heading font-bold tracking-[0.22em] uppercase text-muted-foreground/70 mb-2">
            Research Disclaimer
          </p>
          <p className="text-xs font-body text-muted-foreground/55 leading-relaxed">
            All products sold by Summit BioLabs are intended strictly for laboratory research purposes only.
            Not for human consumption, medical use, or diagnostic purposes.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
