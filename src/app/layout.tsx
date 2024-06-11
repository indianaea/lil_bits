import type { Metadata } from "next";
import "./globals.css";
import "@fontsource/poppins";

export const metadata: Metadata = {
  title: "LilBits",
  description: "NTV lokaverkefni",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="poppins-font">{children}</body>
    </html>
  );
}
