import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
const root = process.cwd();

const articlesPath = path.join(root, 'data/blog');

export async function getPostBySlug(slug: string | string[] | undefined) {
    const articleDir = path.join(articlesPath, `${slug}.mdx`);
    const source = fs.readFileSync(articleDir, 'utf8');
    const { content, data } = matter(source);

    return {
        content,
        frontmatter: {
            slug,
            title: data.title,
            description: data.description,
            date: data.date,
            image: data.image,
            readingTime: readingTime(content),
            ...data,
        },
    };
}

export async function getAllPost() {
    const articles = fs.readdirSync(articlesPath);

    return articles.reduce((allArticles: any[], articleSlug: string) => {
        const source = fs.readFileSync(
            path.join(articlesPath, articleSlug),
            'utf-8'
        );
        const { data, content } = matter(source);

        return [
            {
                ...data,
                slug: articleSlug.replace('.mdx', ''),
                readingTime: readingTime(content),
            },
            ...allArticles,
        ];
    }, []);
}
