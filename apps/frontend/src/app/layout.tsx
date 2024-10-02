import type { Metadata } from "next";
import { Montserrat } from 'next/font/google';
import "./globals.css";

const font = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Gam3r.store",
  description: "Aplicação desenvolvida durante o evento Formação DEV da Cod3r",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={font.className}
      >
        {children}
      </body>
    </html>
  );
}
