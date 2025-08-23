"use client";

import React, { useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import AuthModal from "./AuthModal"; // مودال جدا

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [searchBoxOpen, setSearchBoxOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);

  const menuItems = [
    { id: "car", label: "بیمه وسایل نقلیه", options: ["Option 1", "Option 2"] },
    { id: "home", label: "بیمه اموال", options: ["Option A", "Option B"] },
    { id: "business", label: "بیمه مسئولیت", options: ["Biz 1", "Biz 2"] },
    { id: "mortgage", label: "مشارکت", options: ["Rate 1", "Rate 2"] },
    { id: "credit", label: "سرویس‌های اعتباری", options: ["Card 1", "Card 2"] },
    { id: "more", label: "گزینه های بیشتر", options: ["Option X", "Option Y", "Option Z"] },
    { id: "news", label: "اخبار و منابع", options: ["News 1", "Resource A", "Resource B"] },
  ];

  const toggleDropdown = (id) => {
    if (searchBoxOpen) setSearchBoxOpen(false);
    setOpenDropdown(openDropdown === id ? null : id);
  };

  const toggleSearchBox = (e) => {
    e.stopPropagation();
    setSearchBoxOpen(!searchBoxOpen);
    setOpenDropdown(null);
  };

  return (
    <>
      <header className="header">
        <div className="logo">LOGO</div>

        {/* دکمه همبرگری */}
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          {menuItems.map(({ id, label, options }) => (
            <div
              key={id}
              className="dropdown"
              onClick={() => toggleDropdown(id)}
              tabIndex={0}
            >
              {label}
              <span className="arrow">{openDropdown === id ? "▲" : "▼"}</span>

              {id === "news" && (
                <FaSearch
                  className="search-icon"
                  onClick={(e) => toggleSearchBox(e)}
                  tabIndex={0}
                  role="button"
                  aria-label="Toggle search box"
                />
              )}

              {openDropdown === id && (
                <div className="dropdown-menu">
                  {options.map((opt) => (
                    <div key={opt} className="dropdown-item">
                      {opt}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* دکمه ورود / ثبت نام */}
        <button className="auth-btn" onClick={() => setAuthModalOpen(true)}>
          ورود / ثبت نام
        </button>
      </header>

      {searchBoxOpen && (
        <div className="search-box">
          <input type="text" placeholder="Search..." autoFocus />
          <button onClick={() => setSearchBoxOpen(false)}>Close</button>
        </div>
      )}

      {/* نمایش مودال */}
      <AuthModal isOpen={authModalOpen} onClose={() => setAuthModalOpen(false)} />

      <style jsx>{`
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 20px;
          background: #f8f8f8;
          position: relative;
        }
        .logo {
          font-size: 20px;
          font-weight: bold;
        }
        .nav {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex: 1;
        }
        .dropdown {
          position: relative;
          cursor: pointer;
        }
        .arrow {
          margin-left: 5px;
        }
        .dropdown-menu {
          position: absolute;
          top: 35px;
          left: 0;
          background: white;
          border: 1px solid #ccc;
          min-width: 150px;
          z-index: 10;
        }
        .dropdown-item {
          padding: 8px 12px;
        }
        .dropdown-item:hover {
          background: #eee;
        }
        .search-icon {
          margin-left: 8px;
          cursor: pointer;
        }
        .search-box {
          background: white;
          padding: 10px;
          border: 1px solid #ccc;
        }
        .menu-toggle {
          display: none;
          font-size: 24px;
          cursor: pointer;
        }
        .auth-btn {
          border: 1px solid #354f52;
          border-radius: 8px;
          padding: 6px 14px;
          background: white;
          cursor: pointer;
          font-weight: 500;
        }
        .auth-btn:hover {
          background: #354f52;
          color: white;
        }
        @media (max-width: 1250px) {
          .menu-toggle {
            display: block;
          }
          .nav {
            display: none;
            flex-direction: column;
            position: absolute;
            top: 60px;
            left: 20px;
            background: white;
            width: 200px;
            border: 1px solid #ccc;
            padding: 10px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
          }
          .nav.open {
            display: flex;
          }
          .dropdown-menu {
            position: static;
            border: none;
            background: #f9f9f9;
          }
        }
      `}</style>
    </>
  );
}
