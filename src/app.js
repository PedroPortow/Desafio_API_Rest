import express from "express";
import db from "./config/dbConnect.js"
import routes from "./routes/index.js"

db.on("error", console.log.bind(console, "Error connecting to the Database"))
db.once("open", () => {
  console.log("Successful connection with the Database")
})

const app = express();

app.use(express.json())

routes(app)

export default app;