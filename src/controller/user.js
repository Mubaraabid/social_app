import userModel from "../model/user.js";
import bcryptjs from "bcryptjs"
const UserController = {
  getAll: async (req, res) => {
    const users = await userModel.find();
    return res.json(users);
  },
  getSingle: async (req, res) => {
    const { id } = req.params;
    const user = await userModel.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.json(user);
  },
  create: async (req, res) => {
    // const body = req.body;
    const name=req.body.name;
    const email=req.body.email;
    const passwo=req.body.password;
    // console.log(passwo);
    const password= await bcryptjs.hash(passwo,12);
    console.log(password);
    const user = await userModel.create({name,email,password});
    

    return res.json({ message: "User created successfully", user });
  },
  update: async (req, res) => {
    const body = req.body;
    const id = req.params.id;
    const user = await userModel.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    user.name = body.name;
    user.email = body.email;
    user.password=body.password;

    await user.save();
    return res.json({ message: "User Updated successfully", user });
  },
  delete: async (req, res) => {
    const idd=req.params.id;
    const user = await userModel.findById(idd);
     const del=await userModel.deleteOne({_id: idd});
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
   
    return res.json({ message: "user deleted successfully",del });
  },
};

export default UserController;
