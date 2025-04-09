import Link from 'next/link';

export default function Home() {
  return (
    <article className='flex h-full flex-col justify-center gap-20 px-6'>
      <div className='flex flex-col gap-2'>
        <p className='text-lg'>Olá, eu sou o</p>
        <h1 className='text-5xl text-[var(--heading-foreground)]'>
          Roberto Teixeira
        </h1>
        <h4 className='text-xl text-[#615FFF]'>&gt; Desenvolvedor Front-end</h4>
      </div>
      <div className='flex flex-col gap-2 text-sm'>
        <p>// Encontre meu perfil do GitHub em:</p>
        <Link
          href='https://github.com/RobertoDev3'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Link para o perfil do GitHub'
          className='space-x-[7px] text-[#FFA1AD]'
        >
          <span className='text-[#615FFF]'>const</span>
          <span className='text-[#00D5BE]'>githubLink</span> =
          "https://github.com/RobertoDev3"
        </Link>
      </div>
    </article>
  );
}
