const {PrismaClient} = require("@prisma/client");

const prisma = new PrismaClient();

async function main(){
	await prisma.user.create({
		data:{
			user_name: "Jeff Alison Wang",
			user_category: {
				create: {utype_title: "Manager"}
			},
			user_pass: "1234",
		}
	});

	const allUsers = await prisma.user.findMany({
	});
	console.dir(allUsers, {depth: null})
}

main()
  .then(async () => {
	await prisma.$disconnect()
  })
  .catch(async (e) => {
	console.error(e)
	await prisma.$disconnect()
	process.exit(1)
  })