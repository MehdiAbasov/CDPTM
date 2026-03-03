import Content from "../models/Content.js"

export const getList = async(req,res)=>{

 const { type } = req.params

 const lang = req.query.lang || "az"

 const items = await Content
 .find({type})
 .sort({createdAt:-1})

 const result = items.map(item=>({

  _id:item._id,
  slug:item.slug,
  image:item.image,
  date:item.date,

  title:item.title[lang],
  excerpt:item.excerpt?.[lang]

 }))

 res.json(result)

}


export const getDetail = async(req,res)=>{

 const { type, slug } = req.params

 const lang = req.query.lang || "az"

 const item = await Content.findOne({type,slug})

 if(!item){

  return res.status(404).json({message:"Not found"})

 }

 res.json({

  _id:item._id,
  slug:item.slug,
  image:item.image,
  date:item.date,

  title:item.title[lang],
  content:item.content?.[lang]

 })

}