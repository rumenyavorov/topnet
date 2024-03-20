import { Suspense, useEffect, useState } from 'react';
import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import { PowerIcon } from '@heroicons/react/24/outline';
import { useSession, signOut, signIn } from 'next-auth/react';
import Logout from './logout';
import TopnetLogo from '../topnet-logo';
import clsx from 'clsx';
import { GreetingSkeleton } from '../skeletons';
import Greeting from './greeting';
// You don't need to import getSession and getServerSession here if you're using useSession

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <div className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40">
        {/* <TopnetLogo /> */}
          <Greeting />
      </div>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>

        <Logout />
      </div>
    </div>
  );
}
