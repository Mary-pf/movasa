"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function Carousel() {
  const items = [
    { id: 1, title: "آیتم ۱", desc: "توضیحات آیتم اول" },
    { id: 2, title: "آیتم ۲", desc: "توضیحات آیتم دوم" },
    { id: 3, title: "آیتم ۳", desc: "توضیحات آیتم سوم" },
    { id: 4, title: "آیتم ۴", desc: "توضیحات آیتم چهارم" },
    { id: 5, title: "آیتم ۵", desc: "توضیحات آیتم پنجم" },
    { id: 6, title: "آیتم ۶", desc: "توضیحات آیتم ششم" },
    { id: 7, title: "آیتم ۷", desc: "توضیحات آیتم هفتم" },
    { id: 8, title: "آیتم ۸", desc: "توضیحات آیتم هشتم" },
    { id: 9, title: "آیتم ۹", desc: "توضیحات آیتم نهم" },
    { id: 10, title: "آیتم ۱۰", desc: "توضیحات آیتم دهم" },
  ];

  // تقسیم آیتم‌ها به بخش‌های 3تایی برای هر اسلاید
  const chunkItems = [];
  for (let i = 0; i < items.length; i += 3) {
    chunkItems.push(items.slice(i, i + 3));
  }

  const totalSlides = chunkItems.length;
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <div
        style={{
          maxWidth: "1100px",
          margin: "2rem auto",
          boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
          borderRadius: "12px",
          padding: "1.5rem",
          backgroundColor: "#fff",
          direction: "rtl",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Swiper
          modules={[Navigation]}
          slidesPerView={1}
          spaceBetween={20}
          navigation={totalSlides > 1}
          loop={false}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {chunkItems.map((group, idx) => (
            <SwiperSlide key={idx}>
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  justifyContent: totalSlides === 1 ? "center" : "space-between",
                }}
              >
                {group.map(({ id, title, desc }) => (
                  <div
                    key={id}
                    style={{
                      background: "#f8f9fa",
                      borderRadius: "8px",
                      padding: "1rem",
                      height: "150px",
                      flex: "1 1 0",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                    }}
                  >
                    <h6>{title}</h6>
                    <p style={{ fontSize: "0.85rem", marginTop: "0.5rem" }}>
                      {desc}
                    </p>
                  </div>
                ))}
                {group.length < 3 &&
                  Array(3 - group.length)
                    .fill(0)
                    .map((_, i) => <div key={"empty-" + i} style={{ flex: "1 1 0" }} />)}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto 2rem",
          display: "flex",
          justifyContent: "center",
          gap: "8px",
          direction: "rtl",
          marginTop:"40px",
        }}
      >
        {[...Array(totalSlides)].map((_, i) => (
          <div
            key={i}
            style={{
              width: "40px",
              height: "6px",
              borderRadius: "3px",
              backgroundColor: i === activeIndex ? "#007bff" : "#ddd",
              transition: "background-color 0.3s",
            }}
          />
        ))}
      </div>

      <p style={{textAlign:"center", marginBottom:"140px", marginTop:"100px" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>

      <style jsx>{`
        .swiper-button-prev {
          color: #007bff;
          left: -40px !important;
          top: 50%;
          transform: translateY(-50%);
          width: 30px;
          height: 30px;
          background: rgba(0, 123, 255, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .swiper-button-next {
          color: #007bff;
          right: -40px !important;
          top: 50%;
          transform: translateY(-50%);
          width: 30px;
          height: 30px;
          background: rgba(0, 123, 255, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .swiper-button-prev::after,
        .swiper-button-next::after {
          font-size: 20px;
          font-weight: bold;
        }
      `}</style>
    </>
  );
}
