import prisma from "../../repositories/prismaClient";

export default async function getRefreshToken(user_ID: number){
	try{
		const refreshToken = await prisma.refresh_token.findFirst({
			where: {
				user_ID
			}
		});

		return refreshToken
	}
	catch(err){
		throw err;
	}
}
