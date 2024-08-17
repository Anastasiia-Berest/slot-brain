import Layout from "@/components/Layout"
import Seo from "@/components/SEO"

import Builder from "@/components/Builder"
import Sidebar from "@/components/Sections/Sidebar"

import Games from "./Games"
import Hero from "./Hero"
import ArrowIcon from "@/assets/icons/arr-rt.svg"

export default function GamesSinglePage({ game, all_games, all_casinos, all_posts }: any) {
    //console.log(game.attributes);
    const data = game?.attributes;

    const seo = {
        metaTitle: data.title,
        metaDescription: "Slot Brain | Yet another cool game",
        metaImg: data.img?.data?.attributes?.url,
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
                title: "Games",
                slug: "/games/"
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
                <Hero casinos={all_casinos} games={all_games} data={data} breadcrumbs={breadcrumbs} />
                <article className="container page page-article">
                    <article className="page-sidebar">
                        <section className="">
                            <Builder data={data} />
                        </section>
                        <aside>
                            <Sidebar posts={all_posts} casinos={all_casinos} data={data} />
                        </aside>
                    </article>
                    <section>
                        <h2 className="section_header">
                            <span>Similar Games You Might Like</span>
                            <ArrowIcon width="24" />
                        </h2>
                        <Games data={all_games} />
                    </section>
                </article>

            </Layout>
        </>
    )
}

export async function getStaticPaths() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/games`);
    const data = await res.json();
    const paths = data.data.map((game: any) => ({
        params: { slug: game.attributes.slug },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }: any) {
    const { slug } = params;

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/games?filters[slug][$eq]=${slug}&populate=*`
    );

    const games = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/games?populate=*`
    );

    const posts = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/blogs?populate=*`
    );

    const casinos = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/casinos?populate=*`
    );

    if (!res.ok) {
        return {
            notFound: true,
        };
    }

    const data = await res.json();
    const get_posts = await posts.json();
    const get_casinos = await casinos.json();
    const get_games = await games.json();
    const game = data.data[0];
    const all_posts = get_posts.data;
    const all_casinos = get_casinos.data;
    const all_games = get_games.data;

    return {
        props: {
            game,
            all_posts,
            all_casinos,
            all_games
        },
    };
}



