import { APIFeatures } from "../utils/apiFeatures.js";
import News from "../models/News.js";
import { asyncHandler } from "../utils/asyncHandler.js";
export const getNews = asyncHandler(async (req, res) => {

  const features = new APIFeatures(
    News.find(),
    req.query
  )
    .filter()
    .search()
    .paginate();

  const news = await features.query;

  res.json(news);
});