import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Creates a user
export const createUser = async () => {
    prisma.user.create({ data: {email: 'brody@gmail.com', username: 'Off2Beans'}})
}

// Deletes a user
export const deleteUser = async () => {
    prisma.user.delete({id: 0})
}

//Add a Post
export const createPost = async () => {
    prisma.post.create({ data: {
        title: 'BLANK',
        content: 'BLANK',
        tags: ['solidity'],
        price: 1
    }})
}

//Delete a Post
export const deletePost = async () => {
    prisma.post.delete()
}

