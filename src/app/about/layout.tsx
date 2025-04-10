'use client';

import { Accordion } from '@/components/ui/accordion';
import { cn } from '@/lib/utils';
import {
  Brain,
  Briefcase,
  CircleUser,
  GraduationCap,
  Mail,
  Phone,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type List = {
  name: string;
  icon: React.ElementType;
  hrf: string;
};

const list: List[] = [
  {
    name: 'bio',
    icon: CircleUser,
    hrf: '/about/bio',
  },
  {
    name: 'escolaridade',
    icon: GraduationCap,
    hrf: '/about/school',
  },
  {
    name: 'tecnologias',
    icon: Brain,
    hrf: '/about/technologies',
  },
  {
    name: 'experiencias',
    icon: Briefcase,
    hrf: '/about/experiences',
  },
];

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  const isActiveLink = (href: string) => {
    if (pathName === href) {
      return 'text-primary';
    }
    return;
  };

  return (
    <section className='flex h-full flex-col md:flex-row'>
      <Accordion.Root
        type='multiple'
        className='w-[220px]'
        defaultValue={['item-1', 'item-2']}
      >
        <Accordion.Item value='item-1'>
          <Accordion.Trigger>informacoes-pessoais</Accordion.Trigger>
          <Accordion.Content>
            <ul className='space-y-1'>
              {list.map(item => (
                <li
                  key={item.name}
                  className={cn(
                    'hover:text-primary/70 flex items-center gap-2 transition-all',
                    isActiveLink(item.hrf),
                  )}
                >
                  <item.icon size={12} />
                  <Link href={item.hrf}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value='item-2'>
          <Accordion.Trigger>contato</Accordion.Trigger>
          <Accordion.Content>
            <ul className='space-y-1 text-xs'>
              <li className='flex items-center gap-2'>
                <Mail size={12} />
                <p className='flex-1 truncate'>roberto.dev3@hotmail.com</p>
              </li>
              <li className='flex items-center gap-2'>
                <Phone size={12} />
                <p>+55976263180</p>
              </li>
            </ul>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
      <article className='flex flex-1 flex-col border-l'>
        <div className='border-b'>
          <p className='px-4 py-3.5'>
            {list.find(item => item.hrf === pathName)?.name || 'titulo'}
          </p>
        </div>
        <div className='flex h-[calc(100dvh-200px)] flex-1'>
          <div className='personalized-scroll flex-1 overflow-auto p-4'>
            {children}
          </div>
          {/* <div className='before:[content=""] relative h-full w-9 border-l before:absolute before:top-2 before:right-1/2 before:h-1 before:w-6 before:translate-x-1/2 before:bg-[#315358]' /> */}
        </div>
      </article>
    </section>
  );
}
