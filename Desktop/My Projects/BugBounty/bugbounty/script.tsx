import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const main = async () => {
    prisma.user.create({ data: {email: 'brody@gmail.com', username: 'Off2Beans'}})
}

main()
    .catch(e => {
        console.error(e.message)
    })
    .finally(async () => {
        await prisma.$disconnect();
    })

