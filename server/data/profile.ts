import prisma from './prisma'

export async function getProfile(id: string) {
	const profile = await prisma.profile.findUnique({
		where: {
			id
		}
	})

	return profile
}
