'use client';

import { ArrowPathIcon } from "@heroicons/react/24/outline";
import ClientList from "./client-list";
import useInfiniteScroll from "./use-infinite-scroll";

export default function ClientsData({
  query,
}: {
  query: string;
}) {
  const { clients, isFetching, scrollContainerRef } = useInfiniteScroll(query);

  return (
    <>
      <ClientList clients={clients} />
      <div ref={scrollContainerRef} className="flex items-center justify-center py-6">
        {isFetching && (
          <ArrowPathIcon className="h-5 w-5 animate-spin text-gray-500" />
        )}
      </div>
    </>
  );
}