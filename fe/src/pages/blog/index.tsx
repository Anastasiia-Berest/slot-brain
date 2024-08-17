import { useState, useEffect } from "react";

import Layout from "@/components/Layout";
import Seo from "@/components/SEO";
import Hero from "@/components/Sections/Hero";

import Card from "@/components/Sections/Blog/Card";

import Breadcrumbs from "@/components/Breadcrumbs";
import Pagination from "@/components/Pagination";

import styles from "./styles.module.sass";

import { seo, og, hero } from "./constants";

const BlogParentPage = () => {
    const [searchValue, setSearchValue] = useState("");
    const [pageIndex, setPageIndex] = useState(1);
    const [data, setData] = useState<any[]>([]);
    const [totalPage, setTotalPage] = useState(1);
    const pageItems = 7

    useEffect(() => {
        fetchData();
    }, [pageIndex]);

    const fetchData = async () => {

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs?pagination[page]=${pageIndex}&pagination[pageSize]=${pageItems}&populate=*`)
        const json = await res.json()
        setData(json.data)
        setTotalPage(Math.ceil(json.meta.pagination.total / pageItems))

        return json.data
    };


    const filteredPosts = data && data.filter((el: any) =>
        el.attributes.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));


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
                            {filteredPosts?.map((i: any, ind: number) => (
                                <Card key={ind} data={i.attributes} slug={`blog/${i.attributes.slug}`} />
                            ))}
                        </div>
                        {/* PAGINATION */}

                        <Pagination totalPage={totalPage} pageIndex={pageIndex} setPageIndex={setPageIndex} />

                    </section>
                </article>
            </Layout>
        </>
    );
};



export default BlogParentPage;
