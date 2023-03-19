
import prisma from "../../../repositories/prismaClient";

export default async function userGetUnique(data: any){
	try{
		const user = await prisma.user.findUnique({
			where: {
				email: data.email
			},
			include: {
				user_category: true,
			}
		});

		return user
	}
	catch(err){
		throw err;
	}
	
}