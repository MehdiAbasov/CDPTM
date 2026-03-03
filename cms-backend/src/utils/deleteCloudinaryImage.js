import cloudinary from "../config/cloudinary.js";

export const deleteImage = async (imageUrl) => {
  if (!imageUrl) return;
  console.log("DELETE image");
  try {
    const urlParts = imageUrl.split("/");

    const fileName =
      urlParts[urlParts.length - 1];

    const publicId =
      fileName.split(".")[0];

    // folder varsa əlavə et
    const folder = "cms_uploads";

    await cloudinary.uploader.destroy(
      `${folder}/${publicId}`
    );

    console.log(
      "Cloudinary deleted:",
      `${folder}/${publicId}`
    );

  } catch (err) {
    console.log(
      "Cloudinary delete error:",
      err.message
    );
  }
};
