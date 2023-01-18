"use client";
// import "./globals.css";
import ChakraWrapper from "./_app";
import theme from "./theme";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <ChakraWrapper theme={theme}>{children}</ChakraWrapper>
      </body>
    </html>
  );
}
