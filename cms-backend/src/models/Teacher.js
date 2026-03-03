import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({

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

  position: {
    az: String,
    en: String
  },

  bio: {
    az: String,
    en: String
  },

  photo: {
    type: String,
    required: true
  },

  email: {
    type: String
  },

  phone: {
    type: String
  },

  order: {
    type: Number,
    default: 0
  },

  isDeleted: {
    type: Boolean,
    default: false
  }

}, {
  timestamps: true
});

const Teacher = mongoose.model(
  "Teacher",
  teacherSchema
);

export default Teacher;