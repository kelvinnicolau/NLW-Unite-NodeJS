import { prisma } from '../src/lib/prisma'

async function seed() { 
    await prisma.event.create({
        data: {
            id: 'fc1f4d4f-6ca5-41c8-a361-da5fef445c15',
            title: 'Unite Summit',
            slug: 'unite-summit',
            details: 'Um evento p/ devs apaixonados(as) por código!',
            maximumAttendees: 120,
        }
    })
}

seed().then(() => {
    console.log('Database seeded!')
    prisma.$disconnect()
})