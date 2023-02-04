'use client';

import '@/styles/global.css';
import { doodle, nunito, footer } from '@/styles/fonts';
import { ThemeProvider } from 'next-themes';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/Footer';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className={`${doodle.variable} ${nunito.variable} ${footer.variable}`}
        >
            <head />
            <body>
                <ThemeProvider attribute="class">
                    <Navbar />
                    <div
                        id="main-content"
                        className="flex flex-col flex-1 h-full w-full max-w-[85%] mx-auto pt-4 md:pt-11"
                    >
                        {children}
                    </div>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
