import Link from "next/link"
import Image from "next/image"

import StarIcon from "@/assets/icons/star.svg"
import styles from "./styles.module.sass"


export default function Card({ data }: any) {
    //console.log(data)
    return (
        <section className={styles.card}>
            <Link className={styles.card_img} href={`bonuses/${data.slug}`}>
                <Image src={data.img.data.attributes.url} width={400} height={200} alt={data.title} />
            </Link>
            <div className={styles.card_content}>
                <div className={styles.card_header}>
                    <span className={styles.card_chip}><StarIcon width="22" height="22" />{data.rating.toFixed(2)}</span>
                    <b>{data.title}</b>
                </div>
                <div className={styles.card_main}>
                    <div className={styles.card_title}>
                        {data.bonuse_type.data.attributes.name}
                    </div>
                    <div className={styles.card_description}>
                        {data.description}
                    </div>
                    <Link href="/">View Bonuse</Link>
                </div>
                <Link className={`btn ${styles.btn}`} href={`bonuses/${data.slug}`} data-text={"Get the Bonuse"}>Get the Bonuse</Link>
                <div className={styles.card_list}>
                    <ul className="list-check">
                        <li>
                            <b>GEO:</b>
                            {data.countries.data.map((i: any, ind: number) => (<span key={ind}>{i.attributes.code}</span>))}
                        </li>
                        <li>
                            <b>Currencies: </b>
                            {data.currencies.data.map((i: any, ind: number) => (<span key={ind}>{i.attributes.code}</span>))}
                        </li>
                        <li>
                            <b>PM: </b>
                            {data.payment_methods.data.map((i: any, ind: number) => (<span key={ind}>{i.attributes.code}</span>))}
                        </li>
                    </ul>
                </div>
                <div className={styles.card_note}>Promo Code: <b>{data.promocode}</b></div>
            </div>
        </section>
    )
}