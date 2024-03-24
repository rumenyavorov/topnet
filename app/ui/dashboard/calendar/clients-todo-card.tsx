import ClientsData from "./clients-data";

export default async function ClientsTodoCard({
    query,
}: {
    query: string;
}) {

    // const clients = await fetchClientsTodo(query, currentPage);
    return (
        <div className="flex w-full flex-col md:col-span-4">
            <div className="flex flex-col justify-between rounded-xl bg-gray-100 p-4">
                <ClientsData query={query} />
            </div>  
        </div>
    );
}