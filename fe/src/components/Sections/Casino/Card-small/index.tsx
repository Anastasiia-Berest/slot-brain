import styles from "./styles.module.sass"
import Link from "next/link"
import Image from "next/image"

import ImgDefault from "@/assets/img/casino/casino_default.jpg"
import StarIcon from "@/assets/icons/star.svg"

export default function Card({ data, type = "light" }: any) {
    return (
        <section className={`${styles.card} ${styles[type]}`}>
            <Link className={styles.card_img} href={`/casinos/${data.slug}`}>
                <Image src={data.thumbnail_test ? data.thumbnail_test : data?.thumbnail?.data?.attributes?.url || ImgDefault} alt={data?.title} width={400} height={200} />
            </Link>
            <div className={styles.card_content}>
                <div className={styles.card_title}>
                    <Link href={`/casinos/${data.slug}`}><b>{data.title}</b></Link>
                    <span className={styles.card_rating}>
                        <StarIcon width="18" height="18" /> {data.rating.toFixed(1)}
                    </span>
                </div>

                <div className={styles.card_cta}>
                    <Link href={`/casinos/${data.slug}`} className={`btn ${styles.card_btn}`}>View</Link>
                    <Link href={data.url} className={`btn btn-text ${styles.card_btn_text}`}>Visit Casino</Link>
                </div>
            </div>
        </section>
    )
}