import { query } from "express";
import { IRepo } from "../models/repo.interface";
import { createRepoStorage, getReposStorage, updateRepoStorage, deleteRepoStorage } from "../storage/repo.storage";


export const createRepoService = async (repo: IRepo)=>{
    const newRepo = await createRepoStorage(repo);
    return newRepo;
}    

export const getReposService = async (query:any)=>{
    const filter = {};
    if(query.id) filter["id"] = query.id;
    if(query.name) filter["name"] = query.name;
    if(query.full_name) filter["full_name"] = query.full_name;
    if(query.descrption) filter["descrption"] = query.descrption;
    if(query.private) filter["private"] = query.private;
    if(query.html_url) filter["html_url"] = query.html_url;
    if(query.collaborators_url) filter["collaborators_url"] = query.collaborators_url;
    if(query.languages_url) filter["languages_url"] = query.languages_url;

    const repos = await getReposStorage(filter)
    return repos;
}

export const updateRepoService = async (id:string, repo:Partial<IRepo>)=>{

        const updateRepo = await updateRepoStorage(id,repo)
        return updateRepo
}

export const deleteRepoService = async (id:string)=>{

    const deleteRepo = await deleteRepoStorage(id)
    return deleteRepo
}