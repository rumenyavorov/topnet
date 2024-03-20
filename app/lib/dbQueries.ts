import prisma from "./prisma";

export const getClients = async () => {
    const clients = await prisma.clients.findMany();
    console.log(clients);
};

// export const createClient = async (client: Client) => {
//     const clients = await prisma.clients.create({
//         data: {
//             name: client.name,
//             plan: client.plan.name,
//             description: client.description,
//             address: client.address,
//             status: 'pending'
//         }
//     });
//     console.log(clients);
// };