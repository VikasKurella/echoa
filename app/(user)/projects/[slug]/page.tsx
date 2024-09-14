import Table from '@/components/table';
import { db } from '@/db';
import { projects as projectsTable } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { ChevronLeft, Code, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  if (!params.slug) return <div>Invalid selection</div>;

  const projects = await db.query.projects.findMany({
    where: eq(projectsTable.id, parseInt(params.slug)),
    with: {
      feedback: true,
    },
  });

  if (projects.length === 0) return <div>Project not found</div>;

  const project = projects[0];

  return (
    <div>
      <div>
        <Link
          href='/dashboard'
          className='flex items-center mb-5 text-indigo-700 w-fit'
        >
          <ChevronLeft className='h-5 w-5 mr-1' /> <span>All Projects</span>
        </Link>
      </div>
      <div className='flex justify-between items-start'>
        <div>
          <h1 className='text-2xl font-bold mb-3 tracking-tight'>
            {project.name}
          </h1>
          <h2 className='text-primary-background text-lg mb-2 tracking-tight'>
            {project.description}
          </h2>
        </div>
        <div className='flex flex-col'>
          {project.url ? (
            <a
              href={project.url}
              className='underline flex items-center mt-2'
              target='_blank'
              rel='noopener noreferrer'
            >
              <ExternalLink className='h-5 w-5 mr-1' />
              <span className='tracking-tight'>Visit Site</span>
            </a>
          ) : null}
          <Link
            href={`/projects/${params.slug}/instructions`}
            className='underline flex items-center mt-2'
          >
            <Code className='h-5 w-5 mr-1' />
            <span className='tracking-tight'>Embed Code</span>
          </Link>
        </div>
      </div>
      <div>
        <Table data={project.feedback} />
      </div>
    </div>
  );
}
