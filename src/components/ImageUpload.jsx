import React, { useState } from "react";
import CollageCanvas from "./CollageCanvas";

const ImageUpload = () => {
  const [images, setImages] = useState([]);

  const handleUpload = (uploadedImages) => {
    setImages(uploadedImages);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <input type="file" multiple accept="image/*" onChange={(e) => {
        const files = Array.from(e.target.files);
        const uploadedImages = files.map((file) => URL.createObjectURL(file));
        handleUpload(uploadedImages);
      }} />
      {images.length > 0 && <CollageCanvas images={images} />}
    </div>
  );
};

export default ImageUpload;
