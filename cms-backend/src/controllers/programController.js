import Program from "../models/Program.js";

import { asyncHandler } from "../utils/asyncHandler.js";
import { APIFeatures } from "../utils/apiFeatures.js";
import { deleteImage } from "../utils/deleteCloudinaryImage.js";
import { makeSlug } from "../utils/slugify.js";
/* CREATE */
export const createProgram = asyncHandler(async (req, res) => {

  let name
  let description
  let duration

  try {

    name = JSON.parse(req.body.name)
    description = JSON.parse(req.body.description)
    duration = JSON.parse(req.body.duration)
  } catch {

    throw new Error("JSON parse error")

  }

  const program = await Program.create({

    name,
    description,


  })

  res.status(201).json(program)

})


/* GET ALL */
export const getPrograms = asyncHandler(async (req, res) => {

  let lang = req.query.lang || "az"

  if (Array.isArray(lang)) lang = lang[0]

  const programs = await Program.find({
    isPublished: true,
    isDeleted: false
  }).sort({ createdAt: -1 })

  const result = programs.map(item => {

    const name =
      typeof item.name === "object"
        ? item.name?.[lang]
        : item.name

    const description =
      typeof item.description === "object"
        ? item.description?.[lang]
        : item.description

    return {

      _id: item._id,
      slug: item.slug || "",
      name: name || "",
      description: description || "",
      createdAt: item.createdAt

    }

  })

  res.json(result)
})
/* DELETE */
export const deleteProgram =
  asyncHandler(async (req, res) => {

    const program = await Program.findById(req.params.id);

    if (!program) {
      const err = new Error("Program not found");
      err.statusCode = 404;
      throw err;
    }

    if (program.icon) {
      await deleteImage(program.icon);
    }

    await program.deleteOne();

    res.json({
      message: "Program deleted"
    });

  });

export const getProgramDetail = asyncHandler(async (req, res) => {

  let lang = req.query.lang || "az"
  if (Array.isArray(lang)) lang = lang[0]

  const program = await Program.findOne({
    slug: req.params.slug,
    isPublished: true,
    isDeleted: false
  })

  if (!program) {
    res.status(404)
    throw new Error("Program not found")
  }

  res.status(200).json({

    _id: program._id,
    slug: program.slug,
    name: program.name?.[lang] || "",
    description: program.description?.[lang] || "",
    coverImage: program.coverImage,
    createdAt: program.createdAt

  })

})