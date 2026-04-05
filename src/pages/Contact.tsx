import Layout from "@/components/Layout";
import heroImage from "@/assets/hero-mountain.jpg";
import { Button3D } from "@/components/ui/Button3D";

const Contact = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <img
          src={heroImage}
          alt="Contact Summit BioLabs"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-primary/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-primary-foreground text-4xl md:text-5xl lg:text-6xl font-heading font-black uppercase tracking-wider">
            Contact Us
          </h1>
        </div>
      </section>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div>
            <h2 className="text-xl font-heading font-bold text-primary tracking-wider uppercase mb-4">Email Orders</h2>
            <p className="text-sm font-body text-muted-foreground leading-relaxed mb-4">
              To place an order via email, please send your request to the address below with the following information:
            </p>
            <div className="bg-frost border border-border p-4 mb-4">
              <p className="text-sm font-body text-foreground leading-relaxed">
                <strong>To:</strong> support@summitbiolabs.com<br />
                <strong>Subject:</strong> New Order<br /><br />
                <strong>Body:</strong><br />
                - Product name(s) and quantity<br />
                - Shipping address<br />
                - Preferred payment method
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-heading font-bold text-primary tracking-wider uppercase mb-4">Support</h2>
            <p className="text-sm font-body text-muted-foreground leading-relaxed mb-4">
              For general inquiries, order tracking, or support, reach out to our team. We typically respond within 24 hours.
            </p>
            <div className="bg-frost border border-border p-4">
              <p className="text-sm font-body text-foreground">
                <strong>Email:</strong> support@summitbiolabs.com
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button3D label="Shop Now" to="/shop" />
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
