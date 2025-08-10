// import express from "express";

import {
    writeComplaintsToMongoDB,
} from "../services/ComplaintsDAL.js";

export async function craetComplaints(req, res) {
    const newComplaints = req.body 
    const category = newComplaints.category
    const massege = newComplaints.massege
    console.log(newComplaints);
    
    try {
        await writeComplaintsToMongoDB({category:category,massege:massege});
        res.status(201).json({msg:"The Complaints created"})
    }
    catch (error) {
        res.status(400).json({ error: "not created" })
    }
}



// export async function getAllRiddles(req, res) {
//     try {
//         const respons = await getRiddlesFromMongoDB();
//         res.status(200).json(respons)
//     }
//     catch (error) {
//         res.status(500).json({ error: "not read" })
//     }
// }
