import express from "express";

import {
  createEvent,
  getEvents,
  deleteEvent,
  getEventDetail
} from "../controllers/eventController.js";

import {
  protect
} from "../middleware/authMiddleware.js";

import {
  upload
} from "../middleware/uploadMiddleware.js";

const router = express.Router();

/* Public */
router.get("/", getEvents);

/* Admin */
router.post(
  "/",
  protect,
  upload.single("coverImage"),
  createEvent
);

router.delete(
  "/:id",
  protect,
  deleteEvent
);

router.get(
  "/:slug", getEventDetail
)

export default router;