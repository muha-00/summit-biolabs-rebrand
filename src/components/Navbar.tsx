import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, ShoppingCart, Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { useCart } from "@/context/CartContext";
import CartDrawer from "@/components/CartDrawer";
import SearchDropdown from "@/components/SearchDropdown";

const navLinks = [
  { name: "HOME", path: "/" },
  { name: "SHOP", path: "/shop" },
  { name: "LAB RESULTS", path: "/lab-results" },
  { name: "FAQ", path: "/faq" },
  { name: "CONTACT", path: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();
  const { total, itemCount } = useCart();

  return (
    <>
      <nav className="bg-background border-b border-border sticky top-0 z-40">
        <div className="container mx-auto px-4 flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex-shrink-0">
            <img src={logo} alt="Summit BioLabs" className="h-12 lg:h-16 w-auto" />
          </Link>

          <div className="hidden md:flex items-center gap-1">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 text-xs font-heading font-semibold tracking-widest transition-colors ${
                  location.pathname === link.path
                    ? "text-secondary"
                    : "text-primary hover:text-secondary"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden lg:inline text-xs font-heading font-semibold text-primary tracking-wide">
              20% OFF ORDERS ABOVE $500
            </span>
            <button
              onClick={() => setCartOpen(true)}
              className="flex items-center gap-2 text-xs font-heading font-semibold text-primary hover:text-secondary transition-colors relative"
            >
              <span className="hidden sm:inline">CART / ${total.toFixed(2)}</span>
              <ShoppingCart className="w-5 h-5" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-secondary text-secondary-foreground text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
            <button
              className="md:hidden p-2 text-primary"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Search bar dropdown */}
        {searchOpen && (
          <div className="border-t border-border bg-background px-4 py-3">
            <div className="container mx-auto max-w-lg">
              <SearchDropdown onClose={() => setSearchOpen(false)} />
            </div>
          </div>
        )}

        {mobileOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <div className="px-4 py-3">
              <SearchDropdown onClose={() => setMobileOpen(false)} />
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`block px-6 py-3 text-sm font-heading font-semibold tracking-widest ${
                  location.pathname === link.path ? "text-secondary bg-accent" : "text-primary"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
};

export default Navbar;
