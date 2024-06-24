import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Atere Damilola",
  description: "Portfolio created with Next js and Tailwind CSS",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href='/logo.png' />
      </head>
      <body className={inter.className}>
        <Header/>
        {children}
        </body>
    </html>
  );
}
