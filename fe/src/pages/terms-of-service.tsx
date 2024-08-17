import qs from 'qs'
import Layout from "@/components/Layout"
import Seo from "@/components/SEO"
import { marked } from 'marked'


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

const TermsPage = ({ data }: any) => {
    const info = data.attributes

    return (
        <>
            <Seo
                og={og}
                seo={seo}
            />

            <Layout>
                <article className="container page page-without-breadcrumbs">
                    <h1>{info.title}</h1>
                    <div dangerouslySetInnerHTML={{
                        __html: marked(info.content || ''),
                    }}
                    />
                </article>
            </Layout>
        </>


    )
}


export async function fetchTerms(params?: any) {
    const query = qs.stringify(params)
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/terms-of-service?${query}`)
    const json = await res.json()
    return json.data
}


export async function getStaticProps() {
    const data = (await fetchTerms({ populate: 'deep' })) || []

    return {
        props: {
            data,
        },
        revalidate: 60 * 1
    }
}

export default TermsPage

