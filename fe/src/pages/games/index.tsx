import { useState, useEffect } from "react";

import Layout from "@/components/Layout"
import Hero from "@/components/Sections/Hero"
import Seo from "@/components/SEO"
import Card from "@/components/Sections/Games/Card-default"
import Select from 'react-select'

import { og, seo, hero, filter_by_provider, filter_by_type, order } from "./constant"
import styles from "./styles.module.sass"

import Pagination from "@/components/Pagination";

const GamesParentPage = () => {
    const [searchValue, setSearchValue] = useState("")
    const [pageIndex, setPageIndex] = useState(1);
    const [data, setData] = useState<any[]>([]);
    const [totalPage, setTotalPage] = useState(1);
    const pageItems = 8

    useEffect(() => {
        fetchData();
    }, [pageIndex]);

    const fetchData = async () => {

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/games?pagination[page]=${pageIndex}&pagination[pageSize]=${pageItems}&populate=*`)
        const json = await res.json()
        setData(json.data)
        setTotalPage(Math.ceil(json.meta.pagination.total / pageItems))

        return json.data
    };

    const filteredCards = data.filter(
        (el: any) => el.attributes.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    );

    return (
        <>
            <Seo
                og={og}
                seo={seo}
            />

            <Layout>
                <Hero data={hero} setSearchValue={setSearchValue} search="Search by Game Name" />
                {/* <section className="container">
                    <div className="filters">
                        <div>
                            <span>Order By:</span>
                            <Select options={order} />

                        </div>
                        <div>
                            <span>Provider:</span>
                            <Select options={filter_by_provider} />

                        </div>
                        <div>
                            <span>Type:</span>
                            <Select options={filter_by_type} />
                        </div>
                    </div>
                </section> */}
                <article className={`container page ${styles.cards_wrap}`}>
                    <div className={styles.cards}>
                        {filteredCards.map((i: any, ind: number) => (
                            <Card data={i.attributes} key={ind} slug={`/games/${i.attributes.slug}`} />
                        ))}
                    </div>
                    {/* PAGINATION */}

                    <Pagination totalPage={totalPage} pageIndex={pageIndex} setPageIndex={setPageIndex} />

                    <section className={styles.cards_content}>
                        <p>
                            Red Ventures (includes “us,” “we,” or “our”) is a portfolio of brands and digital platforms (such as mobile and/or TV applications) that connect people with information to help make some of life’s most important decisions. Some examples of Red Ventures’ brands are Allconnect, Bankrate, CNET, MyMove, Online MBA, and The Points Guy. For the purposes of this Privacy Policy, the websites, apps, and products provided by Red Ventures will be referred to as the “Services.” Certain Red Ventures Services have different privacy policies (such as our Healthline Media Sites and Services in Brazil), you should check each Service for its specific policy before use.
                        </p>
                        <p>
                            This Privacy Policy describes the type of personal information that we may collect for our own purposes; how we use, protect, and share that information; and the choices that you have. By using the Services, you acknowledge the information collection practices and purposes outlined in this Privacy Policy. Any capitalized terms used, but not defined, in this Privacy Policy have the meanings provided in the Terms of Use of the applicable Services.
                        </p>
                        <p>
                            In some circumstances, a Red Ventures company may receive or process Personal Information on behalf of a client. In those situations, the privacy policy of the client will apply.
                        </p>
                    </section>
                </article>


            </Layout>
        </>
    )
}

export default GamesParentPage
