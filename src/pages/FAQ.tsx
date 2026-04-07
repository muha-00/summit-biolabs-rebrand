import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import Layout from "@/components/Layout";
import heroImage from "@/assets/hero-mountain.jpg";

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
    <div className="bg-card rounded-2xl shadow-[0_4px_24px_rgba(0,40,100,0.08)] border border-border/50 overflow-hidden transition-shadow duration-300 hover:shadow-[0_8px_32px_rgba(0,40,100,0.12)]">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-8 py-7 text-left group"
        aria-expanded={open}
      >
        <span className="text-base md:text-lg font-heading font-bold text-foreground tracking-wide group-hover:text-secondary transition-colors duration-200">
          {q}
        </span>
        <div className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${open ? 'bg-secondary text-secondary-foreground rotate-180' : 'bg-accent text-muted-foreground'}`}>
          <ChevronDown className="w-4 h-4" />
        </div>
      </button>

      <div
        className="overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ maxHeight: open ? "600px" : "0px", opacity: open ? 1 : 0 }}
      >
        <div className="px-8 pb-7 pt-0">
          <div className="border-t border-border/40 pt-5">
            <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
              {a}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Layout>
      {/* Hero with mountain image */}
      <section className="relative h-[45vh] md:h-[52vh] overflow-hidden">
        <img
          src={heroImage}
          alt="Summit BioLabs FAQ"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          width={1920}
          height={1080}
        />
        {/* Cinematic dark overlay — identical to Contact page */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(3,7,24,0.60) 0%, rgba(3,7,24,0.45) 50%, rgba(3,7,24,0.80) 100%)" }}
        />
        {/* Cyan glow line at top */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4" style={{ zIndex: 10 }}>
          <p className="text-xs font-heading tracking-[0.38em] uppercase mb-3" style={{ color: "rgba(0,229,255,0.85)" }}>
            Support
          </p>
          <h1
            className="text-4xl md:text-5xl font-heading font-black uppercase tracking-wider text-white mb-4 drop-shadow-lg"
            style={{ textShadow: "0 2px 32px rgba(0,100,200,0.45)" }}
          >
            Frequently Asked Questions
          </h1>
          <p className="font-body text-sm md:text-base max-w-md mx-auto" style={{ color: "rgba(255,255,255,0.60)" }}>
            Everything you need to know about our products, ordering, and shipping.
          </p>
        </div>

        {/* Bottom fog fade — identical to Contact page */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" style={{ zIndex: 5 }} />
      </section>

      {/* FAQ Accordion */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-5">
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
          <div className="mt-16 text-center">
            <p className="font-body text-sm text-muted-foreground mb-5">
              Still have questions? Our team is happy to help.
            </p>
            <Link
              to="/contact"
              className="inline-block px-10 py-3.5 bg-primary text-primary-foreground font-heading font-bold text-xs tracking-widest uppercase rounded-lg hover:bg-secondary transition-colors shadow-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Research disclaimer (moved from homepage) */}
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

export default FAQ;
