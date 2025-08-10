// import express from "express";

import { writeComplaintsToMongoDB } from "../services/ComplaintsDAL.js";

export async function craetComplaints(req, res) {
  const newComplaints = req.body;
  const category = newComplaints.category;
  const massege = newComplaints.massege;
  const creatAt = new Date().toISOString();
  console.log(newComplaints);

  try {
    await writeComplaintsToMongoDB({
      category: category,
      massege: massege,
      creatAt: creatAt,
    });
    res.status(201).json({ msg: "The Complaints created" });
  } catch (error) {
    res.status(400).json({ error: "not created" });
  }
}

export async function getAllComplaints(req, res) {
  const body = req.body.password;
  if (body === process.env.password) {
    try {
      const respons = await getComplaintsFromMongoDB();
      res.status(200).json(respons);
    } catch (error) {
      res.status(500).json({ error: "not read" });
    }
  }
  else
  {
    res.status(403).json({err: "not alawod"})
  }
}
