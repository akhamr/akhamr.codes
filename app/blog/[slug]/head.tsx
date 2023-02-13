import Seo from '@/components/Seo';
import { getPostBySlug } from '@/hooks/PostLib';

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
