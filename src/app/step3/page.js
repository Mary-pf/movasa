'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function DiscountPage() {
          const router = useRouter();
        const [selected, setSelected] = useState("");
    
    const handlePreview = () => {
    // if (!selected) {
    //   alert("لطفاً یک گزینه انتخاب کنید");
    //   return;
    // }
    router.push("/step2");
  };
    const handleNext = () => {
    // if (!selected) {
    //   alert("لطفاً یک گزینه انتخاب کنید");
    //   return;
    // }
    router.push("/step4");
  };
  return (
    <div className="container mt-4" dir="rtl">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="fw-bold">بیمه شخص ثالث</h5>
        <span className="text-primary small">مقایسه قیمت</span>
      </div>

      {/* Breadcrumb */}
      <nav className="mb-4">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">ازکی</li>
          <li className="breadcrumb-item">بیمه وسایل نقلیه</li>
          <li className="breadcrumb-item active">بیمه شخص ثالث</li>
        </ol>
      </nav>

      <div className="row g-4">
                {/* Right Form */}
        <div className="col-12 col-md-6">


      {/* Title */}
      <p className="fw-semibold">سابقه تخفیفات بیمه‌نامه خود را بررسی کنید:</p>

      {/* Card */}
      <div className="border rounded-3 p-4 shadow-sm mb-3">
        {/* Company */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <span className="fw-semibold">شرکت بیمه‌گر</span>
          <div className="text-end">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/58/Mellat_Insurance_logo.png"
              alt="ملت"
              width={40}
              className="mb-1"
            />
            <p className="mb-0 small">ملت</p>
          </div>
        </div>

        {/* Plate */}
        <div className="d-flex justify-content-center align-items-center mb-3">
          <div className="border rounded p-2 d-flex align-items-center bg-light">
            <div className="me-2 text-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_Iran.svg/40px-Flag_of_Iran.svg.png"
                alt="iran"
                width={25}
              />
              <p className="small mb-0">I.R. IRAN</p>
            </div>
            <span className="mx-2 fw-bold">79</span>
            <span className="mx-2 fw-bold">ص</span>
            <span className="mx-2 fw-bold">117</span>
            <span className="mx-2 fw-bold">55</span>
          </div>
        </div>

        {/* Dates */}
        <div className="d-flex justify-content-between">
          <span>تاریخ شروع</span>
          <span className="fw-bold">1403/08/01</span>
        </div>
        <div className="d-flex justify-content-between mt-2">
          <span>تاریخ انقضا</span>
          <span className="fw-bold">1404/08/01</span>
        </div>
      </div>

      {/* Discounts */}
      <div className="border rounded-3 p-3 shadow-sm mb-3">
        <span className="fw-bold">۵۵ درصد تخفیف ثالث</span>
      </div>
      <div className="border rounded-3 p-3 shadow-sm mb-3">
        <span className="fw-bold">۷۰ درصد تخفیف راننده</span>
      </div>

      {/* Note */}
      <p className="text-muted small">
        این تخفیفات براساس استعلام آخرین بیمه‌نامه شما از بیمه مرکزی ثبت شده است و
        تخفیفات جدید به صورت خودکار محاسبه می‌شوند.
      </p>

      {/* Buttons */}
      <div className="d-flex justify-content-between mt-4">
        <button className="btn btn-outline-primary" onClick={handlePreview}>مرحله قبل</button>
        <button className="btn btn-primary" onClick={handleNext}>تایید و ادامه</button>
      </div>
      </div>

      {/* Left Image: فقط در md و بزرگ‌تر نمایش داده شود */}
        <div className="col-md-6 d-none d-md-flex align-items-center justify-content-center">
          <img
            src="/third-product-image.webp"
            alt="car"
            className="img-fluid rounded"
          />
        </div>
        </div>
    </div>
  );
}