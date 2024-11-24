import { CreateRidesController } from "@controller/rides/CreateRidesController";
import { Router } from "express";

const createRidesMiddleware = "";
const createRidesController = new CreateRidesController();

const RideRoutes = Router();

//GET
RideRoutes.get("/:customer_id");
// POST
RideRoutes.post("/estimate", createRidesController.CreateRides);
// PATCH
RideRoutes.patch("/confirm");
// PUT
// DELETE

export { RideRoutes };
