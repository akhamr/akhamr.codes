'use client';

import '@/styles/global.css';
import { doodle, sans, footer } from '@/styles/fonts';
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
            className={`${doodle.variable} ${sans.variable} ${footer.variable}`}
        >
            <head />
            <body className="flex flex-col justify-between h-screen">
                <ThemeProvider attribute="class" enableColorScheme={false}>
                    <Navbar />
                    <div id="main-content" className="max-w-[85%] mx-auto">
                        {children}
                    </div>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
