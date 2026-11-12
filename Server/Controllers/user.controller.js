 import UserModel from "../Models/user.model.js";
 const getCurrentuser = async (req,res)=>{
   try {
     const userId = req.userId;
     const user = await UserModel.findById(userId);
     console.log("Retrieved User:", user); // Log the retrieved user
     if(!user){
         return res.status(404).json({success:false,message:"User not found"})
     }
     res.json({ success: true, user });
   } catch (error) {
     console.log("Error in getCurrentuser controller:", error.message);
     res.status(500).json({ success: false, message: "Internal server error" });
   }
 
}
export  default getCurrentuser;