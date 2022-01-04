import express from "express";
import * as http from "http";
import cors from "cors";
import UserRouter from "./gateways/in/rest/routers/UserRouter";

const app: express.Application = express();
const server: http.Server = http.createServer(app);
const port = 3000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => res.send({ data: { value: "Hello" } }));

new UserRouter(app);

server.listen(port, () => console.log(`Application started on port ${port}!`));
