import React from "react";
import ImageShow from "./ImageShow";
import "../style/ImageList.css";

const ImageList = ({ images }) => {
  const renderedImages = images.map((image) => {
    return <ImageShow key={image.id} image={image} />;
  });
  return <div className="image-list">{renderedImages}</div>;
};

export default ImageList;
