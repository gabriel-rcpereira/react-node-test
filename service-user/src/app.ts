import express from 'express';
import * as http from 'http';
import cors from 'cors';

import UserRouter from './gateways/in/rest/routers/user-router';
import UserRepository from './gateways/out/mongo/repositories/user-repository';
import MongoSchema from './infrastructure/database/mongo-schema';
import FindAllUsers from './core/usecases/impl/find-all-users';
import CreateUser from './core/usecases/impl/create-user';
import ApiErrorHandler from './gateways/in/rest/middlewares/error-handler';

const app: express.Application = express();
const server: http.Server = http.createServer(app);
const port = 3000;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => res.send({ data: { value: 'Hello' } }));

const mongoSchema = new MongoSchema();
const userRespository = new UserRepository(mongoSchema.document.UserDocument);
const findAllUsers = new FindAllUsers(userRespository);
const createUser = new CreateUser(userRespository);

new UserRouter(app, findAllUsers, createUser);

app.use(new ApiErrorHandler().execute);

server.listen(port, () => console.log(`Application started on port ${port}!`));
