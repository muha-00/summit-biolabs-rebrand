import { useState, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { Minus, Plus, ShoppingCart, X, ZoomIn } from "lucide-react";
import Layout from "@/components/Layout";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button3D } from "@/components/ui/Button3D";
import vialImage from "@/assets/vial.png";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id);
  const { addToCart } = useCart();

  const [qty, setQty] = useState(1);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // 3D tilt refs for the image panel
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

  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <p className="text-muted-foreground font-body">Product not found.</p>
          <Link to="/shop" className="text-secondary underline mt-4 inline-block font-body">Back to Shop</Link>
        </div>
      </Layout>
    );
  }

  const breadcrumbs = [
    { label: "HOME", path: "/" },
    { label: product.category.toUpperCase(), path: `/shop?category=${encodeURIComponent(product.category)}` },
  ];
  if (product.subcategory) {
    breadcrumbs.push({ label: product.subcategory.toUpperCase(), path: `/shop?subcategory=${encodeURIComponent(product.subcategory)}` });
  }

  const handleAdd = () => {
    for (let i = 0; i < qty; i++) addToCart(product);
  };

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-frost border-b border-border">
        <div className="container mx-auto px-4 py-3">
          <p className="text-xs font-heading tracking-wider text-muted-foreground">
            {breadcrumbs.map((b, i) => (
              <span key={i}>
                <Link to={b.path} className="hover:text-primary transition-colors">{b.label}</Link>
                <span className="mx-2">/</span>
              </span>
            ))}
            <span className="text-primary font-semibold">{product.name.toUpperCase()}</span>
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">

          {/* ── Image panel with 3D tilt + click to zoom ── */}
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
              {/* Zoom hint */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200
                              bg-primary/80 text-white rounded-full p-1.5 z-10">
                <ZoomIn className="w-4 h-4" />
              </div>

              <div className="relative flex items-center justify-center w-full h-full" style={{ transformStyle: "preserve-3d" }}>
                {/* Standing shadow */}
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
                  alt={product.name}
                  className="max-h-[400px] w-auto object-contain"
                  style={{ transform: "translateZ(30px)", filter: "drop-shadow(0 14px 30px rgba(0,80,180,0.14))" }}
                  width={512}
                  height={640}
                />
              </div>
            </div>
          </div>

          {/* ── Product info ── */}
          <div className="flex flex-col justify-center">
            <h1 className="text-2xl lg:text-3xl font-heading font-bold text-primary tracking-wide mb-1">
              {product.name}{product.nickname ? ` ${product.nickname}` : ""}
            </h1>
            <p className="text-sm font-body text-muted-foreground mb-3">{product.spec}</p>
            <p className="text-2xl font-heading font-bold text-secondary mb-6">
              ${product.price.toFixed(2)}
            </p>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center border border-border">
                <button onClick={() => setQty(q => Math.max(1, q - 1))} className="px-3 py-2 text-primary hover:bg-accent transition-colors">
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 py-2 text-sm font-heading font-bold text-primary min-w-[40px] text-center">{qty}</span>
                <button onClick={() => setQty(q => q + 1)} className="px-3 py-2 text-primary hover:bg-accent transition-colors">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <button
                onClick={handleAdd}
                className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 text-xs font-heading font-bold tracking-widest uppercase hover:bg-secondary transition-colors"
              >
                <ShoppingCart className="w-4 h-4" />
                ADD TO CART
              </button>
            </div>

            <div className="flex">
              <Button3D label="Shop All Products" to="/shop" />
            </div>

            <p className="text-xs text-muted-foreground font-body mt-4">
              Category: <span className="text-primary">{product.category}</span>
              {product.subcategory && <> / <span className="text-primary">{product.subcategory}</span></>}
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
              {product.description}
            </p>
          </TabsContent>
          <TabsContent value="info" className="border border-t-0 border-border p-6">
            <table className="w-full text-sm font-body">
              <tbody className="divide-y divide-border">
                <tr><td className="py-2 text-muted-foreground w-40">Specification</td><td className="py-2 text-primary">{product.spec}</td></tr>
                <tr><td className="py-2 text-muted-foreground w-40">Category</td><td className="py-2 text-primary">{product.category}</td></tr>
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
                <img src={vialImage} alt={`${product.name} view ${i}`} className="max-h-full w-auto object-contain group-hover:scale-105 transition-transform duration-200" />
              </button>
            ))}
            <div className="w-24 h-24 bg-frost border border-border flex items-center justify-center p-2">
              <span className="text-[10px] text-muted-foreground font-heading text-center">LAB REPORT</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Lightbox ── */}
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
          <div
            className="relative max-w-lg w-full mx-4"
            onClick={e => e.stopPropagation()}
          >
            <img
              src={vialImage}
              alt={product.name}
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
