import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* --- Open Graph / link-preview tags --- */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Instgram Demo" />
        <meta
          property="og:description"
          content="Educational demo — sample login layout."
        />
        <meta
          property="og:url"
          content="https://my-instgram-demo.vercel.app/"
        />
        <meta
          property="og:image"
          content="https://my-instgram-demo.vercel.app/gold-ring.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* optional Twitter support */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content="https://my-instgram-demo.vercel.app/gold-ring.jpg"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}