//global prisma client
prisma = global.prisma

const { DBConstraintError } = require('./errorhandling/DBErrorAPI');
//Category class - Manages all product category-related operations on the database

const DBErrorAPI = require('./errorhandling/DBErrorAPI');

class Category{

	//queries database to get all categories
	static async getCategories(req, res, next){
		const categories = await prisma.product_category.findMany({})
		.catch((err)=>{
			console.log(err);
			next(DBErrorAPI.DBError(err.code));
			return;
		});
		return categories;
	}

	//adds category to database
	static async addCategory(req, res, next){
		await prisma.product_category.create({
			data:{
				name: req.body.name
			}
		}).then((result) =>{
			console.dir(result, {depth: null})
			next();
			res.status(201).json("successfully added category");
			return;
		})
		.catch((err) =>{
			console.log(err)
			next(DBErrorAPI.DBError(err.code));
			return;
		});
	};

	//removes category from database
	/** req.body
	 * 		name - name of category to remove
	 */
	static async removeCategory(req, res, next){
		await prisma.product_category.delete({
		where:{
				name: req.body.name
		} 
		}).then((result) =>{
			console.log("removed category.");
			res.status(200).json("successfully removed category");
			next();
			return;
		}).catch((err) =>{
			next(DBErrorAPI.DBError(err.code));
			return;
		});
	};

	static editCategory(req, res){
		//TODO in sprint 2 :)
	}

}

module.exports = Category;