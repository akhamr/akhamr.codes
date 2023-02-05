import Link from 'next/link';
import MobileMenu from './MobileMenu';
import ThemeSwitcher from './ThemeSwitcher';

const links = [
    {
        text: 'Blog',
        url: '/blog',
    },
    {
        text: 'Projects',
        url: '/',
    },
    {
        text: 'About',
        url: '/',
    },
];

export default function Navbar() {
    return (
        <nav className="z-50 border-b-2 border-gray-200 dark:border-gray-800 border-dashed w-full sticky top-0 bg-white dark:bg-dark">
            <div className="flex max-w-[85%] mx-auto justify-between items-center py-2">
                <Link
                    href="/"
                    className="font-doodle font-semibold text-center text-xl py-2 px-3 hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded transition duration-200 ease-in-out"
                >
                    Akhamr.codes
                </Link>
                <div className="hidden md:flex mr-[6.75rem]">
                    {links.map((link, i) => {
                        return (
                            <Link
                                key={i}
                                href={link.url}
                                className="font-semibold rounded text-center text-sm py-3 px-5 hover:bg-zinc-300 dark:hover:bg-zinc-700 transition duration-200 ease-in-out"
                            >
                                {link.text}
                            </Link>
                        );
                    })}
                </div>
                <div className="flex space-x-3 px-3">
                    <ThemeSwitcher />
                    <MobileMenu />
                </div>
            </div>
        </nav>
    );
}
