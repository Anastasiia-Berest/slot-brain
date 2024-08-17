import qs from 'qs';
import Layout from '@/components/Layout';
import Seo from '@/components/SEO';
import { marked } from 'marked';

const seo = {
    metaTitle: 'Lorem Ipsum',
    metaHeading: 'Lorem Ipsum',
    metaDescription: 'Lorem Ipsum',
    metaImg: `${process.env.NEXT_PUBLIC_URL}/600x300.jpg`,
    metaURL: `${process.env.NEXT_PUBLIC_HOST}/`,
};

const og = [
    { property: 'og:type', content: 'article' },
    { property: 'og:title', content: '' },
    { property: 'og:description', content: '' },
    { property: 'og:site_name', content: '' },
    { property: 'og:url', content: '' },
    { property: 'og:image', content: `${process.env.NEXT_PUBLIC_URL}/600x300.jpg` },
    { property: 'og:image:width', content: '600' },
    { property: 'og:image:height', content: '300' },
    { property: 'og:locale', content: 'uk' },
    { property: 'og:section', content: 'Blog' },
    { property: 'og:published_time', content: '2020-07-21T08:17:33+01:00' },
];

// Component to render the policy page
const PolicyPage = ({ data }: any) => {
    const info = data.attributes || {};
    console.log(info)
    return (
        <>
            <Seo og={og} seo={seo} />
            <Layout>
                <article className="container page page-without-breadcrumbs">
                    <h1>{info.title || 'No Title Available'}</h1>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: marked(info.content || 'No content available'),
                        }}
                    />
                </article>
            </Layout>
        </>
    );
};

// Fetch privacy policy data
export async function fetchPrivacy(params = {}) {
    try {
        const query = qs.stringify(params);
        const url = `${process.env.NEXT_PUBLIC_API_URL}/api/privacy-policy?${query}`;
        console.log('Fetching URL:', url);

        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        const json = await res.json();
        console.log('Fetched data:', json);

        // Ensure the correct data structure is returned
        return json?.data || {};  // Return empty object if data is missing
    } catch (error) {
        console.error('Failed to fetch privacy policy:', error);
        return {};  // Return empty object in case of error
    }
}

export async function getStaticProps() {
    const data = await fetchPrivacy({ populate: 'deep' });

    // Log the data to verify
    console.log('Data returned by getStaticProps:', data);

    return {
        props: {
            data,
        },
        revalidate: 60, // Revalidate every 60 seconds
    };
}

export default PolicyPage;
