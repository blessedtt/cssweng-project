import prisma from "../../../repositories/prismaClient";
import bcryptjs from "bcryptjs";

export default async function userAdd(data: any){
	const hashedPassword = await bcryptjs.hash(data.password, 10);
	const user = await prisma.user.create({
		data: {
			username: data.username,
			email: data.email,
			pass: hashedPassword,
			user_category: {
				connect: {
					utype_title: data.utype_title,
				}
			}
		}
	});

	return user;
}