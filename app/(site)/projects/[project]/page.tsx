import { getSingleProject } from '@/sanity/sanity.query';
import { ProjectType } from '@/types';
import { Metadata } from 'next';
import Image from 'next/image';
import fallBackImage from '@/public/project.png';
import { PortableText } from '@portabletext/react';
type Props = {
  params: {
    project: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.project;
  const project: ProjectType = await getSingleProject(slug);

  return {
    title: `${project.name} | Project`,
    description: project.tagline,
    openGraph: {
      images:
        project.coverImage?.image ||
        'https://cdn.discordapp.com/attachments/980871938996076716/1149105528665026600/project.png?ex=64fa4b6b&is=64f8f9eb&hm=5b2f9e8df59e727ccc58701465a25d6a8c91cc40b96a062c4923d645ce0311bf&',
      title: project.name,
      description: project.tagline,
    },
  };
}

export default async function Project({ params }: Props) {
  const slug = params.project;

  const project: ProjectType = await getSingleProject(slug);

  return (
    <main className='max-w-6xl mx-auto lg:px-16 px-8'>
      <div className='max-w-3xl mx-auto'>
        <div className='flex items-start justify-between mb-4'>
          <h1 className='font-bold lg:text-5xl text-3xl lg:leading-tight mb-4'>
            {project.name}
          </h1>

          <a
            href={project.projectUrl}
            rel='noreferrer noopener'
            className='bg-[#1d1d20] text-white hover:border-zinc-700 border border-transparent rounded-md px-4 py-2'
          >
            Explore
          </a>
        </div>
        <Image
          className='rounded-xl border border-zinc-800 '
          width={900}
          height={460}
          src={project.coverImage?.image || fallBackImage}
          alt={project.coverImage?.alt || project.name}
        />
        <div className='flex flex-col gap-y-6 mt-8 leading-7 text-zinc-400'>
          <PortableText value={project.description} />
        </div>
      </div>
    </main>
  );
}
