import Link from "next/link"
import TmIcon from "@/assets/icons/tm.svg"

import styles from "./styles.module.sass"

const Telegram = ({ text, type }: any) => {
    return (
        <Link className={`${styles.subsribe} ${styles[type]}`} href="/">
            <TmIcon width="35" height="35" />
            <p>{text} <span>Join us on Telegram here.</span></p>
        </Link>
    )
}

export default Telegram