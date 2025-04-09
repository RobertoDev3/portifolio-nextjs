'use client';

import { Accordion } from '@/components/ui/accordion';

export default function About() {
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
            <ul>
              <li>Bio</li>
              <li>Educação</li>
            </ul>
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value='item-2'>
          <Accordion.Trigger>contato</Accordion.Trigger>
          <Accordion.Content>
            <ul>
              <li>Bio</li>
              <li>Educação</li>
            </ul>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
      <article className='flex flex-1 flex-col border-l'>
        <div className='border-b'>
          <p className='p-3.5'>titulo</p>
        </div>
        <div className='flex h-[calc(100dvh-200px)] flex-1'>
          <div className='personalized-scroll flex-1 overflow-auto p-4'>
            {Array.from({ length: 20 }, (_, i) => (
              <p key={i}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                cumque, doloremque, voluptatibus, quos eveniet beatae
                necessitatibus velit odit aspernatur porro accusantium
                voluptates.
              </p>
            ))}
          </div>
          {/* <div className='before:[content=""] relative h-full w-9 border-l before:absolute before:top-2 before:right-1/2 before:h-1 before:w-6 before:translate-x-1/2 before:bg-[#315358]' /> */}
        </div>
      </article>
    </section>
  );
}
