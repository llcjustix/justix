"use client";

import { RiArrowLeftLine, RiArrowRightLine, RiArrowRightLongLine } from "@remixicon/react";
import Link from "next/link";
import { processesDatabase } from "@/database/processes";
import Image from "next/image";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const DevelopmentProcess = () => {
  const [visibleProcess, setVisibleProcess] = useState(processesDatabase[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleProcess(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    const elements = document.querySelectorAll(".process-item");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="bg-black pt-16 md:pt-24 lg:pt-[10.5rem] pb-16 md:pb-24 lg:pb-36">
      <div className="container">
        <h2 className="text-white font-extrabold sentence-first-letter text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px] mb-6">
          <span>Our product</span>
          <br />
          <span className="text-primary">development process</span>
        </h2>
        <Link
          href="/about/process"
          className="text-white hover:text-primary text-md lg:text-xl inline-flex items-center gap-4 group transition-all duration-200 ease-in-out mb-20"
        >
          View More <RiArrowRightLongLine />
        </Link>
        <div className="relative lg:flex hidden">
          <div className="gap-36 w-2/4">
            {processesDatabase.map((process, index) => (
              <div key={process.id} id={process.id} className="process-item">
                <p className="text-white font-normal mb-3 text-sm lg:text-md xl:text-lg 2xl:text-xl">
                  0{index + 1}/0{processesDatabase.length}
                </p>
                <div className="font-bold text-theme text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] lg:-translate-y-[7px] xl:!leading-[60px] 2xl:!leading-[75px] text-primary">
                  {process.title}
                </div>
                <p
                  className={clsx(
                    "mt-7 mb-36 leading-9 text-white font-normal text-sm lg:text-md xl:text-lg 2xl:text-xl"
                  )}
                >
                  {process.shortDescription}
                </p>
              </div>
            ))}
          </div>
          <div className="sticky top-[100px] right-0 h-[34rem] w-96 overflow-hidden rounded-full bg-white ml-20">
            {processesDatabase.map((process, index) => (
              <div
                key={process.id}
                id={process.id}
                className={clsx(
                  `h-[34rem] w-96 absolute overflow-hidden bg-black transition-all duration-700 ease-in-out`
                )}
                style={{
                  transform:
                    index <= processesDatabase.findIndex((item) => item.id === visibleProcess)
                      ? "translateY(0)"
                      : `translateY(900px)`,
                }}
              >
                <Image src={process.img} alt={process.title} fill />
              </div>
            ))}
          </div>
        </div>
        <div className="overflow-y-auto lg:hidden flex gap-10">
          <Swiper
            slidesPerView={1}
            navigation={{ enabled: true, nextEl: ".next", prevEl: ".prev" }}
            modules={[Navigation]}
          >
            {processesDatabase.map((process) => (
              <SwiperSlide key={process.id}>
                <div className="relative h-[400px] w-[300px] overflow-hidden bg-black rounded-full mb-10 mx-auto">
                  <Image
                    src={process.img}
                    alt={process.title}
                    sizes="300px"
                    fill
                    className="object-cover"
                  />
                </div>
                <div
                  key={process.id}
                  id={process.id}
                  className="process-item max-w-[400px] mx-auto"
                >
                  <div className="font-bold text-theme text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] lg:-translate-y-[7px] xl:!leading-[60px] 2xl:!leading-[75px] text-primary">
                    {process.title}
                  </div>
                  <p
                    className={clsx(
                      "my-7 leading-5 text-white font-normal text-sm lg:text-md xl:text-lg 2xl:text-xl"
                    )}
                  >
                    {process.shortDescription}
                  </p>
                </div>
              </SwiperSlide>
            ))}
            <button
              aria-label="previous slide"
              className="prev w-8 h-8 flex items-center justify-center disabled:hidden opacity-80 hover:opacity-100 bg-black border border-gray-700 rounded-full absolute top-[calc(50%-16px)] left-0 z-[1]"
            >
              <RiArrowLeftLine size={20} color="white" />
            </button>
            <button
              aria-label="next slide"
              className="next w-8 h-8 flex items-center justify-center disabled:hidden opacity-90 hover:opacity-100 bg-black border border-gray-700 rounded-full absolute top-[calc(50%-16px)] right-0 z-[1]"
            >
              <RiArrowRightLine size={20} color="white" />
            </button>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default DevelopmentProcess;
