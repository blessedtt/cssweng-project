//global prisma client
prisma = global.prisma

//Category class - Manages all product category-related operations on the database

class Category{

	//queries database to get all categories
	static async getCategories(){
		const categories = await prisma.product_category.findMany({})
		return categories;
	}

	//adds category to database
	static async addCategory(req,res, next){
		await prisma.product_category.create({
			data:{
				name: req.body.name
			}
		}).then((result) =>{
			console.dir(result, {depth: null})
			res.status(201).json("successfully added category");
		})
		.catch((err) =>{
			next(err);
		});
	};

	//removes category from database
	/** req.body
	 * 		name - name of category to remove
	 */
	static async removeCategory(req,res){
		await prisma.product_category.delete({
		where:{
				name: req.body.name
		} 
		}).then((result) =>{
			console.log("removed category.");
			res.status(200).json("successfully removed category");
		}).catch((err) =>{
			res.status(400).json("require")
			next(err);
		});
	};

	static editCategory(req, res){
		//TODO in sprint 2 :)
	}

}

module.exports = Category;