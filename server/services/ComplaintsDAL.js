import { ObjectId } from "mongodb";
import { connect } from "../DataBase/dbComplaints.js";




async function writeComplaintsToMongoDB(newComplaints) {
    const db = await connect();
    return await db.collection("complaints").insertOne(newComplaints)
}

// async function getRiddlesFromMongoDB() {
//     const db = await connect();
//     const data = await db.collection("riddles").find().toArray();
//     return data
// }


export {
    // getRiddlesFromMongoDB,
    writeComplaintsToMongoDB,
}