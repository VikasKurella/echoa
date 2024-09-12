import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 m-5 p-4 gap-4'>
      <div className='max-w-[350px] flex flex-col h-full'>
        <Skeleton className='h-[125px] w-[250px] rounded-xl' />
        <div className='space-y-2'>
          <Skeleton className='h-4 w-[250px]' />
          <Skeleton className='h-4 w-[200px]' />
        </div>
      </div>
      <div className='max-w-[350px] flex flex-col h-full'>
        <Skeleton className='h-[125px] w-[250px] rounded-xl' />
        <div className='space-y-2'>
          <Skeleton className='h-4 w-[250px]' />
          <Skeleton className='h-4 w-[200px]' />
        </div>
      </div>
      <div className='max-w-[350px] flex flex-col h-full'>
        <Skeleton className='h-[125px] w-[250px] rounded-xl' />
        <div className='space-y-2'>
          <Skeleton className='h-4 w-[250px]' />
          <Skeleton className='h-4 w-[200px]' />
        </div>
      </div>
    </div>
  );
}