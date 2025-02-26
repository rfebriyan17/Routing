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
      height: "60px", 
      zIndex: 1000, 
      background: "rgba(10, 25, 47, 0.9)", 
      backdropFilter: "blur(10px)", 
      padding: "10px 20px", 
      display: "flex", 
      justifyContent: "space-between", 
      alignItems: "center",
      transition: "background 0.3s ease",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)" /* Tambahkan shadow */
    }}>
      <h1 style={{ color: "#64ffda", fontSize: "20px", fontWeight: "bold" }}>CV</h1>

      <button onClick={() => setIsOpen(!isOpen)} className="menu-button">
        {isOpen ? "✖" : "☰"}
      </button>

      <div className="menu-desktop">
        {["Home", "About", "Skills", "Portfolio", "Services", "Skripsi", "Contact"].map((item) => (
          <Link key={item} href={item === "Home" ? "/" : `/${item.toLowerCase()}`} legacyBehavior>
            <a style={{ color: "#64ffda", fontSize: "16px", textDecoration: "none", padding: "10px 15px", transition: "color 0.3s" }}>
              {item}
            </a>
          </Link>
        ))}
      </div>

      {isOpen && (
        <div className="menu-mobile">
          {["Home", "About", "Skills", "Portfolio", "Services", "Skripsi", "Contact"].map((item) => (
            <Link key={item} href={item === "Home" ? "/" : `/${item.toLowerCase()}`} legacyBehavior>
              <a onClick={() => setIsOpen(false)} style={{ color: "#64ffda", fontSize: "18px", textDecoration: "none", padding: "10px", transition: "color 0.3s" }}>
                {item}
              </a>
            </Link>
          ))}
        </div>
      )}

      <style jsx>{`
        :root {
          --navbar-height: 60px;
        }

        .menu-desktop {
          display: flex;
          gap: 20px;
        }

        .menu-mobile {
          position: absolute;
          top: var(--navbar-height);
          right: 0;
          width: 100%;
          background: rgba(10, 25, 47, 0.9);
          backdrop-filter: blur(10px);
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 10px;
          padding: 20px;
        }

        .menu-button {
          background: none;
          border: none;
          color: #64ffda;
          font-size: 24px;
          cursor: pointer;
          margin-right: 10px;
          display: none;
        }

        @media (max-width: 768px) {
          .menu-desktop {
            display: none;
          }
          .menu-button {
            display: block;
          }
        }
      `}</style>
    </nav>
  );
}
