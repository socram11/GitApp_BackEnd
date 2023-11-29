import { IUser } from "../models/user.interface";
import {model, Schema} from "mongoose";

const userSchema = new Schema<IUser>({
    login: {type: String, required:true},
    name: {type: String, required:true},
    avatar_url: {type: String, required:true},
    company: {type: String, required:true},
    location: {type: String, required:true},
    html_url: {type: String, required:true},
    public_repos: {type: Number, required:true},
    public_gists: {type: Number, required:true},
    followers: {type: Number, required:true},
    following: {type: Number, required:true},
    created_at:{type: String, required:true}, 
    bio: {type: String, required:true},
    blog: {type: String, required:true}

  });  

  export const User = model<IUser>("User", userSchema);

  