import prisma from "../../../repositories/prismaClient";

export default async function usertypeAdd(data: any){
	try{
		const usertype = await prisma.user_category.create({
			data: {
				utype_title: data.utype_title,
			}
		});
		
		return usertype;
	}
	catch(err){
		console.log(err);
		throw err;
	}
}