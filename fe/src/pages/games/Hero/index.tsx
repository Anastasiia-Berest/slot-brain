import styles from "./styles.module.sass"
import Image from "next/image"
import Link from "next/link"

import Sidebar from "../Sidebar"
import Breadcrumbs from "@/components/Breadcrumbs"

export default function Header({ data, casinos, games, breadcrumbs }: any) {
    return (
        <section className={styles.hero}>
            <div className="container">
                <Breadcrumbs data={breadcrumbs} />

                <div className={styles.hero_demo}>
                    <div className={styles.hero_content}>
                        <div className={styles.hero_img}>
                            <Image src={data?.img?.data?.attributes?.url} alt={data?.title} height={150} width={300} />
                        </div>

                        <div className={styles.hero_header}>
                            <div>
                                <h1 className={styles.hero_title}>{data?.title}</h1>
                            </div>
                            {data?.game_provider && <div>
                                by {data?.game_provider?.data?.attributes?.name}
                            </div>}
                        </div>

                        <div className={styles.hero_cta}>
                            <Link href={data?.slug || '/'} className={`btn ${styles.hero_btn}`}>Play For Real</Link>
                            <Link href={data?.url || '/'} className={`btn btn-bd ${styles.hero_btn}`}>Play Demo</Link>
                            <p>Problems with demo? <Link href="/">Click Here</Link></p>
                        </div>

                        {data && <div className={styles.hero_footer}>
                            <span>
                                <b>Min Bet</b>
                                {data.min_bet ? data.min_bet : 'n/d'}
                            </span>
                            <span>
                                <b>RTP</b>
                                {data.RTP ? data.RTP : 'n/d'}
                            </span>
                            <span>
                                <b>Reels</b>
                                {data.Reels ? data.Reels : 'n/d'}
                            </span>
                            <span>
                                <b>Paylines</b>
                                {data.Paylines ? data.Paylines : 'n/d'}
                            </span>
                            <span>
                                <b>Max Win</b>
                                {data.max_win ? data.max_win : 'n/d'}
                            </span>
                        </div>}

                    </div>
                    <aside>
                        <Sidebar casinos={casinos} games={games} />
                    </aside>
                </div>

            </div>
        </section>
    )
}