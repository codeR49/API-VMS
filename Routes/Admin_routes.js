const express=require('express');
const Requirement=require('../Controller/Requirement');
const checkAuthMiddleware=require('../Middleware/check-auth')
const checkAdmin=require('../Middleware/check-admin')
const router=express.Router();
router.use(express.json());

router.post("/create",checkAuthMiddleware.checkAuth,Requirement.create);
router.get("/show/:id",checkAuthMiddleware.checkAuth,Requirement.Show);
router.get("/mycandidate/:id/:req_id",checkAuthMiddleware.checkAuth,Requirement.Mycandidate);
router.get("/all",checkAuthMiddleware.checkAuth,Requirement.all);
router.patch("/update/:id",checkAuthMiddleware.checkAuth,Requirement.update);
router.delete("/delete/:id",checkAuthMiddleware.checkAuth,Requirement.destroy);
 
module.exports= router;
