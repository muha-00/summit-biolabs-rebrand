import { Link } from "react-router-dom";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-gradient-navy text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div>
            <img src={logo} alt="Summit BioLabs" className="h-16 w-auto mb-4 brightness-0 invert" />
            <p className="text-sm opacity-70 font-body">
              At the Summit of Science. Premium research peptides and compounds.
            </p>
          </div>
          <div>
            <h4 className="font-heading font-bold text-sm tracking-widest mb-4">QUICK LINKS</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Home</Link>
              <Link to="/shop" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Shop</Link>
              <Link to="/lab-results" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Lab Results</Link>
              <Link to="/contact" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Contact</Link>
            </div>
          </div>
          <div>
            <h4 className="font-heading font-bold text-sm tracking-widest mb-4">CONTACT</h4>
            <p className="text-sm opacity-70">support@summitbiolabs.com</p>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center">
          <p className="text-xs opacity-50">© {new Date().getFullYear()} Summit BioLabs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
