"use client";

import { clientsDatabase } from "@/database/clients";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";

const ClientsSlider = () => (
  <div className="h-[90px] w-full">
    <Swiper
      loop
      grabCursor
      freeMode
      centeredSlides
      slidesPerView="auto"
      spaceBetween={52}
      speed={5000}
      autoplay={{
        delay: 1,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className="w-full"
    >
      {clientsDatabase.map((client) => (
        <SwiperSlide key={client.name} className="!w-fit">
          <div className="relative h-20 w-28">
            <Image
              fill
              src={client.img}
              alt={client.name}
              className="object-contain object-center"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

export default ClientsSlider;
