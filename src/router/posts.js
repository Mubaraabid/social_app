import { Router } from "express";
import PostController from "../controller/posts.js";

const postRouter = new Router();
postRouter.get("/postslist", PostController.getAll);
postRouter.get("/postsid/:id", PostController.getSingle);
postRouter.post("/postsupdate/:id", PostController.update);
postRouter.get("/postsdelete/:id",PostController.delete);
postRouter.post("/postspost", PostController.create);
postRouter.post("/userallposts",PostController.getuserpost);
export default postRouter;
