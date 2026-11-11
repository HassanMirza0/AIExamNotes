import jsonwebtoken from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
export const generateToken =(userId)=>{
   try {
     const token = jsonwebtoken.sign({userId},process.env.JWT_SECRET,{expiresIn:"1h"})
     console.log("Generated Token:", token); // Log the generated token
     return token;
   } catch (error) {
    console.log("Error generating token:", error.message); // Log any errors that occur
   }

}