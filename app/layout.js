import { Montserrat } from "next/font/google";
import "./globals.css";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Atere Damilola",
  description: "Portfolio created with Next js and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon" href="./assets/icon.png"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
