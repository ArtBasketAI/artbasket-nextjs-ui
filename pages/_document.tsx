// pages/_document.tsx
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Character set meta tag */}
          <meta charSet="utf-8" />

          {/* Favicon */}
          <link rel="icon" href="/favicon/favicon.ico" />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/favicon/android-chrome-192x192.png"
          />
          <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta
            name="msapplication-TileImage"
            content="/favicon/mstile-150x150.png"
          />
          <meta
            name="msapplication-config"
            content="/favicon/browserconfig.xml"
          />
          <link
            rel="mask-icon"
            href="/favicon/safari-pinned-tab.svg"
            color="#5bbad5"
          />
          <link rel="manifest" href="/favicon/site.webmanifest" />

          {/* SEO: Open Graph */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content="ArtbasketAI" />
          <meta
            property="og:description"
            content="ArtBasketAI is a platform designed to empower content creators by
        providing advanced AI tools in an easy-to-use interface. Our goal is to
        make the production of content like text, comics, and videos faster and
        less tedious."
          />
          <meta property="og:image" content="URL_to_your_site_image" />
          <meta property="og:url" content="URL_to_your_site" />
          <meta name="twitter:card" content="summary_large_image" />

          {/* SEO: Description */}
          <meta
            name="description"
            content="ArtBasketAI is a platform designed to empower content creators by
        providing advanced AI tools in an easy-to-use interface. Our goal is to
        make the production of content like text, comics, and videos faster and
        less tedious."
          />

          {/* SEO: Robots */}
          <meta name="robots" content="index, follow" />

          {/* SEO: Google Verification (if you have one) */}
          {/* <meta name="google-site-verification" content="your_google_verification_code" /> */}

          {/* CSS files for global styles */}
          {/* <link rel="stylesheet" href="/path_to_your_global_styles.css" /> */}

          {/* Any additional fonts you want to use */}
          {/* <link href="https://fonts.googleapis.com/css2?family=Your+Font+Family" rel="stylesheet" /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
