import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import LangProvider from "@/components/LangProvider";

const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["latin", "thai"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Supawit Srichompoo — Fullstack Developer",
  description: "Crafting high-performance digital solutions with editorial precision.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        {/* Prevent flash of wrong theme on load */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme');if(t)document.documentElement.className=t;})()`,
          }}
        />
      </head>
      <body className={`${kanit.variable} min-h-full`}>
        <LangProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </LangProvider>
      </body>
    </html>
  );
}
