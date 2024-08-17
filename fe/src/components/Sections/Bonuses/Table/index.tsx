import styles from "./styles.module.sass"
import Image from "next/image"
import Link from "next/link"

export default function Card({ data }: any) {
    return (
        <section className={styles.card}>
            <div className={styles.card_logo}>
                <Link href={data.slug} className={styles.card_img}>
                    <Image src={data.img.data.attributes.url} width={400} height={200} alt={data.title} />
                </Link>
                <div className={styles.card_title}>
                    {data.title}
                </div>
            </div>
            <div className={styles.card_description}>
                <small>
                    {data.bonuse_type.data.attributes.name}
                </small>
                {data.description}
            </div>
            <div className={styles.card_cta}>
                <Link href={data.slug} className={`btn ${styles.card_btn}`} >Claim Bonus</Link>
                <Link href="/" className={`btn btn-text ${styles.card_btn_link}`}>Visit site</Link>
            </div>
        </section>
    )
}