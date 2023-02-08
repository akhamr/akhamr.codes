// next-seo.config.ts
import config from '@/site.config';
import { NextSeoProps, NextSeo } from 'next-seo';

interface HeadProps {
    title?: string;
    description?: string;
    image?: string;
}

export default function Seo({ title, description, image }: HeadProps) {
    const DefaultSeo: NextSeoProps = {
        defaultTitle: "It's me, akha!",
        titleTemplate: '%s · Akhamr.codes',
        description: `${description || config.description}`,
        openGraph: {
            type: 'website',
            images: [
                {
                    url: `${image || config.baseUrl}/og-default.png}`,
                },
            ],
        },
    };

    return <NextSeo title={title} {...DefaultSeo} useAppDir={true} />;
}
