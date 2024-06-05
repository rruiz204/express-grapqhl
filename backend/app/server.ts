import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import gql from "graphql-tag";
import { ApolloServer } from "@apollo/server";
import { buildSubgraphSchema } from "@apollo/subgraph";
import { expressMiddleware } from "@apollo/server/express4";

import resolvers from "./graphql/resolvers/Book";
import path from "path";
import fs from "fs";

const app = express();
const PORT = process.env.PORT;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const filePath = path.join(__dirname, "graphql", "schemas", "books.graphql");

const typeDefs = gql(
  fs.readFileSync(filePath, {
    encoding: "utf-8",
  })
);

const server = new ApolloServer({
  schema: buildSubgraphSchema({ typeDefs, resolvers })
});

await server.start();

app.use("/graphql", cors(), bodyParser.json(), expressMiddleware(server));

app.listen(PORT, () => {
  console.log(`Server is running on port: http://localhost:${PORT}/graphql`);
});