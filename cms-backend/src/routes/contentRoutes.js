import express from "express"
import { getList,getDetail } from "../controllers/contentController.js"

const router = express.Router()

router.get("/:type",getList)

router.get("/:type/:slug",getDetail)

export default router