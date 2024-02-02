import express, { urlencoded } from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

dotenv.config();

const url = process.env.MONGODB_CONNECTION_STRING;

mongoose.connect(url);

const app = express();
app.use(express.json());
app.use(
  urlencoded({
    extended: true,
  })
);
app.use(cors());

app.get("/", (req, res) => {
  res.send({ message: "Hello World!" });
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`server is running on port ${process.env.PORT || 3000}`);
});
