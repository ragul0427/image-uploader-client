import React, { useEffect, useState } from "react";
import axios from "axios";
import {get} from "lodash"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation,Autoplay,Pagination } from 'swiper/modules';
import {Skeleton} from "antd"


function Swipers({data,loading}) {
  console.log(loading)
  return (
    <Skeleton loading={loading}>
       <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        navigation={{ clickable: true }}
        className="md:w-[80vw] h-[40vh] md:h-[90vh]"
        scrollbar={{ draggable: true }}
        autoplay={{ delay: 2000 }}
      >
       {data.map((res, i) => {
         
         return (
           <SwiperSlide key={res.id}>
             <div>
               <img
                 src={`${res.image}`}
                 className="w-screen h-[40vh] md:h-[90vh]"
                 preview={false}
               />
             </div>
           </SwiperSlide>
         );
       })}
      </Swiper>
    </Skeleton>
  );
}

export default Swipers;
