import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import CollageCanvas from "./components/CollageCanvas";
import ImageUpload from "./components/ImageUpload";
import Toolbar from "./components/Toolbar";
import WelcomePage from "./components/WelcomePage";
import "./index.css";

const App = () => {
  const [started, setStarted] = useState(false);
  const [images, setImages] = useState([]);

  const handleUpload = (uploadedImages) => {
    setImages((prev) => [...prev, ...uploadedImages]);
  };

  const moveImage = (fromIndex, toIndex) => {
    const updatedImages = [...images];
    const [movedImage] = updatedImages.splice(fromIndex, 1);
    updatedImages.splice(toIndex, 0, movedImage);
    setImages(updatedImages);
  };

  return (
    <div className="app-container">
      {!started ? (
        <WelcomePage onStart={() => setStarted(true)} />
      ) : (
        <DndProvider backend={HTML5Backend}>
          <Toolbar />
          <ImageUpload onUpload={handleUpload} />
          <CollageCanvas images={images} moveImage={moveImage} />
        </DndProvider>
      )}
    </div>
  );
};

export default App;
