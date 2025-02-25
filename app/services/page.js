"use client";

import { Code, Smartphone, Brush, Search } from "lucide-react";

export default function Page() {
  return (
    <div>
      <style>
        {`
          .services-section {
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
          .services-container {
            display: flex;
            justify-content: center;
            gap: 20px;
            flex-wrap: wrap;
          }
          .service-card {
            background: rgba(10, 25, 47, 0.85);
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            padding: 30px;
            width: 280px;
            text-align: center;
            border: 1px solid rgba(100, 255, 218, 0.2);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .service-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 40px rgba(0, 255, 190, 0.4);
          }
          .service-icon {
            color: #64ffda;
            margin-bottom: 15px;
          }
          .service-title {
            font-size: 1.5em;
            color: #ffffff;
            margin-bottom: 10px;
          }
          .service-desc {
            font-size: 1.1em;
            color: #d9d9d9;
            line-height: 1.5;
          }
        `}
      </style>

      <div className="services-section">
        <h2>Services</h2>
        <div className="services-container">
          <div className="service-card">
            <Code className="service-icon" size={50} />
            <h3 className="service-title">Web Development</h3>
            <p className="service-desc">
              Membangun website modern, responsif, dan cepat dengan teknologi terbaru.
            </p>
          </div>
          <div className="service-card">
            <Smartphone className="service-icon" size={50} />
            <h3 className="service-title">Mobile App Development</h3>
            <p className="service-desc">
              Mengembangkan aplikasi mobile berkualitas tinggi untuk iOS & Android.
            </p>
          </div>
          <div className="service-card">
            <Brush className="service-icon" size={50} />
            <h3 className="service-title">UI/UX Design</h3>
            <p className="service-desc">
              Mendesain antarmuka yang menarik dan pengalaman pengguna yang optimal.
            </p>
          </div>
          <div className="service-card">
            <Search className="service-icon" size={50} />
            <h3 className="service-title">SEO & Performance</h3>
            <p className="service-desc">
              Mengoptimalkan website agar cepat, efisien, dan ramah mesin pencari.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
