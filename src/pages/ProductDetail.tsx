import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import Layout from "@/components/Layout";
import { products, categories } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import vialImage from "@/assets/vial.png";

const dosageOptions = ["Standard", "High Concentration"];
const sizeOptions = ["10ml", "20ml"];
const carrierOptions = ["MCT Oil", "GSO (Grape Seed Oil)", "Miglyol 840"];

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);
  const [dosage, setDosage] = useState(dosageOptions[0]);
  const [size, setSize] = useState(sizeOptions[0]);
  const [carrier, setCarrier] = useState(carrierOptions[0]);

  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <p className="text-muted-foreground font-body">Product not found.</p>
          <Link to="/shop" className="text-secondary underline mt-4 inline-block font-body">
            Back to Shop
          </Link>
        </div>
      </Layout>
    );
  }

  const cat = categories.find((c) => c.name === product.category);
  const breadcrumbs = [
    { label: "HOME", path: "/" },
    { label: product.category.toUpperCase(), path: `/shop?category=${encodeURIComponent(product.category)}` },
  ];
  if (product.subcategory) {
    breadcrumbs.push({
      label: product.subcategory.toUpperCase(),
      path: `/shop?subcategory=${encodeURIComponent(product.subcategory)}`,
    });
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
                <Link to={b.path} className="hover:text-primary transition-colors">
                  {b.label}
                </Link>
                <span className="mx-2">/</span>
              </span>
            ))}
            <span className="text-primary font-semibold">{product.name.toUpperCase()}</span>
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        {/* Main product section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
          {/* Image */}
          <div className="bg-frost border border-border flex items-center justify-center p-8 aspect-square">
            <img
              src={vialImage}
              alt={product.name}
              className="max-h-[400px] w-auto object-contain"
              width={512}
              height={640}
            />
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center">
            <h1 className="text-2xl lg:text-3xl font-heading font-bold text-primary tracking-wide mb-2">
              {product.name}
            </h1>
            <p className="text-2xl font-heading font-bold text-secondary mb-6">
              ${product.price.toFixed(2)}
            </p>

            <div className="space-y-4 mb-8">
              <div>
                <label className="block text-xs font-heading font-bold tracking-widest text-primary mb-1 uppercase">
                  Dosage
                </label>
                <select
                  value={dosage}
                  onChange={(e) => setDosage(e.target.value)}
                  className="w-full border border-border px-3 py-2 text-sm font-body bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                >
                  {dosageOptions.map((d) => (
                    <option key={d} value={d}>{d}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-heading font-bold tracking-widest text-primary mb-1 uppercase">
                  Size
                </label>
                <select
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                  className="w-full border border-border px-3 py-2 text-sm font-body bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                >
                  {sizeOptions.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-heading font-bold tracking-widest text-primary mb-1 uppercase">
                  Carrier Oil
                </label>
                <select
                  value={carrier}
                  onChange={(e) => setCarrier(e.target.value)}
                  className="w-full border border-border px-3 py-2 text-sm font-body bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                >
                  {carrierOptions.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Qty + Add to Cart */}
            <div className="flex items-center gap-4">
              <div className="flex items-center border border-border">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="px-3 py-2 text-primary hover:bg-accent transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 py-2 text-sm font-heading font-bold text-primary min-w-[40px] text-center">
                  {qty}
                </span>
                <button
                  onClick={() => setQty((q) => q + 1)}
                  className="px-3 py-2 text-primary hover:bg-accent transition-colors"
                >
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

            <p className="text-xs text-muted-foreground font-body mt-4">
              Category: <span className="text-primary">{product.category}</span>
              {product.subcategory && (
                <> / <span className="text-primary">{product.subcategory}</span></>
              )}
            </p>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="description" className="mb-12">
          <TabsList className="bg-frost border border-border rounded-none w-full justify-start">
            <TabsTrigger
              value="description"
              className="rounded-none font-heading text-xs font-bold tracking-widest uppercase data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-6 py-3"
            >
              Description
            </TabsTrigger>
            <TabsTrigger
              value="info"
              className="rounded-none font-heading text-xs font-bold tracking-widest uppercase data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-6 py-3"
            >
              Additional Information
            </TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="border border-t-0 border-border p-6">
            <p className="text-sm font-body text-muted-foreground leading-relaxed">
              {product.name} by Summit BioLabs — pharmaceutical-grade compound manufactured under strict GMP conditions.
              Each vial is third-party tested by Janoshik Analytical for purity and potency verification.
              Carrier oil options available. Store in a cool, dry place away from direct sunlight.
            </p>
          </TabsContent>
          <TabsContent value="info" className="border border-t-0 border-border p-6">
            <table className="w-full text-sm font-body">
              <tbody className="divide-y divide-border">
                <tr><td className="py-2 text-muted-foreground w-40">Category</td><td className="py-2 text-primary">{product.category}</td></tr>
                {product.subcategory && (
                  <tr><td className="py-2 text-muted-foreground w-40">Subcategory</td><td className="py-2 text-primary">{product.subcategory}</td></tr>
                )}
                <tr><td className="py-2 text-muted-foreground w-40">Manufacturer</td><td className="py-2 text-primary">Summit BioLabs</td></tr>
                <tr><td className="py-2 text-muted-foreground w-40">Testing</td><td className="py-2 text-primary">Janoshik Analytical</td></tr>
              </tbody>
            </table>
          </TabsContent>
        </Tabs>

        {/* Thumbnail gallery placeholder */}
        <div>
          <h3 className="text-xs font-heading font-bold tracking-widest text-primary uppercase mb-4">Gallery</h3>
          <div className="flex gap-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-24 h-24 bg-frost border border-border flex items-center justify-center p-2">
                <img src={vialImage} alt={`${product.name} view ${i}`} className="max-h-full w-auto object-contain" />
              </div>
            ))}
            <div className="w-24 h-24 bg-frost border border-border flex items-center justify-center p-2">
              <span className="text-[10px] text-muted-foreground font-heading text-center">LAB REPORT</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
