import api from "./axios";

export const getGallery = () =>
  api.get("/gallery");

export const uploadImage = (data) =>
  api.post("/gallery", data);

export const deleteImage = (id) =>
  api.delete(`/gallery/${id}`);