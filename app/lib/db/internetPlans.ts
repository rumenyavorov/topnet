'use server';

import { unstable_noStore } from "next/cache";
import prisma from "../prisma";

export const fetchInternetPlans = async () => {
    unstable_noStore();
    const internetPlans = await prisma.internetPlan.findMany();

    const data = await Promise.resolve(internetPlans);

    return data;
};

export const fetchInternetPlanById = async (id: number) => {
    unstable_noStore();
    const internetPlan = await prisma.internetPlan.findUnique({
        where: {
            id: id
        }
    });

    const data = await Promise.resolve(internetPlan);

    return data;
};