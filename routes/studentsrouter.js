var express = require('express');
var router = express.Router();
const controllers = require('../controllers/student');
// const middleWare = require('../middleWare/auth');
const {wrapper} = require('../wrapper');
/* GET home page. */
router.post('/students',wrapper(controllers.createStudents));
router.get('/students',wrapper(controllers.getStudents));
router.put('/students/:id',wrapper(controllers.updateStudents));
router.delete('/students/:id',wrapper(controllers.deleteStudents));
//login
// router.post('/login',wrapper(controllers.login));
// router.get('/getData',wrapper(controllers.getData));
module.exports = router;