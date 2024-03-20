interface Client {
    id: number;
    firstName: string;
    lastName: string;
    address: string;
    plan: string;
    description?: string;
    status: 'pending' | 'new' | 'rejected' | 'done';
    createAt?: string;
}

interface Incident {
    name: string;
    address: string;
    description: string;
}