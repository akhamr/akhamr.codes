import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
const root = process.cwd();
const sync = require('glob').sync;

const articlesPath = path.join(root, 'data/blog');

export async function getSlug() {
    const paths = sync(`${articlesPath}/*.mdx`);

    return paths.map((path: string) => {
        const pathContent = path.split('/');
        const fileName = pathContent[pathContent.length - 1];
        const [slug, _extension] = fileName.split('.');

        return slug;
    });
}

export async function getPostBySlug(slug: string | string[] | undefined) {
    const articleDir = path.join(articlesPath, `${slug}.mdx`);
    const source = fs.readFileSync(articleDir);
    const { content, data } = matter(source);

    return {
        content,
        frontmatter: {
            slug,
            title: data.title,
            description: data.description,
            date: data.date,
            image: data.image,
            readTime: readingTime(content),
            ...data,
        },
    };
}

export async function getAllPost() {
    const articles = fs.readdirSync(articlesPath);

    return articles.reduce((allArticles: any[], articleSlug: string) => {
        const source = fs.readFileSync(
            path.join(root, 'data/blog', articleSlug),
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