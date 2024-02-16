"use server";
import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { signIn, signOut } from "@/lib/auth"; 
import bcrypt from "bcrypt";

export const addPost = async (prevState, formData:any) => {

    const {title, desc, slug, userId,img} = Object.fromEntries(formData);

    try{
        connectToDb();
        const newPost = new Post({
            title,
            desc,
            slug,
            userId,
            img
        });
        await newPost.save();
        console.log("save to db")
        revalidatePath("/blog")
        revalidatePath("/admin")
    }catch(err){
        console.log(err);
        throw new Error("Something went wrong");
    }

};
export const deletePost = async (formData:any) => {

    const {id} = Object.fromEntries(formData);

    try{
        connectToDb();
       await Post.findByIdAndDelete(id);
        console.log("Deleted from db")
        revalidatePath("/blog")
        revalidatePath("/admin")
    }catch(err){
        console.log(err);
        throw new Error("Something went wrong");
    }

};
export const addUser = async (prevState, formData:any) => {

  const {username,email,password,img,isAdmin} = Object.fromEntries(formData);

  try{
      connectToDb();
      const newUser = new User({
          username,
          email,
          password,
          img,
          isAdmin
      });
      await newUser.save();
      console.log("User save to db")
      revalidatePath("/admin")
  }catch(err){
      console.log(err);
      throw new Error("Something went wrong");
  }

};
export const deleteUser = async (formData:any) => {

  const {id} = Object.fromEntries(formData);

  try{
      connectToDb();
      await Post.deleteMany({userId:id});
     await User.findByIdAndDelete(id);
      console.log("Deleted User from db")
      revalidatePath("/admin")
  }catch(err){
      console.log(err);
      throw new Error("Something went wrong");
  }

};
export const handleGithubLogin =async () => {
    "use server";
    await signIn("github");
  };
export const handleLogout =async () => {
    "use server";
    await signOut();
  };


export const register = async (previousState, formData:any) => {
    const { username, email, password, img, confirmPassword } =
      Object.fromEntries(formData);
  
    if (password !== confirmPassword) {
      return { error: "Passwords do not match" };
    }
  
    try {
      connectToDb();
  
      const user = await User.findOne({ username });
  
      if (user) {
        return { error: "Username already exists" };
      }
  
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
  
      const newUser = new User({
        username,
        email,
        password: hashedPassword,
        img,
      });
  
      await newUser.save();
      console.log("saved to db");
  
      return { success: true };
    } catch (err) {
      console.log(err);
      return { error: "Something went wrong!" };
    }
  };

export const login = async (prevState, formData:any) => {
    const { username, password } = Object.fromEntries(formData);
  
    try {
      await signIn("credentials", { username, password });
    } catch (err:any) {
      console.log(err);
  
      if (err.message.includes("CredentialsSignin")) {
        return { error: "Invalid username or password" };
      }
      throw err;
    }
  };
  