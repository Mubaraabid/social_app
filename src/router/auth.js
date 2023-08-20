import { Router } from "express";
import authController from "../controller/auth.js";

const authRouter = new Router();
authRouter.post("/userlogin",authController.login);
export default authRouter;