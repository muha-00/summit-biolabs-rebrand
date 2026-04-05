import { useRef } from "react";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import vialImage from "@/assets/vial.png";
import type { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();
  const cardRef = useRef<HTMLDivElement>(null);
  const vialRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const { left, top, width, height } = card.getBoundingClientRect();
    const rotX = ((e.clientY - top  - height / 2) / height) * 14;
    const rotY = ((e.clientX - left - width  / 2) / width ) * -14;
    card.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.03)`;
    if (vialRef.current) {
      vialRef.current.style.transform = `translateZ(28px) rotateX(${rotX * 0.4}deg) rotateY(${rotY * 0.4}deg)`;
    }
  };

  const handleMouseLeave = () => {
    if (cardRef.current) cardRef.current.style.transform = "rotateX(0) rotateY(0) scale(1)";
    if (vialRef.current)  vialRef.current.style.transform  = "translateZ(0) rotateX(0) rotateY(0)";
  };

  return (
    <div style={{ perspective: "900px" }}>
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 48px rgba(0,80,180,0.14), 0 6px 18px rgba(0,0,0,0.08)"; }}
        onMouseOut={e => {
          if (!e.currentTarget.contains(e.relatedTarget as Node)) {
            (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 18px rgba(0,0,0,0.07)";
          }
        }}
        className="bg-white group relative flex flex-col transition-all duration-300 ease-out"
        style={{ transformStyle: "preserve-3d", boxShadow: "0 4px 18px rgba(0,0,0,0.07)" }}
      >
        <Link
          to={`/product/${product.id}`}
          className="w-full flex flex-col items-center p-5 pb-3"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Vial — floats in Z on hover */}
          <div
            ref={vialRef}
            className="w-full flex items-center justify-center relative mb-3"
            style={{ transformStyle: "preserve-3d", transition: "transform 0.3s ease-out", aspectRatio: "1/1" }}
          >
            {/* Standing shadow */}
            <div
              className="absolute bottom-1 left-1/2 -translate-x-1/2 rounded-full"
              style={{
                width: "52%", height: "10px",
                background: "radial-gradient(ellipse, rgba(0,0,0,0.20) 0%, transparent 72%)",
                filter: "blur(4px)", transform: "translateZ(-10px)",
              }}
            />
            <img
              src={vialImage}
              alt={product.name}
              className="h-full w-auto object-contain"
              style={{ maxHeight: "160px", filter: "drop-shadow(0 8px 18px rgba(0,80,180,0.12))" }}
              loading="lazy"
              width={512}
              height={640}
            />
          </div>

          <h3
            className="text-xs font-heading font-bold text-primary tracking-wider uppercase text-center leading-tight mb-0.5"
            style={{ transform: "translateZ(12px)" }}
          >
            {product.name}{product.nickname ? ` ${product.nickname}` : ""}
          </h3>
          <p
            className="text-[10px] font-body text-muted-foreground text-center mb-1 leading-tight"
            style={{ transform: "translateZ(12px)" }}
          >
            {product.spec}
          </p>
          <p className="text-sm font-heading font-bold text-secondary mb-3" style={{ transform: "translateZ(12px)" }}>
            ${product.price.toFixed(2)}
          </p>
        </Link>

        <div className="px-5 pb-5" style={{ transform: "translateZ(8px)" }}>
          <button
            onClick={e => { e.stopPropagation(); addToCart(product); }}
            className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-2 text-xs font-heading font-bold tracking-widest uppercase hover:bg-secondary transition-colors"
          >
            <ShoppingCart className="w-3.5 h-3.5" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
