import Layout from "@/components/Layout";
import heroImage from "@/assets/hero-mountain.jpg";
import { Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";

const serif = { fontFamily: "'Cormorant Garamond', Georgia, serif" };

const Contact = () => {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:info@summitbiolabs.org?subject=Contact from ${form.firstName} ${form.lastName}&body=${encodeURIComponent(form.message)}`;
  };

  return (
    <Layout>

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative h-[45vh] md:h-[52vh] overflow-hidden">
        <img
          src={heroImage}
          alt="Contact Summit BioLabs"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          width={1920}
          height={1080}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(3,7,24,0.60) 0%, rgba(3,7,24,0.45) 50%, rgba(3,7,24,0.80) 100%)" }}
        />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4" style={{ zIndex: 10 }}>
          <p className="text-xs font-heading tracking-[0.38em] uppercase mb-3" style={{ color: "rgba(0,229,255,0.85)" }}>
            Support
          </p>
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white mb-4 drop-shadow-lg"
            style={{ ...serif, textShadow: "0 2px 32px rgba(0,100,200,0.45)", letterSpacing: "0.02em" }}
          >
            Get In Touch
          </h1>
          <p className="text-sm md:text-base max-w-md mx-auto" style={{ fontFamily: "'Inter', sans-serif", color: "rgba(255,255,255,0.58)", fontWeight: 300, letterSpacing: "0.01em" }}>
            Questions about our research compounds, an order, or shipping?
            We're here to help.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" style={{ zIndex: 5 }} />
      </section>

      {/* ── Main Content ─────────────────────────────────────────────────── */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-start">

            {/* ── Left Column ─────────────────────────────────────────────── */}
            <div className="flex flex-col gap-6">

              <div>
                <p className="text-xs font-heading tracking-[0.32em] uppercase mb-2" style={{ color: "#00C8E8" }}>
                  Contact Information
                </p>
                <h2
                  className="text-3xl md:text-4xl font-semibold text-foreground mb-3"
                  style={{ ...serif, letterSpacing: "0.01em" }}
                >
                  We're Here to Help
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-sm" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}>
                  Reach out with any questions about our research compounds,
                  your order, or shipping. We respond promptly and professionally.
                </p>
              </div>

              {/* Contact cards */}
              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-4 p-5 rounded-2xl border border-border/50 bg-white shadow-sm">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
                    <Mail className="w-4 h-4 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-0.5" style={{ fontFamily: "'Inter', sans-serif" }}>Email Us</p>
                    <p className="text-sm text-muted-foreground" style={{ fontFamily: "'Inter', sans-serif" }}>info@summitbiolabs.org</p>
                    <p className="text-xs text-muted-foreground/55 mt-0.5" style={{ fontFamily: "'Inter', sans-serif" }}>This is our only official email</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-2xl border border-border/50 bg-white shadow-sm">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
                    <Send className="w-4 h-4 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-0.5" style={{ fontFamily: "'Inter', sans-serif" }}>Shipping Inquiries</p>
                    <p className="text-sm text-muted-foreground" style={{ fontFamily: "'Inter', sans-serif" }}>info@summitbiolabs.org</p>
                    <p className="text-xs text-muted-foreground/55 mt-0.5" style={{ fontFamily: "'Inter', sans-serif" }}>Include your order number</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-2xl border border-border/50 bg-white shadow-sm">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-0.5" style={{ fontFamily: "'Inter', sans-serif" }}>Location</p>
                    <p className="text-sm text-muted-foreground" style={{ fontFamily: "'Inter', sans-serif" }}>Canada</p>
                    <p className="text-xs text-muted-foreground/55 mt-0.5" style={{ fontFamily: "'Inter', sans-serif" }}>Canadian domestic &amp; international shipping</p>
                  </div>
                </div>
              </div>

              {/* Email Order Format */}
              <div
                className="p-6 rounded-2xl border"
                style={{
                  background: "linear-gradient(135deg, rgba(0,229,255,0.03) 0%, rgba(255,255,255,0.98) 100%)",
                  borderColor: "rgba(0,180,220,0.18)",
                  boxShadow: "0 2px 20px rgba(0,30,80,0.05)",
                }}
              >
                <p className="text-sm font-semibold text-foreground mb-1" style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "0.01em" }}>
                  Email Order Format
                </p>
                <p className="text-xs text-muted-foreground italic mb-3" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "15px" }}>
                  Item · Carrier Oil · Size
                </p>
                <div className="space-y-1 mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                  <p className="text-xs text-muted-foreground">Semaglutide 5mg — 10 vials</p>
                  <p className="text-xs text-muted-foreground">BPC-157 5mg MCT 10ml</p>
                </div>
                <div className="border-t border-border/30 pt-3 space-y-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                  <p className="text-xs text-muted-foreground"><span className="text-foreground font-medium">Name</span> — John Doe</p>
                  <p className="text-xs text-muted-foreground"><span className="text-foreground font-medium">Address</span> — 123 Research Blvd, City, Province</p>
                  <p className="text-xs text-muted-foreground"><span className="text-foreground font-medium">Payment</span> — Contact for details</p>
                </div>
              </div>
            </div>

            {/* ── Right Column — Contact Form ──────────────────────────────── */}
            <div
              className="rounded-3xl overflow-hidden shadow-[0_8px_48px_rgba(0,20,80,0.16)]"
              style={{ background: "linear-gradient(160deg, hsl(216 82% 16%), hsl(216 72% 12%))" }}
            >
              <div className="p-8 md:p-10">
                <p className="text-xs font-heading tracking-[0.28em] uppercase mb-2" style={{ color: "rgba(0,229,255,0.80)" }}>
                  Send a Message
                </p>
                <h3
                  className="text-3xl font-semibold text-white mb-5"
                  style={{ ...serif, letterSpacing: "0.01em" }}
                >
                  Contact Form
                </h3>

                <div
                  className="rounded-xl px-4 py-3 mb-6 space-y-1"
                  style={{ background: "rgba(0,229,255,0.06)", border: "1px solid rgba(0,229,255,0.13)" }}
                >
                  <p className="text-[11px] tracking-wider uppercase" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, color: "rgba(255,255,255,0.60)" }}>
                    Please include your name and order number.
                  </p>
                  <p className="text-[11px]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, color: "rgba(255,255,255,0.40)" }}>
                    Shipping inquiries — info@summitbiolabs.org
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs mb-1.5" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, color: "rgba(255,255,255,0.55)", letterSpacing: "0.04em" }}>
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={form.firstName}
                        onChange={handleChange}
                        required
                        placeholder="John"
                        className="w-full px-4 py-3 rounded-xl text-sm transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          background: "rgba(255,255,255,0.07)",
                          border: "1px solid rgba(255,255,255,0.10)",
                          color: "white",
                        }}
                      />
                    </div>
                    <div>
                      <label className="block text-xs mb-1.5" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, color: "rgba(255,255,255,0.55)", letterSpacing: "0.04em" }}>
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={form.lastName}
                        onChange={handleChange}
                        required
                        placeholder="Doe"
                        className="w-full px-4 py-3 rounded-xl text-sm transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          background: "rgba(255,255,255,0.07)",
                          border: "1px solid rgba(255,255,255,0.10)",
                          color: "white",
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs mb-1.5" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, color: "rgba(255,255,255,0.55)", letterSpacing: "0.04em" }}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl text-sm transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        background: "rgba(255,255,255,0.07)",
                        border: "1px solid rgba(255,255,255,0.10)",
                        color: "white",
                      }}
                    />
                  </div>

                  <div>
                    <label className="block text-xs mb-1.5" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, color: "rgba(255,255,255,0.55)", letterSpacing: "0.04em" }}>
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="How can we help you?"
                      className="w-full px-4 py-3 rounded-xl text-sm transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400/40 resize-none"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        background: "rgba(255,255,255,0.07)",
                        border: "1px solid rgba(255,255,255,0.10)",
                        color: "white",
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-xs tracking-[0.18em] uppercase transition-all duration-300"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 600,
                      background: "linear-gradient(135deg, #00C8E8 0%, #00A8D4 100%)",
                      color: "#001828",
                      boxShadow: "0 4px 20px rgba(0,200,232,0.28)",
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.filter = "brightness(1.08)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 28px rgba(0,200,232,0.45)";
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.filter = "brightness(1)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(0,200,232,0.28)";
                    }}
                  >
                    <Send className="w-4 h-4" />
                    Submit
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Research Disclaimer ──────────────────────────────────────────── */}
      <section className="border-t border-border py-8">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <p className="text-[10px] font-heading font-bold tracking-[0.22em] uppercase text-muted-foreground/70 mb-2">
            Research Disclaimer
          </p>
          <p className="text-xs text-muted-foreground/55 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
            All products sold by Summit BioLabs are intended strictly for laboratory research purposes only.
            Not for human consumption, medical use, or diagnostic purposes.
          </p>
        </div>
      </section>

    </Layout>
  );
};

export default Contact;
