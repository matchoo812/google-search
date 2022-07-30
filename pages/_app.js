import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";

// provide session to page props
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
