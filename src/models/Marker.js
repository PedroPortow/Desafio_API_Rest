import mongoose from "mongoose";

const markerSchema = new mongoose.Schema(
  {
    lat: {type: Number, required: true},
    lng: {type: Number, required: true},
  },
  {
    timestamps: {createdAt: 'createdAt', updatedAt: 'updatedAt'}
  }
)

const markers = mongoose.model('markers', markerSchema);

export default markers;