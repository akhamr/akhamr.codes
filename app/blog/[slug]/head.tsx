import Seo from '@/components/Seo';
import { getFiles, getPostBySlug } from '@/hooks/PostLib';

export default async function Head({ params }: { params: { slug: string } }) {
    const { frontmatter } = await getPostBySlug(params?.slug);

    return (
        <Seo
            title={frontmatter.title}
            description={frontmatter.description}
            image={frontmatter.image}
        />
    );
}

export async function generateStaticParams() {
    const posts = await getFiles();
    return posts.map((post) => {
        const slug = post.replace(/\.mdx/, '');
        return {
            slug: slug,
        };
    });
}
