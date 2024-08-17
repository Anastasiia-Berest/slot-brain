import styles from "./styles.module.sass"
import Link from "next/link"
import Image from "next/image"


export default function Card({ data, type = "light", }: any) {
    //console.log(data)
    return (
        <section className={`${styles.card} ${styles[type]}`}>
            <Link className={styles.card_img} href={`/games/${data.slug}`}>
                <Image src={data?.img?.data?.attributes?.url} alt={data?.title} width={400} height={200} />
            </Link>
            <div className={styles.card_content}>
                <div className={styles.card_title}>
                    <Link href={`/games/${data.slug}`}><b>{data.title}</b></Link>
                    <span className={styles.card_rating}>
                        {data.game_type.data.attributes.name}
                    </span>
                </div>

                <div className={styles.card_cta}>
                    <Link href={`/games/${data.slug}`} className={`btn ${styles.card_btn}`}>View</Link>
                    <Link href={data.url} className={`btn btn-text ${styles.card_btn_text}`}>Visit Casino</Link>
                </div>
            </div>
        </section>
    )
}