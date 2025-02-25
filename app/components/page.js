"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <style>
        {`
          nav { background: rgba(10, 25, 47, 0.9); padding: 15px; position: fixed; top: 0; width: 100%; display: flex; justify-content: center; gap: 20px; z-index: 1000; }
          nav a { color: #64ffda; font-size: 18px; text-decoration: none; padding: 10px 15px; transition: 0.3s ease-in-out; }
          nav a:hover { color: #fff; background: #64ffda; border-radius: 5px; }
        `}
      </style>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/skills">Skills</Link>
      <Link href="/services">Services</Link>
      <Link href="/portfolio">Portfolio</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}
