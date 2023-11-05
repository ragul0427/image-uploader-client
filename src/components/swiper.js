import React, { useEffect, useState } from "react";
import axios from "axios";
import {get} from "lodash"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation,Autoplay,Pagination } from 'swiper/modules';


function Swipers({data}) {
  
  return (
    <div>
       <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        navigation={{ clickable: true }}
        className="md:w-[80vw] md:h-[90vh]"
        scrollbar={{ draggable: true }}
        autoplay={{ delay: 2000 }}
      >
       {data.map((res, i) => {
         
         return (
           <SwiperSlide key={res.id}>
             <div>
               <img
                 src={`${res.image}`}
                 className="w-screen"
                 preview={false}
               />
             </div>
           </SwiperSlide>
         );
       })}
      </Swiper>
    </div>
  );
}

export default Swipers;
