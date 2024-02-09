import { Inter, Mulish, Domine, Poppins } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const domine = Domine({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-domine",
});

export const mulish = Mulish({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mulish",
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400"],
  variable: "--font-poppins",
});
