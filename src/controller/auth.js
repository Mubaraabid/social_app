import userModel from "../model/user.js";
import bcryptjs from "bcryptjs";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config()
const jwtsecretkey=process.env.secretkey;
const authController={

login: async (req, res) => {
    // const body = req.body;
    const name=req.body.name;
    const email=req.body.email;
    const password=req.body.password;
    // console.log(name);
    const namee = await userModel.findOne({name, email});
    console.log(namee);
    if (!namee)
    {
        return res.json({message: "invalid credentials"});
    }
    console.log(namee);
    const result = bcryptjs.compareSync(password, namee.password);
    if (!result)
    {
       
       return res.status(404).json({ message: "invalid credentials" });
    }
  const token = jwt.sign({id:namee._id },jwtsecretkey,{expiresIn:34});
    res.status(200).json({
        name:namee.name,
        email:namee.email,
        password:namee.password,
        token
    });
    
    return res.json({ message: "User login successfully", namee });
      
  }
};
export default authController;

