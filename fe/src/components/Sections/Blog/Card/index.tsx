import Link from "next/link"
import Image from "next/image"

import IconPubDate from "@/assets/icons/calendar.svg"
import IconClock from "@/assets/icons/clock.svg"
import IconEye from "@/assets/icons/eye.svg"

import styles from "./styles.module.sass"

export default function Card({ data, slug }: any) {
    return (
        <Link className={styles.card} href={`${slug}`}>
            <div className={styles.card_wrap}>
                <Image src={data.img.data.attributes.url} alt={data.title} width={400} height={200} />
                {data.blog_category?.data?.attributes?.name ? <div className={styles.card_chip}>{data.blog_category?.data?.attributes?.name}</div> : null}
            </div>
            <div className={styles.card_content}>

                <div className={styles.card_header}>
                    <span>
                        <IconPubDate width="16" height="16" />{new Date(data.publishedAt).toLocaleString()}
                    </span>
                    <span>
                        <IconClock width="16" height="16" /> {data.read ? data.read : '5 min'}
                    </span>
                </div>
                <div className={styles.card_title}>
                    {data.title}
                </div>


                <div className={styles.card_footer}>
                    <span>
                        <em>by</em>
                        {data.author.data?.attributes.name}
                    </span>
                </div>

            </div>
        </Link>
    )
}