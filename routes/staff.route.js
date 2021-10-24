var express = require('express');
var router = express.Router();
var controller = require('../controllers/staff.controller');
// var authMiddleware = require('../middlewares/auth.middleware')

//Account
router.get('/viewAccount', controller.viewAccount);

router.get('/createAccountTrainer', controller.getCreateAccountTrainer);

router.post('/createAccountTrainer', controller.postCreateAccountTrainer);

router.get('/updateInformation/:username', controller.getUpdateInformation)

router.post('/updateInformation/:username', controller.postUpdateInformation)

router.get('/deleteAccount/:username', controller.deleteAccount);

router.get('/updateAccountTrainer/:username', controller.getUpdateAccountTrainer);

router.post('/updateAccountTrainer/:username', controller.postUpdateAccountTrainer);



//Course Category
router.get('/viewCourseCategory', controller.viewCourseCategory);

router.get('/createCourseCategory', controller.getCreateCourseCategory);

router.post('/createCourseCategory',controller.postCreateCourseCategory);

router.get('/deleteCourseCategory/:id', controller.deleteCourseCategory);

router.get('/updateCourseCategory/:id', controller.updateCourseCategory);

router.post('/updateCourseCategory/:id', controller.POSTupdateCourseCategory);


//Course
router.get('/viewCourse/:category', controller.viewCourse);

router.get('/viewCourseDetail/:detail', controller.viewCourseDetail);

router.get('/createCourse/:category', controller.getCreateCourse);

router.post('/createCourse/:category', controller.postCreateCourse);

router.get('/deleteCourse/:id', controller.deleteCourse);

router.get('/updateCourse/:id', controller.getUpdateCourse);

router.post('/updateCourse/:id', controller.postUpdateCourse);


// Trainer to Course
router.get('/viewTrainer', controller.viewTrainerToCourse);

router.get('/addTrainerToCourse', controller.addTrainer);

router.post('/addTrainerToCourse',controller.postAddTrainer);

router.get('/deleteTrainer/:id', controller.deleteTrainer);


router.get('/', controller.index);

module.exports = router;