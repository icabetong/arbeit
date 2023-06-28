import prisma from './prisma'

export async function getProfile(id: string) {
	const profile = await prisma.profiles.findUnique({
		where: {
			id
		}
	})

	return profile
}
