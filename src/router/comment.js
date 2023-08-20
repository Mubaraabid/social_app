import { Router } from "express";
import commentController from "../controller/comment.js";

const commentRouter = new Router();
commentRouter.get("/commentlist", commentController.getAll);
commentRouter.get("/commentid/:id", commentController.getSingle);
commentRouter.post("/commentupdate/:id", commentController.update);
commentRouter.get("/commentdelete/:id",commentController.delete);
commentRouter.post("/commentpost", commentController.create);

export default commentRouter;