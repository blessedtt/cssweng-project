const express = require('express');
const productRouter = require('express').Router();

const DBErrorAPI = require('../middleware/errorhandling/DBErrorAPI');
const prisma = global.prisma;

/****************
 * 	PRODUCTS
 ****************/

//add product test render
productRouter.get('/add', (req,res) =>{
	res.render('addproducttest.html');
});

//remove product test render
productRouter.get('/remove', (req, res) =>{
	res.render('removeproducttest.html');
});

/** req.body parameters: 
 * 		pname - product name
 *      category - category ID of product
 *      desc - description of product
 *      brand - brand of product
 *      price - price of product
*/
productRouter.post('/add', (req, res, next) => {
    const data = req.body;
    const {pname, category, brand, price, stock} = data;

    //check if product already exists
    prisma.product.findFirstOrThrow({
        where:{
            name: pname,
            brand: brand,
        }
    }).then((result) => {
        if (result != null){
            //send error to client
            console.log(result)
            console.log("Product already exists.");
            next(DBErrorAPI.DBError("P2002"));
            return;
        }

    //sketchy solution - add product when first search fails
    }).catch((err) => {
        console.log(err)
        prisma.product.create({
            data: {
                name: pname,
                product_category: {
                    connect: {category_ID: category}
                },
                last_updated: new Date(),
                brand: brand,
                sell_price: Number(price),
                cat_name: pname.concat(" - ", brand ),
                stock: Number(stock),
            }
        }).then((result) => {
            //send successful add to client
            console.dir(result, {depth: null});                
            res.status(201).json(result);
            return;
        }).catch((err) => {
            //send error to client
            console.log(err);
            next(DBErrorAPI.DBError(err.code));
            return;
        })
    })
});


/** req.body parameters:
 * 		id - product ID to remove
 */
productRouter.post('/remove', (req, res, next) => {
    const id = req.body;
    prisma.product.deleteMany({
        where: {
            product_ID: { in: id}
        }
    }).then(() => {
        //send successful delete to client
        console.log("Deleted entry.");
        res.status(200);
        return;
    }).catch((err) => {
        console.log(err)
        next(DBErrorAPI.DBError(err.code));
        return;
    })
});

//get products as array
productRouter.use('/get', (req, res, next) =>{
    prisma.product.findMany({
        include: {
            product_category: true
        }
    })
    .then((result) =>{
        res.status(200).json(result);
        return;
    })
    .catch((err) => {
        console.log(err)
        next(DBErrorAPI.DBError(err.code));
        return;
    })
});

module.exports = productRouter;