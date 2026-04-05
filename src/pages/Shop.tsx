import { useState, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import SearchDropdown from "@/components/SearchDropdown";
import { products, categories } from "@/data/products";

const Shop = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeSubcategory, setActiveSubcategory] = useState<string | null>(null);
  const [expandedCategories, setExpandedCategories] = useState<string[]>(["Test"]);
  const [sortBy, setSortBy] = useState("default");

  const toggleExpand = (name: string) => {
    setExpandedCategories((prev) =>
      prev.includes(name) ? prev.filter((c) => c !== name) : [...prev, name]
    );
  };

  const filteredProducts = useMemo(() => {
    let result = products;

    if (searchQuery) {
      result = result.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    } else if (activeSubcategory) {
      result = result.filter((p) => p.subcategory === activeSubcategory);
    } else if (activeCategory) {
      result = result.filter((p) => p.category === activeCategory);
    }

    if (sortBy === "price-asc") result = [...result].sort((a, b) => a.price - b.price);
    if (sortBy === "price-desc") result = [...result].sort((a, b) => b.price - a.price);
    if (sortBy === "name") result = [...result].sort((a, b) => a.name.localeCompare(b.name));

    return result;
  }, [searchQuery, activeCategory, activeSubcategory, sortBy]);

  const breadcrumbLabel = searchQuery
    ? searchQuery.toUpperCase()
    : activeSubcategory || activeCategory || "SHOP";

  return (
    <Layout>
      <div className="bg-frost border-b border-border">
        <div className="container mx-auto px-4 py-3">
          <p className="text-xs font-heading tracking-wider text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">HOME</Link>
            <span className="mx-2">/</span>
            <span className="text-primary font-semibold">{breadcrumbLabel}</span>
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <SearchDropdown className="mb-6" />

            <button
              onClick={() => { setActiveCategory(null); setActiveSubcategory(null); }}
              className={`w-full flex items-center justify-between px-4 py-3 font-heading text-xs font-bold tracking-widest uppercase mb-4 transition-colors ${
                !activeCategory ? "bg-primary text-primary-foreground" : "bg-accent text-primary hover:bg-primary hover:text-primary-foreground"
              }`}
            >
              ALL PRODUCTS
              <ChevronDown className="w-4 h-4" />
            </button>

            <div className="space-y-0.5">
              {categories.map((cat) => (
                <div key={cat.name}>
                  <button
                    className={`w-full text-left px-4 py-2 text-sm font-body flex items-center justify-between transition-colors ${
                      activeCategory === cat.name
                        ? "text-secondary font-semibold bg-accent"
                        : "text-muted-foreground hover:text-primary hover:bg-accent"
                    }`}
                    onClick={() => {
                      setActiveCategory(cat.name);
                      setActiveSubcategory(null);
                      if ((cat as any).subcategories) toggleExpand(cat.name);
                    }}
                  >
                    {cat.name}
                    {(cat as any).subcategories && (
                      expandedCategories.includes(cat.name)
                        ? <ChevronUp className="w-3.5 h-3.5" />
                        : <ChevronDown className="w-3.5 h-3.5" />
                    )}
                  </button>
                  {(cat as any).subcategories && expandedCategories.includes(cat.name) && (
                    <div className="ml-4 border-l border-border">
                      {(cat as any).subcategories.map((sub: string) => (
                        <button
                          key={sub}
                          onClick={() => { setActiveCategory(cat.name); setActiveSubcategory(sub); }}
                          className={`w-full text-left px-4 py-1.5 text-xs font-body transition-colors ${
                            activeSubcategory === sub
                              ? "text-secondary font-semibold"
                              : "text-muted-foreground hover:text-primary"
                          }`}
                        >
                          {sub}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </aside>

          {/* Main */}
          <div className="flex-1">
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

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
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
