import { useState } from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";
import FileUpload from "../ui/FileUpload";

export default function NewsForm({ onSubmit }) {

  const [titleAz, setTitleAz] = useState("");
  const [titleEn, setTitleEn] = useState("");

  const [contentAz, setContentAz] = useState("");
  const [contentEn, setContentEn] = useState("");

  const [image, setImage] = useState(null);

  const handleSubmit = e => {

    e.preventDefault();

    const formData = new FormData();

    formData.append(
      "title",
      JSON.stringify({
        az: titleAz,
        en: titleEn
      })
    );

    formData.append(
      "content",
      JSON.stringify({
        az: contentAz,
        en: contentEn
      })
    );

    if (image) {
      formData.append("coverImage", image);
    }

  };

  return (

    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4"
    >

      <Input
        placeholder="Title AZ"
        value={titleAz}
        onChange={e => setTitleAz(e.target.value)}
      />

      <Input
        placeholder="Title EN"
        value={titleEn}
        onChange={e => setTitleEn(e.target.value)}
      />

      <Input
        placeholder="Content AZ"
        value={contentAz}
        onChange={e => setContentAz(e.target.value)}
      />

      <Input
        placeholder="Content EN"
        value={contentEn}
        onChange={e => setContentEn(e.target.value)}
      />

      <FileUpload onChange={setImage} />

      <Button type="submit">
        Save
      </Button>

    </form>

  );

}