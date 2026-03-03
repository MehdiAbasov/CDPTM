import mongoose from "mongoose";

const SettingsSchema =
  new mongoose.Schema({

    siteName: {
      az: String,
      en: String
    },

    logo: String,

    phones: [String],

    emails: [String],

    address: {
      az: String,
      en: String
    },

    socialLinks: {
      facebook: String,
      instagram: String,
      linkedin: String
    }

  });

export default
  mongoose.model(
    "Settings",
    SettingsSchema
  );