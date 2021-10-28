const { Router } = require("express");
const { authenticated } = require("../middlewares/auth");

const adminController = require("../controllers/adminController");

const router = new Router();

//  @desc   Dashboard
//  @route  GET /dashboard
router.get("/", authenticated, adminController.getDashboard);

//  @desc   Dashboard Add Post
//  @route  GET /dashboard/add-post
router.get("/add-post", authenticated, adminController.getAddPost);

//  @desc   Dashboard Handle Edit Post
//  @route  POST /dashboard/add-post
router.post("/edit-post/:id", authenticated, adminController.editPost);

//  @desc   Dashboard Edit Post
//  @route  GET /dashboard/edit-post/:id
router.get("/edit-post/:id", authenticated, adminController.getEditPost);

//  @desc   Dashboard Handle Post Creation
//  @route  POST /dashboard/add-post
router.post("/add-post", authenticated, adminController.createPost);

//  @desc   Dashboard Handle Image Upload
//  @route  POST /dashboard/image-upload
router.post("/image-upload", authenticated, adminController.uploadImage);

module.exports = router;
