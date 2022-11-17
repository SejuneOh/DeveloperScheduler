import express from "express";
import dotenv from "dotenv";
import { connect } from "mongoose";
import userRoutes from "./routes/userRoute";
import postRoutes from "./routes/notionPostRoutes";
import session from "express-session";

dotenv.config({ path: "./.env" });

const acceptServerList = ["http://127.0.0.1:5173"];
const cors = require("cors");

const MemoryStore = require("memorystore")(session);
const server = express();

let maxAge = 5 * 60 * 1000;

// initalnize session middleware
// server.use(
//   session({
//     secret: "secretKey",
//     resave: false,
//     saveUninitialized: true,
//     store: new MemoryStore({ checkPeriod: maxAge }),
//     cookie: {
//       maxAge: maxAge,
//     },
//   })
// );

server.use(express.json());
server.use(cors());
server.use("/api/user", userRoutes);
server.use("/api/post", postRoutes);

server.use((req, res, next) => {
  setImmediate(() => {
    next(new Error("Something went wrong"));
  });
});

(async () => {
  try {
    await connect(process.env.MONGO_URL as string);

    console.log("Connect Success");
    server.listen(4021, () => console.log("Server Start"));
  } catch (err) {
    console.log(`Error is ${err}`);
  }
})();
