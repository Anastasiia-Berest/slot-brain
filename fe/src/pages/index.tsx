import { useState } from "react"

import Layout from "@/components/Layout"

import Hero from "@/components/Sections/Hero/Slider"
import Casino from "@/components/Sections/Casino"
import Bonuses from "@/components/Sections/Bonuses"
import Games from "@/components/Sections/Games"
import Blog from "@/components/Sections/Blog"
import Subscribe from "@/components/Sections/Subscribe"
import Faq from "@/components/Sections/Faq"
import Seo from "@/components/SEO"


const seo = {
  metaTitle: 'Lorem Ipsum',
  metaHeading: 'Lorem Ipsum',
  metaDescription:
    'Lorem Ipsum',
  metaImg: `${process.env.NEXT_PUBLIC_URL}/600x300.jpg`,
  metaURL: `${process.env.NEXT_PUBLIC_HOST}/`,
}

const og = [
  { property: 'og:type', content: 'article' },
  { property: 'og:title', content: '' },
  { property: 'og:description', content: '' },
  {
    property: 'og:site_name',
    content: '',
  },
  { property: 'og:url', content: '' },
  { property: 'og:image', content: `${process.env.NEXT_PUBLIC_URL}/600x300.jpg` },
  { property: 'og:image:width', content: '600' },
  { property: 'og:image:height', content: '300' },
  { property: 'og:locale', content: 'uk' },
  { property: 'og:section', content: 'Blog' },
  { property: 'og:published_time', content: '2020-07-21T08:17:33+01:00' },
]

export default function Home() {
  const [searchValue, setSearchValue] = useState("")

  return (
    <>
      <Seo
        og={og}
        seo={seo}
      />
      <Layout>
        <article className="">
          <Hero setSearchValue={setSearchValue} search="Search by 1000+ casinos" />
          <Casino searchValue={searchValue} />
          <Bonuses />
          <Games />
          <Blog />
          <Faq />
          <Subscribe />
        </article>
      </Layout>
    </>
  )
}