"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function CreditPage() {
  const creditCards = [
    {
      label: "Best Rewards Card",
      name: "American Express Cobalt® Credit Card",
    },
    {
      label: "Best Travel Card",
      name: "CIBC Aventura® Visa Infinite* Card",
    },
    {
      label: "Best Travel Card With No Foreign Transaction Fees",
      name: "Scotiabank® Gold American Express® Card",
    },
    {
      label: "Best Card for Earning Travel Points",
      name: "American Express Cobalt® Credit Card",
    },
    {
      label: "Best Balance Transfer Credit Card",
      name: "MBNA True Line Mastercard",
    },
  ];

  const calculators = [
    { title: "بیمه پاسارگاد", icon: "🏠" },
    { title: "بیمه کارآفرین", icon: "🔑" },
    { title: "بیمه دی", icon: "🏡" },
  ];

  const testimonials = [
    "Ease of use",
    "Application was clear",
    "Easy to use web tool for...",
  ];

  return (
    <div className="container my-5">
      {/* Credit Cards Section */}
      {/* <div className="p-4 bg-white rounded shadow mb-5">
        <h4 className="text-center mb-3">Best Credit Cards in Canada for 2025</h4>
        <p className="text-center mb-4">
          Finding a credit card that complements your lifestyle and spending habits
          can be daunting...
        </p>

        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={20}
        >
          {creditCards.map((card, idx) => (
            <SwiperSlide key={idx}>
              <div className="d-flex align-items-center justify-content-between p-3 bg-light rounded mb-2">
                <div>
                  <span className="badge bg-danger me-2">{card.label}</span>
                  {card.name}
                </div>
                <button className="btn btn-dark">Learn More</button>
              </div>
              <div className="d-flex align-items-center justify-content-between p-3 bg-light rounded mb-2">
                <div>
                  <span className="badge bg-danger me-2">{card.label}</span>
                  {card.name}
                </div>
                <button className="btn btn-dark">Learn More</button>
              </div>
              <div className="d-flex align-items-center justify-content-between p-3 bg-light rounded mb-2">
                <div>
                  <span className="badge bg-danger me-2">{card.label}</span>
                  {card.name}
                </div>
                <button className="btn btn-dark">Learn More</button>
              </div>
              <div className="d-flex align-items-center justify-content-between p-3 bg-light rounded mb-2">
                <div>
                  <span className="badge bg-danger me-2">{card.label}</span>
                  {card.name}
                </div>
                <button className="btn btn-dark">Learn More</button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="text-center mt-3">
          <button className="btn btn-outline-danger">Full list of winners</button>
        </div>
      </div> */}

      {/* Mortgage Calculators Section */}
      <div className="p-4 bg-white rounded shadow mb-5 text-center">
        <h4 className="mb-4">سرمایه گذاری</h4>
        <div className="row justify-content-center">
          {calculators.map((calc, idx) => (
            <div key={idx} className="col-12 col-sm-6 col-lg-4 mb-3">
              <div className="p-3 bg-light rounded shadow">
                <div style={{ fontSize: "32px" }}>{calc.icon}</div>
                <h6 className="mt-2">{calc.title}</h6>
                <button className="btn btn-danger btn-sm mt-2">Launch Calculator</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      {/* <div className="p-4 bg-white rounded shadow text-center">
        <h4 className="mb-3">What people say about our quotes</h4>
        <div className="flex flex-row md:flex-col items-center info-section">
                <span className="trust-pilot-logo">
            <img src="/themes/rdc/images/trustpilot-star.svg" alt="Trustpilot logo" />
        </span>
                <div className="flex flex-row">
                                                                        <div className="review-stars active"></div>
                                                                                                <div className="review-stars active"></div>
                                                                                                <div className="review-stars active"></div>
                                                                                                <div className="review-stars active"></div>
                                                                                                <div className="review-stars"></div>
                                                            </div>

                <p>
                    Based on
                    <strong className="f-b">
                        6,462 reviews
                    </strong>
                </p>
            </div>
        <p>Based on 6,462 reviews</p>

        <div className="row">
          {testimonials.map((text, idx) => (
            <div key={idx} className="col-12 col-md-4 mb-3">
              <div className="p-3 bg-light rounded shadow">
                <span style={{ fontSize: "24px" }}>&quot;</span>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
}
