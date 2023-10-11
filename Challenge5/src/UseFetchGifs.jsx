import { useState, useEffect } from "react";
import GetGifs from "./GetGifs";



const UseFetchGifs = ( category ) => {
  const [images, setImages] = useState([]);
  

  const getImages = async () => {
    const images = await GetGifs(category);
    setImages(images);
    
  };


  useEffect(() => {
    
    getImages();
  }, []);

  return { images:images, isLoading:false };
};

export default UseFetchGifs;