import Link from 'next/link';
import Image, { ImageProps } from 'next/image';

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

const toValidSlug = (baseString: string): string => {
    return baseString.replace(new RegExp(` `, `g`), `-`).toLowerCase();
};

export function useMDXComponents(components: {
    [component: string]: React.ComponentType;
}) {
    return {
        Img: CustomImage,
        h1: ({ children }: Props) => {
            return (
                <h1
                    id={toValidSlug(children as string)}
                    className="scroll-margin-nav"
                >
                    <Link href={`#${toValidSlug(children as string)}`}>
                        {children}
                    </Link>
                </h1>
            );
        },
        h2: ({ children }: Props) => {
            return (
                <h2
                    id={toValidSlug(children as string)}
                    className="scroll-margin-nav"
                >
                    <Link href={`#${toValidSlug(children as string)}`}>
                        {children}
                    </Link>
                </h2>
            );
        },
        h3: ({ children }: Props) => {
            return (
                <h3
                    id={toValidSlug(children as string)}
                    className="scroll-margin-nav"
                >
                    <Link href={`#${toValidSlug(children as string)}`}>
                        {children}
                    </Link>
                </h3>
            );
        },
        h4: ({ children }: Props) => {
            return (
                <h4
                    id={toValidSlug(children as string)}
                    className="scroll-margin-nav"
                >
                    <Link href={`#${toValidSlug(children as string)}`}>
                        {children}
                    </Link>
                </h4>
            );
        },
        h5: ({ children }: Props) => {
            return (
                <h5
                    id={toValidSlug(children as string)}
                    className="scroll-margin-nav"
                >
                    <Link href={`#${toValidSlug(children as string)}`}>
                        {children}
                    </Link>
                </h5>
            );
        },
        h6: ({ children }: Props) => {
            return (
                <h6
                    id={toValidSlug(children as string)}
                    className="scroll-margin-nav"
                >
                    <Link href={`#${toValidSlug(children as string)}`}>
                        {children}
                    </Link>
                </h6>
            );
        },
        ...components,
    };
}
