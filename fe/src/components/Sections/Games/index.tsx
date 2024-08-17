import { useState, useEffect } from "react"

import Card from "./Card-default"
import styles from "./styles.module.sass"


export default function Games() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const get_games = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}/games?populate=*`
                );
                const games = await get_games.json();

                setData(games.data);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();

    }, []);

    return (
        <section className="section">
            <div className="container">
                <h2>Games</h2>
                <p>We have the most free slots on the internet. Play thousands of games for free.</p>

                <div className={styles.cards}>
                    {data.slice(0, 10).map((i: any, ind: number) => (
                        <Card data={i.attributes} key={ind} />
                    ))}
                </div>

            </div>
        </section>
    )
}