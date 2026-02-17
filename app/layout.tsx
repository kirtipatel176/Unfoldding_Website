import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
    title: 'UNFOLDDING - Brand & Design Consultancy',
    description: 'An independent brand and design consultancy turning complexity into clarity — crafting brands that think deeply, feel human, and unfoldding with purpose.',
    keywords: ['brand strategy', 'design consultancy', 'creative agency', 'brand identity', 'design services'],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Cinzel:wght@400;700&family=Lato:wght@300;400;700&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body className="min-h-screen w-full flex flex-col font-sans antialiased">
                <Navbar />
                <main className="flex-1">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
