import React from "react";
import "./collection.css";
import weth from "../assets/owner/weth.png";

const Collection = ({ image, id, name, traits }) => {
  return (
    <div className="collectionCard">
      <img src={image} alt="nft image" />
      <div className="details"></div>
      <div className="name">
        {name}
        <div className="id"> • # {id}</div>
      </div>
      <div className="priceContainer">
        <img src={weth} alt="eth image" />
        <div className="price">{traits[0].value}</div>
      </div>
    </div>
  );
};

export default Collection;
