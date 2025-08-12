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

  const tabs = [
    { id: "car", label: "Car Insurance", icon: <FaCarSide /> },
    { id: "home", label: "Home Insurance", icon: <FaHome /> },
    { id: "travel", label: "Travel Insurance", icon: <FaPlane /> },
    { id: "business", label: "Business Insurance", icon: <FaBusinessTime /> },
    { id: "mortgage", label: "Mortgage Rates", icon: <FaMoneyCheckAlt /> },
    { id: "credit", label: "Credit Cards", icon: <FaCreditCard /> },
  ];

  return (
    <>
      <main>
        <h1>
          Get a <span>better rate.</span>
        </h1>
        <p>Compare car insurance, mortgages and credit cards in just a few clicks.</p>

        <div className="tabs">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`tab ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
              role="button"
              tabIndex={0}
              onKeyDown={() => {}}
            >
              <div className="icon-bg">{tab.icon}</div>
              {tab.label}
              {activeTab === tab.id && <div className="underline"></div>}
            </div>
          ))}
        </div>

        <div className="input-group">
          <div className="input-icon">
            <FaMapMarkerAlt />
          </div>
          <input type="text" placeholder="Postal Code" />
          <button>Get My Quote</button>
        </div>
      </main>

      <style jsx>{`
        main {
          background: #fef3f0;
          padding: 60px 20px 100px;
          text-align: center;
          clip-path: ellipse(150% 100% at 50% 0%);
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
          transition: all 0.3s ease;
          width: 100px;
        }
        .tab.active {
          color: #222;
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
          transition: background-color 0.3s ease, color 0.3s ease;
        }
        .underline {
          height: 3px;
          background-color: #d93025;
          width: 100%;
          border-radius: 3px;
          margin-top: 6px;
        }
        .input-group {
          display: inline-flex;
          align-items: center;
          border: 1px solid black;
          border-radius: 50px;
          overflow: hidden;
          max-width: 350px;
          width: 90vw;
        }
        .input-icon {
          padding: 0 12px;
          color: #555;
          font-size: 18px;
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
        }
        button {
          background-color: #d93025;
          border: none;
          color: white;
          padding: 14px 28px;
          font-weight: 700;
          font-size: 16px;
          cursor: pointer;
          border-radius: 50px;
          transition: background-color 0.3s ease;
        }
        button:hover {
          background-color: #a4221b;
        }
        @media (max-width: 600px) {
          .tabs {
            gap: 24px;
          }
          .tab {
            width: 80px;
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
        }
      `}</style>
    </>
  );
}
