"use client";

import { Mail, MapPin, Phone, Send, Github } from "lucide-react";
import { useState } from "react";

export default function Page() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Pesan terkirim dari ${form.name}!`);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div>
      <style>
        {`
          .contact-section {
            text-align: center;
            padding: 50px 20px;
            background: #0a192f;
            min-height: 100vh;
          }
          h2 {
            font-size: 2.8em;
            color: #64ffda;
            margin-bottom: 30px;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          }
          .contact-info {
            font-size: 1.2em;
            color: #ffffff;
            margin-bottom: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
          }
          .contact-info a {
            color: #64ffda;
            text-decoration: none;
          }
          .form-container {
            background: rgba(10, 25, 47, 0.85);
            border-radius: 15px;
            padding: 30px;
            width: 100%;
            max-width: 450px;
            margin: 30px auto;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            border: 1px solid rgba(100, 255, 218, 0.2);
          }
          .form-container input,
          .form-container textarea {
            width: 100%;
            padding: 12px;
            margin-top: 10px;
            border-radius: 8px;
            border: 1px solid rgba(100, 255, 218, 0.4);
            background: transparent;
            color: white;
            font-size: 1em;
          }
          .form-container textarea {
            height: 100px;
            resize: none;
          }
          .submit-btn {
            background: #64ffda;
            color: #0a192f;
            font-size: 1.2em;
            font-weight: bold;
            padding: 12px;
            width: 100%;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            margin-top: 15px;
            transition: background 0.3s;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
          }
          .submit-btn:hover {
            background: #52e0c4;
          }
        `}
      </style>

      <div className="contact-section">
        <h2>Contact Me</h2>
        <p className="contact-info"><Mail size={20} /> 📧 Email: <a href="mailto:rfebriyan99@email.com">rfebriyan99@email.com</a></p>
        <p className="contact-info"><Phone size={20} /> 📞 WhatsApp: <a href="tel:+6285952627138">+62-8595-2627-138</a></p>
        <p className="contact-info"><MapPin size={20} /> 📍 Location: Sumedang, Indonesia</p>
        <p className="contact-info"><Github size={20} /> 🔗 GitHub: <a href="https://github.com/rfebriyan17" target="_blank">github.com/rfebriyan17</a></p>

        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Nama Anda"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Anda"
              value={form.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Pesan Anda"
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" className="submit-btn">
              <Send size={20} /> Kirim Pesan
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
