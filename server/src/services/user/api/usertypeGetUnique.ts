import prisma from "../../../repositories/prismaClient";

export default async function usertypeGetUnique(data: any){
	try{
		const usertype = await prisma.user_category.findUnique({
			where: {
				utype_ID: data.utype_ID,
			}
		});
			
		return usertype;
	}
	catch(err){
		throw err;
	}
}