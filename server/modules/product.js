//global prisma client
const prisma = global.prisma;

/**
 * Product class - Manages all product-related operations on the database
 */
class Product{
//gets all products in database
	static async getProducts(next){
		const products = await prisma.product.findMany({})
		.catch((err) => {next(err)})
		return products;
	}

	//adds products to the database
	/** parameters:
	 * 	req.body
	 *      pname - product name
	 *      category - category ID of product
	 *      desc - description of product
	 *      brand - brand of product
	 *      price - price of product
	 */
	static async addProduct(req, res, next){
		//make sure that variable names match those in req.body
		//otherwise, they will not be match to the appropriate variable
		const {pname, category, desc, brand, price} = req.body;

		await prisma.product.create({
			data: {
				name: pname,
				product_category: {
					connect: {category_ID: parseInt(category)}
				},
				last_updated: new Date(),
				desc: desc,
				brand: brand,
				sell_price: Number(price),
			}
		}).then((result) => {
			console.dir(result, {depth:null});
			return result;
		}).catch((err) => {
			console.dir(err, {depth: null});
			next(err);
		})
	}


	//removes a product from the database
	/** parameters:
	 * 	req.body
	 * 		id - product ID to remove
	*/
	static async removeProduct(req, res){
		const id = req.body.id;
		await prisma.product.delete({
			where: {
				product_ID: parseInt(id)
			}
		}).then(() => {
			console.log("Deleted entry.");
			res.status(200);
		}).catch((err) => {
			console.dir(err, {depth: null});
			next(err);
		})
	};
}

module.exports = Product;