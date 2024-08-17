import Layout from "@/components/Layout"
import Seo from "@/components/SEO"
import Link from "next/link"

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

const NotFoundPage = () => {
    return (
        <>
            <Seo
                og={og}
                seo={seo}
            />
            <Layout>
                <div className="container page-error">
                    <p>Nothing foud</p>
                    <h1>404</h1>
                    <Link href="/" className={`btn btn-trs`}>Go to home</Link>
                </div>
            </Layout>
        </>
    )
}

export default NotFoundPage
