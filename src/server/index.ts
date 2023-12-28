import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { handleError } from "../handlers/error.handler";
import { handleResponse } from "../handlers/response.handler";
import mongooseOptions from "../index"; 
import User from "../schemas/user.schema";
import Repo from "../schemas/repo.schema";
import saveDataRoutes from './routes/saveData.routes'; 

const app = express();
const allowedOrigins = ["http://localhost:3000"];

const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(options));

app.use(handleResponse);
app.use(handleError);
app.use('/api', saveDataRoutes); 

export default app;