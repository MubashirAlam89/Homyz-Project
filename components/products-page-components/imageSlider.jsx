import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

export default function ImageSlider({ images }) {
  const [thumbsSwiper, setThumbsSwiper] = useState("");

  return (
    <div className="bg-black fixed top-0  left-0 bottom-0 right-0 flex justify-center items-center"></div>
  );
}
