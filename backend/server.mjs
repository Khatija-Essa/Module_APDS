import https from "https";
import http from "http";
import fs from "fs";
import posts from "./routes/post.mjs";
import users from "./routes/user.mjs";
import express from "express";
import cors from "cors";

const PORT = 3000;
const app = express();

const options = {
  key: fs.readFileSync('keys/privateKey.pem'),
  cert: fs.readFileSync('keys/certificate.pem')
}

app.use(cors());
app.use(express.json());

app.use((reg, res, next) =>
 {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  next();
});

// Routes setup
app.use("/post", posts);
app.route("/post",posts);
app.use("/user",users);
app.route("/user",users);

// Create HTTPS server and start listening to it 
let server = http.createServer(options,app);

server.listen(PORT);