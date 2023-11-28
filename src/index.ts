
import dotenv from "dotenv";
import mongoose from "mongoose";
import app from "./server";

dotenv.config({ path: ".env" });

const port = process.env.PORT || 3001;
const connectionString = process.env.DB_CONNECTION;

mongoose
  .connect(connectionString)
  .then(() => {
    console.log("Conectado a la base de datos");
  })
  .catch((error) => {
    console.log("Error al conectar a la base de datos: ", error);
  });


app.listen(3001, () =>{
    console.log(`example app listening on port ${port}!`);
});