import User from "../models/userModel.js";

export const UserRegister = async(req,res)=>{
    try {
        const {fullname, email, phone, password} = req.body;
        if(!fullname || !email || !phone || !password){
            res.status(400).json({message:"All Field Required"});
            return;
        }
        const existingUser = await User.findOne({email});
    if(existingUser){
      res.status(400).json({message:"Email already exists"});
      return;
    }
        const newUser =  await User.create(
            {
                fullname,
                email,
                phone,
                password,
            }
        );
        console.log(newUser);
        res.status(201).json({message: "User Created Successfully"});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: " InternalServer Error"});
        
    }

};


export const UserLogin = async(req,res)=>{
    try {
        const { email, password} = req.body;
        if( !email || !password){
            res.status(400).json({message:"All Field Required"});
            return;
        }
       const exitingUser = await User.findOne({email});
       if(!exitingUser){
        res.status(404).json({message:"User Note Found"});
            return;

       }

       const isVerified = password === exitingUser.password;
       if(!isVerified){
        res.status(402).json({message:"User Not Authorized"});
            return;
       }
        console.log(exitingUser);
        res.status(200).json({message: "Welcome Back",data:exitingUser});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: " InternalServer Error"});
        
    }

};


export const UserLogout = async(req,res)=>{
    try {
       
        res.status(200).json({message: "Lagout Successfull"});
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: " InternalServer Error"});
    }

};

