import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ChevronDown } from "lucide-react";
import Layout from "@/components/Layout";

const categories = [
  "Test", "HGH", "Trestolone (MENT)", "Tren", "Mast", "DHB",
  "Deca", "Primo", "EQ", "NPP", "Orals", "Peptides", "HCG",
  "BAC Water", "L-Carnitine", "Vitamin B12",
];

const Shop = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-frost border-b border-border">
        <div className="container mx-auto px-4 py-3">
          <p className="text-xs font-heading tracking-wider text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">HOME</Link>
            <span className="mx-2">/</span>
            <span className="text-primary font-semibold">SHOP</span>
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 border border-border bg-background text-sm font-body focus:outline-none focus:ring-1 focus:ring-ring"
              />
            </div>

            <button className="w-full flex items-center justify-between px-4 py-3 bg-primary text-primary-foreground font-heading text-xs font-bold tracking-widest uppercase mb-4">
              ALL PRODUCTS
              <ChevronDown className="w-4 h-4" />
            </button>

            <div className="space-y-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className="w-full text-left px-4 py-2 text-sm font-body text-muted-foreground hover:text-primary hover:bg-accent transition-colors"
                >
                  {cat}
                </button>
              ))}
            </div>
          </aside>

          {/* Main */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-8">
              <p className="text-sm text-muted-foreground font-body">Showing all products</p>
              <select className="border border-border px-3 py-2 text-sm font-body bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-ring">
                <option>Default sorting</option>
                <option>Sort by price: low to high</option>
                <option>Sort by price: high to low</option>
                <option>Sort by popularity</option>
              </select>
            </div>

            {/* Empty product grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-card border border-border aspect-[3/4] flex items-center justify-center group hover:shadow-md transition-shadow"
                >
                  <div className="w-full h-full bg-frost" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Shop;
