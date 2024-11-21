import { Router } from "express";
import { RideRoutes } from "./ride";

const Routes = Router();

// USE
Routes.use("/ride", RideRoutes);

export { Routes };
