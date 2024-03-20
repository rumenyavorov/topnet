'use server';

import { z } from "zod";
import prisma from "./prisma";
import { plans } from "./plansData";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export type State = {
    errors?: {
        firstName?: string[];
        lastName?: string[];
        address?: string[];
        plan?: string[];
        status?: string[];
    };
    message?: string | null;
};

const ClientSchema = z.object({
    id: z.number(),
    firstName: z.string({
        required_error: 'Моля, въведете име.'
    }).min(3, 'Името трябва да е дълго поне 3 символа'),
    lastName: z.string({
        invalid_type_error: 'Моля, въведете фамилия.'
    }).min(3, 'Фамилията трябва да е дълга поне 3 символа'),
    address: z.string({
        invalid_type_error: 'Моля, изберете адрес.'
    }).min(10, 'Адресът е задължителен'),
    plan: z.string({
        invalid_type_error: 'Моля, изберете план.'
    }),
    description: z.string(),
    status: z.enum(['pending', 'new', 'rejected', 'done'], {
        invalid_type_error: 'Моля, изберете статус на клиент.'
    }),
    createDate: z.string(),
});

const CreateClient = ClientSchema.omit({ id: true, createDate: true });
export async function createClient(prevState: State, formData: FormData) {
    console.log("FormData: ", formData);
    const validatedFields = CreateClient.safeParse({
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        address: formData.get('address'),
        plan: formData.get('plan'),
        description: formData.get('description'),
        status: formData.get('status'),
    });
    console.log("ValidatedFields: ", validatedFields);
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Не са попълнени задължителните полета. Неуспешно създаване на клиент!',
        };
    }
    try {
        // const client = CreateClient.safeParse(clientData);
        const client = validatedFields.data;
        const createClient = await prisma.clients.create({
            data: client
        });
        console.log('added: ', createClient);
    } catch (error) {
        console.error(error);
        // Handle validation error (e.g., inform the user about invalid input)
    }

    revalidatePath('/dashboard/clients');
    redirect('/dashboard/clients');
}

export async function updateClient(id: number, prevState: State, formData: FormData) {
    const validatedFields = CreateClient.safeParse({
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        address: formData.get('address'),
        plan: formData.get('plan'),
        description: formData.get('description'),
        status: formData.get('status'),
    });
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Не са попълнени задължителните полета. Неуспешно редактиране на клиент!',
        };
    }
    try {
        // const client = CreateClient.safeParse(clientData);
        const client = validatedFields.data;
        const updateClient = await prisma.clients.update({
            where: {
                id: id,
            },
            data: client
        });
        console.log('edited: ', updateClient);
    } catch (error) {
        console.error(error);
        // Handle validation error (e.g., inform the user about invalid input)
    }

    revalidatePath('/dashboard/clients');
    redirect('/dashboard/clients');
}

export async function deleteClient(id: number) {
    // throw new Error('Failed to Delete Invoice');

    try {
        const clientDeleted = await prisma.clients.delete({
            where: {
                id: id
            }
        });
        
        console.log('deleted: ', clientDeleted);

        revalidatePath('/dashboard/invoices');
        return { message: 'Deleted Invoice.' };
    } catch (error) {
        return { message: 'Database Error: Failed to Delete Invoice.' };
    }
}