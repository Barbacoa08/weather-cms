import { ReactNode } from "react";
import { Footer, Header } from "components";

import "./globals.css";

export const metadata = {
  title: "Barbajoe's Weather API",
  description: "Free for all Weather API (within reason)",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
