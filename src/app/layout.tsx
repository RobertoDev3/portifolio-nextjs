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
      <body
        className={`${firaCode.className} text-foreground bg-[#020618] p-4`}
      >
        <main className='bg-background relative mx-auto h-[calc(100dvh-32px)] max-w-[1920px] rounded-[8px] border'>
          <section className='absolute top-0 left-0 z-10 w-full'>
            <NavBar />
          </section>
          <section className='mt-14 h-[calc(100dvh-146px)]'>{children}</section>
          <section className='absolute bottom-0 left-0 z-10 w-full'>
            <Footer />
          </section>
        </main>
      </body>
    </html>
  );
}
