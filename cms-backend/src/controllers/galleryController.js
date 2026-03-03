import Gallery from "../models/Gallery.js";
import cloudinary from "../config/cloudinary.js";
import { asyncHandler } from "../utils/asyncHandler.js"
import Content from "../models/Content.js"
export const uploadImage = asyncHandler(async (req, res) => {

  if (!req.file) {
    return res.status(400).json({
      message: "Image required"
    });
  }

  const image = await Gallery.create({

    image: req.file.path,

    public_id: req.file.filename,

    category: req.body.category

  });

  res.json(image);

});

export const getGallery = async (req, res) => {

  const lang = req.query.lang || "az"

  const items = await Content
    .find({ type: "gallery" })
    .sort({ createdAt: -1 })

  const result = items.map(item => ({

    _id: item._id,
    image: item.image,
    title: item.title?.[lang]

  }))

  res.json(result)

}


export const deleteImage = asyncHandler(async (req, res) => {

  const image = await Gallery.findById(req.params.id);

  if (!image) {
    const err = new Error("Image not found");
    err.statusCode = 404;
    throw err;
  }

  /* Cloudinary delete */

  if (image.public_id) {
    await cloudinary.uploader.destroy(image.public_id);
  }

  /* Mongo delete */

  await image.deleteOne();

  res.json({
    message: "Image deleted"
  });

});