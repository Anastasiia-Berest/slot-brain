
import '@/styles/globals.css'
import '@/styles/sass/main.sass'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'


import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })


export default function App({ Component, pageProps }: AppProps) {

  const router = useRouter()
  const canonicalUrl = (
    (router.asPath === '/' ? '' : router.asPath)
  ).split('?')[0]

  return (
    <>

      <Head>
        <link
          rel="canonical"
          href={canonicalUrl}
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href={canonicalUrl}
        />
        <link
          rel="alternate"
          hrefLang="uk-UA"
          href={canonicalUrl}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        ></script>

      </Head>
      <Component {...pageProps} className={`${inter.className}`} />
    </>
  )
}

const schema = {
  '@context': 'http://schema.org/',
  '@type': 'Organization',
  name: 'SlotBrain',
  brand: 'SlotBrain',
  alternateName: 'SlotBrain',
  url: process.env.NEXT_PUBLIC_HOST,
  logo: `${process.env.NEXT_PUBLIC_HOST}/logo.svg`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'SOHO The Strand, Fawwara Building, Triq L-Imsida',
    addressLocality: 'Gzira',
    postalCode: 'GZR 1362',
    addressCountry: 'Malta',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '380630633226',
      email: 'slot.brain@gmail.com',
      contactType: 'customer support',
      areaServed: 'US',
      availableLanguage: ['English'],
    },
  ],
  sameAs: [
    'https://www.facebook.com/slot-brain',
    'https://twitter.com/slot-brain',
    'https://www.linkedin.com/company/slot-brain',
    'https://www.instagram.com/slot-brain',
  ],
}
