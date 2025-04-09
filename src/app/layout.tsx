import type { Metadata } from 'next';
import '@/styles/globals.css';
import { Fira_Code } from 'next/font/google';
import { NavBar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';

export const metadata: Metadata = {
  title: 'Portifolio - RobertoDev3',
  description: 'Portifolio - RobertoDev3',
};

const firaCode = Fira_Code({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-BR'>
      <body className={`${firaCode.className} text-foreground bg-[#020618]`}>
        <main className='bg-background m-4 h-[calc(100dvh-32px)] rounded-xl border'>
          <section className='absolute top-4 left-0 z-10 w-full px-4'>
            <NavBar />
          </section>
          <section className='mt-14 h-[calc(100dvh-146px)]'>{children}</section>
          <section className='absolute bottom-4 left-0 z-10 w-full px-4'>
            <Footer />
          </section>
        </main>
      </body>
    </html>
  );
}
