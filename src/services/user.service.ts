import { query } from "express";
import { IUser } from "../models/user.interface";
import { createUserStorage, getUsersStorage, updateUserStorage, deleteUserStorage } from "../storage/user.storage";


export const createUserService = async (user: IUser)=>{
    const newUser = await createUserStorage(user);
    return newUser;
}    

export const getUsersService = async (query:any)=>{
    const filter = {};
    if(query.login) filter["login"] = query.login;
    if(query.name) filter["name"] = query.name;
    if(query.avatar_url) filter["avatar_url"] = query.avatar_url;
    if(query.company) filter["company"] = query.company;
    if(query.location) filter["location"] = query.location;
    if(query.html_url) filter["html_url"] = query.html_url;
    if(query.public_repos) filter["public_repos"] = query.public_repos;
    if(query.public_gists) filter["public_gists"] = query.public_gists;
    if(query.followers) filter["followers"] = query.followers;
    if(query.following) filter["following"] = query.following;
    if(query.created_at) filter["created_at"] = query.created_at;
    if(query.bio) filter["bio"] = query.bio;
    if(query.blog) filter["blog"] = query.blog;
    if(query.id) filter["_id"] = query.id;

    const users = await getUsersStorage(filter)
    return users;
}

export const updateUserService = async (id:string, user:Partial<IUser>)=>{

        const updateUser = await updateUserStorage(id,user)
        return updateUser
}

export const deleteUserService = async (id:string)=>{

    const deleteUser = await deleteUserStorage(id)
    return deleteUser
}