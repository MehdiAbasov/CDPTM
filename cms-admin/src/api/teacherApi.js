import api from "./axios";

export const getTeachers = () =>
  api.get("/teachers");

export const createTeacher = (data) =>
  api.post("/teachers", data);

export const deleteTeacher = (id) =>
  api.delete(`/teachers/${id}`);