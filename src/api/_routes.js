const { Router } = require('express');
const router = Router({ mergeParams: true });
const DepartmentController = require("./department");
const ProductController = require("./product");
const ActionController = require('./action');
const checkDept = require('../middlewares/checkDepartment');
const checkQuery = require('../middlewares/checkQuery');
const checkFilter = require('../middlewares/checkFilters');



// DEPARTMENT Controllers
router.route('/departments')
    .get(DepartmentController.getAllDepartments)

router.route('/departments/:deptId')
    .get(checkDept, checkQuery,
        DepartmentController.getAllDepartmentProducts)

router.route('/departments/:deptId/toprated')
    .get(checkDept, checkQuery,
        DepartmentController.getAllTopRated)

router.route('/departments/:deptId/topsales')
    .get(checkDept, checkQuery,
        DepartmentController.getAllTopSales)



// PRODUCT Controllers
router.route('/products')
    .get(checkQuery, checkFilter,
        ProductController.getAllProducts)

router.route('/products/toprated')
    .get(checkQuery,
        ProductController.getAllTopRated)

router.route('/products/topsales')
    .get(checkQuery,
        ProductController.getAllTopSales)

router.route('/products/search')
    .get(checkQuery, checkFilter,
        ProductController.searchProducts)

router.route('/products/random')
    .get(checkQuery,
        ProductController.randomProducts)

router.route('/products/:prodId')
    .get(ProductController.getAProduct)




// ACTION Controllers
router.route('/actions/checkout')
    .post(ActionController.checkout)




module.exports = router;