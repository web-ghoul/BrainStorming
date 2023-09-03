"use client";

import { createContext, useState } from "react";

export const CarouselContext = createContext();

export const CarouselProvider = ({ children }) => {
  const [openCarousel, setOpenCarousel] = useState(false);
  const [data, setData] = useState(null);
  const [isPosting, setIsPosting] = useState(false);
  const [selectedItem, setSelectedItem] = useState(0);

  const handleToggleCarousel = (item = 0) => {
    setOpenCarousel(!openCarousel);
    setSelectedItem(item);
  };

  const getCarouselData = (d) => {
    setData(d);
  };

  return (
    <CarouselContext.Provider
      value={{
        isPosting,
        setIsPosting,
        handleToggleCarousel,
        selectedItem,
        getCarouselData,
        data,
        setData,
        openCarousel,
      }}
    >
      {children}
    </CarouselContext.Provider>
  );
};
