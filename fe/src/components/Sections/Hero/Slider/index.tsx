import styles from "./styles.module.sass"
import Image from "next/image"
import Link from "next/link"
import Search from "@/components/Search"

import slides from "./constants"


export default function Hero({ search = "Search for 5000 games and games providers", setSearchValue }: any) {
    return (
        <section className={`section ${styles.hero}`}>
            {slides.map((i: any, ind: number) => (
                <div className={styles.hero_slide} key={ind}>
                    <Image src={i.img} alt={i.title} className={styles.hero_img} />
                    <div className={styles.hero_content}>
                        <div className={styles.hero_title}>{i.title}</div>
                        <div className={styles.hero_description}><b>{i.sub_title}</b>{i.description}</div>
                        <div className={styles.hero_cta}>
                            {i.btns.map((j: any, ind: number) => (
                                <Link
                                    key={ind}
                                    className={`btn ${j.type === "bd" ? `${styles.hero_btn_bd} btn-bd` : styles.hero_btn}`}
                                    href={j.url}
                                    data-text={j.title}
                                >
                                    {j.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
            {search}
            <Search placeholder={search} setSearchValue={setSearchValue} type="lg" />
        </section>
    )
}