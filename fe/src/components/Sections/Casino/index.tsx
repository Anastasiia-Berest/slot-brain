import { useState, useEffect } from "react"

import styles from "./styles.module.sass"
import Card from "./Card-default"

export default function Casino({ searchValue }: any) {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const get_casinos = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}/casinos?populate=*`
                );
                const casinos = await get_casinos.json();


                setData(casinos.data);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();

    }, []);

    const filteredPosts = data.filter(
        (el: any) =>
            el.attributes.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    );


    return (
        <section className="section">
            <div className="container">
                <h2>
                    Casino Reviews
                </h2>
                <p>
                    Top Paying Casinos. They’re just like the real machines.
                </p>

                <div className={styles.cards}>
                    {filteredPosts.slice(0, 4).map((i: any, ind: number) => (
                        <Card data={i.attributes} key={ind} />
                    ))}
                </div>

            </div>
        </section>
    )
}