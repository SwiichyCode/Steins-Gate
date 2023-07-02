import { GlobalStyle } from "@/styles/GlobalStyle";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
}
