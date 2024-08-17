import HeroImg from "@/assets/img/hero/slide1.jpg"

export const hero = {
    title: "Casino",
    descritption: "Description",
    img: HeroImg
}

export const seo = {
    metaTitle: 'Lorem Ipsum',
    metaHeading: 'Lorem Ipsum',
    metaDescription:
        'Lorem Ipsum',
    metaImg: `${process.env.NEXT_PUBLIC_URL}/600x300.jpg`,
    metaURL: `${process.env.NEXT_PUBLIC_HOST}/`,
}

export const og = [
    { property: 'og:type', content: 'article' },
    { property: 'og:title', content: '' },
    { property: 'og:description', content: '' },
    {
        property: 'og:site_name',
        content: '',
    },
    { property: 'og:url', content: '' },
    { property: 'og:image', content: `${process.env.NEXT_PUBLIC_URL}/600x300.jpg` },
    { property: 'og:image:width', content: '600' },
    { property: 'og:image:height', content: '300' },
    { property: 'og:locale', content: 'uk' },
    { property: 'og:section', content: 'Blog' },
    { property: 'og:published_time', content: '2020-07-21T08:17:33+01:00' },
]

export const filter_by_provider = [
    { value: 'provider1', label: 'Provider1' },
    { value: 'provider2', label: 'Provider2' },
    { value: 'provider3', label: 'Provider3' },
    { value: 'provider4', label: 'Provider4' },
    { value: 'provider5', label: 'Provider5' },
]

export const filter_by_type = [
    { value: 'type1', label: 'type1' },
    { value: 'type2', label: 'type2' },
    { value: 'type3', label: 'type3' },
    { value: 'type4', label: 'type4' },
    { value: 'type5', label: 'type5' },
]

export const order = [
    { value: 'asc', label: 'ASC' },
    { value: 'desc', label: 'DESC' },
]

export default () => null;