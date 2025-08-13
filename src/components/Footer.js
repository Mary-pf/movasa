"use client";

import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5" dir="rtl">
      <div className="container">
        <div className="row flex-sm-row-reverse text-center text-sm-end">
            {/* ستون آخر */}
              <div className="col-12 col-sm-6 col-lg-3 mb-4">
            <h5 className="fw-bold mb-3">شرکت ما</h5>
            <p className="small">
              {/* ما یک تیم خلاق هستیم که با هدف ارائه بهترین خدمات در حوزه طراحی وب و توسعه نرم‌افزار فعالیت می‌کنیم. */}
            </p>
          </div>
          
          {/* ستون شبکه‌های اجتماعی */}
          <div className="col-12 col-sm-6 col-lg-3 mb-4 text-center">
            <h5 className="fw-bold mb-3">ما را دنبال کنید</h5>
            <div className="d-flex gap-3 justify-content-end ps-5">
                            <ul className="list-unstyled">
                <li>
              <a href="#" className="text-light text-decoration-none small"><FaFacebook size={20} /></a>
                </li>
                <li>

              <a href="#" className="text-light text-decoration-none small"><FaInstagram size={20} /></a>
                </li>
                <li>

              <a href="#" className="text-light text-decoration-none small"><FaTwitter size={20} /></a>
                </li>
                <li>

              <a href="#" className="text-light text-decoration-none small"><FaLinkedin size={20} /></a>
                </li>
                </ul>
                            <ul className="list-unstyled text-end pe-4">
              <li><a href="#" className="text-light text-decoration-none small">اخبار و منابع</a></li>
              <li><a href="#" className="text-light text-decoration-none small">همکاران و شرکا</a></li>
              <li><a href="#" className="text-light text-decoration-none small">فرانسوی</a></li>
              <li><a href="#" className="text-light text-decoration-none small">شرکا</a></li>
            </ul>
            </div>
          </div>

          {/* ستون لینک‌های مفید */}
          <div className="col-12 col-sm-6 col-lg-3 mb-4">
            <h5 className="fw-bold mb-3">منابع</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none small">درباره ما</a></li>
              <li><a href="#" className="text-light text-decoration-none small">فرصت‌های شغلی</a></li>
              <li><a href="#" className="text-light text-decoration-none small">تماس با ما</a></li>
              <li><a href="#" className="text-light text-decoration-none small">رسانه</a></li>
              <li><a href="#" className="text-light text-decoration-none small">باشگاه مشتریان</a></li>
            </ul>
          </div>

          {/* ستون تماس با ما */}
          <div className="col-12 col-sm-6 col-lg-3 mb-4">
            <h5 className="fw-bold mb-3">مواسا</h5>
            <ul className="list-unstyled small">
              <li>📍 تهران، خیابان مثال، پلاک ۱۲</li>
              <li>📞 021-12345678</li>
              <li>✉️ info@example.com</li>
            </ul>
          </div>        

        </div>

        {/* کپی‌رایت */}
        <div className="text-center text-secondary small mt-4 pt-3 border-top border-secondary">
          © {new Date().getFullYear()} تمام حقوق محفوظ است.
        </div>
      </div>
    </footer>
  );
}
