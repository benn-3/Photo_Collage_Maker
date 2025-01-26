import React from "react";
import "./ImageUpload.css";

const ImageUpload = ({ onUpload }) => {
  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    const uploadedImages = files.map((file) => URL.createObjectURL(file));
    onUpload(uploadedImages);
  };

  return (
    <div className="image-upload">
      {/* Styled label as the button */}
      <label htmlFor="file-upload" className="upload-button">
        Upload Images
      </label>
      {/* Hidden file input */}
      <input
        id="file-upload"
        type="file"
        multiple
        accept="image/*"
        onChange={handleFileChange}
      />
    </div>
  );
};

export default ImageUpload;
