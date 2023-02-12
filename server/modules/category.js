prisma = global.prisma

//this script handles all product category management with the database

//queries database to get all categories
exports.getCategories = async () => {
	return prisma.product_category.findMany({})
}

//adds category to database
exports.addCategory = (req,res) => {
	prisma.product_category.create({
		data:{
			name: req.body.name
		}
	}).then((result) =>{
		console.dir(result, {depth: null})
	})
	.catch((err) =>{
		console.dir(err);
	});
};

//removes category from database
exports.removeCategory = (req,res) =>{
	prisma.product_category.delete({
	   where:{
			name: req.body.name
	   } 
	}).catch((err) =>{
		console.dir(err);
	});
};

exports.editCategory = (req, res) => {
	//TODO in sprint 2 :)
}