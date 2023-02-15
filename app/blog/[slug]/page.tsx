import { getFiles, getPostBySlug } from '@/hooks/PostLib';
import Link from 'next/link';
import Image, { ImageProps } from 'next/image';
import { compileMDX } from 'next-mdx-remote/rsc';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
const day = require('dayjs');

interface Props {
    children?: React.ReactNode;
}

const CustomImage = ({ alt, ...props }: ImageProps) => {
    return (
        <div className="w-full text-center mt-2 mb-4">
            <Image
                {...props}
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto"
                alt={alt}
            />
            <p className="text-sm italic">{alt}</p>
        </div>
    );
};

const MdxComponent = {
    Img: CustomImage,
};

export default async function Post({ params }: { params: { slug: string } }) {
    const { content, frontmatter } = await getPostBySlug(params.slug);
    /* @ts-expect-error Server Component */
    const body = await compileMDX({
        source: content,
        options: {
            mdxOptions: {
                remarkPlugins: [],
                rehypePlugins: [
                    rehypeSlug,
                    [rehypeAutolinkHeadings, { behavior: 'wrap' }],
                ],
            },
        },
        components: MdxComponent,
    });

    return (
        <section
            id="main-content"
            className=" flex flex-col flex-1 h-full w-full max-w-3xl mx-auto pt-4 mb-6 md:pt-11"
        >
            <div className="flex flex-col">
                <h1 className="text-4xl md:text-6xl mt-3 hover:underline">
                    <Link href={`/blog/${frontmatter.slug}`}>
                        {frontmatter.title}
                    </Link>
                </h1>
                <p className="mt-2">{frontmatter.description}</p>
                <div className="flex mt-4 text-sm items-center">
                    <p>
                        <Link href="/about" className="font-semibold">
                            Akha
                        </Link>{' '}
                        / {day(frontmatter.date).format('MMMM DD, YYYY')}
                    </p>
                    <p className="ml-auto">
                        {`${frontmatter.readingTime.text}`}
                        {` • ${frontmatter.readingTime.words} word(s)`}
                    </p>
                </div>
                <hr className="mt-2 mb-2 border-gray-200 dark:border-gray-800 border-dashed" />
            </div>
            <div className="prose dark:prose-dark max-w-full">
                {body.content}
            </div>
        </section>
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
