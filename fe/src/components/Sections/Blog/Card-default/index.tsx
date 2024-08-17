import Link from "next/link"
import Image from "next/image"

import IconPubDate from "@/assets/icons/calendar.svg"
import IconClock from "@/assets/icons/clock.svg"
import IconEye from "@/assets/icons/eye.svg"

import styles from "./styles.module.sass"

export default function Card({ data }: any) {
    return (
        <Link className={styles.card} href={"/blog/" + data.slug}>
            <div className={styles.card_wrap}>
                <Image src={data.img.data.attributes.url} alt={data.title} width="600" height="300" />
            </div>
            <div className={styles.card_content}>
                <div className={styles.card_title}>
                    {data.title}
                </div>
                <div className={styles.card_description}>
                    {data.description}
                </div>
                <div className={styles.card_info}>
                    <span>
                        <IconPubDate width="16" height="16" />{new Date(data.publishedAt).toLocaleString().slice(0, 10)}
                    </span>

                    <div>
                        <span>
                            <IconClock width="16" height="16" /> {data.read || '5 min'}
                        </span>
                        {/* <span>
                            <IconEye width="16" height="16" /> {data.views}
                        </span> */}
                    </div>
                </div>

            </div>
        </Link>
    )
}