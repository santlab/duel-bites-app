import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seedClassWins() {
    const classes = [
        { name: 'torta', wins: 0 },
        { name: 'bolo', wins: 0 },
        { name: 'churrasco', wins: 0 },
    ];

    for (const classData of classes) {
        await prisma.classStats.upsert({
            where: { name: classData.name },
            update: { wins: classData.wins },
            create: { name: classData.name, wins: classData.wins },
        });
    }

    console.log('Class wins seeded successfully.');
}

seedClassWins()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });