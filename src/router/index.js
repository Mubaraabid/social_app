import { Router } from "express";
import postRouter from "./posts.js";
import userRouter from "./user.js";
import authRouter from "./auth.js";
import commentRouter from "./comment.js";

const mainRouter = new Router();

// mainRouter.use(studentRouter);
mainRouter.use(userRouter);
mainRouter.use(postRouter);
mainRouter.use(authRouter);
mainRouter.use(commentRouter);

export default mainRouter;
