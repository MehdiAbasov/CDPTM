import Event from "../models/Events.js";

import { asyncHandler } from "../utils/asyncHandler.js";
import { makeSlug } from "../utils/slugify.js";

/* CREATE */
export const createEvent =
  asyncHandler(async (req, res) => {

    const title = JSON.parse(req.body.title);

    const event = await Event.create({

      title,

      content: JSON.parse(req.body.content),

      location: JSON.parse(req.body.location),

      date: req.body.date,

      coverImage: req.file?.path,

      slug: makeSlug(title.az)

    });

    res.json(event);

  });

/* GET ALL */
export const getEvents = asyncHandler(async (req,res)=>{

 let lang = req.query.lang || "az"
 if(Array.isArray(lang)) lang = lang[0]

 const events = await Event.find({
  isPublished:true,
  isDeleted:false
 })
 .select("title excerpt coverImage slug createdAt")
 .sort({createdAt:-1})

 const result = events.map(item=>({

  _id:item._id,
  slug:item.slug,
  title:item.title?.[lang] || "",
  excerpt:item.excerpt?.[lang] || "",
  coverImage:item.coverImage,
  createdAt:item.createdAt

 }))

 res.status(200).json(result)

})

/* DELETE */
export const deleteEvent =
  asyncHandler(async (req, res) => {

    const event = await Event.findById(req.params.id);

    if (!event) {
      const err = new Error("Event not found");
      err.statusCode = 404;
      throw err;
    }

    await event.deleteOne();

    res.json({
      message: "Event deleted"
    });

  });

export const getEventDetail = asyncHandler(async (req,res)=>{

 let lang = req.query.lang || "az"
 if(Array.isArray(lang)) lang = lang[0]

 const event = await Event.findOne({
  slug:req.params.slug,
  isPublished:true,
  isDeleted:false
 })

 if(!event){
  res.status(404)
  throw new Error("Event not found")
 }

 res.status(200).json({

  _id:event._id,
  slug:event.slug,
  title:event.title?.[lang] || "",
  content:event.content?.[lang] || "",
  coverImage:event.coverImage,
  createdAt:event.createdAt

 })

})