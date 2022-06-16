import mongoose from "mongoose"

mongoose.connect("mongodb+srv://markers:123@markers.tb61vxe.mongodb.net/markers")

let db = mongoose.connection

export default db
