import mongoose from "mongoose";

const GallerySchema =
  new mongoose.Schema({

    image: String,
    public_id: String,
    category: {
      az: String,
      en: String
    }

  },
    { timestamps: true }
  );

export default
  mongoose.model(
    "Gallery",
    GallerySchema
  );