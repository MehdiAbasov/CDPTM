import mongoose from "mongoose";

const ProgramSchema =
  new mongoose.Schema({

    name: {
      az: {
        type: String,
        required: true
      },
      en: {
        type: String,
        required: true
      }
    },

    description: {
      az: String,
      en: String
    },


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
    "Program",
    ProgramSchema
  );