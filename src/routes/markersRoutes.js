import express from "express"
import MarkerController from '../controllers/markersController.js'

const router = express.Router()

router 
  .get("/markers", MarkerController.getAllMarkers)
  .get("/markers/:id", MarkerController.getMarker)
  .post("/markers", MarkerController.postMarker)
  .put("/markers/:id", MarkerController.updateMarker)
  .delete("/markers/:id", MarkerController.removeMarker)
  .delete("/markers", MarkerController.removeAllMarkers)
  
export default router
