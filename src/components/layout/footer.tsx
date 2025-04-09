import { IconGit } from '@/assets/svg/icon-git';
import { IconLikedin } from '@/assets/svg/icon-linkedin';

const links = [
  {
    href: 'https://www.linkedin.com/in/robertotda/',
    icon: IconLikedin,
  },
  {
    href: 'https://github.com/RobertoDev3',
    icon: IconGit,
  },
];

export function Footer() {
  return (
    <footer className='flex items-center justify-between border-t'>
      <p className='px-6'>Me encontre:</p>
      <div className='flex'>
        {links.map(({ href, icon: Icon }, index) => (
          <a
            key={index}
            href={href}
            target='_blank'
            rel='noopener noreferrer'
            aria-label={`Link para o ${href}`}
            className='border-l p-4 hover:[&>svg]:scale-110'
          >
            <Icon className='transition-all' />
          </a>
        ))}
      </div>
    </footer>
  );
}
