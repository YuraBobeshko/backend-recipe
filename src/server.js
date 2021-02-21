"use strict";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import commentRouters from "./routes/comment.routers";

const app = express();

// destroy CORS
app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// main page
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my application!" });
});

// all routes
commentRouters(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}.`);
});
