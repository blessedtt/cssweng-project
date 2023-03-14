import prisma from "../../../repositories/prismaClient";
import bcryptjs from "bcryptjs";

export default async function userAdd(data: any){
	try{
		const hashedPassword = await bcryptjs.hash(data.password, 10);
		const user = await prisma.user.create({
			data: {
				name: data.username,
				email: data.email,
				pass: hashedPassword,
				date_created: new Date(),
				user_category: {
					connect: {
						utype_title: data.utype_title,
					}
				}
			}
		});

		return user;
	}
	catch(err){
		console.log(err);
		throw err;
	}
}