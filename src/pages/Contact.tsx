import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import heroImage from "@/assets/hero-mountain.jpg";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:support@summitbiolabs.com?subject=Contact from ${form.firstName} ${form.lastName}&body=${encodeURIComponent(form.message)}`;
  };

  return (
    <Layout>
      {/* ── Dark Hero ─────────────────────────────────────────── */}
      <section className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <img
          src={heroImage}
          alt="Contact Summit BioLabs"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black uppercase tracking-wider text-primary-foreground drop-shadow-lg mb-3">
            Contact Us
          </h1>
          <p className="text-xs font-heading tracking-wider text-primary-foreground/70">
            <Link to="/" className="hover:text-secondary transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-secondary font-semibold">Contact Us</span>
          </p>
        </div>
      </section>

      {/* ── Two-Column Content ─────────────────────────────────── */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

            {/* Left – Get In Touch */}
            <div className="flex flex-col justify-center">
              <p className="text-xs font-heading tracking-[0.3em] uppercase text-secondary mb-2">
                Reach Out
              </p>
              <h2 className="text-3xl md:text-4xl font-heading font-black text-foreground tracking-wide mb-6">
                GET IN TOUCH
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-10 max-w-md">
                Have questions about our research compounds, shipping, or need support with an order?
                We're here to help. Reach out to our team and we'll get back to you as soon as possible.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                    <Mail className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-sm text-foreground mb-1">Email Us</p>
                    <p className="font-body text-sm text-muted-foreground">support@summitbiolabs.com</p>
                    <p className="font-body text-xs text-muted-foreground/60 mt-1">This is our only official email</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                    <Phone className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-sm text-foreground mb-1">Shipping Inquiries</p>
                    <p className="font-body text-sm text-muted-foreground">shipping@summitbiolabs.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-sm text-foreground mb-1">Location</p>
                    <p className="font-body text-sm text-muted-foreground">United States</p>
                    <p className="font-body text-xs text-muted-foreground/60 mt-1">Domestic &amp; select international shipping</p>
                  </div>
                </div>
              </div>

              {/* Email order format */}
              <div className="mt-10 p-6 rounded-2xl bg-muted/50 border border-border/50">
                <p className="font-heading font-bold text-sm text-foreground mb-3">Email Order Format</p>
                <p className="font-body text-xs text-muted-foreground italic mb-3">Item + Carrier Oil + Size</p>
                <div className="space-y-1 text-xs font-body text-muted-foreground">
                  <p>Semaglutide 5mg 10 vials</p>
                  <p>BPC-157 5mg MCT 10ml</p>
                </div>
                <div className="mt-4 pt-3 border-t border-border/40 space-y-1 text-xs font-body text-muted-foreground">
                  <p><span className="text-foreground font-medium">Name</span> – John Doe</p>
                  <p><span className="text-foreground font-medium">Address</span> – 123 Research Blvd, City, State ZIP</p>
                  <p><span className="text-foreground font-medium">Payment</span> – Contact for details</p>
                </div>
              </div>
            </div>

            {/* Right – Contact Form Card */}
            <div>
              <div className="rounded-3xl shadow-[0_8px_40px_rgba(0,40,100,0.15)] overflow-hidden"
                   style={{ background: 'linear-gradient(135deg, hsl(216 82% 18%), hsl(216 72% 14%))' }}>
                <div className="p-8 md:p-10">
                  <p className="text-xs font-heading tracking-[0.25em] uppercase text-secondary mb-2">
                    Send a Message
                  </p>
                  <h3 className="text-2xl font-heading font-black text-primary-foreground mb-2">
                    Contact Form
                  </h3>
                  <p className="font-body text-xs text-primary-foreground/50 mb-1">
                    PLEASE INCLUDE NAME AND ORDER NUMBER.
                  </p>
                  <p className="font-body text-xs text-primary-foreground/50 mb-6">
                    SHIPPING INQUIRIES — CONTACT: SHIPPING@SUMMITBIOLABS.COM
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-heading font-semibold text-primary-foreground/70 mb-1.5">First Name</label>
                        <input
                          type="text"
                          name="firstName"
                          value={form.firstName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-primary-foreground text-sm font-body placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-heading font-semibold text-primary-foreground/70 mb-1.5">Last Name</label>
                        <input
                          type="text"
                          name="lastName"
                          value={form.lastName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-primary-foreground text-sm font-body placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-heading font-semibold text-primary-foreground/70 mb-1.5">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-primary-foreground text-sm font-body placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-heading font-semibold text-primary-foreground/70 mb-1.5">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-primary-foreground text-sm font-body placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all"
                        placeholder="(555) 123-4567"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-heading font-semibold text-primary-foreground/70 mb-1.5">Message</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-primary-foreground text-sm font-body placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all resize-none"
                        placeholder="How can we help you?"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-heading font-bold text-xs tracking-[0.2em] uppercase transition-all duration-300 bg-secondary text-secondary-foreground hover:brightness-110 shadow-lg shadow-secondary/20"
                    >
                      <Send className="w-4 h-4" />
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Map Section ───────────────────────────────────────── */}
      <section className="border-t border-border">
        <div className="w-full h-[300px] md:h-[400px] bg-muted relative overflow-hidden">
          <iframe
            title="Summit BioLabs Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12587904.523697376!2d-105.02959645!3d39.7392358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
            className="absolute inset-0 w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* ── Research Disclaimer ────────────────────────────────── */}
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
