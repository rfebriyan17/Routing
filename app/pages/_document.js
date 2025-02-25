import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <style>{`
          * { margin: 0; padding: 0; box-sizing: border-box; scroll-behavior: smooth; }
          body { font-family: 'Poppins', sans-serif; background-color: #0A192F; color: #ccd6f6; text-align: center; padding-top: 80px; }
        `}</style>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
