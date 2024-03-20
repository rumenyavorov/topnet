import { fetchClients, fetchFilteredClients } from "@/app/lib/data";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import { DeleteClient, UpdateClient } from "./buttons";

export default async function Table({
    query,
    currentPage,
}: {
    query: string;
    currentPage: number;
}) {
    const clients = await fetchFilteredClients(query, currentPage);

    return (
        <div className="minw-full bg-gray-100 rounded-lg">
            <div className="relative">
                <table className="w-full text-sm text-left text-black">
                    <thead className="text-xs text-gray-700 uppercase">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                Име
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Фамилия
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Адрес
                            </th>
                            <th scope="col" className="py-3 px-6">
                                План
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Описание
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Дата на създаване
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Действия
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {clients.map((client, index) => (
                            <tr key={index} className="bg-white border-b">
                                <td className="py-4 px-6">
                                    {client.firstName}
                                </td>
                                <td className="py-4 px-6">
                                    {client.lastName}
                                </td>
                                <td className="py-4 px-6">
                                    {client.address}
                                </td>
                                <td className="py-4 px-6">
                                    {client.plan} {/* Assuming `plan` has a `name` property */}
                                </td>
                                <td className="py-4 px-6">
                                    {client.description} {/* Display 'N/A' if description is missing */}
                                </td>
                                <td>
                                    {client.createdAt.toLocaleDateString('bg-BG')}
                                </td>
                                <td className="py-4 px-6">
                                    <div className="flex flex-row gap-8">
                                        <UpdateClient id={client.id} />
                                        <DeleteClient id={client.id} />
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
