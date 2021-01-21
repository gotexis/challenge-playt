import "reflect-metadata";

import { config as configEnv } from 'dotenv'
import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { ApolloServer, gql } from 'apollo-server-express'
import {createConnection} from "typeorm";
import User from "./entity/User";
import Country from "./entity/Country";
import {typeDefs} from "./typeDefs";
import {resolvers} from "./resolvers";

configEnv()

const app = express()

const port = process.env.NODE_ENV === 'development' ? 4000 : process.env.API_PORT

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

// jwt


const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.applyMiddleware({ app })

// error handling middleware here


createConnection({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "playt",
  password: "playt",
  database: "playt",
  entities: [
    User,
      Country
  ],
  synchronize: true,
  logging: false
}).then(connection => {
  // here you can start to work with your entities
}).catch(error => console.log(error));

// start the Express server
app.listen(port, () => {
  console.log(`API started at http://localhost:${port}`)
})

module.exports = app
