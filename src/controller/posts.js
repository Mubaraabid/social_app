import postModel from "../model/posts.js";
const PostController = {
  getAll: async (req, res) => {
    const posts = await postModel.find().populate("user_id");
    return res.json(posts);
  },
  getSingle: async (req, res) => {
    const { id } = req.params;
    const post = await postModel.findById(id).populate("user_id");
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    return res.json(post);
  },
  getuserpost:async (req,res)=>{
    const user_id=req.body.user_id;
    const post =await postModel.find({user_id});
    console.log(post);
    if (!post){
      return res.status(404).json({message:"post not found"});
    }
    return res.status(201).json(post);
  },
  create: async (req, res) => {
    const body = req.body;
    const post = await postModel.create({
      title: body.title,
      description: body.description,
      user_id: body.user_id,
    });

    return res.json({ message: "Post created", post });
  },
  update: async (req, res) => {
    const body = req.body;
    const id = req.params.id;
    const posts = await postModel.findById(id);
    if (!posts) {
      return res.status(404).json({ message: "User not found" });
    }
    posts.title = body.title;
    posts.description = body.description;
    posts.likes=body.likes;
    posts.share=body.share;

    await posts.save();
    return res.json({ message: "post Updated successfully", posts });
  },
  delete: async (req, res) => {
    const idd=req.params.id;
    const posts = await postModel.findById(idd);
     const del=await postModel.deleteOne({_id: idd});
    if (!posts) {
      return res.status(404).json({ message:"post not found" });
    }
   
    return res.json({ message: "post deleted successfully",del });
  },
};

export default PostController;
