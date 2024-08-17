import Link from "next/link"
import Image from "next/image"
import styles from "./styles.module.sass"

export default function Card({ data }: any) {
    return (
        <Link className={styles.card} href={'/games/' + data.slug}>
            <div className={styles.card_wrap}>
                <Image src={data?.img?.data?.attributes?.url} alt={data?.title} width={400} height={200} />
            </div>
            <div className={styles.card_content}>
                <div className={styles.card_title}>
                    {data?.title}
                </div>
                <button className={styles.card_btn}>
                    Play for free
                </button>
            </div>
        </Link>
    )
}