//global prisma client
const prisma = global.prisma;

//this script handles all filtering options on the table.

//im not yet sure of how the tables will be shown.
//so current implementation assumes that table is fresh on every route call to these functions.

//a better approach might just be to store the complete array of products,
//and remove any products that aren't in the current filters

//return all products that match a filter requirement
/** Parameters:
 *  filterName - name of category to filter
 */
async function getFilteredProducts(filterName){
	await prisma.products.findMany({
		where: {
			product_type: {
				connect: { category_name: filterName }
		}}
	}).then((result) =>{
		res.status(200);
		return result;
	}).catch((err)=>{
		res.status(500);
		console.log(err);
	})
}

//add new category filter to list of products
/** Parameters:
 * 	req.body
 * 		filterName - name of category to filter
 * 		products - array of existing products in table
 */
exports.addFilterProducts = (req, res) => {
	filterProducts = getFilteredProducts(req.body.filterName)
	if (req.body.products){
		filterProducts.concat(req.body.products);
	}
	res.render('/table', {filterProducts});
}

//remove category filter from list of products
/** Parameters:
 * 	req.body
 * 		filterName - name of category to filter
 * 		products - array of existing products in table
 */
exports.removeFilterProducts = (req, res) => {
	if (req.body.products){
		filterCategory = req.body.filterType;
		filterProducts = req.body.products.filter((product)=> {
			product.product_type == filterCategory;
		});
		res.render('/table', {filterProducts});
	} else {
		res.render('/table');
	}
}