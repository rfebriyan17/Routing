"use client";

export default function Page() {
  return (
    <div>
      <style>
        {`
          .portfolio-section {
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
          .portfolio-container {
            display: flex;
            justify-content: center;
            gap: 20px;
            flex-wrap: wrap;
          }
          .card {
            background: rgba(10, 25, 47, 0.85);
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            overflow: hidden;
            width: 320px;
            text-align: center;
            border: 1px solid rgba(100, 255, 218, 0.2);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 40px rgba(0, 255, 190, 0.4);
          }
          .card img {
            width: 100%;
            height: auto;
            border-bottom: 2px solid rgba(100, 255, 218, 0.2);
          }
          .card p {
            font-size: 1.2em;
            padding: 20px;
            color: #ffffff;
            line-height: 1.5;
          }
          .background {
            background-image: url('/path/to/background.jpg');
            background-size: cover;
            background-position: center;
            padding: 80px 0;
          }
        `}
      </style>

      <div className="background">
        <div className="portfolio-section">
          <h2>Portfolio</h2>
          <div className="portfolio-container">
            <div className="card">
              <img src="1.jpg" alt="Project 1" />
              <p>✅ Mengembangkan platform untuk menampilkan portofolio desain kreatif
                 ✅ Menyediakan fitur galeri interaktif & animasi smooth</p>
            </div>
            <div className="card">
              <img src="2.jpg" alt="Project 2" />
              <p>✅ Aplikasi mobile untuk mengelola keuangan pribadi & bisnis kecil
                 ✅ Menampilkan dashboard analitik & laporan keuangan real-time</p>
            </div>
            <div className="card">
              <img src="3.jpg" alt="Project 3" />
              <p>✅ Sistem berbasis web untuk mendukung pembelajaran online
                 ✅ Fitur kursus interaktif, kuis, dan sertifikasi digital</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
