import { useState, useEffect } from "react"

import Image from "next/image"
import FaqBanner from "@/assets/img/faq.jpg"
import ArrIcon from "@/assets/icons/arr-r.svg"

import styles from "./styles.module.sass"


import { Disclosure } from '@headlessui/react'
import Faq from "@/components/Faq"


export default function FaqBlock() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const get_faq = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}/faq?populate=*`
                );
                const faq = await get_faq.json();

                setData(faq.data.attributes.faq);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();

    }, []);


    const faq = data.slice(0, 10).map((item: any) => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer
        }
    }));

    const schema = {
        "@context": "http://schema.org/",
        "@type": "FAQPage",
        "mainEntity": faq
    }
    return (
        <>
            <section className={`section`}>
                <div className="container">
                    <h2>
                        Questions and answers
                    </h2>

                    <div className={styles.faq_row}>
                        <div className="col">


                            <dl className={styles.faq}>
                                {data.slice(0, 7).map((faq: any, ind: number) => (
                                    <Faq data={faq} key={ind} type="lg" />
                                ))}
                            </dl>


                        </div>
                        <div className="col">
                            <Image src={FaqBanner} alt="Faq" width="636" height="563" quality={80} className={styles.faq_banner} />
                        </div>
                    </div>

                    <div className={styles.faq_cta}>
                        <a href="#" className="btn" role="button" data-text="More details">More details</a>
                    </div>

                </div>
            </section>
            {/* <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(schema),
                }}
            ></script> */}
        </>
    )
}