import api from "./axios";

export const getPrograms = () =>
  api.get("/programs");

export const createProgram = (data) =>
  api.post("/programs", data);

export const deleteProgram = (id) =>
  api.delete(`/programs/${id}`);