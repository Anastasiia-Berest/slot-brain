import Link from "next/link"

import styles from "./styles.module.sass"

export default function Breadcrumbs({ data }: any) {

    return (
        <>
            <ol className={styles.breadcrumbs} itemScope itemType="https://schema.org/BreadcrumbList">
                <li itemProp="itemListElement" itemScope
                    itemType="https://schema.org/ListItem">
                    <Link href='/' itemProp="item">
                        <span itemProp="name">Home</span>
                    </Link>
                    <meta itemProp="position" content="1" />
                </li>
                {data?.parent && data?.parent.map((i: any, ind: any) => (
                    <li key={ind} itemProp="itemListElement" itemScope
                        itemType="https://schema.org/ListItem">
                        <Link href={i.slug || '/'} itemProp="item"><span itemProp="name">{i.title}</span></Link>
                        <meta itemProp="position" content={ind + 2} />
                    </li>
                ))}
                <li itemProp="itemListElement" itemScope
                    itemType="https://schema.org/ListItem">
                    <Link href={data?.current?.slug || '/'} itemProp="item"><span itemProp="name">{data?.current?.title}</span></Link>
                    {data?.parent ? <meta itemProp="position" content={data?.parent.length + 2} /> : <meta itemProp="position" content="2" />}
                </li>
            </ol >
        </>

    )
}