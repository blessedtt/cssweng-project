//global prisma client
const prisma = global.prisma;

//test add
//add
const addProd = {
	postAddProduct: async function(){
		await prisma.product.create({
			data: {
				product_name: "Plywood",
				product_category: {
					connect: {category_ID: 1}
				},
				product_stock: 10,
				last_updated: new Date(),	//Date is in UTC
				product_desc: "it is wood",
				product_brand: "OEM",
				user: {
					connect: {user_ID: 1}
				},
				
			}
		});
		console.dir(await prisma.product.findFirst(), {depth: null})
	}
}

module.exports = addProd;