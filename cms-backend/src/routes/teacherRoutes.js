import express from "express";

import {
  createTeacher,
  getTeachers,
  deleteTeacher
} from "../controllers/teacherController.js";

import {
  protect
} from "../middleware/authMiddleware.js";

import {
  upload
} from "../middleware/uploadMiddleware.js";

const router = express.Router();

/* Public */
router.get("/", getTeachers);

/* Admin */
router.post(
  "/",
  protect,
  upload.single("photo"),
  createTeacher
);

router.delete(
  "/:id",
  protect,
  deleteTeacher
);

export default router;