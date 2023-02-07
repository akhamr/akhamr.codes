import { Menu, Transition } from '@headlessui/react';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

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

export default function MobileMenu() {
    return (
        <Menu as="div" className="h-7 w-7 md:hidden">
            {({ open }) => (
                <>
                    <Menu.Button>
                        {open ? (
                            <XMarkIcon className="h-7 w-7" />
                        ) : (
                            <Bars3BottomRightIcon className="h-7 w-7" />
                        )}
                    </Menu.Button>
                    <Transition
                        enter="ease-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Menu.Items className="absolute right-[7.5%] mt-8 mr-4 w-32 space-y-1 p-2 rounded-md bg-stone-100 dark:bg-stone-800 outline-dashed outline-2 outline-offset-4 outline-gray-200 dark:outline-gray-800">
                            {links.map((link, i) => {
                                return (
                                    <Menu.Item key={i}>
                                        <Link
                                            key={i}
                                            href={link.url}
                                            className="hover:bg-zinc-300 dark:hover:bg-zinc-700 block px-3 py-2 rounded font-semibold transition duration-200 ease-in-out"
                                        >
                                            {link.text}
                                        </Link>
                                    </Menu.Item>
                                );
                            })}
                        </Menu.Items>
                    </Transition>
                </>
            )}
        </Menu>
    );
}
