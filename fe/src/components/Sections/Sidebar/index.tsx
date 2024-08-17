import styles from "./styles.module.sass"

import Link from "next/link"
import Card from "@/components/Sections/Casino/Card-small"
import Share from "../../Share"
import { useRouter } from 'next/router'

export default function Sidebar({ posts, casinos, data }: any) {
    const router = useRouter()

    return (
        <aside className={styles.sidebar}>

            <section>
                <h3> 🎰 TOP 3 casinos </h3>

                {casinos.slice(0, 3).map((i: any, ind: number) => (
                    <Card key={ind} data={i.attributes} />
                ))}

            </section>

            <section>
                <h3> Latest News </h3>

                <div className={styles.block_links}>
                    {posts.slice(0, 10).map((i: any, ind: number) => (
                        <Link href={`/blog/${i.attributes.slug}`} key={ind}>{i.attributes.title}</Link>
                    ))}
                </div>

            </section>

            <section>
                <h3>Share</h3>
                <Share copyUrl={`${process.env.NEXT_PUBLIC_URL}${router.asPath}`} copyTitle={data.title} />
            </section>

        </aside>
    )
}