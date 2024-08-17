import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/fav/apple-touch-icon.png" />
        <link rel="mask-icon" href="/fav/safari-pinned-tab.svg" color="#fb0266" />
        <link href="/fav/favicon.ico" rel="shortcut icon" type="image/x-icon" />
        <link href="/fav/favicon.ico" rel="icon" type="image/x-icon" />

        <link rel="shortcut icon" href="/fav/favicon.png" type="image/x-icon" />
        <link rel="icon" href="/fav/favicon.png" type="image/x-icon" />

        <link rel="apple-touch-icon" sizes="144x144" href="/fav/apple-touch-icon-144x144.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/fav/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/fav/favicon-16x16.png" />
        <link rel="mask-icon" href="/fav/safari-pinned-tab.svg" color="#fb0266" />

        <link rel="manifest" href="/fav/site.webmanifest" />
        <link rel="mask-icon" href="/fav/safari-pinned-tab.svg" color="#fb0266" />
        <meta name="msapplication-TileColor" content="#fb0266" />
        <meta name="theme-color" content="#fb0266" />
        <meta name="msapplication-config" content="/fav/browserconfig.xml" />

        <link rel="manifest" href="fa/manifest.json" />
        <link rel="apple-touch-icon" href="icons/apple-icon-180.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="white" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="black" />

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
