import { useState, useEffect } from "react"

import Card from "./Card-default"
import styles from "./styles.module.sass"

export default function Blog() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const get_blogs = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}/blogs?populate=*`
                );
                const blogs = await get_blogs.json();

                setData(blogs.data);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();

    }, []);


    return (
        <section className={`section`}>
            <div className="container">
                <h2>Blog</h2>
                <p>
                    The most interesting thing about the Slot brain is here
                </p>

                <div className={styles.cards}>

                    {data.slice(0, 3).map((i: any, ind: number) => (
                        <Card key={ind} data={i.attributes} />
                    ))}

                </div>
            </div>
        </section>
    )
}
