import { ClientWithStatus } from "@/app/lib/db/clients";
import ClientListItem from "./client-list-item";

export default function ClientList({
    clients
}: {
    clients: ClientWithStatus[]
}) {
    return (
        <div className="client-list-container bg-white px-6" style={{ maxHeight: '500px', overflowY: 'auto' }}>
          {clients.map((client, index) => (
            <ClientListItem key={client.id} client={client} index={index} />
          ))}
        </div>
      );
}