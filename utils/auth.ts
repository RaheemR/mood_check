
import { prisma } from './db'
import { auth } from '@clerk/nextjs'

export const getUserByClerkID = async (select = {id: true }) => {
  const { userId } = auth()
  const user = await prisma.user.findUniqueOrThrow({
    where: {
      clerkId: userId,
    },
    select,
  })

  return user
}
