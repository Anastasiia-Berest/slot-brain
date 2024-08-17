import Layout from "@/components/Layout"
import Seo from "@/components/SEO"
import { marked } from 'marked'
import Image from "next/image"
import Link from "next/link"

import ClockIcon from "@/assets/icons/clock.svg"
import BackIcon from "@/assets/icons/share.svg"
import ArrowIcon from "@/assets/icons/arr-rt.svg"

import Sidebar from "../../components/Sections/Sidebar"
import Author from "@/components/Authors"
import Posts from "./Posts"

import Breadcrumbs from "@/components/Breadcrumbs"

import styles from "./styles.module.sass"



export default function BlogSinglePage({ current_post, all_posts, all_casinos }: any) {
    const seo = {
        metaTitle: current_post.attributes.title,
        metaDescription: current_post.attributes.content.slice(0, 200),
        metaImg: current_post.attributes.img?.data?.attributes?.url,
        metaURL: current_post.attributes.slug,
    }

    const og = [
        { property: 'og:type', content: 'article' },
        { property: 'og:title', content: seo.metaTitle },
        { property: 'og:description', content: "Slot Brain | Latest News" },
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
        { property: 'og:published_time', content: current_post.attributes.publishedAt },
    ]

    const breadcrumbs = {
        current: {
            title: current_post.attributes.title,
            slug: current_post.attributes.slug,
        },
        parent: [
            {
                title: "News",
                slug: "/blog/"
            }
        ]
    }


    return (
        <>
            <Seo og={og} seo={seo} />
            <Layout>
                <article className="container page page-single">
                    <Breadcrumbs data={breadcrumbs} />


                    {current_post.attributes.img?.data?.attributes?.url ? <div className={styles.post_img}>
                        <Image src={current_post.attributes.img?.data?.attributes?.url} alt={current_post.attributes.title} height={400} width={800} />
                        <div className={styles.post_info}>
                            <div className={styles.post_info_header}>
                                {current_post.attributes.blog_category?.data?.attributes?.name ? <span className={styles.post_cat}>{current_post.attributes.blog_category?.data?.attributes?.name}</span> : null}

                                <span>{new Date(current_post.attributes.publishedAt).toLocaleString()}</span>
                            </div>
                            <h1 className={styles.post_title}>{current_post.attributes.title}</h1>
                            <div className={styles.post_info_footer}>
                                <div>
                                    {current_post.attributes?.author ?
                                        <span><em>by</em> {current_post.attributes.author
                                            .data.attributes.name}</span>
                                        : null}
                                    <span>
                                        <ClockIcon width="16" height="16" />
                                        {current_post.attributes.read ? current_post.attributes.read : '5 min'}
                                    </span>
                                </div>
                                <Link href="/blog">
                                    <BackIcon />
                                </Link>
                            </div>
                        </div>
                    </div> : null}

                    <article className="page-sidebar">
                        <section>
                            <div dangerouslySetInnerHTML={{
                                __html: marked(current_post.attributes.content || ''),
                            }} className={styles.post_content}
                            />
                            {current_post.attributes?.author ? <Author data={current_post.attributes.author} /> : null}
                        </section>
                        <aside>
                            <Sidebar posts={all_posts} casinos={all_casinos} data={current_post.attributes} />
                        </aside>
                    </article>

                    <article>
                        <h2 className="section_header">
                            <span>More Posts</span>
                            <ArrowIcon width="24" />
                        </h2>

                        <Posts data={all_posts} />
                    </article>
                </article>

            </Layout>
        </>
    );
}

export async function getStaticPaths() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs`);
    const data = await res.json();
    const paths = data.data.map((post: any) => ({
        params: { slug: post.attributes.slug },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }: any) {
    const { slug } = params;

    const post = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/blogs?filters[slug][$eq]=${slug}&populate=*`
    );

    const posts = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/blogs?populate=*`
    );

    const casinos = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/casinos?populate=*`
    );


    if (!post.ok || !posts.ok) {
        return {
            notFound: true,
        };
    }

    const get_post = await post.json();
    const get_posts = await posts.json();
    const get_casinos = await casinos.json();
    const current_post = get_post.data[0];
    const all_posts = get_posts.data;
    const all_casinos = get_casinos.data;

    return {
        props: {
            current_post,
            all_posts,
            all_casinos
        },
    };
}