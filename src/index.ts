import dotenv from "dotenv";
import mongoose from "mongoose";
import app from "./server";

dotenv.config({ path: ".env" });

const port = process.env.PORT || 3001;
const connectionString = process.env.DB_CONNECTION;

const mongooseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as mongoose.ConnectOptions; 
mongoose
  .connect(connectionString, mongooseOptions)
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
    process.exit(1); 
  });

app.listen(port, () => {
  console.log(`Server listening on port ${port}!`);
});

export default mongooseOptions;
