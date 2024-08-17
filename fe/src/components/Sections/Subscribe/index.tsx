import Link from "next/link"
import Image from "next/image"
import Telegram from "@/components/Telegram"

import Form from "./Form"
import SubscribeImg from "@/assets/img/subscribe.jpg"

import styles from "./styles.module.sass"

const Subscribe = () => {
    return (
        <section className={styles.subscribe}>
            <div className="container">
                <Image src={SubscribeImg} alt="" />
                <div className={styles.subscribe_container}>
                    <h2>Awesome bonuses, new casinos and more!</h2>
                    <p className={styles.subscribe_text}>Subscribe to our newsletter to take advantage of our fantastic offer.The latest casinos and compilations of news and guides related to gambling!</p>
                    <Form />
                    <p className={styles.subscribe_note}>
                        By registering, you confirm that you have read and accepted <b>Chipy.com</b> <Link href="/terms-of-service">Terms and Conditions</Link> and <Link href="/privacy-policy">Privacy Policy</Link>
                    </p>
                    <Telegram text="Join our Telegram channel where we publish exclusive bonus codes and hot news! " />
                </div>
            </div>
        </section>
    )
}

export default Subscribe