import { Router } from "express";

const RideRoutes = Router();

//GET
RideRoutes.get("/:customer_id");
// POST
RideRoutes.post("/estimate");
// PATCH
RideRoutes.patch("/confirm");
// PUT
// DELETE

export { RideRoutes };
