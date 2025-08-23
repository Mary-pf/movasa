"use client";

import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function InsurancePage() {
  const router = useRouter();
  const [selected, setSelected] = useState("");

  const handleContinue = () => {
    // if (!selected) {
    //   alert("لطفاً یک گزینه انتخاب کنید");
    //   return;
    // }
    router.push("/step2"); 
  };

  const handlePreview = () => {
    // if (!selected) {
    //   alert("لطفاً یک گزینه انتخاب کنید");
    //   return;
    // }
    router.push("/"); 
  };

  return (
    <div className="container mt-5" dir="rtl">
      <div className="row g-4">
        {/* Right Form */}
        <div className="col-12 col-md-6">
          <div className="border rounded-3 p-4 shadow-sm">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h5 className="fw-bold">بیمه شخص ثالث</h5>
              <span className="text-primary small">مقایسه قیمت</span>
            </div>

            <nav className="mb-4">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">ازکی</li>
                <li className="breadcrumb-item">بیمه وسایل نقلیه</li>
                <li className="breadcrumb-item active">بیمه شخص ثالث</li>
              </ol>
            </nav>

            <p className="fw-semibold">
              آیا خودرو در مدت بیمه‌نامه قبلی تعویض پلاک (تغییر مالکیت) داشته است؟
            </p>

            <div className="mb-4">
              <div className="form-check mb-3 p-3 border rounded">
                <input
                  className="form-check-input"
                  type="radio"
                  name="plateChange"
                  id="yes"
                  value="yes"
                  checked={selected === "yes"}
                  onChange={(e) => setSelected(e.target.value)}
                />
                <label className="form-check-label" htmlFor="yes">
                  بله، داشته است
                </label>
              </div>

              <div className="form-check p-3 border rounded">
                <input
                  className="form-check-input"
                  type="radio"
                  name="plateChange"
                  id="no"
                  value="no"
                  checked={selected === "no"}
                  onChange={(e) => setSelected(e.target.value)}
                />
                <label className="form-check-label" htmlFor="no">
                  خیر، نداشته است
                </label>
              </div>
            </div>

            <div className="d-flex justify-content-between">
              <button className="btn btn-outline-primary" onClick={handlePreview}>مرحله قبل</button>
              <button className="btn btn-primary" onClick={handleContinue}>
                تایید و ادامه
              </button>
            </div>
          </div>
        </div>

        {/* Left Image */}
        <div className="col-md-6 d-none d-md-flex align-items-center justify-content-center">
          <img
            src="/third-product-image.webp"
            alt="insurance"
            className="img-fluid rounded"
          />
        </div>
      </div>
    </div>
  );
}
