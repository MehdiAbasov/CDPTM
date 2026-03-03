import mongoose from "mongoose";

const VacancySchema =
  new mongoose.Schema({

    title: {
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
      az: {
        type: String,
        required: true
      },
      en: {
        type: String,
        required: true
      }
    },

    deadline: Date,

  },
    { timestamps: true }
  );

export default
  mongoose.model(
    "Vacancy",
    VacancySchema
  );