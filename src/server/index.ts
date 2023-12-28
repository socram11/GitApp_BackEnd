import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { handleError } from "../handlers/error.handler";
import { handleResponse } from "../handlers/response.handler";
import mongooseOptions from "../index"; 
import User from "../schemas/user.schema";
import Repo from "../schemas/repo.schema";
import saveDataRoutes from './routes/saveData.routes'; 
import userroutes from './routes/user.routes'; 
import repoRoutes from './routes/repo.routes'; 

const app = express();
const allowedOrigins = ["http://localhost:3000"];

const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

app.use(express.json());
app.use(cors(options));


app.use('/api', saveDataRoutes); 
app.use('/api', userroutes); 
app.use('/api', repoRoutes); 
app.use(handleResponse);
app.use(handleError);
export default app;