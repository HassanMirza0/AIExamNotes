import UserModel from "../Models/user.model.js";
import { generateToken } from "../Utils/token.js";

export const googleAuth=  async (req,res)=>{
   try {
     const {name, email }= req.body;
      if (!email) {
      return res.status(400).json({ success: false, message: "Email is required" });
    }
     let user = await UserModel.findOne({email});
     if(!user){
         user = await UserModel.create({name,email}); 
     } 
   let token = generateToken(user._id);
   res.cookie("token",token,{
     httpOnly:true,
     secure :false,
     samesite:"strict",
     expires:new Date(Date.now()+ 24*60*60*1000)
   })
   res.status(200).json({ success: true, user, token });
   } catch (error) {
    console.log("Error in googleAuth controller:", error.message);
   }
}

export const logout = async (req,res)=>{
 try {
      await res.clearCookie("token");
      res.status(200).json({success:true,message:"Logout Successfully"})
 } catch (error) {
    console.log("Error in logout controller:", error.message);
 }

         

}