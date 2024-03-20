import Form from "@/app/ui/dashboard/clients/create-form";
import Breadcrumbs from "@/app/ui/dashboard/breadcrumbs";

export default function Page() {
    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Клиенти', href: '/dashboard/clients' },
                    {
                        label: 'Създаване на клиент',
                        href: '/dashboard/clients/create',
                        active: true,
                    },
                ]}
            />
            <Form />
        </main>
    );
}