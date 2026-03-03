import express from "express";

import {
  createNews,
  getNews,
  deleteNews,
  getNewsDetail
} from "../controllers/newsController.js";

import {
  protect
} from "../middleware/authMiddleware.js";

import {
  allowRoles
} from "../middleware/roleMiddleware.js";

import {
  upload
} from "../middleware/uploadMiddleware.js";

const router = express.Router();

/* Public */
router.get("/", getNews);

/* Admin */
router.post(
  "/",
  protect,
  allowRoles("admin", "editor"),
  upload.single("coverImage"),
  createNews
);

router.delete(
  "/:id",
  protect,
  allowRoles("admin"),
  deleteNews
);

router.get("/:slug", getNewsDetail)
export default router;