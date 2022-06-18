import React from "react";

const Gallery = ({ image }) => {
  return (
    <div>
      <div className=" overflow-hidden bg-no-repeat bg-cover max-w-xs">
        <img
          src={image}
          className="max-w-xs rounded-xl hover:scale-110 transition duration-300 ease-in-out"
          alt="Louvre"
        />
      </div>
    </div>
  );
};

export default Gallery;
