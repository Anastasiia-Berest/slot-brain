import { useState, useEffect } from "react"

import Link from "next/link"
import Image from "next/image"
import ReactStars from 'react-stars'

import styles from "./styles.module.sass"
import bonuses from "./constant"

export default function Bonuses() {
    const [data, setData] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const get_bonuses = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}/bonuses?populate=*`
                );
                const bonuses = await get_bonuses.json();

                setData(bonuses.data);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();

    }, []);

    return (
        <section className="section">
            <div className="container">
                <h2>
                    Bonuses
                </h2>
                <p>
                    The best casino in Slot brain
                </p>

                <div className={styles.cards}>
                    {data.slice(0, 3).map((i: any, ind: number) => (
                        <article className={styles.card} key={ind}>
                            <Link className={styles.card_wrap} href={'/bonuses/' + i.attributes.slug}>
                                <Image src={i.attributes.img.data.attributes.url} alt={i.attributes.type} width="150" height="75" />
                            </Link>
                            <div>
                                Bonus type <br /><span>{i.attributes.bonuse_type.data?.attributes.name}</span>
                            </div>
                            <div>
                                Rating
                                <div className={styles.card_rating}>
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        value={i.attributes.rating}
                                        edit={false}
                                        color2={'#EB8425'} />
                                </div>

                            </div>
                            <div>
                                <big>
                                    {i.attributes.description}
                                </big>

                            </div>
                            <div className={styles.card_cta}>
                                <Link className={`btn ${styles.card_btn}`} href={'/bonuses/' + i.attributes.slug} data-text={"Get a bonus"}>
                                    Get a bonus
                                </Link>
                                <Link className={styles.card_btn_link} href={'/bonuses/' + i.attributes.slug}>
                                    Read Sloto zen
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
