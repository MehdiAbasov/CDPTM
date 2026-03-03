import mongoose from "mongoose";

const NewsSchema =
  new mongoose.Schema({

    title: {
      az: String,
      en: String
    },

    content: {
      az: String,
      en: String
    },
    excerpt: {
      az: String,
      en: String
    },

    coverImage: String,

    slug: {
      type: String,
      unique: true
    },

    seo: {
      metaTitle: {
        az: String,
        en: String
      },
      metaDescription: {
        az: String,
        en: String
      }
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
    "News",
    NewsSchema
  );