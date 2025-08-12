"use client";

import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [searchBoxOpen, setSearchBoxOpen] = useState(false);

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
    // اگر باکس سرچ باز بود ببندش وقتی دراپ‌داون باز میشه
    if (searchBoxOpen) setSearchBoxOpen(false);

    setOpenDropdown(openDropdown === id ? null : id);
  };

  const toggleSearchBox = (e) => {
    e.stopPropagation(); // جلوگیری از بسته شدن منوها هنگام کلیک روی سرچ
    setSearchBoxOpen(!searchBoxOpen);
    setOpenDropdown(null); // بستن منوهای دراپ‌داون وقتی سرچ باز میشه
  };

  return (
    <>
      <header>
        <div className="logo">LOGO</div>
        <nav>
          {menuItems.map(({ id, label, options }) => (
            <div
              key={id}
              className="dropdown"
              onClick={() => toggleDropdown(id)}
              tabIndex={0}
              onKeyDown={() => {}}
            >
              {label}
              {/* آیکون سرچ فقط برای news */}
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
      </header>

      {/* باکس جستجو زیر هدر */}
      {searchBoxOpen && (
        <div className="search-box">
          <input type="text" placeholder="Search..." autoFocus />
          <button onClick={() => setSearchBoxOpen(false)}>Close</button>
        </div>
      )}
    </>
  );
}
