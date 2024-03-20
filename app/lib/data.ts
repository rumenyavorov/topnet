'use server';

import { unstable_noStore } from "next/cache";
import prisma from "./prisma";

export const fetchClients = async () => {
    unstable_noStore();
    const clients = await prisma.clients.findMany({
        orderBy: {
            id: 'desc'
        }
    });

    const data = await Promise.resolve(clients);

    return data;
};

export const fetchClientById = async (id: string) => {
    unstable_noStore();
    const clientId = parseInt(id);
    const client = await prisma.clients.findUnique({
        where: {
            id: clientId
        }
    });

    const data = await Promise.resolve(client);

    return data;
};

export const fetchCardData = async () => {
    // unstable_noStore();
    const pendingClients = await prisma.clients.count({
        where: {
            status: 'pending'
        }
    });
    const newClients = await prisma.clients.count({
        where: {
            status: 'new'
        }
    });
    
    // console.log(newClients);
    const data = await Promise.all([
        pendingClients,
        newClients
    ]);

    const totalPendingClients = data[0];
    const totalNewClients = data[1];

    return {
        totalPendingClients,
        totalNewClients
    };
};

const ITEMS_PER_PAGE = 7;

export async function fetchFilteredClients(
    query: string,
    currenPage: number,
) {
    unstable_noStore();
    const skip = (currenPage - 1) * ITEMS_PER_PAGE;

    const results = await prisma.clients.findMany({
        where: {
            OR: [
                {
                    firstName: {
                        contains: query,
                        mode: 'insensitive'
                    },
                },
                {
                    lastName: {
                        contains: query,
                        mode: 'insensitive'
                    },
                },
                {

                    address: {
                        contains: query,
                        mode: 'insensitive'
                    },
                },
                {
                    createdAt: {
                        // lte: new Date(query) ?? ''
                    },
                }
            ]
        },
        take: ITEMS_PER_PAGE,
        skip: skip
    });

    return results;
}

export async function fetchClientPages(
    query: string,
) {
    unstable_noStore();
    const count = await prisma.clients.count({
        where: {
            OR: [
                {
                    firstName: {
                        contains: query,
                        mode: 'insensitive'
                    },
                },
                {
                    lastName: {
                        contains: query,
                        mode: 'insensitive'
                    },
                },
                {

                    address: {
                        contains: query,
                        mode: 'insensitive'
                    },
                },
            ]
        },
    });

    const totalPages = Math.ceil(Number(count) / ITEMS_PER_PAGE);
    return totalPages;
}