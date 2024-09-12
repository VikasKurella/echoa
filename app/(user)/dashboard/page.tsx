import NewProjectButton from '@/components/new-project';
import { db } from '@/db';
import { projects } from '@/db/schema';
import { auth } from '@clerk/nextjs/server';
import ProjectsList from './projectsList';
import { eq } from 'drizzle-orm';

export default async function DashboardPage() {
  const { userId } = auth();

  if (!userId) return null;

  const userProjects = await db
    .select()
    .from(projects)
    .where(eq(projects.userId, userId));

  return (
    <div>
      <div className='flex items-center justify-center gap-3'>
        <h1 className='text-3xl font-bold text-center'>Your Projects</h1>
        <NewProjectButton />
      </div>
      <ProjectsList projects={userProjects} />
    </div>
  );
}
