import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, ShoppingCart, Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpg";

const navLinks = [
  { name: "HOME", path: "/" },
  { name: "SHOP", path: "/shop" },
  { name: "LAB RESULTS", path: "/lab-results" },
  { name: "CONTACT", path: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img src={logo} alt="Summit BioLabs" className="h-12 lg:h-16 w-auto" />
        </Link>

        {/* Center nav */}
        <div className="hidden md:flex items-center gap-1">
          <button className="p-2 text-muted-foreground hover:text-primary transition-colors" aria-label="Search">
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

        {/* Right */}
        <div className="flex items-center gap-4">
          <span className="hidden lg:inline text-xs font-heading font-semibold text-primary tracking-wide">
            20% OFF ORDERS ABOVE $500
          </span>
          <Link to="/shop" className="flex items-center gap-2 text-xs font-heading font-semibold text-primary hover:text-secondary transition-colors">
            <span className="hidden sm:inline">CART / $0.00</span>
            <ShoppingCart className="w-5 h-5" />
          </Link>
          <button
            className="md:hidden p-2 text-primary"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background">
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
  );
};

export default Navbar;
