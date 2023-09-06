import { getProjects } from '@/sanity/sanity.query';
import { ProjectType } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

export default async function Project({}) {
  const projects: ProjectType[] = await getProjects();

  return (
    <main className='max-w-7xl mx-auto md:px-16 px-6'>
      <section className='max-w-2xl mb-16'>
        <h1 className='text-3xl font-bold tracking-tight sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight'>
          Meus Projects
        </h1>
        <p className='text-base text-zinc-400 leading-relaxed'>
          Trabalhei em vários pequenos projetos ao longo dos anos, mas esses são
          os que mais me orgulham. Muitos deles são código aberto, então se você
          vir algo que desperte seu interesse, verifique crie o código e
          contribua se tiver ideias de como isso pode ser melhorou.
        </p>
      </section>
      <section className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mb-12'>
        {projects.map((project) => (
          <Link
            href={`projects/${project.slug}`}
            key={project._id}
            className='flex items-center gap-x-4 bg-[#1d1d20] border border-transparent hover:border-zinc-700 p-4 rounded-lg ease-in-out'
          >
            <Image
              src={project.logo}
              width={60}
              height={60}
              alt={project.name}
              className='bg-zinc-800 rounded-lg p-2'
            ></Image>
            <div>
              <h2 className='font-semibold mb-1'>{project.name}</h2>
              <div className='text-sm text-zinc-400'>{project.tagline}</div>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
