
import { useState } from "react"
import styles from "./styles.module.sass"
import ArrIcon from "@/assets/icons/arr-r.svg"

export default function Faq({ data, type }: any) {
    const [open, setOpen] = useState(false)
    return (

        <div className={`${styles.faq_item} ${styles[type]}`} onClick={() => setOpen((prev: any) => !prev)}>
            <div className={styles.faq_header}>
                {data.question}

                <span className="">
                    {open ? (
                        <ArrIcon width="32" aria-hidden="true" />
                    ) : (
                        <ArrIcon width="32" aria-hidden="true" />
                    )}
                </span>

            </div>
            {open ? <div className={styles.faq_body}>
                {data.answer}
            </div> : null}
        </div>

    )
}