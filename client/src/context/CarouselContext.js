"use client";

import { createContext, useState } from "react";

export const CarouselContext = createContext();

export const CarouselProvider = ({ children }) => {
  const [openCarousel, setOpenCarousel] = useState(false);
  const [data, setData] = useState(null);
  const [selectedItem,setSelectedItem] = useState(0);

  const handleToggleCarousel = (item=0) => {
    setOpenCarousel(!openCarousel);
    setSelectedItem(item)
  }

  const getCarouselData = (d)=>{
    setData(d)
  }
  
  return (
    <CarouselContext.Provider
      value={{ handleToggleCarousel,selectedItem,getCarouselData,data, openCarousel }}
    >
      {children}
    </CarouselContext.Provider>
  );
};
