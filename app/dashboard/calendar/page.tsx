import prisma from "@/app/lib/prisma";
import Calendar from "@/app/ui/dashboard/calendar/calendar";
import ClientsTodoCard from "@/app/ui/dashboard/calendar/clients-todo-card";
import Search from "@/app/ui/dashboard/search";

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

    return (
        <div className="flex flex-row h-full w-full gap-2">
            <div className="w-2/3">
                <Calendar />
            </div>
            <div className="w-1/3">
                <h2 className="mb-4 text-xl">
                    Клиенти
                    <Search placeholder={"Търсене на клиенти"} />
                </h2>
                <div className="flex flex-col justify-between rounded-xl bg-gray-100 p-4">
                    <ClientsTodoCard query={query} />
                </div>
            </div>
        </div>
    );
}