import { IRepo } from "../models/repo.interface";
import {model, Schema} from "mongoose";


const repoSchema = new Schema<IRepo>({

    id:{type: Number, required:true},
    name:{type: String, required:true},
    full_name:{type: String, required:true},
    description:{type: String, required:false},
    html_url:{type: String, required:true},
    private:{type: Boolean, required:true},
    collaborators_url:{type: String, required:true},
    languages_url:{type: String, required:true}
  });  

  export const Repo = model<IRepo>("Repo", repoSchema);

  export default Repo;