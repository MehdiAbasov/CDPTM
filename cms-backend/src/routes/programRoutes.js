import express from "express";

import {
  createProgram,
  getPrograms,
  deleteProgram,
  getProgramDetail
} from "../controllers/programController.js";

import {
  protect
} from "../middleware/authMiddleware.js";

import {
  upload
} from "../middleware/uploadMiddleware.js";

const router = express.Router();

/* Public */
router.get("/", getPrograms);

/* Admin */
router.post(
  "/",
  protect,
  upload.single("icon"),
  createProgram
);

router.delete(
  "/:id",
  protect,
  deleteProgram
);

router.get("/:slug", getProgramDetail)

export default router;