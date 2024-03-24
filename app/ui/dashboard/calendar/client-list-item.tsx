import clsx from "clsx";
import Badge from "../../badge";
import { ClientWithStatus } from "@/app/lib/db/clients";

type ClientListItemProps = {
    client: ClientWithStatus;
    index: number;
};

export default function ClientListItem({
    client, index
}: ClientListItemProps) {
    return (
        <div
            className={clsx(
                'flex flex-row items-center justify-between py-4',
                { 'border-t': index !== 0 }
            )}
        >
            {/* Client data goes here */}
            <div className="flex items-center">
                <div className="min-w-0">
                    <p className="truncate text-sm font-semibold md:text-base">
                        {client.firstName} {client.lastName}
                    </p>
                    <p className="hidden text-sm text-gray-500 sm:block">
                        {client.address}
                    </p>
                </div>
            </div>
            <Badge text={client.status.nameBg} color={client.status.color} />
        </div>
    );
};