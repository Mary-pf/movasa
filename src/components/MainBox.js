"use client";

import React from "react";

export default function MainBox() {
      const calculators = [
    { title: "اندروید", icon: "🏠" },
    { title: "ما در بازار", icon: "🔑" },
    { title: "IOS", icon: "🏡" },
  ];
  return (
    <>
    <div className="p-4 bg-white rounded shadow mb-5 text-center" style={{marginLeft:"80px", marginRight:"80px"}}>
        <h4 className="mb-4">اپلیکیشن‌های ارتباط با ما</h4>
        <div className="row justify-content-center">
          {calculators.map((calc, idx) => (
            <div key={idx} className="col-12 col-sm-6 col-lg-4 mb-3">
              <div className="p-3 bg-light rounded shadow">
                <div style={{ fontSize: "32px" }}>{calc.icon}</div>
                <h6 className="mt-2">{calc.title}</h6>
                {/* <button className="btn btn-danger btn-sm mt-2">Launch Calculator</button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    <div
      style={{
        maxWidth: "1100px",
        margin: "2rem auto",
        padding: "2rem",
        backgroundColor: "#fff",
        boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
        borderRadius: "12px",
      }}
    >
      <ThreeColumns />
    </div>
        </>

  );
}

function ThreeColumns() {
  return (
    <div
      className="three-cols"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "20px",
        alignItems: "start",
      }}
    >
      {/* ستون 3 */}
      <div style={{ textAlign: "start" }}>
        <h5 style={{ marginBottom: "24px" }}>
          نکات صرفه‌جویی در هزینه را در صندوق ورودی خود دریافت کنید
        </h5>
        <p style={{ fontSize: "0.9rem", color: "#555" }}>
          از نکات مربوط به امور مالی شخصی متخصصان مالی ما مطلع باشید!
        </p>
      </div>

      {/* ستون 2 */}
      <div style={{ textAlign: "start" }}>
        <h3 style={{ marginBottom: "18px" }}>آدرس ایمیل</h3>
        <input
          type="email"
          placeholder="ایمیل خود را وارد کنید"
          style={{
            padding: "10px 12px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            width: "100%",
            marginBottom: "8px",
            fontSize: "1rem",
          }}
          dir="rtl"
        />
        <p style={{ fontSize: "0.9rem", color: "#555" }}>
          بله مایلم پیشنهادات و خبرنامه‌ها را از طریق ایمیل مواسا دریافت کنم.
          می‌توانم در هر زمانی اشتراک خود را لغو کنم.
        </p>
      </div>

      {/* ستون 1 */}
      <div style={{ textAlign: "center" }}>
        <button
          style={{
            padding: "12px 24px",
            borderRadius: "36px",
            backgroundColor: "#a4221b",
            color: "#fff",
            fontWeight: "700",
            fontSize: "1rem",
            border: "none",
            cursor: "pointer",
          }}
        >
          ثبت نام
        </button>
      </div>

      {/* ریسپانسیو */}
      <style jsx>{`
        @media (max-width: 900px) {
          .three-cols {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .three-cols > div {
            margin-bottom: 20px;
          }
        }
      `}</style>
    </div>
  );
}

