'use client';
import { Clipboard } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export default function CopyButton({ text }: { text: string }) {
  const copyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => alert('copied to clipboard'));
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            className='text-slate-50 absolute p-2 right-0 top-0'
            onClick={() => copyToClipboard(text)}
          >
            <Clipboard size={20} />
          </button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Copy code</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
