import Head from 'next/head'

interface Props {
    og: { property: string; content: string }[]
    seo: any
}

const Seo = ({ og, seo }: Props) => {
    return (
        <Head>
            <title key="title">{seo?.metaTitle}</title>
            <meta
                name="description"
                content={seo?.metaDescription}
                key="description"
            />
            <meta
                itemProp="name"
                content={seo?.metaTitle}
                key="itemPropname"
            />
            <meta
                itemProp="description"
                content={seo?.metaDescription}
                key="itemPropdescription"
            />
            <meta
                itemProp="image"
                content={seo?.metaImg}
                key="itemPropimage"
            />

            <meta
                name="twitter:card"
                content="summary"
            />
            <meta
                name="twitter:site"
                content={seo?.metaURL}
                key="twitter:site"
            />
            <meta
                name="twitter:title"
                content={seo?.metaHeading}
                key="twitter:title"
            />
            <meta
                name="twitter:description"
                content={seo?.metaDescription}
                key="twitter:description"
            />
            <meta
                name="twitter:creator"
                content="MixFin"
                key="twitter:creator"
            />
            <meta
                name="twitter:image"
                content={seo?.metaImg}
                key="twitter:image"
            />

            {og && og.map(({ property, content }, i) => (
                <meta
                    property={property}
                    content={content}
                    key={i}
                />
            ))}
        </Head>
    )
}

export default Seo
