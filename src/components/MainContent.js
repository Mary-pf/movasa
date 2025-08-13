"use client";

import React, { useState } from "react";
import {
  FaCarSide,
  FaHome,
  FaPlane,
  FaBusinessTime,
  FaMoneyCheckAlt,
  FaCreditCard,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function MainContent() {
  const [activeTab, setActiveTab] = useState("car");
  const [searchValue, setSearchValue] = useState("");

  const [selectedMortgageOption, setSelectedMortgageOption] = useState(null);


   const [forOther, setForOther] = useState(false);

  // فیلدهای اختصاصی هر تب (قالب ثابت، محتوا متفاوت)
  const tabForms = {
    car: {
      title: "اطلاعات وسایل نقلیه",
      fields: [
        { label: "مدل خودرو", type: "text", name: "carModel", placeholder: "مثلاً پژو ۲۰۶" },
        { label: "سال ساخت", type: "number", name: "carYear", placeholder: "مثلاً ۱۳۹۸" },
        { label: "شماره پلاک", type: "text", name: "plate", placeholder: "مثلاً 12الف345-67" },
        { label: "کاربری", type: "text", name: "usage", placeholder: "شخصی / تاکسی / ..." },
      ],
    },
    home: {
      title: "بیمه بدنه",
      fields: [
        { label: "کدملی صاحب پلاک", type: "number", name: "phone", placeholder: "کدملی صاحب پلاک" },
        { label: "شماره پلاک", type: "text", name: "plate", placeholder: "مثلاً 12الف345-67" },
      ],
    },
    travel: {
      title: "بیمه شخص ثالث",
      fields: [
        { label: "کدملی صاحب پلاک", type: "number", name: "phone", placeholder: "کدملی صاحب پلاک" },
        { label: "شماره پلاک", type: "text", name: "plate", placeholder: "مثلاً 12الف345-67" },
      ],
    },
    business: {
      title: "بیمه شخص ثالث موتور سیکلت",
      fields: [
        { label: "کدملی صاحب پلاک", type: "number", name: "phone", placeholder: "کدملی صاحب پلاک" },
        { label: "شماره پلاک", type: "text", name: "plate", placeholder: "مثلاً 12الف345-67" },
      ],
    },
    mortgage: {
      title: "بیمه خانه",
      fields: [
        { label: "مبلغ سرمایه (تومان)", type: "number", name: "amount", placeholder: "مثلاً 200,000,000" },
        { label: "مدت (ماه)", type: "number", name: "duration", placeholder: "مثلاً 12" },
        { label: "نوع سرمایه", type: "text", name: "type", placeholder: "مثلاً کم‌ریسک" },
      ],
    },
    mortgage: {
      title: "بیمه عمر",
      fields: [
        { label: "", type: "number", name: "amount", placeholder: "مثلاً 200,000,000" },
        { label: "مدت (ماه)", type: "number", name: "duration", placeholder: "مثلاً 12" },
        { label: "نوع سرمایه", type: "text", name: "type", placeholder: "مثلاً کم‌ریسک" },
      ],
    },

    // در tabForms اینو جای mortgage فعلی بگذار:
// در tabForms
mortgage: {
  title: "بیمه خانه",
  steps: {
    step1: [
      { 
        id: "fire", 
        label: "آتش‌سوزی", 
        description: "پوشش خسارات ناشی از آتش‌سوزی", 
        icon: "🔥", 
        badge: "صدور آنی"
      },
      { 
        id: "theft", 
        label: "سرقت", 
        description: "حفاظت از وسایل منزل در برابر سرقت", 
        icon: "🛡️", 
        badge: "جدید"
      },
      { 
        id: "earthquake", 
        label: "سیل و زلزله", 
        description: "پوشش حوادث طبیعی", 
        icon: "🌊", 
        badge: "ویژه"
      },
    ],
    forms: {
      fire: [
        { label: "ارزش تقریبی ساختمان (تومان)", type: "number", name: "buildingValue", placeholder: "مثلاً 500,000,000" },
        { label: "ارزش وسایل منزل (تومان)", type: "number", name: "contentValue", placeholder: "مثلاً 200,000,000" },
      ],
      theft: [
        { label: "تعداد درب‌های ورودی", type: "number", name: "doorsCount", placeholder: "مثلاً 2" },
        { label: "نوع حفاظ‌ها", type: "text", name: "securityType", placeholder: "مثلاً درب ضدسرقت" },
      ],
      earthquake: [
        { label: "سال ساخت ساختمان", type: "number", name: "yearBuilt", placeholder: "مثلاً 1395" },
        { label: "تعداد طبقات", type: "number", name: "floors", placeholder: "مثلاً 4" },
      ],
    }
  }
},


    // credit: {
    //   title: "سرویس‌های اعتباری",
    //   fields: [
    //     { label: "نوع سرویس", type: "text", name: "serviceType", placeholder: "مثلاً خرید اقساطی" },
    //     { label: "میزان اعتبار درخواستی", type: "number", name: "credit", placeholder: "مثلاً 50,000,000" },
    //     { label: "شماره تماس", type: "tel", name: "phone", placeholder: "مثلاً 0912xxxxxxx" },
    //   ],
    // },
  };

  const tabs = [
    { id: "car", label: "وسایل نقلیه", icon: <FaCarSide /> },
    { id: "home", label: "بیمه بدنه خودرو", icon: <FaHome /> },
    { id: "travel", label: "بیمه شخص ثالث", icon: <FaPlane /> },
    { id: "business", label: "بیمه موتور سیکلت", icon: <FaBusinessTime /> },
    { id: "mortgage", label: "بیمه خانه", icon: <FaMoneyCheckAlt /> },
    // { id: "credit", label: "سرویس‌های اعتباری", icon: <FaCreditCard /> },
  ];

  const handleQuote = () => {

    console.log("Search with:", searchValue);
  };

  const handleSubmitTab = (tabId) => {

    console.log("Submit form for tab:", tabId);
  };

  return (
    <>
      <main>
        <h1>
          نرخ <span>بهتری را دریافت کنید</span>
        </h1>
        <p>بیمه خودرو، اموال و سرویس‌های اعتباری را تنها با چند کلیک مقایسه کنید</p>

        <div className="tabs">
          {tabs.map((tab) => {
            const open = activeTab === tab.id;
            const config = tabForms[tab.id];

            return (
              <div
                key={tab.id}
                className={`tab ${open ? "active" : ""}`}
                onClick={() => setActiveTab(open ? null : tab.id)}
                role="button"
                tabIndex={0}
                onKeyDown={() => {}}
              >
                <div className="icon-bg">{tab.icon}</div>
                {tab.label}
                {open && <div className="underline"></div>}

              {open && config && (
 <div
    className={`tab-content ${tab.id === "car" ? "car-dropdown" : ""} ${tab.id === "mortgage" ? "mortgage-dropdown" : ""}`}
    onClick={(e) => e.stopPropagation()}
  >
    <div className="tab-title">{config.title}</div>

    {tab.id === "mortgage" && !selectedMortgageOption && (
  <div className="option-cards-vertical">
    {config.steps.step1.map(opt => (
      <div 
        key={opt.id} 
        className="option-card-vertical"
        onClick={() => setSelectedMortgageOption(opt.id)}
      >
        <span className="icon">{opt.icon}</span>
        <div className="title">{opt.label}</div>
        <div className="description">{opt.description}</div>
        <span className="badge">{opt.badge}</span>
      </div>
    ))}
  </div>
)}


    {tab.id === "mortgage" && selectedMortgageOption && (
      <div className="fields-row">
        {config.steps.forms[selectedMortgageOption].map((f, idx) => (
          <div className="field" key={idx}>
            <label>{f.label}</label>
            <input type={f.type} name={f.name} placeholder={f.placeholder || ""} />
          </div>
        ))}
      </div>
    )}

    {tab.id !== "mortgage" && (
      <div className="fields-row">
        {config.fields.map((f, idx) => (
          <div className="field" key={idx}>
            <label>{f.label}</label>
            <input type={f.type} name={f.name} placeholder={f.placeholder || ""} />
          </div>
        ))}
      </div>
    )}

    <button className="submit-btn" onClick={() => handleSubmitTab(tab.id)}>
      ارسال
    </button>
  </div>
)}

              </div>
            );
          })}
        </div>

        <div className="input-group">
          <div className="input-icon">
            <FaMapMarkerAlt />
          </div>
          <input
            type="text"
            placeholder="کد ملی یا کد پستی"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleQuote()}
          />
          <button onClick={handleQuote}>Get My Quote</button>
        </div>
      </main>

      <style jsx>{`
        main {
          background: #fef3f0;
          padding: 60px 20px 100px;
          text-align: center;
          clip-path: ellipse(150% 100% at 50% 0%);
          direction: rtl;
        }
        main h1 {
          font-weight: 900;
          font-size: 36px;
          margin-bottom: 12px;
        }
        main h1 span {
          color: #d93025;
        }
        main p {
          font-size: 18px;
          color: #222;
          margin-bottom: 48px;
        }

        .tabs {
          display: flex;
          justify-content: center;
          gap: 48px;
          margin-bottom: 48px;
          flex-wrap: wrap;
          user-select: none;
        }

        .tab {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          cursor: pointer;
          color: #999;
          font-size: 14px;
          transition: all 0.25s ease;
          width: 160px;
          position: relative;
          border-radius: 12px;
          padding: 10px;
        }

        .tab:hover {
          transform: translateY(-2px);
        }

        .tab.active {
        z-index:10000;
  color: #222;
  border: 2px solid #d93025; /* قاب قرمز دور تب فعال */
  border-bottom: none; /* خط پایین حذف بشه تا به content بچسبه */
  box-shadow: 0 8px 20px rgba(217, 48, 37, 0.12);
  background: white;
  border-radius: 12px 12px 0 0; /* فقط بالا گرد بشه */
}

        .tab.active .icon-bg {
          background-color: black;
          color: white;
        }

        .icon-bg {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background-color: #ccc;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 26px;
          transition: background-color 0.3s ease, color 0.3s ease, transform 0.2s ease;
        }

        .tab:hover .icon-bg {
          transform: scale(1.03);
        }

        .underline {
          height: 3px;
          background-color: white;
          width: 100%;
          border-radius: 3px;
          margin-top: 19px;
        }
          


.tab-content {
  width: auto;
  min-width: 650px;
  background: #ffffff;
  border-radius: 0 0 12px 12px; /* فقط پایین گرد بشه */
  padding: 14px;
  margin-top: 0; /* فاصله حذف بشه تا بچسبه به تب */
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  animation: slideDown 200ms ease forwards;
  border: 2px solid #d93025; /* قاب قرمز مثل تب */
  // border-top: none; /* خط بالا حذف بشه چون تب هست */
}
  
        .tab-title {
          font-size: 14px;
          font-weight: 700;
          color: #333;
          margin-bottom: 12px;
          text-align: right;
        }

        .fields-row {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 12px;
  flex-wrap: wrap; /* اجازه رفتن به خط بعدی */
  justify-content: flex-start;
  margin-bottom: 12px;
}

.field {
  display: flex;
  flex-direction: column;
  min-width: 180px; /* حداقل اندازه */
  flex: 1 1 180px;  /* قابل گسترش اما اگر جا نبود میره خط بعدی */
}


        .field label {
          font-size: 12px;
          color: #555;
          margin-bottom: 6px;
          text-align: right;
        }

        .field input {
          padding: 10px 12px;
          border-radius: 10px;
          border: 1.5px solid #ddd;
          outline: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
          background: #fafafa;
        }

        .field input:focus {
          border-color: #d93025;
          box-shadow: 0 0 0 3px rgba(217, 48, 37, 0.1);
          background: #fff;
        }

        .submit-btn {
          background-color: #a4221b;
          color: white;
          font-weight: 700;
          padding: 10px 18px;
          border-radius: 10px;
          border: none;
          cursor: pointer;
          transition: transform 0.15s ease, box-shadow 0.15s ease;
        }

        .submit-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 16px rgba(164, 34, 27, 0.25);
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .input-group {
          display: inline-flex;
          align-items: center;
          border: 1px solid black;
          border-radius: 50px;
          overflow: hidden;
          max-width: 350px;
          width: 90vw;
          height: 50px;
        }

        .input-icon {
          padding: 0 12px;
          color: #555;
          font-size: 18px;
        }

        .car-dropdown {
margin-right: 20rem;
}

        input[type="text"] {
          flex-grow: 1;
          border: none;
          outline: none;
          padding: 14px 12px;
          font-size: 16px;
          color: #777;
          font-style: italic;
          background: transparent;
          text-align: right;
        }
.option-cards-vertical {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.option-card-vertical {
  background: #fff;
  border: 2px solid #eee;
  border-radius: 12px;
  padding: 16px;
  position: relative;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: center;
}

.option-card-vertical:hover {
  border-color: #d93025;
  background: #fff8f7;
}

.option-card-vertical .icon {
  font-size: 32px;
  margin-bottom: 8px;
}

.option-card-vertical .title {
  font-weight: 700;
  font-size: 18px;
}

.option-card-vertical .description {
  font-size: 14px;
  color: #666;
  margin-top: 4px;
}

.mortgage-dropdown{
margin-left:28rem;
}


.option-card-vertical .badge {
  position: absolute;
  top: 12px;
  right: 12px;
  background: #2534d9ff;
  color: white;
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 12px;
}

        button {
          background-color: #a4221b;
          color: white;
          font-weight: 700;
          min-width: 162px;
margin-left: -60px !important;
          border-radius: 36px;
          border-color: transparent;
          font-size: 1.1rem;
          height: 48px;
          opacity: 1;
          margin-bottom: 3px;
          cursor: pointer;
        }

        button:hover {
          background-color: #a4221b;
        }

        @media (max-width: 600px) {
          .tabs {
            gap: 24px;
          }
          .tab {
            width: 140px;
            font-size: 12px;
            gap: 8px;
          }
          .icon-bg {
            width: 48px;
            height: 48px;
            font-size: 22px;
          }
          main h1 {
            font-size: 28px;
          }
          main p {
            font-size: 16px;
            margin-bottom: 32px;
          }
          .field {
            min-width: 140px;
          }
        }
      `}</style>
    </>
  );
}
