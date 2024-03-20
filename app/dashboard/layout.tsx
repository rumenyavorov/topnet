'use client';

import { SessionProvider, getSession, signIn, useSession } from "next-auth/react";
import SideNav from "../ui/dashboard/sidenav";
import { getServerSession } from "next-auth";
import { Suspense } from "react";
import { SidenavSkeleton } from "../ui/skeletons";
import { Toaster } from "react-hot-toast";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (

        <SessionProvider >
            <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
                <div className="w-full flex-none md:w-64">
                    <SideNav />
                </div>
                <Toaster position="top-right" />
                <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
            </div>
        </SessionProvider>
    );
}