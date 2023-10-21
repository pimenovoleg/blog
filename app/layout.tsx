import '../styles/globals.css';

import { Inter, JetBrains_Mono as JetBrainsMono } from 'next/font/google';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { themeEffect } from '@/app/theme-effect';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

const jetbrainsMono = JetBrainsMono({
    subsets: ['latin'],
    variable: '--font-mono'
});

export const metadata = {
    title: '',
    description: '',
    themeColor: 'transparent'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html
            lang="en"
            className={`${inter.className} ${jetbrainsMono.className} antialiased`}
            suppressHydrationWarning={true}
        >
            <head>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `(${themeEffect.toString()})();`
                    }}
                />
            </head>
            <body className="dark:text-gray-100 max-w-2xl m-auto">
                <main className="p-6 pt-3 md:pt-6 min-h-screen">
                    <Header />
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
