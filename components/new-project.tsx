import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Plus } from 'lucide-react';
import createProject from '@/actions/createProject';
import SubmitButton from './submit-button';

export default function NewProjectButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='rounded-full'>
          <Plus className='w-4 h-4' />
        </Button>
      </DialogTrigger>
      <DialogContent className='max-w-[325px] sm:max-w-[425px] rounded-md'>
        <DialogHeader>
          <DialogTitle>New Project</DialogTitle>
          <DialogDescription>
            Create a new project to get started!
          </DialogDescription>
        </DialogHeader>
        <form action={createProject} className='flex gap-4 flex-col'>
          <div className='grid sm:grid-cols-2 gap-4'>
            <div className='flex flex-col gap-2'>
              <Label htmlFor='name'>Name</Label>
              <Input id='name' name='name' placeholder='Project Name' />
            </div>
            <div className='flex flex-col gap-2'>
              <Label htmlFor='url'>URL</Label>
              <Input id='url' name='url' placeholder='https://example.com/' />
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <Label htmlFor='description'>Description</Label>
            <Textarea
              id='description'
              name='description'
              placeholder='Description (optional)'
            />
          </div>
          <SubmitButton />
        </form>
      </DialogContent>
    </Dialog>
  );
}
