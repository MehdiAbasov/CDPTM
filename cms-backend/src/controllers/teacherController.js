import Teacher from "../models/Teacher.js";

import { asyncHandler } from "../utils/asyncHandler.js";

/* CREATE */
export const createTeacher =
  asyncHandler(async (req, res) => {

    const teacher = await Teacher.create({

      name: JSON.parse(req.body.name),

      position: JSON.parse(req.body.position),

      bio: JSON.parse(req.body.bio),

      photo: req.file?.path

    });

    res.json(teacher);

});

/* GET ALL */
export const getTeachers =
  asyncHandler(async (req, res) => {

    const teachers = await Teacher.find();

    res.json(teachers);

});

/* DELETE */
export const deleteTeacher =
  asyncHandler(async (req, res) => {

    const teacher = await Teacher.findById(req.params.id);

    if (!teacher) {
      const err = new Error("Teacher not found");
      err.statusCode = 404;
      throw err;
    }

    await teacher.deleteOne();

    res.json({
      message: "Teacher deleted"
    });

});