import express, { Request, Response } from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema/schema";
import colors from "colors";
import conenctDb from "./config/db";

colors.enable();

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

conenctDb();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
