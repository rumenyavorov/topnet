import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function clearDb() {
    const modelNames = Object.keys(prisma).filter(
        (key) => !["_", "$"].includes(key[0])
    );

    for (let i = 0; i < modelNames.length; i += 1) {
        const name = modelNames[i];
        try {
            // @ts-expect-error https://github.com/prisma/docs/issues/451
            await prisma[name].deleteMany();
        } catch (e) {
            console.error(`Error while deleting ${name}`);
            throw e;
        }
    }
}
async function seedPlans() {
    const plans = [
        { name: "Mini", speed: 100, price: 22 },
        { name: "Smart", speed: 300, price: 32 },
        { name: "Normal", speed: 400, price: 42 },
        { name: "Advanced", speed: 1000, price: 82 },
    ];

    for (const plan of plans) {
        await prisma.internetPlan.create({
            data: plan
        });
        console.log(`Plan ${plan.name} inserted.`);
    }
}

async function seedStatuses() {
    const statuses = [
        { name: "new", nameBg: "Нов", color: "bg-green-300" },
        { name: "toConfirm", nameBg: "За потвърждение", color: "bg-blue-300" },
        { name: "forView", nameBg: "За оглед", color: "bg-purple-300" },
        { name: "toConnect", nameBg: "За връзване", color: "bg-yellow-300" },
        { name: "incident", nameBg: "Авария", color: "bg-red-300" },
        { name: "complete", nameBg: "Завършен", color: "bg-orange-300" },
        { name: "rejected", nameBg: "Отказан", color: "bg-red-300" },
    ];

    for (const status of statuses) {
        await prisma.status.create({
            data: status
        });
        console.log(`Plan ${status.name} inserted.`);
    }
}

async function seedClients() {
    for (let i = 0; i <= 500; i++) {
        let internetPlanId = Math.floor((Math.random() * 4)) + 1;
        let statusId = Math.floor((Math.random() * 7) + 1);
        const user1 = await prisma.clients.create({
            data: {
                firstName: `First${i}`,
                lastName: `Last${i}`,
                address: `123${i} Main Street`,
                statusId: statusId,
                internetPlanId: internetPlanId,
            }
        });
        console.log(`Created user with id: ${user1.id}`);
    }
}

async function main() {
    clearDb();
    seedStatuses();
    seedPlans();
    setTimeout(() => {
        seedClients();
    }, 2000);
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })