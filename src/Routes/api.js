const express = require('express');
const router = express.Router();

const adminControl = require('../Controller/adminController');
const postControl = require('../Controller/postController');
const subAdminControl = require('../Controller/subAdminController');
const userControl = require('../Controller/userController');

router.get("/create_admin", adminControl.create);
router.get("/read_admin", adminControl.read);
router.get("/delete_admin", adminControl.delete);
router.get("/update_admin", adminControl.update);

router.get("/create_post", postControl.create);
router.get("/read_post", postControl.read);
router.get("/delete_post", postControl.delete);
router.get("/update_post", postControl.update);

router.get("/create_subAdmin", subAdminControl.create);
router.get("/read_subAdmin", subAdminControl.read);
router.get("/delete_subAdmin", subAdminControl.delete);
router.get("/update_subAdmin", subAdminControl.update);

router.get("/create_user", userControl.create);
router.get("/read_user", userControl.read);
router.get("/delete_user", userControl.delete);
router.get("/update_user", userControl.update);


module.exports = router;