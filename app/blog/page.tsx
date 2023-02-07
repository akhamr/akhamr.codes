import { getAllPost } from '@/hooks/PostLib';
import Image from 'next/image';
import Link from 'next/link';
const day = require('dayjs');

export default async function Blog() {
    const posts = await getAllPost();
    const filteredBlogPosts = posts.sort(
        (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
    );
    return (
        <>
            <h1 className="mt-4 md:mt-6 text-4xl md:text-6xl">Blog</h1>
            <p className="mt-2">
                Some blabber and stuff i didn&apos;t mean to made.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
                {filteredBlogPosts.map((frontMatter, i) => {
                    return (
                        <Link
                            key={i}
                            className="rounded"
                            href={`/blog/${frontMatter.slug}`}
                        >
                            <div className="group h-full rounded-md border-2 border-gray-200 dark:border-gray-800 border-dashed transition duration-200 ease-in-out hover:bg-zinc-300 dark:hover:bg-zinc-700">
                                <div className="flex border-b dark:border-dark rounded-t group-hover:opacity-90">
                                    <Image
                                        src={frontMatter.image}
                                        alt={frontMatter.title}
                                        className="rounded-t"
                                        width="512"
                                        height="267"
                                    />
                                </div>
                                <div className="p-2 rounded-b text-sm md:text-base">
                                    <h4>{frontMatter.title}</h4>
                                    <div className="text-xs md:text-sm mb-2 text-gray-700 dark:text-gray-300">
                                        {day(frontMatter.date).format(
                                            'MMMM DD, YYYY'
                                        )}
                                        {` • ${frontMatter.readingTime.text}`}
                                        {` • ${frontMatter.readingTime.words} word(s)`}
                                    </div>
                                    <p>{frontMatter.description}</p>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </>
    );
}
