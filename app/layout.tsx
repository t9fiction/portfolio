import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "@/theme/themeProvider";
import ErrorBoundary from "@/components/ErrorBoundary";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sohail Ishaque - Portfolio",
  description: "Cloud Engineer, Blockchain Developer, AI Explorer. Building on the Chain, Scaling in the Cloud.",
  keywords: ["blockchain", "cloud", "developer", "portfolio", "web3", "smart contracts"],
  authors: [{ name: "Sohail Ishaque" }],
  openGraph: {
    title: "Sohail Ishaque - Portfolio",
    description: "Cloud Engineer, Blockchain Developer, AI Explorer",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sohail Ishaque - Portfolio",
    description: "Cloud Engineer, Blockchain Developer, AI Explorer",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/profile.svg" sizes="any" />
      </head>
      <body className={`${inter.className} bg-black-100`}>
        <ErrorBoundary>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}