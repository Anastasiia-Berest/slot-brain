import { useState } from "react"
import Link from "next/link"
import Search from "@/components/Search"
import Logo from "@/components/Logo"
import BurgerIcon from "@/assets/icons/menu.svg"
import CloseIcon from "@/assets/icons/close.svg"
import styles from "./styles.module.sass"
import { nav, contacts } from "./constants"

export default function Header() {
    const [show, setShow] = useState(false)
    const toggleMenu = () => {
        setShow(prev => !prev)
    }

    return (
        <header className={styles.header}>
            <div className={styles.header_top}>
                <div className="container">
                    <Logo width={150} height={67} />
                    <div className={styles.header_toggle} onClick={toggleMenu}>
                        {show ? <CloseIcon width={50} /> : <BurgerIcon width={24} />}
                    </div>

                    <div className={`${styles.header_action}`}>
                        {/* <Search type="sm" placeholder="Search" /> */}

                        <div className={styles.header_cta}>
                            <Link href="/login" className="btn btn-text" data-text="Sign in">Sign in</Link><span>&nbsp;</span>
                            <Link href="/register" className={`btn ${styles.header_btn}`} data-text="Register for free">Register for free</Link>
                        </div>
                    </div>

                </div>
            </div>
            <div className={`${styles.header_btm}`}>
                <div className="contaienr">
                    <nav className={styles.header_nav}>
                        {nav.map((i: any, ind: number) => (
                            <Link href={i.url} key={ind}>{i.title}</Link>
                        ))}
                    </nav>
                </div>
            </div>

            <div className={`${styles.header_drawer} ${show ? styles.show : ''}`}>
                <Search type="sm" playceholder="Search" />

                <nav className={styles.header_nav}>
                    {nav.map((i: any, ind: number) => (
                        <Link href={i.url} key={ind}>{i.title}</Link>
                    ))}
                </nav>
                <div className={styles.header_info}>
                    Contact:
                    <div className={styles.header_contacts}>
                        {contacts.map((i: any, ind: number) => (
                            <Link href={i.url} key={ind}>
                                {i.icon}
                                {i.title}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className={styles.header_cta}>
                    <Link href="/" className="btn btn-text" data-text="Sign In">Sign in</Link><span>&nbsp;</span>
                    <Link href="/" className={`btn ${styles.header_btn}`} data-text="Register for free">Register for free</Link>
                </div>
            </div>
        </header>
    )
}