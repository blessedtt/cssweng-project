
import prisma from "../../../repositories/prismaClient";

export default async function userGetUnique(data: any){
	try{
		const user = await prisma.user.findUniqueOrThrow({
			where: {
				email: data.email
			}
		});

		return user
	}
	catch(err){
		console.log(err);
		throw err;
	}
	
}