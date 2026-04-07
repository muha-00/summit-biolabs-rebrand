import { useState, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { ChevronDown, Minus, Plus, ShoppingCart, X, ZoomIn } from "lucide-react";
import Layout from "@/components/Layout";
import { products, groupedProducts } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import vialImage from "@/assets/vial.png";

// ── Unit label per category / product name ────────────────────────────────────
function getUnit(category: string, name: string): string {
  if (name.includes("IGF-1")) return "mcg";
  if (category === "HGH")     return "IU";
  return "mg";
}

// ── Per-vial price at a given quantity tier ───────────────────────────────────
// singlePrice = stored price (1 vial)
// qty 1        → full price
// qty 2-4      → 10% off per vial
// qty 5-9      → 15% off per vial
// qty 10       → 20% off per vial (full kit)
function pricePerVialAtQty(single: number, qty: number): number {
  if (qty >= 10) return +(single * 0.80).toFixed(2);
  if (qty >= 5)  return +(single * 0.85).toFixed(2);
  if (qty >= 2)  return +(single * 0.90).toFixed(2);
  return single;
}

function totalAtQty(single: number, qty: number): number {
  return +(pricePerVialAtQty(single, qty) * qty).toFixed(2);
}

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();

  const product = products.find(p => p.id === id);
  const group = groupedProducts.find(
    g => g.category === product?.category && g.name === product?.name
  );

  const [variantIdx, setVariantIdx] = useState(() => {
    if (!group || !product) return 0;
    return group.variants.findIndex(v => v.id === product.id);
  });
  const [vialQty, setVialQty] = useState(1);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const imgCardRef = useRef<HTMLDivElement>(null);

  const handleImgMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = imgCardRef.current;
    if (!card) return;
    const { left, top, width, height } = card.getBoundingClientRect();
    const rotX = (((e.clientY - top)  - height / 2) / height) * 10;
    const rotY = (((e.clientX - left) - width  / 2) / width ) * -10;
    card.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.02)`;
  };
  const handleImgMouseLeave = () => {
    if (imgCardRef.current) imgCardRef.current.style.transform = "rotateX(0) rotateY(0) scale(1)";
  };

  if (!product || !group) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <p className="text-muted-foreground font-body">Product not found.</p>
          <Link to="/shop" className="text-secondary underline mt-4 inline-block font-body">Back to Shop</Link>
        </div>
      </Layout>
    );
  }

  const variant      = group.variants[variantIdx];
  const unit         = getUnit(group.category, group.name);
  const hasVariants  = group.variants.length > 1;

  // Pricing — variant.price IS the single-vial price
  const singlePrice  = variant.price;
  const perVial      = pricePerVialAtQty(singlePrice, vialQty);
  const totalPrice   = totalAtQty(singlePrice, vialQty);
  const savingsPct   = vialQty >= 10 ? 20 : vialQty >= 5 ? 15 : vialQty >= 2 ? 10 : 0;
  const savings      = +(singlePrice * vialQty - totalPrice).toFixed(2);

  // Breakdown rows (key quantity milestones)
  const breakdownRows = [
    { label: "1 Vial",      qty: 1,  ppv: singlePrice,                   tot: singlePrice,                        pct: 0  },
    { label: "2–4 Vials",   qty: 2,  ppv: +(singlePrice * 0.90).toFixed(2), tot: +(singlePrice * 0.90 * 2).toFixed(2), pct: 10 },
    { label: "5–9 Vials",   qty: 5,  ppv: +(singlePrice * 0.85).toFixed(2), tot: +(singlePrice * 0.85 * 5).toFixed(2), pct: 15 },
    { label: "10-Vial Kit", qty: 10, ppv: +(singlePrice * 0.80).toFixed(2), tot: +(singlePrice * 0.80 * 10).toFixed(2), pct: 20 },
  ];

  const handleAdd = () => {
    const cartProduct = {
      id:          variant.id,
      name:        group.name,
      spec:        `${variant.spec} × ${vialQty} vial${vialQty > 1 ? "s" : ""}`,
      price:       perVial,
      category:    group.category,
      description: group.description,
      nickname:    group.nickname,
    };
    for (let i = 0; i < vialQty; i++) addToCart(cartProduct);
  };

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-frost border-b border-border">
        <div className="container mx-auto px-4 py-3">
          <p className="text-xs font-heading tracking-wider text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">HOME</Link>
            <span className="mx-2">/</span>
            <Link to="/shop" className="hover:text-primary transition-colors">SHOP</Link>
            <span className="mx-2">/</span>
            <span className="text-primary font-semibold">{group.name.toUpperCase()}</span>
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">

          {/* ── Image panel ── */}
          <div style={{ perspective: "1000px" }}>
            <div
              ref={imgCardRef}
              onMouseMove={handleImgMouseMove}
              onMouseLeave={handleImgMouseLeave}
              onClick={() => setLightboxOpen(true)}
              className="bg-white flex flex-col items-center justify-center p-8 aspect-square
                         transition-all duration-300 ease-out cursor-zoom-in relative group"
              style={{ transformStyle: "preserve-3d", boxShadow: "0 8px 40px rgba(0,80,180,0.10)" }}
            >
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200
                              bg-primary/80 text-white rounded-full p-1.5 z-10">
                <ZoomIn className="w-4 h-4" />
              </div>
              <div className="relative flex items-center justify-center w-full h-full" style={{ transformStyle: "preserve-3d" }}>
                <div
                  className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full"
                  style={{
                    width: "50%", height: "14px",
                    background: "radial-gradient(ellipse, rgba(0,0,0,0.16) 0%, transparent 72%)",
                    filter: "blur(6px)", transform: "translateZ(-8px)",
                  }}
                />
                <img
                  src={vialImage}
                  alt={group.name}
                  className="max-h-[400px] w-auto object-contain"
                  style={{ transform: "translateZ(30px)", filter: "drop-shadow(0 14px 30px rgba(0,80,180,0.14))" }}
                  width={512}
                  height={640}
                />
              </div>
            </div>
          </div>

          {/* ── Product info ── */}
          <div className="flex flex-col">

            {/* Name */}
            <h1 className="text-2xl lg:text-3xl font-heading font-bold text-primary tracking-wide mb-2">
              {group.name}{group.nickname ? ` ${group.nickname}` : ""}
            </h1>

            {/* Live price display */}
            <div className="mb-4">
              <div className="flex items-baseline gap-2 flex-wrap">
                {savings > 0 && (
                  <span className="text-sm font-body text-muted-foreground/50 line-through">
                    ${(singlePrice * vialQty).toFixed(2)}
                  </span>
                )}
                <span className="text-3xl font-heading font-bold" style={{ color: "#00C8E8" }}>
                  ${totalPrice.toFixed(2)}
                </span>
                {vialQty > 1 && (
                  <span className="text-sm font-body text-muted-foreground/60">
                    ${perVial.toFixed(2)} / vial
                  </span>
                )}
              </div>
              {savingsPct > 0 && (
                <div className="mt-1.5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-heading font-bold"
                  style={{ background: "rgba(0,200,232,0.12)", color: "#00A8C8" }}>
                  ✦ {savingsPct}% OFF — SAVING ${savings.toFixed(2)}
                </div>
              )}
            </div>

            {/* Quick description */}
            <p className="text-sm font-body text-muted-foreground mb-5 leading-relaxed">
              {group.description.replace(" FOR RESEARCH USE ONLY", "").trim()} — lyophilized peptide for in vitro use.
            </p>

            {/* ── Size / spec selector ── */}
            {hasVariants && (
              <div className="mb-5">
                <label className="block text-xs font-heading font-bold tracking-widest uppercase text-primary mb-2">
                  Select {unit}
                </label>
                <div className="relative">
                  <select
                    value={variantIdx}
                    onChange={e => { setVariantIdx(Number(e.target.value)); setVialQty(1); }}
                    className="w-full appearance-none border rounded-xl px-4 py-3 text-sm font-body text-foreground bg-white focus:outline-none focus:ring-2 focus:ring-secondary/40 cursor-pointer pr-10"
                    style={{ borderColor: "rgba(0,180,220,0.30)" }}
                  >
                    <option value="" disabled>Choose an option</option>
                    {group.variants.map((v, i) => (
                      <option key={v.id} value={i}>
                        {v.spec} — ${v.price.toFixed(2)}/vial
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                </div>
              </div>
            )}

            {/* ── Quantity selector ── */}
            <div className="mb-5">
              <label className="block text-xs font-heading font-bold tracking-widest uppercase text-primary mb-2">
                Select Quantity (Vials)
              </label>
              <div className="relative">
                <select
                  value={vialQty}
                  onChange={e => setVialQty(Number(e.target.value))}
                  className="w-full appearance-none border rounded-xl px-4 py-3 text-sm font-body text-foreground bg-white focus:outline-none focus:ring-2 focus:ring-secondary/40 cursor-pointer pr-10"
                  style={{ borderColor: "rgba(0,180,220,0.30)" }}
                >
                  {[1,2,3,4,5,6,7,8,9,10].map(n => {
                    const ppv = pricePerVialAtQty(singlePrice, n);
                    const tot = totalAtQty(singlePrice, n);
                    const pct = n >= 10 ? 20 : n >= 5 ? 15 : n >= 2 ? 10 : 0;
                    const suffix = pct > 0 ? ` · ${pct}% off` : "";
                    const label  = n === 10
                      ? `10 Vials (Full Kit) — $${tot.toFixed(2)} total · $${ppv.toFixed(2)}/vial · 20% off`
                      : `${n} Vial${n > 1 ? "s" : ""} — $${tot.toFixed(2)} total · $${ppv.toFixed(2)}/vial${suffix}`;
                    return <option key={n} value={n}>{label}</option>;
                  })}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              </div>
            </div>

            {/* ── Pricing breakdown table ── */}
            <div className="mb-6 rounded-xl overflow-hidden border" style={{ borderColor: "rgba(0,180,220,0.20)" }}>
              <table className="w-full text-sm font-body">
                <thead>
                  <tr style={{ background: "linear-gradient(135deg, rgba(0,180,220,0.08), rgba(0,100,160,0.06))" }}>
                    <th className="text-left px-4 py-2.5 text-xs font-heading font-bold tracking-widest uppercase text-primary">Quantity</th>
                    <th className="text-left px-4 py-2.5 text-xs font-heading font-bold tracking-widest uppercase text-primary">Per Vial</th>
                    <th className="text-left px-4 py-2.5 text-xs font-heading font-bold tracking-widest uppercase text-primary">Total</th>
                    <th className="text-left px-4 py-2.5 text-xs font-heading font-bold tracking-widest uppercase text-primary">Save</th>
                  </tr>
                </thead>
                <tbody>
                  {breakdownRows.map((row, i) => {
                    const isActive = (
                      (row.qty === 1  && vialQty === 1)          ||
                      (row.qty === 2  && vialQty >= 2 && vialQty <= 4) ||
                      (row.qty === 5  && vialQty >= 5 && vialQty <= 9) ||
                      (row.qty === 10 && vialQty >= 10)
                    );
                    return (
                      <tr
                        key={row.label}
                        className="border-t"
                        style={{
                          borderColor: "rgba(0,180,220,0.12)",
                          background: isActive
                            ? "linear-gradient(90deg, rgba(0,200,232,0.10), rgba(0,150,200,0.05))"
                            : i % 2 === 0 ? "white" : "rgba(0,200,232,0.02)",
                        }}
                      >
                        <td className="px-4 py-2.5 text-foreground font-medium">
                          <span className="flex items-center gap-2">
                            <span
                              className="w-1.5 h-1.5 rounded-full flex-shrink-0 transition-all"
                              style={{ background: isActive ? "#00C8E8" : "transparent", border: isActive ? "none" : "1px solid #ccc" }}
                            />
                            {row.label}
                          </span>
                        </td>
                        <td
                          className="px-4 py-2.5"
                          style={{ color: isActive ? "#00C8E8" : undefined, fontWeight: isActive ? 700 : undefined }}
                        >
                          ${row.ppv.toFixed(2)}
                        </td>
                        <td className="px-4 py-2.5 text-muted-foreground">${row.tot.toFixed(2)}</td>
                        <td className="px-4 py-2.5">
                          {row.pct > 0 ? (
                            <span
                              className="font-bold text-xs px-2 py-0.5 rounded-full"
                              style={{ background: "rgba(0,200,232,0.12)", color: "#00A8C8" }}
                            >
                              {row.pct}%
                            </span>
                          ) : (
                            <span className="text-muted-foreground/40 text-xs">—</span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* ── Add to Cart ── */}
            <button
              onClick={handleAdd}
              className="flex items-center justify-center gap-2 py-3.5 rounded-xl text-xs font-heading font-bold tracking-widest uppercase transition-all duration-300 mb-4"
              style={{
                background: "linear-gradient(135deg, #00C8E8 0%, #00A0CC 100%)",
                color: "#001828",
                boxShadow: "0 4px 20px rgba(0,200,232,0.30)",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.filter = "brightness(1.08)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 28px rgba(0,200,232,0.50)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.filter = "brightness(1)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(0,200,232,0.30)";
              }}
            >
              <ShoppingCart className="w-4 h-4" />
              ADD {vialQty} VIAL{vialQty > 1 ? "S" : ""} — ${totalPrice.toFixed(2)}
            </button>

            <p className="text-xs text-muted-foreground font-body">
              Category: <span className="text-primary font-medium">{group.category}</span>
            </p>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="description" className="mb-12">
          <TabsList className="bg-frost border border-border rounded-none w-full justify-start">
            <TabsTrigger value="description" className="rounded-none font-heading text-xs font-bold tracking-widest uppercase data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-6 py-3">
              Description
            </TabsTrigger>
            <TabsTrigger value="info" className="rounded-none font-heading text-xs font-bold tracking-widest uppercase data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-6 py-3">
              Additional Information
            </TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="border border-t-0 border-border p-6">
            <p className="text-sm font-body text-muted-foreground leading-relaxed">
              {group.description}
            </p>
          </TabsContent>
          <TabsContent value="info" className="border border-t-0 border-border p-6">
            <table className="w-full text-sm font-body">
              <tbody className="divide-y divide-border">
                <tr><td className="py-2 text-muted-foreground w-40">Specification</td><td className="py-2 text-primary">{variant.spec}</td></tr>
                <tr><td className="py-2 text-muted-foreground w-40">Single Vial</td><td className="py-2 text-primary">${singlePrice.toFixed(2)}</td></tr>
                <tr><td className="py-2 text-muted-foreground w-40">10-Vial Kit</td><td className="py-2 text-primary">${(singlePrice * 10 * 0.80).toFixed(2)} (20% off)</td></tr>
                <tr><td className="py-2 text-muted-foreground w-40">Category</td><td className="py-2 text-primary">{group.category}</td></tr>
                <tr><td className="py-2 text-muted-foreground w-40">Manufacturer</td><td className="py-2 text-primary">Summit BioLabs</td></tr>
                <tr><td className="py-2 text-muted-foreground w-40">Testing</td><td className="py-2 text-primary">Janoshik Analytical</td></tr>
              </tbody>
            </table>
          </TabsContent>
        </Tabs>

        {/* Gallery */}
        <div>
          <h3 className="text-xs font-heading font-bold tracking-widest text-primary uppercase mb-4">Gallery</h3>
          <div className="flex gap-3">
            {[1, 2, 3].map(i => (
              <button
                key={i}
                onClick={() => setLightboxOpen(true)}
                className="w-24 h-24 bg-white border border-border flex items-center justify-center p-2 hover:border-secondary transition-colors group"
              >
                <img src={vialImage} alt={`${group.name} view ${i}`} className="max-h-full w-auto object-contain group-hover:scale-105 transition-transform duration-200" />
              </button>
            ))}
            <div className="w-24 h-24 bg-frost border border-border flex items-center justify-center p-2">
              <span className="text-[10px] text-muted-foreground font-heading text-center">LAB REPORT</span>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="relative max-w-lg w-full mx-4" onClick={e => e.stopPropagation()}>
            <img
              src={vialImage}
              alt={group.name}
              className="w-full h-auto object-contain"
              style={{ filter: "drop-shadow(0 24px 48px rgba(0,100,255,0.25))" }}
            />
          </div>
        </div>
      )}
    </Layout>
  );
};

export default ProductDetail;
