import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { inter, domine, mulish } from "@/styles/fonts";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.variable} ${domine.variable} ${mulish.variable}`}>
      <Component {...pageProps} />
    </div>
  );
}

