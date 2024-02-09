import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { inter, domine, mulish, poppins } from "@/styles/fonts";
import { store } from "@/app/store";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <div
        className={`${inter.variable} ${domine.variable} ${mulish.variable} ${poppins.variable}`}>
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}

