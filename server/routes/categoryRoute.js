const express = require('express');
const categoryRouter = express.Router();

const DBErrorAPI = require('../middleware/errorhandling/DBErrorAPI');

const prisma = global.prisma;

//get categories as array
categoryRouter.use('/get', (req, res, next) =>{
    prisma.product_category.findMany({})
    .then((categories) =>{
        res.status(200).json(categories);
        next();
        return;
    })
    .catch((err)=>{
        console.log(err);
        next(DBErrorAPI.DBError(err.code));
        return;
    })
});

//add category render
categoryRouter.get('/add', (req,res) =>{
	res.render('addcategorytest.html');
})

//remove category render
categoryRouter.get('/remove', (req, res) =>{
	res.render('removecategorytest.html');
});

/** req.param parameters:
 *      name - name of category
*/
categoryRouter.post('/add', (req, res, next) => {
    prisma.product_category.create({
        data:{
            name: req.body.name
        }
    }).then((result) =>{
        console.dir(result, {depth: null})
        res.status(201).json("successfully added category");
        next(result);
        return;
    })
    .catch((err) =>{
        console.log(err)
        next(DBErrorAPI.DBError(err.code));
        return;
    });
});

/** req.param parameters:
 *      id: category ID
*/
categoryRouter.post('/remove', (req, res, next) => {
    prisma.product_category.delete({
    where:{ name: req.body.name } 
    }).then(() =>{
        res.status(200).json("successfully removed category");
        next();
        return;
    }).catch((err) =>{
        next(DBErrorAPI.DBError(err.code));
        return;
    });
});

module.exports = categoryRouter;