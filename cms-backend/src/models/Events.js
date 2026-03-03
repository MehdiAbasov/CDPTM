import mongoose from "mongoose";

const EventSchema =
  new mongoose.Schema({

    title: {
      az: String,
      en: String
    },

    content: {
      az: String,
      en: String
    },

    date: Date,

    location: {
      az: String,
      en: String
    },

    coverImage: String,

    slug: String,

    isPublished: {
      type: Boolean,
      default: true
    },

    isDeleted: {
      type: Boolean,
      default: false
    }

  },
  { timestamps: true }
);

export default
  mongoose.model(
    "Event",
    EventSchema
  );