import multer from "multer";
import {
  CloudinaryStorage
} from "multer-storage-cloudinary";

import cloudinary
  from "../config/cloudinary.js";

const storage =
  new CloudinaryStorage({

    cloudinary,

    params: async (req, file) => ({

      folder: "cms_uploads",

      allowed_formats: [
        "jpg",
        "jpeg",
        "png",
      ],

      transformation: [
        {
          width: 1200,
          crop: "scale"
        }
      ]

    })

  });

export const upload =
  multer({ storage });