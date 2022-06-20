import mongoose from "mongoose";

const markerSchema = new mongoose.Schema(
  {
    id: {type: String},
    position: {
      lat: {type: Number, required: true},
      lng: {type: Number, required: true},
    }
  },
  {
    timestamps: {createdAt: 'createdAt', updatedAt: 'updatedAt'},
  }
)

const markers = mongoose.model('markers', markerSchema);

export default markers;