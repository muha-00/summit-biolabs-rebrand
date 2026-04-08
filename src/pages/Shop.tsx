import { useState, useMemo, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import SearchDropdown from "@/components/SearchDropdown";
import FloatingVialsSection from "@/components/FloatingVialsSection";
import { groupedProducts, categories } from "@/data/products";

const Shop = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState("default");
  const gridRef = useRef<HTMLDivElement>(null);
  const scrollToGrid = () => gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  const filteredProducts = useMemo(() => {
    let result = groupedProducts;

    if (searchQuery) {
      result = result.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    } else if (activeCategory) {
      result = result.filter((p) => p.category === activeCategory);
    }

    if (sortBy === "price-asc")  result = [...result].sort((a, b) => a.variants[0].price - b.variants[0].price);
    if (sortBy === "price-desc") result = [...result].sort((a, b) => b.variants[0].price - a.variants[0].price);
    if (sortBy === "name")       result = [...result].sort((a, b) => a.name.localeCompare(b.name));

    return result;
  }, [searchQuery, activeCategory, sortBy]);

  return (
    <Layout>
      <FloatingVialsSection onBrowse={scrollToGrid} />
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">

          {/* Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <SearchDropdown className="mb-6" />

            <button
              onClick={() => setActiveCategory(null)}
              className={`w-full flex items-center justify-between px-4 py-3 font-heading text-xs font-bold tracking-widest uppercase mb-4 transition-colors ${
                !activeCategory ? "bg-primary text-primary-foreground" : "bg-accent text-primary hover:bg-primary hover:text-primary-foreground"
              }`}
            >
              ALL PRODUCTS
              <ChevronDown className="w-4 h-4" />
            </button>

            <div className="space-y-0.5">
              {categories.map((cat) => (
                <button
                  key={cat.name}
                  className={`w-full text-left px-4 py-2 text-sm font-body flex items-center justify-between transition-colors ${
                    activeCategory === cat.name
                      ? "text-secondary font-semibold bg-accent"
                      : "text-muted-foreground hover:text-primary hover:bg-accent"
                  }`}
                  onClick={() => setActiveCategory(cat.name)}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </aside>

          {/* Main */}
          <div className="flex-1" ref={gridRef}>
            <div className="flex items-center justify-between mb-8">
              <p className="text-sm text-muted-foreground font-body">
                Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""}
              </p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-border px-3 py-2 text-sm font-body bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
              >
                <option value="default">Default sorting</option>
                <option value="price-asc">Sort by price: low to high</option>
                <option value="price-desc">Sort by price: high to low</option>
                <option value="name">Sort by name</option>
              </select>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 items-stretch">
              {filteredProducts.map((group) => (
                <ProductCard key={group.id} group={group} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground font-body">No products found.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Shop;
