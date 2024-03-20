// import { fetchClientPages } from "@/app/lib/data";
import { fetchClientPages } from "@/app/lib/data";
import { CreateClient } from "@/app/ui/dashboard/clients/buttons";
import Table from "@/app/ui/dashboard/clients/table";
import Pagination from "@/app/ui/dashboard/pagination";
import Search from "@/app/ui/dashboard/search";
import { TableSkeleton } from "@/app/ui/skeletons";
import { Suspense } from "react";

export default async function Page({
    searchParams,
}: {
    searchParams?: {
        query?: string;
        page?: string;
    };
}) {

    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;

    const totalPages = await fetchClientPages(query);

    return (
        <div className="w-full">
            <div className="flex w-full items-center justify-between">
                <h1 className="text-2xl">Клиенти</h1>
            </div>
            <div className="mt-4 mb-4 flex items-center justify-between gap-2 md:mt-8">
                <Search placeholder="Търсене на клиенти..." />
                <CreateClient />
            </div>
            <Suspense key={query + currentPage} fallback={<TableSkeleton />}>
                <Table query={query} currentPage={currentPage}/>
            </Suspense>
            <div className="mt-5 flex w-full justify-center">
                <Pagination totalPages={totalPages} />
            </div>
        </div>
    );
}