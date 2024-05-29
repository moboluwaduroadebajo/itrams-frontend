import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { inter, domine, mulish, poppins } from "@/styles/fonts";
import { store } from "@/app/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function App({ Component, pageProps }: AppProps) {
  const persistor = persistStore(store);

  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <div
            className={`${inter.variable} ${domine.variable} ${mulish.variable} ${poppins.variable}`}>
            <Component {...pageProps} />
          </div>
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
}

