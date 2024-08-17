import Casino from "@/components/Sections/Casino/Card-small"
import Game from "@/components/Sections/Games/Card-small"

import styles from "./styles.module.sass"


export default function Sidebar({ casinos, games }: any) {

    return (
        <div className={styles.sidebar}>
            <section>
                <h3>TOP WHERE TO PLAY</h3>

                {casinos?.slice(0, 2).map((i: any, ind: number) => (
                    <Casino key={ind} data={i.attributes} type="dark" />
                ))}
            </section>
            <section>
                <h3>SIMILAR GAMES</h3>

                {games?.slice(0, 2).map((i: any, ind: number) => (
                    <Game key={ind} data={i.attributes} type="dark" />
                ))}
            </section>

        </div>
    )
}