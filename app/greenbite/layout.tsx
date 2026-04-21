import type { ReactNode } from "react";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--gb-playfair",
  weight: ["400", "600", "700", "900"],
  style: ["normal", "italic"],
});

export const metadata = { title: "GreenBite — Farm to Table Dining" };

export default function GreenBiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className={playfair.variable} style={{ background: "#FFF8F0", color: "#1C1C14", minHeight: "100vh" }}>
      {children}
    </div>
  );
}
