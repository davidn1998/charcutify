import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head />
      <body className="bg-neutral-900 text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
