import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/system";
import HomeNavComponent from "@/components/home/home.nav";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const menus = [
    { id: 1, caption: "Início", route: "/" },
    { id: 2, caption: "Financeiro" },
    { id: 3, caption: "Vendas" },
    { id: 4, caption: "Produção" },
    { id: 5, caption: "Gerencial" },
  ];

  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-light-surface-bright antialiased`}
      >
        <nav>
          <HomeNavComponent menus={menus} />
        </nav>

        <NextUIProvider>{children}</NextUIProvider>
      </body>
    </html>
  );
}
