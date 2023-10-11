import React from "react";

const GifItem = (props) => {

  const {title,url}=props
  return (
    <div className="card">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};

export default GifItem;
