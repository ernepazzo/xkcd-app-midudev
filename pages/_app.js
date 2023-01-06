import { NextUIProvider } from "@nextui-org/react";
import "../public/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
