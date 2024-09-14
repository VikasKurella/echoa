'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { CreditCard, Folder, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';
import Link from 'next/link';

export default function HeaderMenu() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const toggleMenu = () => {
    setOpenMenu((prev) => !prev);
  };

  return (
    <DropdownMenu open={openMenu} onOpenChange={toggleMenu}>
      <DropdownMenuTrigger asChild>
        <Button
          onClick={toggleMenu}
          className='mr-4 focus:outline-none'
          variant='secondary'
        >
          {openMenu ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56'>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href='/dashboard' className='flex items-center'>
            <Folder className='mr-2 h-4 w-4' />
            <span>Projects</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href='/payments' className='flex items-center'>
            <CreditCard className='mr-2 h-4 w-4' />
            <span>Billing</span>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
