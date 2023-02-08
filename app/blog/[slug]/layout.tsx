import { getPostBySlug, getSlug } from '@/hooks/PostLib';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';

export default async function Post() {
    const slug = await getSlug();
    const { content, frontmatter } = await getPostBySlug(slug);

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
                        / {frontmatter.date}
                    </p>
                    <p className="ml-auto">
                        {`${frontmatter.readingTime.text}`}
                        {` • ${frontmatter.readingTime.words} word(s)`}
                    </p>
                </div>
                <hr className="mt-2 mb-2 border-gray-200 dark:border-gray-800 border-dashed" />
            </div>
            <div className="prose dark:prose-dark max-w-full">
                {/* @ts-expect-error Server Component */}
                <MDXRemote source={content} />
            </div>
        </section>
    );
}
