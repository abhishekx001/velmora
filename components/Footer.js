const Footer = () => {
  return (
    <footer className="py-16 px-6 bg-white">
      <div className="container mx-auto max-w-7xl text-center">
        <h2 className="font-cormorant text-xl md:text-2xl tracking-[0.4em] font-medium text-near-black mb-4">
          VELMORA
        </h2>
        <p className="font-cormorant italic text-sm text-warm-gray mb-10 tracking-wider">
          Where Elegance Meets Timeless Beauty
        </p>
        
        <div className="flex justify-center space-x-8 mb-10 text-[10px] items-center font-dm uppercase tracking-widest text-warm-gray">
          <a href="#" className="hover:text-burgundy transition-colors">Privacy Policy</a>
          <span className="w-1 h-1 bg-burgundy rounded-full" />
          <a href="#" className="hover:text-burgundy transition-colors">Terms of Service</a>
          <span className="w-1 h-1 bg-burgundy rounded-full" />
          <a href="#" className="hover:text-burgundy transition-colors">Shipping</a>
        </div>

        <div className="font-dm text-[9px] uppercase tracking-[0.2em] text-warm-gray/60">
           {new Date().getFullYear()} Velmora Jewellery. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
