import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import vialImage from "@/assets/vial.png";
import type { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-card border border-border group hover:shadow-lg transition-all duration-300 relative overflow-hidden">
      {/* Frost gradient edges */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-accent/30 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="p-4 flex flex-col items-center">
        <Link to={`/product/${product.id}`} className="w-full flex flex-col items-center">
          <div className="w-full aspect-square flex items-center justify-center bg-frost mb-3 p-4">
            <img
              src={vialImage}
              alt={product.name}
              className="h-full w-auto object-contain max-h-40 group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
              width={512}
              height={640}
            />
          </div>
          <h3 className="text-xs font-heading font-bold text-primary tracking-wider uppercase text-center leading-tight mb-1">
            {product.name}
          </h3>
          <p className="text-sm font-heading font-bold text-secondary mb-3">
            ${product.price.toFixed(2)}
          </p>
        </Link>
        <button
          onClick={(e) => { e.stopPropagation(); addToCart(product); }}
          className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-2 text-xs font-heading font-bold tracking-widest uppercase hover:bg-secondary transition-colors"
        >
          <ShoppingCart className="w-3.5 h-3.5" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
