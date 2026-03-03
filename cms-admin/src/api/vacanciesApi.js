import api from "./axios";

export const getVacancies = () =>
  api.get("/vacancies");

export const createVacancy = (data) =>
  api.post("/vacancies", data);

export const deleteVacancy = (id) =>
  api.delete(`/vacancies/${id}`);