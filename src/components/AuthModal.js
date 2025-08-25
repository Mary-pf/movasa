"use client";

import React, { useState } from "react";

export default function AuthModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [showReferral, setShowReferral] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>

        {step === 1 && (
          <div className="step step-phone">
            <h2>برای ورود یا ثبت‌نام شماره تلفن همراه خود را وارد کنید</h2>
            <input type="text" placeholder="شماره موبایل" />
            <button onClick={() => setStep(2)}>ادامه</button>
          </div>
        )}

        {step === 2 && (
          <div className="step">
            <h2>ثبت‌نام</h2>
            <input type="text" placeholder="شماره موبایل" />
            <input type="text" placeholder="کد تایید" />
            <input type="text" placeholder="نام" />
            <input type="text" placeholder="نام خانوادگی" />
            <input type="password" placeholder="رمز عبور" />
            <input type="password" placeholder="تکرار رمز عبور" />

            {/* کد معرف */}
            <div className="checkbox">
              <input
                type="checkbox"
                id="refCheck"
                onChange={(e) => setShowReferral(e.target.checked)}
              />
              <label htmlFor="refCheck">کد معرف دارم</label>
            </div>
            {showReferral && (
              <input type="text" placeholder="کد معرف (اختیاری)" />
            )}

            {/* قوانین */}
            <div className="terms">
              <input type="checkbox" id="termsCheck" />
              <label htmlFor="termsCheck">
                استفاده از سایت به معنی پذیرش{" "}
                <a href="#">شرایط و قوانین</a> این سرویس و{" "}
                <a href="#">قوانین حفظ حریم خصوصی</a> است.
              </label>
            </div>

            {/* دکمه‌ها */}
            <div className="actions">
              <button className="primary">ادامه</button>
              <button className="secondary" onClick={() => setStep(1)}>بازگشت</button>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .modal-overlay {
          position: fixed; inset: 0;
          background: rgba(0,0,0,0.6);
          display: flex; align-items: center; justify-content: center;
          z-index: 1000;
        }
        .modal-content {
  background: #fff;
  padding: 30px 25px;
  border-radius: 16px;
  width: 420px;
  max-width: 92%;
  box-shadow: 0 15px 40px rgba(0,0,0,0.25);
  position: relative;
  animation: fadeIn 0.25s ease-out;
  direction: rtl;
  text-align: right;
  max-height: 80vh;     /* ارتفاع حداکثر ۸۰٪ از صفحه */
  overflow-y: auto;     /* فقط محتوای داخل مودال اسکرول بخوره */
   scrollbar-width: thin;           /* برای فایرفاکس */
  scrollbar-color: #1976d2 #e0e0e0; /* رنگ نوار و پس‌زمینه */
}

/* برای کروم، اج و سافاری */
.modal-content::-webkit-scrollbar {
  width: 6px;  /* ضخامت نوار اسکرول */
}

.modal-content::-webkit-scrollbar-track {
  background: #f0f0f0;  /* رنگ پشت نوار */
  border-radius: 16px;   /* گوشه‌های گرد پشت نوار */
}

.modal-content::-webkit-scrollbar-thumb {
  background-color: #1976d2; /* رنگ خود نوار */
  border-radius: 26px;        /* گوشه‌های گرد نوار */
  border: 2px solid #f0f0f0; /* فاصله از لبه‌ها */
}

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .close-btn {
          position: absolute; top: 14px; left: 14px;
          border: none; background: transparent;
          font-size: 22px; cursor: pointer;
        }
        h2 { margin-bottom: 18px; font-size: 20px; color: #2f4858; text-align: center; }
        input[type="text"], input[type="password"] {
          width: 100%; padding: 10px 12px; margin: 8px 0;
          border: 1px solid #d9d9d9; border-radius: 10px; font-size: 15px;
        }
        input:focus { border-color: #4cafef; box-shadow: 0 0 0 2px rgba(76,175,239,0.2); outline: none; }

        /* چک‌باکس‌ها */
        .checkbox {
          display: flex; align-items: center; gap: 6px;
          margin-top: 10px;
        }
        .checkbox input { margin: 0; }
        .terms {
          display: flex; align-items: flex-start; gap: 6px;
          margin-top: 14px; font-size: 13px; color: #555;
          line-height: 1.6;
        }
        .terms input { margin-top: 3px; }
        .terms a { color: #1976d2; text-decoration: none; font-weight: 500; }

        /* دکمه‌ها */
        .actions { margin-top: 20px; display: flex; flex-direction: column; gap: 8px; }
        .actions .primary {
          background: #1976d2; color: #fff; padding: 12px;
          border-radius: 10px; border: none; cursor: pointer;
          font-size: 15px; font-weight: 600;
        }
        .actions .secondary {
          background: #f2f2f2; color: #333; padding: 12px;
          border-radius: 10px; border: none; cursor: pointer;
          font-size: 15px; font-weight: 500;
        }

        /* فقط برای مرحله اول */
.step-phone {
  text-align: center;
}

.step-phone input {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 12px;
  font-size: 15px;
  margin-bottom: 14px;
  transition: border 0.3s ease, box-shadow 0.3s ease;
}

.step-phone input:focus {
  border-color: #1976d2;
  box-shadow: 0 0 5px rgba(25,118,210,0.3);
  outline: none;
}

.step-phone button {
  width: 100%;
  padding: 12px;
  background: #1976d2;
  color: white;
  font-size: 15px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.step-phone button:hover {
  background: #1258a8;
}

      `}</style>
    </div>
  );
}
