import { AnimationProvider } from './components/AnimationController';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <AnimationProvider>
        <body className={inter.className}>{children}</body>
      </AnimationProvider>
    </html>
  );
}