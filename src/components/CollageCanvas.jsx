import React, { useRef, useEffect } from "react";

const CollageCanvas = ({ images }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (images.length === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const canvasWidth = 800;
    const canvasHeight = 600;
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let x = 10, y = 10;
    const imgSize = 150;

    const loadImages = images.map((src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve(img);
      });
    });

    Promise.all(loadImages).then((loadedImages) => {
      loadedImages.forEach((img) => {
        ctx.drawImage(img, x, y, imgSize, imgSize);
        x += imgSize + 10;
        if (x + imgSize > canvasWidth) {
          x = 10;
          y += imgSize + 10;
        }
      });
    });
  }, [images]);

  const downloadCanvas = () => {
    const canvas = canvasRef.current;
    const link = document.createElement("a");
    link.download = "collage.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (
    <div>
      <button onClick={downloadCanvas} style={{ margin: "10px" }}>
        Download Collage
      </button>
      <canvas ref={canvasRef} style={{ border: "1px solid black" }}></canvas>
    </div>
  );
};

export default CollageCanvas;
