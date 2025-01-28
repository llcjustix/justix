"use client";

import { clientsDatabase } from "@/database/clients";
import Image from "next/image";
import "swiper/css";

const ClientsSlider = () => (
  <div className="w-full py-2 px-2 relative overflow-hidden">
    <div className="animate-infinite-slider flex gap-14 w-fit">
      {clientsDatabase.map((client) => (
        <div key={client.name} className="slide flex items-center justify-center">
          <Image
            src={client.img}
            alt={client.name}
            className="object-contain object-center max-h-[91px] max-w-[120px]"
            width={120}
            height={91}
          />
        </div>
      ))}
    </div>
  </div>
);

export default ClientsSlider;
