import Link from "next/link"
import Image from "next/image"
import LogoImg from "@/assets/img/logo.png"

import styles from "./styles.module.sass"

export default function Logo({ width = 224, height = 103 }: any) {
    return (
        <Link href="/" className={styles.logo}>
            <Image src={LogoImg} width={width} height={height} alt="Slot Brain" />
        </Link>
    )
}