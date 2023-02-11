const {PrismaClient} = require("@prisma/client");

//connect to database client
if (!global.prisma){
	console.log("Creating new client.");
	global.prisma = new PrismaClient();
}

async function main(){

	await prisma.user.findUniqueOrThrow({
		where: {user_email : "jeffwang@gmail.com"}
	}).then((result) => {
		console.dir(result, {depth: null})
	}).catch((err) => {
		console.dir("did not find any")
	})
	
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