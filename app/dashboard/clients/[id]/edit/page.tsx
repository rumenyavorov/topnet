import { fetchClientById } from "@/app/lib/data";
import Breadcrumbs from "@/app/ui/dashboard/breadcrumbs";
import EditClientForm from "@/app/ui/dashboard/clients/edit-form";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const client = await Promise.resolve(fetchClientById(id));
    if (!client) {
        notFound();
    }
    return (
        <main>
            <div>Edit page {params.id}</div>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Клиенти', href: '/dashboard/clients' },
                    {
                        label: 'Редакция на клиент',
                        href: `/dashboard/clients/${id}/edit`,
                        active: true,
                    },
                ]}
            />
            <EditClientForm client={client as Client} />
        </main>
    );

};