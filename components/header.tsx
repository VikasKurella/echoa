import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from '@clerk/nextjs';
import { Outfit } from 'next/font/google';
import { Button } from './ui/button';
import HeaderMenu from './header-menu';

const dmSans = Outfit({ subsets: ['latin'] });

export default function Header() {
  return (
    <header className='sticky inset-x-0 top-0 z-30 w-full transition-all'>
      <div className='w-full max-w-screen-xl px-6 lg:px-20 relative mx-auto border-b border-none py-4'>
        <div className='flex h-14 items-center justify-between'>
          <h1
            className={` ${dmSans.className} text-4xl font-bold tracking-tight`}
          >
            Echoa
          </h1>
          <div>
            <SignedOut>
              <SignInButton>
                <Button className='bg-black'>Sign In</Button>
              </SignInButton>
              <SignUpButton>
                <Button className='bg-black ml-2'>Sign Up</Button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <HeaderMenu />
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>
    </header>
  );
}
