"use client";

import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function ComparePage() {
  const router = useRouter();
  const [selected, setSelected] = useState("");

  const handleContinue = () => {
    // if (!selected) {
    //   alert("لطفاً یک گزینه انتخاب کنید");
    //   return;
    // }
    // مسیر ادامه
        // router.push("/thired-party");
  };

  const handlePreview = () => {
    router.push("/step3");
  };

  return (
    <div className="container mt-3" dir="rtl">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h6 className="fw-bold">بیمه شخص ثالث</h6>
        <i className="bi bi-house-door fs-5"></i>
      </div>

      <div className="row g-3">
      

        {/* Right Card */}
        <div className="col-12 col-md-6">
          <div className="insurance-card border rounded-3 p-3 shadow-sm">
            {/* Banner */}
            <div className="custom-banner d-flex justify-content-between align-items-center mb-3">
              <span className="fw-semibold">خرید اقساطی با اعتبار ازکی</span>
              <button className="btn btn-link custom-link">دریافت اعتبار</button>
            </div>

            {/* Financial commitment */}
            <div className="commit-box pe-4 mb-3">
              <div className="d-flex justify-content-between align-items-center">
                <span className="fw-semibold">سطح تعهد مالی</span>
                <span className="text-danger fw-bold">۵۳۰.۳ میلیون تومان</span>
              </div>
              <div className="text-muted small mt-2">
                تعهد جانی: ۲/۱۳۳ میلیارد تومان | تعهد راننده: ۱/۶ میلیارد تومان
              </div>
            </div>

            {/* Discount box */}
            <div className="discount-box mb-3">
              <p className="mb-2">
                تا ۹٪ تخفیف نقدی بیمه شخص ثالث با کد <b>ESA</b>
              </p>
              <button className="btn btn-outline-primary w-100 fw-bold">
                اعمال کردن
              </button>
            </div>

            {/* Car info */}
            <div className="d-flex align-items-center mb-3 car-box">
              <i className="bi bi-car-front fs-4 ms-2 text-secondary"></i>
              <div>
                <p className="mb-0 fw-semibold">پژو ۲۰۶ تیپ ۶</p>
                <small className="text-muted">مدل ۱۳۸۸</small>
              </div>
            </div>

            {/* Duration */}
            <div className="mb-3">
              <label className="form-label text-muted small">
                مدت اعتبار بیمه‌نامه جدید
              </label>
              <select className="form-select">
                <option>یک ساله</option>
                <option>شش ماهه</option>
                <option>سه ماهه</option>
              </select>
            </div>

            {/* Insurance Card Header */}
            <div className="d-flex justify-content-between align-items-center mb-2">
              <div>
                <h6 className="fw-bold mb-1">بیمه تعاون</h6>
                <small className="text-muted">بدون پیش‌پرداخت در ۱۰ قسط</small>
              </div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Cooperative_Insurance_logo.png/120px-Cooperative_Insurance_logo.png"
                alt="لوگوی تعاون"
                width={45}
              />
            </div>

            {/* Rating */}
            <div className="d-flex align-items-center mb-2">
              <i className="bi bi-star-fill text-warning me-1"></i>
              <span className="fw-bold">۴.۲</span>
              <small className="text-muted ms-2">(۳۸۸۸ نظر)</small>
            </div>

            {/* Installment info */}
            <div className="installment-box mb-2">
              اقساطی بی چک و سود (تا ۸ قسط)
            </div>

            {/* Services */}
            <ul className="list-unstyled small mb-0">
              <li>۴۹ شعبه پرداخت خسارت</li>
              <li>پرداخت خسارت در کمتر از ۵ روز</li>
            </ul>

            {/* Buttons */}
            <div className="d-flex justify-content-between mt-3">
              <button className="btn btn-outline-primary" onClick={handlePreview}>مرحله قبل</button>
              <button className="btn btn-primary" onClick={handleContinue}>تایید و ادامه</button>
            </div>
          </div>
        </div>

          {/* Left Image: فقط MD و بالاتر */}
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
