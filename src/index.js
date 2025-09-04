import dotenv from "dotenv";
import express from "express";
dotenv.config({
  path: "./.env",
});

const app = express();
const port = process.env.PORT || 3000;



app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
