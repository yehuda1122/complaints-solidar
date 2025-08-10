
import express from "express"
import {routComplaints} from "./routs/complaintsRout.js";

const app = express()
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(express.static("./public"))
app.use("/submit",routComplaints)
// app.use("/player",plyeerRouter)

const Port = process.env.PORT || 3003
app.listen(Port, () => {
    console.log(`the server is run: ${Port}`);
})
