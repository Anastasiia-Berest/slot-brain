import Link from "next/link"
import Image from "next/image"
import ReactStars from 'react-stars'
import styles from "./styles.module.sass"
import ImgDefault from "@/assets/img/casino/casino_default.jpg"

export default function Card({ data }: any) {
    //console.log(data)
    return (
        <Link href={'casinos/' + data.slug} className={styles.card}>
            <div className={styles.card_wrap}>
                <Image src={data.thumbnail.data?.attributes.url || ImgDefault} alt={data.title} width={400} height={200} />
            </div>
            <div className={styles.card_content}>
                <div className={styles.card_title}>
                    {data.title}
                </div>
                <div className={styles.card_description}>
                    {data.profit}
                </div>
                <div className={styles.card_rating}>
                    <ReactStars
                        count={5}
                        size={24}
                        value={data.rating}
                        edit={false}
                        color2={'#EB8425'} />
                </div>
                <button className={styles.card_btn}>
                    Learn More
                </button>
            </div>
        </Link>
    )
}