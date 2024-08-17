import { useState } from "react";
import qs from "qs";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { fetchBlogs, shortBlogsPopulateParams } from "./api";

import Layout from "@/components/Layout";
import Seo from "@/components/SEO";
import Hero from "@/components/Sections/Hero";

import Card from "@/components/Sections/Blog/Card";

import Breadcrumbs from "@/components/Breadcrumbs";
import Pagination from "@/components/Pagination";

import styles from "./styles.module.sass";

import { seo, og, hero } from "./constants";

const BlogParentPage = ({ blogs }: any) => {
    const [searchValue, setSearchValue] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const filteredPosts = blogs.data.filter((el: any) =>
        el.attributes.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    );

    const breadcrumbs = {
        current: {
            title: hero.title,
            slug: "/blog/",
        },
    };

    return (
        <>
            <Seo og={og} seo={seo} />

            <Layout>
                <Hero data={hero} setSearchValue={setSearchValue} search="Search by news title" />

                <article className="container page">
                    <Breadcrumbs data={breadcrumbs} />

                    {/* <section className={styles.blog_section}>
                        <h2>Category Name</h2>
                        <ul>
                            {blogs.data.slice(0, 4).map((i: any, ind: number) => (
                                <li key={ind}><Link href={`/blog/${i.attributes.slug}`}>
                                    {i.attributes.title}
                                </Link></li>
                            ))}
                        </ul>
                    </section> */}

                    <section className={`${styles.blog_section}`}>
                        {/* <h2>Editor Choise</h2> */}

                        <div className={styles.blog_sections_all}>
                            {filteredPosts.slice(0, blogs.data.length).map((i: any, ind: number) => (
                                <Card key={ind} data={i.attributes} slug={`blog/${i.attributes.slug}`} />
                            ))}
                        </div>
                        {/* PAGINATION */}



                    </section>
                </article>
            </Layout>
        </>
    );
};

export async function getStaticProps() {
    const queryClient = new QueryClient();


    const blogsQuery = qs.stringify(
        {
            ...shortBlogsPopulateParams,
            pagination: {
                page: 1,
                pageSize: 5,
            },
        },
        {
            encodeValuesOnly: true,
        }
    );
    const blogs: any = await fetchBlogs({ queryKey: ["blogs", blogsQuery] });

    return {
        props: {
            dehydratedState: dehydrate(queryClient),
            blogs,
        },
        revalidate: 60 * 1,
    };
}

export default BlogParentPage;
