import { X, Plus, Minus, Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";

const CartDrawer = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const { items, updateQuantity, removeFromCart, total, clearCart } = useCart();

  if (!open) return null;

  return (
    <>
      <div className="fixed inset-0 bg-primary/40 z-50" onClick={onClose} />
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-background border-l border-border z-50 flex flex-col shadow-2xl">
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h2 className="font-heading font-bold text-primary text-lg tracking-wider uppercase">Your Cart</h2>
          <button onClick={onClose} className="p-1 text-muted-foreground hover:text-primary transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <p className="text-muted-foreground text-sm font-body text-center py-12">Your cart is empty.</p>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.product.id} className="flex items-center gap-3 p-3 border border-border bg-frost">
                  <div className="flex-1">
                    <p className="text-xs font-heading font-bold text-primary uppercase tracking-wider">
                      {item.product.name}
                    </p>
                    <p className="text-sm font-heading font-bold text-secondary">
                      ${item.product.price.toFixed(2)}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      className="p-1 border border-border hover:bg-accent transition-colors"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-sm font-heading font-bold w-6 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      className="p-1 border border-border hover:bg-accent transition-colors"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="p-1 text-destructive hover:bg-destructive/10 transition-colors ml-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="p-4 border-t border-border space-y-3">
            <div className="flex justify-between font-heading font-bold text-primary">
              <span className="text-sm uppercase tracking-wider">Total</span>
              <span className="text-lg">${total.toFixed(2)}</span>
            </div>
            <button className="w-full bg-gradient-cyan text-secondary-foreground py-3 font-heading font-bold text-sm tracking-widest uppercase hover:opacity-90 transition-opacity">
              Checkout
            </button>
            <button
              onClick={clearCart}
              className="w-full text-xs text-muted-foreground font-heading tracking-wider uppercase hover:text-destructive transition-colors"
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
