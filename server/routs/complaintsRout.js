import express from "express"

import{
  craetComplaints,
} from "../controllers/ComplaintsController.js";

export const routComplaints = express.Router();


// riddelRouter.get("/", getAllRiddles);
routComplaints.post("/",craetComplaints);


