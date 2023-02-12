//global prisma client
prisma = global.prisma

//this script handles all product category management with the database

//queries database to get all categories
exports.getCategories = async () => {
	const categories = await prisma.product_category.findMany({})
	return categories;
}

//adds category to database
exports.addCategory = async (req,res) => {
	await prisma.product_category.create({
		data:{
			name: req.body.name
		}
	}).then((result) =>{
		console.dir(result, {depth: null})
		res.status(200);
		return result;
	})
	.catch((err) =>{
		console.dir(err);
		res.status(400);
	});
};

//removes category from database
exports.removeCategory = (req,res) =>{
	prisma.product_category.delete({
	   where:{
			name: req.body.name
	   } 
	}).then((result) =>{
		res.status(200);
	}).catch((err) =>{
		console.dir(err);
		res.status(400);
	});
};

exports.editCategory = (req, res) => {
	//TODO in sprint 2 :)
}