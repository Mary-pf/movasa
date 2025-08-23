"use client";

import React, { useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import AuthModal from "./AuthModal";

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [searchBoxOpen, setSearchBoxOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);

  const menuItems = [
    { 
      id: "car", 
      label: "بیمه وسایل نقلیه", 
      options: [
        { title: "بیمه شخص ثالث", href: "/thired-party" },
        // { title: "بیمه بدتع خودرو", href: "/insurance/body" },
        // { title: "بیمه شخص ثالث خودرو", href: "/insurance/driver" },
        // { title: "بیمه حوادث راننده", href: "/insurance/accident" },
      ] 
    },
    { 
      id: "home", 
      label: "بیمه اموال", 
      options: [
        { title: "بیمه منزل", href: "/insurance/home" },
        { title: "بیمه کسب‌وکار", href: "/insurance/business" },
      ] 
    },
    { 
      id: "business", 
      label: "بیمه مسئولیت", 
      options: [
        { title: "مسئولیت عمومی", href: "/insurance/general" },
        { title: "مسئولیت حرفه‌ای", href: "/insurance/professional" },
      ] 
    },
    { 
      id: "mortgage", 
      label: "مشارکت", 
      options: [
        { title: "طرح A", href: "/partnership/a" },
        { title: "طرح B", href: "/partnership/b" },
      ] 
    },
    { 
      id: "credit", 
      label: "سرویس‌های اعتباری", 
      options: [
        { title: "کارت اعتباری", href: "/credit/card" },
        { title: "وام فوری", href: "/credit/loan" },
      ] 
    },
    { 
      id: "more", 
      label: "گزینه های بیشتر", 
      options: [
        { title: "گزینه X", href: "/more/x" },
        { title: "گزینه Y", href: "/more/y" },
        { title: "گزینه Z", href: "/more/z" },
      ] 
    },
    { 
      id: "news", 
      label: "اخبار و منابع", 
      options: [
        { title: "خبر ۱", href: "/news/1" },
        { title: "منبع A", href: "/news/a" },
        { title: "منبع B", href: "/news/b" },
      ] 
    },
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
      <Link
        key={opt.title}
        href={opt.href}
        className="dropdown-item"
        onClick={() => setOpenDropdown(null)} // بستن منو بعد کلیک
      >
        {opt.title}
      </Link>
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
  top: 100%;
  right: 0;              /* 👈 راست‌چین */
  left: auto;            /* مطمئن بشیم از سمت چپ محدود نیست */
  background: white;
  border: 1px solid #ccc;
  min-width: 180px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  text-align: right;     /* 👈 متن آیتم‌ها هم راست‌چین بشه */
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
