import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import AppLayout from "@/layouts/AppLayout";
import "../styles/main.css";

export default function App({
  Component,
  pageProps: { session, pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </SessionProvider>
  );
}
