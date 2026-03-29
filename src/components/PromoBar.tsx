const PromoBar = () => {
  return (
    <div className="bg-promo text-promo-foreground py-2 px-4 text-xs font-heading tracking-wider">
      <div className="container mx-auto flex items-center justify-between">
        <span className="hidden sm:inline font-semibold">20% OFF ORDERS ABOVE $500!</span>
        <span className="font-semibold text-center flex-1 sm:flex-none">NO ORDER MINIMUMS!</span>
        <span className="hidden sm:inline font-semibold">FREE SHIPPING FOR ORDERS ABOVE $150</span>
      </div>
    </div>
  );
};

export default PromoBar;
