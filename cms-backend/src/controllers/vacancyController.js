import Vacancy from "../models/Vacancy.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const parseField = (field) => {

  if (!field) return undefined;

  if (typeof field === "string") {

    try {
      return JSON.parse(field);
    } catch {
      return undefined;
    }

  }

  return field;

};

export const createVacancy =
  asyncHandler(async (req, res) => {

    const title = parseField(req.body.title);
    const description = parseField(req.body.description);

    if (!title?.az || !title?.en) {
      throw new Error("Title required");
    }

    if (!description?.az || !description?.en) {
      throw new Error("Description required");
    }

    const vacancy = await Vacancy.create({

      title,
      description,
      deadline: req.body.deadline

    });

    res.json(vacancy);

  });

export const getVacancies = asyncHandler(async (req, res) => {

  let lang = req.query.lang || "az"
  if (Array.isArray(lang)) lang = lang[0]

  const vacancies = await Vacancy.find()
    .select("title excerpt coverImage createdAt")
    .sort({ createdAt: -1 })

  const result = vacancies.map(item => ({

    _id: item._id,
    title: item.title?.[lang] || "",
    description: item.description?.[lang] || "",
    createdAt: item.createdAt

  }))

  res.status(200).json(result)

})

export const deleteVacancy =
  asyncHandler(async (req, res) => {

    const vacancy = await Vacancy.findById(req.params.id);

    if (!vacancy) {
      throw new Error("Vacancy not found");
    }

    await vacancy.deleteOne();

    res.json({
      message: "Vacancy deleted"
    });

  });

export const getVacancyDetail = asyncHandler(async (req, res) => {

  const lang = req.query.lang || "az"

  const vacancy = await Vacancy.findOne({
    slug: req.params.slug,
    isDeleted: false
  })

  if (!vacancy) {
    res.status(404)
    throw new Error("Vacancy not found")
  }

  const result = {

    _id: vacancy._id,
    slug: vacancy.slug,
    title: vacancy.title?.[lang] || "",
    content: vacancy.content?.[lang] || "",
    coverImage: vacancy.coverImage,
    createdAt: vacancy.createdAt

  }

  res.status(200).json(result)

})