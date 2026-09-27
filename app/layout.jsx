import "./globals.css";

import { UserProvider } from "@/context/UserContext";
import { FavoritesProvider } from "@/context/FavoritesContext";

import localFont from "next/font/local";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fontSans = localFont({
  src: [
    {
      path: "./fonts/PlusJakartaSans-Variable.woff2",
      style: "normal",
    },
    {
      path: "./fonts/PlusJakartaSans-Italic-Variable.woff2",
      style: "italic",
    },
  ],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  title: "MALHAYATI — PANGNITA",
  description:
    "We help individuals and businesses build modern, simple, and useful digital experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`dark ${fontSans.variable}`}>
      <body className="flex min-h-screen flex-col bg-background text-foreground antialiased">
        <UserProvider>
          <FavoritesProvider>
            <Navbar />

            <main className="flex-1">{children}</main>

            <Footer />
          </FavoritesProvider>
        </UserProvider>
      </body>
    </html>
  );
}
