import express from "express";
import * as http from "http";
import cors from "cors";
import UserRouter from "./gateways/in/rest/routers/user-router";
import UserRepository from "./gateways/out/mongo/user-repository";
import MongoSchema from "./infrastructure/database/mongo-schema";
import FindAllUsers from "./core/usecases/impl/find-all-users";

const app: express.Application = express();
const server: http.Server = http.createServer(app);
const port = 3000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => res.send({ data: { value: "Hello" } }));

const mongoSchema = new MongoSchema();
const userRespository = new UserRepository(mongoSchema.userDocument);
const findAllUsers = new FindAllUsers(userRespository);

new UserRouter(app, findAllUsers);

server.listen(port, () => console.log(`Application started on port ${port}!`));
