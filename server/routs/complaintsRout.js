import express from "express"

import{
  craetComplaints,
  getAllComplaints
} from "../controllers/ComplaintsController.js";

export const routComplaints = express.Router();
export const getComplaints = express.Router();



getComplaints.get("/", getAllComplaints);
routComplaints.post("/",craetComplaints);


