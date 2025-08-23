"use client";

import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function CarInfoPage() {
  const router = useRouter();

  const [plate, setPlate] = useState({
    firstTwo: "",
    letter: "",
    threeDigits: "",
    lastTwo: ""
  });

  const handleContinue = () => router.push("/step3");
  const handlePreview = () => router.push("/step2");

  // کنترل ورودی پلاک
  const handleInputChange = (field, value) => {
    if (field === "letter") {
      // فقط حروف فارسی
      const persianLetter = value.replace(/[^آ-ی]/g, "");
      setPlate({ ...plate, [field]: persianLetter });
    } else {
      // فقط اعداد
      const numbersOnly = value.replace(/[^0-9]/g, "");
      setPlate({ ...plate, [field]: numbersOnly });
    }
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
          <div className="border rounded-3 p-4 shadow-sm">
            {/* Plate */}
            <div className="d-flex justify-content-center align-items-center mb-4">
              <div className="iran-plate d-flex align-items-center p-2">
                <div className="flag me-2 text-center">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_Iran.svg/40px-Flag_of_Iran.svg.png"
                    alt="iran"
                    width={25}
                  />
                  <p className="small mb-0">I.R. IRAN</p>
                </div>
                <input
                  type="text"
                  maxLength={2}
                  className="plate-input"
                  placeholder="79"
                  value={plate.firstTwo}
                  onChange={(e) => handleInputChange("firstTwo", e.target.value)}
                />
                <input
                  type="text"
                  maxLength={1}
                  className="plate-input letter-input"
                  placeholder="ص"
                  value={plate.letter}
                  onChange={(e) => handleInputChange("letter", e.target.value)}
                />
                <input
                  type="text"
                  maxLength={3}
                  className="plate-input"
                  placeholder="117"
                  value={plate.threeDigits}
                  onChange={(e) => handleInputChange("threeDigits", e.target.value)}
                />
                <input
                  type="text"
                  maxLength={2}
                  className="plate-input"
                  placeholder="55"
                  value={plate.lastTwo}
                  onChange={(e) => handleInputChange("lastTwo", e.target.value)}
                />
              </div>
            </div>

            {/* Dropdowns */}
            <div className="row g-3">
              <div className="col-6">
                <label className="form-label">نوع</label>
                <select className="form-select">
                  <option>سواری</option>
                  <option>وانت</option>
                  <option>موتور</option>
                </select>
              </div>
              <div className="col-6">
                <label className="form-label">کاربری</label>
                <select className="form-select border-danger text-danger">
                  <option>کاربری</option>
                  <option>شخصی</option>
                  <option>عمومی</option>
                </select>
              </div>
              <div className="col-6">
                <label className="form-label">برند</label>
                <select className="form-select border-danger text-danger">
                  <option>برند</option>
                  <option>پراید</option>
                  <option>پژو</option>
                  <option>سمند</option>
                </select>
              </div>
              <div className="col-6">
                <label className="form-label">تیپ</label>
                <select className="form-select border-danger text-danger">
                  <option>تیپ</option>
                  <option>111</option>
                  <option>132</option>
                  <option>SLX</option>
                </select>
              </div>
              <div className="col-6">
                <label className="form-label">نوع سوخت</label>
                <input type="text" className="form-control" value="بنزینی" disabled />
              </div>
              <div className="col-6">
                <label className="form-label">سال ساخت/مدل</label>
                <select className="form-select">
                  <option>1388</option>
                  <option>1389</option>
                  <option>1390</option>
                </select>
              </div>
            </div>

            {/* Buttons */}
            <div className="d-flex justify-content-between mt-4">
              <button className="btn btn-outline-primary" onClick={handlePreview}>
                مرحله قبل
              </button>
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
            alt="car"
            className="img-fluid rounded"
          />
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .iran-plate {
          background: white;
          border: 2px solid black;
          border-radius: 6px;
          padding: 4px 8px;
          max-width: 350px;
          justify-content: center;
        }
        .flag img {
          display: block;
          margin: 0 auto 2px;
        }
        .plate-input {
          width: 40px;
          border: none;
          border-left: 1px solid #000;
          text-align: center;
          font-weight: bold;
          font-size: 1rem;
          margin: 0 2px;
          background: transparent;
        }
        .plate-input:focus {
          outline: none;
          background: #e9ecef;
        }
        .letter-input {
          width: 30px;
        }
      `}</style>
    </div>
  );
}
