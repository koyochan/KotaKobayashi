import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kota's Portfolio",
  description: "Portfolio website for Kota Kobayashi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // サーバーサイドでテーマ設定 (シンプルに"dark"をデフォルトとする例)
  const isDark = false; // ここを実際のロジックに合わせる (例: Cookieを読むなど)

  return (
    <html lang="en" className={isDark ? "dark" : ""}>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}