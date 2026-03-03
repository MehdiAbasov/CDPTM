import News from "../models/News.js";

import { asyncHandler }
  from "../utils/asyncHandler.js";

import { makeSlug }
  from "../utils/slugify.js";

import { APIFeatures }
  from "../utils/apiFeatures.js";

import { deleteImage }
  from "../utils/deleteCloudinaryImage.js";

/* CREATE */
export const createNews =
  asyncHandler(async (req, res) => {


    /* təhlükəsiz parse */
    let title;
    let content;

    try {
      title = JSON.parse(req.body.title);
      content = JSON.parse(req.body.content);
    } catch (err) {
      throw new Error("JSON parse error");
    }

    if (!req.file) {
      throw new Error("Cover image required");
    }

    const news = await News.create({

      title,
      content,

      coverImage: req.file.path,

      slug: makeSlug(title.az)

    });

    res.json(news);

  });

/* GET ALL */
export const getNews = asyncHandler(async(req,res)=>{

 let lang = req.query.lang || "az"

 if(Array.isArray(lang)){
  lang = lang[0]
 }

 const news = await News.find({
  isPublished:true,
  isDeleted:false
 })
 .sort({createdAt:-1})

 const result = news.map(item=>({

  _id:item._id,
  slug:item.slug,
  title:item.title?.[lang] || "",
  excerpt:item.excerpt?.[lang] || "",
  coverImage:item.coverImage,
  createdAt:item.createdAt

 }))

 res.json(result)

})

export const deleteNews =
  asyncHandler(async (req, res) => {

    const news = await News.findById(
      req.params.id
    );

    if (!news) {
      const err = new Error("News not found");
      err.statusCode = 404;
      throw err;
    }

    /* Cloudinary image delete */
    if (news.coverImage) {
      await deleteImage(
        news.coverImage
      );
    }

    /* DB hard delete */
    await news.deleteOne();

    res.json({
      message: "News deleted permanently"
    });

  });

export const getNewsDetail = asyncHandler(async (req,res)=>{

 let lang = req.query.lang || "az"

 if(Array.isArray(lang)){
  lang = lang[0]
 }

 const news = await News.findOne({
  slug:req.params.slug,
  isPublished:true,
  isDeleted:false
 })

 if(!news){
  res.status(404)
  throw new Error("News not found")
 }

 const result = {

  _id:news._id,
  slug:news.slug,
  title:news.title?.[lang] || "",
  content:news.content?.[lang] || "",
  coverImage:news.coverImage,
  createdAt:news.createdAt

 }

 res.status(200).json(result)

})