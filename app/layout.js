import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-cormorant",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-dm",
});

export const metadata = {
  title: "Velmora | Where Elegance Meets Timeless Beauty",
  description: "Ultra-premium handcrafted jewelry for the modern woman. Explore our curated collection of rings, necklaces, earrings, and bracelets.",
};

import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${dmSans.variable} font-dm antialiased`}>
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
