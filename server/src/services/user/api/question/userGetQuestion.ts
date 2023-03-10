/**
 * @file user
 */

import prisma from "../../../../repositories/prismaClient";

export default async function getUserQuestion(id: number) {

	const user_answer = await prisma.user_question_answer.findUnique({
		where: {
			user_ID: id,
		},

		include: {
			security_question: true,
		}
		
	});
	
	return user_answer;
}