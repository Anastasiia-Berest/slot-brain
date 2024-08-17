import styles from "./styles.module.sass"
import Image from "next/image"
import Link from "next/link"
import Search from "@/components/Search"


export default function Hero({ data, search, setSearchValue }: any) {
    return (
        <section className={`section ${styles.hero}`}>
            <div className={styles.hero_slide}>
                <Image src={data.img} alt={data.title} className={styles.hero_img} />
                <div className={styles.hero_content}>
                    <h1 className={styles.hero_title}>{data.title}</h1>
                    <div className={styles.hero_description}><b>{data.sub_title}</b>{data.description}</div>
                    {data?.btns ? <div className={styles.hero_cta}>
                        {data?.btns.map((j: any, ind: number) => (
                            <Link
                                key={ind}
                                className={`btn ${j.type === "bd" ? `${styles.hero_btn_bd} btn-bd` : styles.hero_btn}`}
                                href={j.url}
                                data-text={j.title}
                            >
                                {j.title}
                            </Link>
                        ))}
                    </div> : null}
                </div>
            </div>

            <Search placeholder={search} setSearchValue={setSearchValue} type="lg" />
        </section>
    )
}