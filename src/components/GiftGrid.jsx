import React, { useState } from "react";
import { useEffect } from "react";

//components
import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GiftItem } from "./GiftItem";

const GiftGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  console.log({ isLoading });

  return (
    <>
      <div className="items">
        {images.map((image) => (
          <GiftItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};

export { GiftGrid };
