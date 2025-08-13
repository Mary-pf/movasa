"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function ShadowBoxSwiper() {
  const items = [
    { id: 1, title: "سریع و بدون درد", desc: "توضیحات آیتم اول" },
    { id: 2, title: "خدمات عالی!", desc: "توضیحات آیتم دوم" },
    { id: 3, title: "بسیار دوستانه و حرفه‌ای", desc: "توضیحات آیتم سوم" },
    { id: 4, title: "آیتم ۴", desc: "توضیحات آیتم چهارم" },
    { id: 5, title: "آیتم ۵", desc: "توضیحات آیتم پنجم" },
    { id: 6, title: "آیتم ۶", desc: "توضیحات آیتم ششم" },
    { id: 7, title: "آیتم ۷", desc: "توضیحات آیتم هفتم" },
  ];

  const chunkItems = [];
  for (let i = 0; i < items.length; i += 3) {
    chunkItems.push(items.slice(i, i + 3));
  }

  const totalSlides = chunkItems.length;
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="p-4 bg-white rounded shadow text-center" style={{ maxWidth: "1100px", margin: "2rem auto", marginBottom:"100px" }}>
      <h4 className="mb-3">آنچه مردم درباره نقل قول های ما می‌گویند</h4>

      {/* نمونه info-section */}
      <div className="d-flex flex-column flex-md-row align-items-center justify-content-center mb-4">
        <span className="trust-pilot-logo me-3 mb-2 mb-md-0">
          {/* <img src="/themes/rdc/images/trustpilot-star.svg" alt="Trustpilot logo" /> */}
        </span>
        <div className="d-flex flex-row me-3 mb-2 mb-md-0">
          <div className="review-stars active"></div>
          <div className="review-stars active"></div>
          <div className="review-stars active"></div>
          <div className="review-stars active"></div>
          <div className="review-stars"></div>
        </div>
        {/* <p className="mb-0">
          Based on <strong className="f-b">6,462 reviews</strong>
        </p> */}
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Navigation]}
        slidesPerView={1}
        spaceBetween={20}
        navigation={true}
        loop={false}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {chunkItems.map((group, idx) => (
          <SwiperSlide key={idx}>
            <div className="row">
              {group.map(({ id, title, desc }) => (
                <div key={id} className="col-12 col-md-4 mb-3">
                  <div className="p-3 bg-light rounded shadow h-100 d-flex flex-column justify-content-center align-items-center">
                    <span style={{ fontSize: "24px" }}>&quot;</span>
                    <h6 className="mt-2">{title}</h6>
                    <p className="text-center mt-1" style={{ fontSize: "0.85rem" }}>{desc}</p>
                  </div>
                </div>
              ))}
              {group.length < 3 &&
                Array(3 - group.length)
                  .fill(0)
                  .map((_, i) => <div key={"empty-" + i} className="col-12 col-md-4 mb-3" />)}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* نوار پایین */}
      <div className="d-flex justify-content-center gap-2 mt-4">
        {[...Array(totalSlides)].map((_, i) => (
          <div
            key={i}
            style={{
              width: "40px",
              height: "6px",
              borderRadius: "3px",
              backgroundColor: i === activeIndex ? "#252424ff" : "#ddd",
              transition: "background-color 0.3s",
            }}
          />
        ))}
      </div>

      <style jsx>{`
        .swiper-button-prev {
          color: #DF3226;
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
          color: #000;
          right: -40px !important;
          top: 50%;
          transform: translateY(-50%);
          width: 30px;
          height: 30px;
          background: transparent;
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
    </div>
  );
}
