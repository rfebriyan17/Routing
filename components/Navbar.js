"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav style={{ 
      position: "fixed", 
      top: 0, 
      width: "100%", 
      zIndex: 1000, 
      background: "#0a192f", 
      padding: "15px 20px", 
      display: "flex", 
      justifyContent: "space-between", 
      alignItems: "center" 
    }}>
      {/* Logo */}
      <h1 style={{ color: "#64ffda", fontSize: "20px", fontWeight: "bold" }}>My CV</h1>

      {/* Tombol Menu Mobile (Hanya Muncul di Mobile) */}
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="menu-button" 
        style={{ marginRight: "20px" }} // Tambahkan margin kanan agar tidak mepet
      >
        {isOpen ? "✖" : "☰"}
      </button>

      {/* Menu Desktop */}
      <div className="menu-desktop">
        {["Home", "About", "Skills", "Portfolio", "Services", "Contact"].map((item) => (
          <Link key={item} href={item === "Home" ? "/" : `/${item.toLowerCase()}`} legacyBehavior>
            <a style={{ color: "#64ffda", fontSize: "18px", textDecoration: "none", padding: "10px 15px", transition: "0.3s ease-in-out" }}>
              {item}
            </a>
          </Link>
        ))}
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="menu-mobile">
          {["Home", "About", "Skills", "Portfolio", "Services", "Contact"].map((item) => (
            <Link key={item} href={item === "Home" ? "/" : `/${item.toLowerCase()}`} legacyBehavior>
              <a onClick={() => setIsOpen(false)} style={{ color: "#64ffda", fontSize: "18px", textDecoration: "none", padding: "10px" }}>
                {item}
              </a>
            </Link>
          ))}
        </div>
      )}

      {/* CSS untuk Responsif */}
      <style jsx>{`
        .menu-desktop {
          display: flex;
          gap: 20px;
        }
        .menu-mobile {
          position: absolute;
          top: 60px;
          left: 0;
          width: 100%;
          background: #0a192f;
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 10px;
          padding: 20px;
        }
        .menu-button {
          background: none;
          border: none;
          color: #fff;
          font-size: 24px;
          cursor: pointer;
          display: none; /* Sembunyikan di Desktop */
        }
        @media (max-width: 768px) {
          .menu-desktop {
            display: none;
          }
          .menu-button {
            display: block; /* Tampilkan di Mobile */
            margin-right: 20px; /* Tambahkan margin agar tidak terlalu ke pinggir */
          }
        }
      `}</style>
    </nav>
  );
}
