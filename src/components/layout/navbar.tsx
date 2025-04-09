'use client';

import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const links = [
  { href: '/', label: '_ola' },
  { href: '/about', label: '_sobre-mim' },
  { href: '/projects', label: '_projetos' },
  { href: '/contact', label: '_contato' },
];

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const pathName = usePathname();
  const isActiveLink = (href: string) => {
    if (pathName === href) {
      return 'before:absolute before:bg-[#FFB86A]';
    }
    return '';
  };

  return (
    <nav className='relative flex w-full items-center justify-between border-b md:justify-start'>
      <a href='/' className='min-w-[220px] p-4'>
        roberto-teixeira
      </a>

      <button
        className='block p-4 focus:outline-none md:hidden'
        onClick={() => setIsOpen(!isOpen)}
        aria-label='Toggle menu'
      >
        {isOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
      </button>

      <div
        className={cn(
          isOpen ? 'block' : 'hidden',
          'bg-background absolute top-14 left-0 h-[calc(100dvh-145px)] w-full border border-b-0 md:static md:block md:h-auto md:w-auto md:border-0 md:bg-transparent',
        )}
      >
        <ul className='flex flex-col md:flex-row md:items-center'>
          {links.map((link, index) => (
            <li
              key={index}
              className={cn(
                'relative border-b p-4 md:min-w-[120px]',
                'md:border-r md:border-b-0 md:text-center md:first:border-l',
                'before:bottom-0 before:left-0 before:h-full before:w-1 before:bg-[#FFB86A]/70 before:[content:""] hover:before:absolute md:before:h-1 md:before:w-full',
                isActiveLink(link.href),
              )}
            >
              <a href={link.href} onClick={() => setIsOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
