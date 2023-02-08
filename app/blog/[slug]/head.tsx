import Seo from '@/components/Seo';
import { getPostBySlug, getSlug } from '@/hooks/PostLib';

export default async function Head() {
    const slug = await getSlug();
    const { frontmatter } = await getPostBySlug(slug);

    return (
        <Seo
            title={frontmatter.title}
            description={frontmatter.description}
            image={frontmatter.image}
        />
    );
}
