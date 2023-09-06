import { getEducation } from '@/sanity/sanity.query';
import { EducationType } from '@/types';
import Image from 'next/image';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export default async function Education({}) {
  const education: EducationType[] = await getEducation();

  return (
    <section className='mt-32'>
      <div className='mb-16'>
        <h2 className='font-semibold text-4xl mb-4'>Cursos</h2>
      </div>
      <div className='flex flex-col gap-y-12'>
        {education.map((data) => (
          <div
            key={data._id}
            className='flex items-start lg:gap-x-6 gap-x-4 max-w-2xl relative before:absolute before:bottom-0 before:top-[4.5rem] before:left-7 before:w-[1px] before:h-[calc(100%-50px)] before:bg-zinc-800'
          >
            <a
              href={data.url}
              className='min-h-[60px] min-w-[60px] rounded-md overflow-clip relative'
            >
              <Image
                src={data.logo}
                className='object-cover'
                alt={`${data.name} logo`}
                fill
              />
            </a>
            <div className='flex flex-col items-start'>
              <h3 className='text-xl font-bold'>{data.name}</h3>
              <p>{data.courseName}</p>
              <small className='text-sm text-zinc-500 mt-2 tracking-widest uppercase'>
                {format(new Date(data.startDate), 'MMMM yyyy', {
                  locale: ptBR,
                })}{' '}
                -{' '}
                {data.endDate &&
                  format(new Date(data?.endDate), 'MMMM yyyy', {
                    locale: ptBR,
                  })}
              </small>
              <p className='text-base text-zinc-400 my-4'>{data.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
