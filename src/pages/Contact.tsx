import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import heroImage from "@/assets/hero-mountain.jpg";
import { Button3D } from "@/components/ui/Button3D";

const Contact = () => {
  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-frost border-b border-border">
        <div className="container mx-auto px-4 py-3">
          <p className="text-xs font-heading tracking-wider text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">HOME</Link>
            <span className="mx-2">/</span>
            <span className="text-primary font-semibold">CONTACT</span>
          </p>
        </div>
      </div>

      {/* Hero with mountain image */}
      <section className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <img
          src={heroImage}
          alt="Contact Summit BioLabs"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-primary/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-primary-foreground text-4xl md:text-5xl lg:text-6xl font-heading font-black uppercase tracking-wider drop-shadow-lg">
            Contact Us
          </h1>
        </div>
      </section>

      {/* Content */}
      <div className="container mx-auto px-4 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Email Orders */}
          <div>
            <h2 className="text-2xl font-heading font-black text-foreground tracking-wide mb-5">
              Email Orders
            </h2>
            <p className="text-sm font-body text-muted-foreground leading-relaxed mb-6">
              If you would like to order via email instead, please send your email to
            </p>
            <p className="text-sm font-body text-foreground font-semibold mb-8">
              'support@summitbiolabs.com'
            </p>

            <p className="text-sm font-body text-muted-foreground mb-4 font-medium">
              Email Order Format Example
            </p>
            <p className="text-sm font-body text-muted-foreground italic mb-5">
              Item + Carrier Oil + Size
            </p>
            <div className="space-y-2 text-sm font-body text-muted-foreground">
              <p>Semaglutide 5mg 10 vials</p>
              <p>BPC-157 5mg MCT 10ml</p>
            </div>

            <div className="mt-8 space-y-2 text-sm font-body text-muted-foreground">
              <p><em>Name</em> – John Doe</p>
              <p><em>Address</em> – 123 Research Blvd, City, State ZIP</p>
              <p><em>Payment Method</em> – (Contact for details)</p>
            </div>
          </div>

          {/* Support */}
          <div>
            <h2 className="text-2xl font-heading font-black text-foreground tracking-wide mb-5">
              Support
            </h2>
            <p className="text-sm font-body text-muted-foreground leading-relaxed mb-6">
              For any questions or concerns, email our support team at
            </p>
            <p className="text-sm font-body text-foreground font-semibold mb-8">
              'support@summitbiolabs.com' – THIS IS OUR ONLY EMAIL!
            </p>

            <Button3D label="Shop Now" to="/shop" />
          </div>
        </div>
      </div>

      {/* Research disclaimer */}
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

export default Contact;
