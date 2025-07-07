import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from './components/ThemeProvider';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'John Doe - Full Stack Developer',
  description: 'Portfolio of John Doe - Experienced full stack developer specializing in modern web applications',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourdomain.com',
    title: 'John Doe - Portfolio',
    description: 'Professional portfolio showcasing full stack development projects',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'John Doe Portfolio',
    }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}