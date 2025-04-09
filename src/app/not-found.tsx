export default function NotFound() {
  return (
    <section className='flex h-full flex-col items-center justify-center'>
      <h1 className='text-xl font-semibold text-[var(--heading-foreground)]'>
        Página não encontrada!
      </h1>
      <p className='text-sm'>verifique se você entrou no lugar certo.</p>
    </section>
  );
}
