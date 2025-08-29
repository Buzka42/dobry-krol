import type { Metadata } from "next";
import { Cinzel, Crimson_Text } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const crimsonText = Crimson_Text({
  variable: "--font-crimson",
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Dobry Król - Ekspert od Sprzedaży Nieruchomości",
  description: "Dobry Król pomoże Ci sprzedać nieruchomość szybko i bezpiecznie. Skorzystaj z naszego wirtualnego asystenta i przekonaj się, jak prosty może być proces sprzedaży.",
  keywords: "sprzedaż nieruchomości, dom, mieszkanie, wirtualny asystent, Dobry Król",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`${cinzel.variable} ${crimsonText.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
