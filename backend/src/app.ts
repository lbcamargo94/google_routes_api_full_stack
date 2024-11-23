import "express-async-errors";
import express from "express";
import helmet from "helmet";
import cors from "cors";
import { CorsOptions } from "@config/server/CorsConfig";
import { Routes } from "./routes";
import HandleError from "@middleware/errors";

const { handleError } = new HandleError();
const app: express.Express = express();

app.use(cors(CorsOptions));
app.use(helmet());
app.use(express.json());
app.use(Routes);
app.use(handleError);

export { app };
