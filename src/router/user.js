import { Router } from "express";
import UserController from "../controller/user.js";

const userRouter = new Router();
userRouter.get("/userlist", UserController.getAll);
userRouter.get("/userid/:id", UserController.getSingle);
userRouter.get("/userdelete/:id",UserController.delete);
userRouter.post("/userpost", UserController.create);
userRouter.put("/userupdate/:id", UserController.update);

export default userRouter;
