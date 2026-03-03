import express from "express";

import {
  createVacancy,
  deleteVacancy,
  getVacancies,
  getVacancyDetail
} from "../controllers/vacancyController.js";

import {
  protect
} from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getVacancies);

router.post(
  "/",
  protect,
  createVacancy
);

router.delete(
  "/:id",
  protect,
  deleteVacancy
)

router.get("/:slug", getVacancyDetail)

export default router;