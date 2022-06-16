import express from "express";
import db from "./config/dbConnect.js"
import markers from "./models/Marker.js"
import routes from "./routes/index.js"

db.on("error", console.log.bind(console, "Problema na conexão com o banco"))
db.once("open", () => {
  console.log("Conexão com o banco feita com sucesso")
})

const app = express();

app.use(express.json())

routes(app)

export default app;