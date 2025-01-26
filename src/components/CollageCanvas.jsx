// import React from "react";
// import { useDrag, useDrop } from "react-dnd";
// import "./CollageCanvas.css";

// const ItemTypes = { IMAGE: "image" };

// const CollageCanvas = ({ images, moveImage }) => {
//   const ImageBox = ({ src, index }) => {
//     const [, drag] = useDrag(() => ({
//       type: ItemTypes.IMAGE,
//       item: { index },
//     }));

//     const [, drop] = useDrop(() => ({
//       accept: ItemTypes.IMAGE,
//       hover: (draggedItem) => {
//         if (draggedItem.index !== index) {
//           moveImage(draggedItem.index, index);
//           draggedItem.index = index;
//         }
//       },
//     }));

//     return (
//       <div
//         ref={(node) => drag(drop(node))}
//         className="image-box"
//       >
//         <img src={src} alt="Uploaded" style={{ width: "100%", height: "100%" }} />
//       </div>
//     );
//   };

//   return (
//     <div className="grid">
//       {images.map((src, index) => (
//         <ImageBox key={index} src={src} index={index} />
//       ))}
//     </div>
//   );
// };

// export default CollageCanvas;
import React from "react";
import { useDrag, useDrop } from "react-dnd";
import "./CollageCanvas.css";

const CollageCanvas = ({ images, moveImage }) => {
  const ItemTypes = { IMAGE: "image" };

  const ImageBox = ({ src, index }) => {
    const [, drag] = useDrag(() => ({
      type: ItemTypes.IMAGE,
      item: { index },
    }));

    const [, drop] = useDrop(() => ({
      accept: ItemTypes.IMAGE,
      hover: (draggedItem) => {
        if (draggedItem.index !== index) {
          moveImage(draggedItem.index, index);
          draggedItem.index = index;
        }
      },
    }));

    return (
      <div ref={(node) => drag(drop(node))} className="image-box">
        <img src={src} alt="Uploaded" />
      </div>
    );
  };

  return (
    <div className="grid">
      {images.map((src, index) => (
        <ImageBox key={index} src={src} index={index} />
      ))}
    </div>
  );
};

export default CollageCanvas;
