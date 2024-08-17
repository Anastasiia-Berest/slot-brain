import Layout from "@/components/Layout"
import Seo from "@/components/SEO"
import Builder from "@/components/Builder"

import Hero from "./Hero"
import Sidebar from "@/components/Sections/Sidebar"



export default function CasinosSinglePage({ casino, all_casinos, all_posts }: any) {
    //console.log(casino.attributes);
    const data = casino.attributes;

    const seo = {
        metaTitle: data.title,
        metaDescription: 'Slot Brain | Top Casino',
        metaImg: data.thumbnail?.data?.attributes?.url,
        metaURL: data.slug,
    }

    const og = [
        { property: 'og:type', content: 'article' },
        { property: 'og:title', content: seo.metaTitle },
        { property: 'og:description', content: seo.metaDescription },
        {
            property: 'og:site_name',
            content: 'Slot Brain',
        },
        { property: 'og:url', content: seo.metaURL },
        { property: 'og:image', content: seo.metaImg },
        { property: 'og:image:width', content: '600' },
        { property: 'og:image:height', content: '300' },
        { property: 'og:locale', content: 'en' },
        { property: 'og:section', content: 'Blog' },
        { property: 'og:published_time', content: data.publishedAt },
    ]

    const breadcrumbs = {
        current: {
            title: data.title,
            slug: data.slug,
        },
        parent: [
            {
                title: "Casino",
                slug: "/casinos/"
            }
        ]
    }


    return (
        <>
            <Seo
                og={og}
                seo={seo}
            />

            <Layout>
                <Hero data={data} breadcrumbs={breadcrumbs} />
                <article className="container page page-sidebar">

                    <section className="page-article">
                        <Builder data={data} />
                    </section>
                    <aside>
                        <Sidebar posts={all_posts} casinos={all_casinos} data={data} />
                    </aside>
                </article>
            </Layout>
        </>
    )
}


export async function getStaticPaths() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/casinos`);
    const data = await res.json();
    const paths = data.data.map((casino: any) => ({
        params: { slug: casino.attributes.slug },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }: any) {
    const { slug } = params;

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/casinos?filters[slug][$eq]=${slug}&populate=*`
    );

    const posts = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/blogs?populate=*`
    );

    const casinos = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/casinos?populate=*`
    );

    if (!res.ok || !posts.ok) {
        return {
            notFound: true,
        };
    }

    const data = await res.json();
    const get_posts = await posts.json();
    const get_casinos = await casinos.json();
    const casino = data.data[0];
    const all_posts = get_posts.data;
    const all_casinos = get_casinos.data;
    return {
        props: {
            casino,
            all_posts,
            all_casinos,
        },
    };
}
