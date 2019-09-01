const router = require('express-promise-router')();
const employeesCtrl = require('../controllers/employees');


router.route('/')
    .get(employeesCtrl.getEmployees)
    .post(employeesCtrl.saveEmployee);
router.route('/:id')
    .get(employeesCtrl.getEmployee)
    .put(employeesCtrl.updateEmployee)
    .delete(employeesCtrl.deleteEmployee);

module.exports = router;