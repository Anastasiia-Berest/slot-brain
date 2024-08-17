import { useState } from "react"

import qs from 'qs'
import { dehydrate, QueryClient } from '@tanstack/react-query'
import { fetchCasinos, shortPopulateParams } from './api'
import Layout from "@/components/Layout"
import Seo from "@/components/SEO"
import Card from "@/components/Sections/Casino/Card-default"
import Hero from "@/components/Sections/Hero"
import Sidebar from "./sidebar"
import styles from "./styles.module.sass"

import { og, seo, hero } from "./constants"

const CasinosParentPage = ({ casinos }: any) => {
    const [searchValue, setSearchValue] = useState("")

    const filteredCards = casinos.data.filter(
        (el: any) => el.attributes.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    );


    return (
        <>
            <Seo
                og={og}
                seo={seo}
            />

            <Layout>
                <Hero data={hero} setSearchValue={setSearchValue} search="Search by Casino Name" />

                <article className={`container page ${styles.cards_wrap}`}>
                    {/* <Sidebar /> */}
                    <section>

                        <div className={styles.cards}>
                            {filteredCards.map((i: any, ind: number) => (
                                <Card data={i.attributes} key={ind} />
                            ))}
                        </div>

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
                    </section>

                </article>

            </Layout>
        </>
    )
}

export async function getStaticProps() {
    const queryClient = new QueryClient()

    const pgQuery = qs.stringify(
        {
            ...shortPopulateParams,
            pagination: {
                page: 1,
                pageSize: 5,
            },
        },
        {
            encodeValuesOnly: true,
        },
    )
    const casinos: any = await fetchCasinos({ queryKey: ['casinos', pgQuery] })

    return {
        props: {
            dehydratedState: dehydrate(queryClient),
            casinos,
        },
        revalidate: 60 * 1,
    }
}

export default CasinosParentPage
