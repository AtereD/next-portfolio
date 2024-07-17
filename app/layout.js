// import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

// const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Atere Damilola",
  description: "Portfolio created with Next js and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./assets/icon.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Aldrich&family=Orbitron:wght@400;500;600;700;800;900&family=Rajdhani:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
