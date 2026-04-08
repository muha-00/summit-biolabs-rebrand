import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import { products } from "@/data/products";

const SearchDropdown = ({ className, onClose, onSearch }: { className?: string; onClose?: () => void; onSearch?: () => void }) => {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const navigate = useNavigate();
  const ref = useRef<HTMLDivElement>(null);

  const results = query.trim().length > 0
    ? products.filter((p) => p.name.toLowerCase().includes(query.toLowerCase())).slice(0, 8)
    : [];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/shop?search=${encodeURIComponent(query.trim())}`);
      setFocused(false);
      onClose?.();
      setTimeout(() => onSearch?.(), 50);
    }
  };

  const handleSelect = (name: string) => {
    setQuery(name);
    navigate(`/shop?search=${encodeURIComponent(name)}`);
    setFocused(false);
    onClose?.();
    setTimeout(() => onSearch?.(), 50);
  };

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setFocused(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className={`relative ${className || ""}`}>
      <form onSubmit={handleSubmit} className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          className="w-full pl-10 pr-4 py-2 border border-border bg-background text-sm font-body focus:outline-none focus:ring-1 focus:ring-ring"
        />
      </form>
      {focused && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 bg-background border border-border shadow-lg z-50 max-h-64 overflow-y-auto">
          {results.map((p) => (
            <button
              key={p.id}
              onClick={() => handleSelect(p.name)}
              className="w-full text-left px-4 py-2 text-sm font-body hover:bg-accent transition-colors flex justify-between items-center"
            >
              <span className="text-primary">{p.name}</span>
              <span className="text-secondary font-heading font-bold text-xs">${p.price.toFixed(2)}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchDropdown;
