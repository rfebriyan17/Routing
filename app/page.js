"use client";

import Link from "next/link";

export default function Page() {
  return (
    <div>
      <style>
        {`
          .container { 
            max-width: 900px; 
            margin: auto; 
            padding: 40px; 
            background: rgba(10, 25, 47, 0.85); 
            border-radius: 15px;
            text-align: center;
            backdrop-filter: blur(10px);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            border: 1px solid rgba(100, 255, 218, 0.2);
          }
          h1 { 
            font-size: 3.5em; 
            color: #64ffda; 
            margin-bottom: 20px; 
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          }
          p { 
            font-size: 1.3em; 
            color: #ffffff; 
            margin-bottom: 30px; 
            line-height: 1.6;
          }
          .btn { 
            display: inline-block; 
            padding: 12px 30px; 
            background: #64ffda; 
            color: #0a192f; 
            border-radius: 5px; 
            text-decoration: none; 
            font-weight: bold;
            font-size: 1.2em;
            transition: background 0.3s ease, transform 0.2s ease;
          }
          .btn:hover { 
            background: #52e0c4; 
            transform: scale(1.05);
          }
          .profile-pic { 
            width: 20vw; 
            height: 20vw; 
            max-width: 200px;
            max-height: 200px;
            border-radius: 50%; 
            border: 5px solid white;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
            transition: transform 0.3s ease;
          }
          .profile-pic:hover {
            transform: scale(1.1);
          }
          .background { 
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-image: url('/path/to/background.jpg'); 
            background-size: cover; 
            background-position: center; 
            padding: 100px 0;
          }
          .section {
            max-width: 900px;
            margin: 50px auto;
            padding: 40px;
            background: rgba(10, 25, 47, 0.85);
            border-radius: 15px;
            text-align: center;
            backdrop-filter: blur(10px);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          }
          .section h2 {
            color: #64ffda;
            font-size: 2.5em;
            margin-bottom: 20px;
          }
          .projects {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 20px;
          }
          .project-card {
            background: #112240;
            padding: 20px;
            border-radius: 10px;
            width: 280px;
            text-align: center;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
          }
          .project-card h3 {
            color: #64ffda;
            font-size: 1.5em;
          }
          .testimonial {
            font-size: 1.2em;
            color: #ddd;
            font-style: italic;
          }
          .contact {
            margin-top: 30px;
          }
        `}
      </style>

      {/* Hero Section */}
      <div className="background">
        <div className="container">
          <img src="/riz.jpg" alt="Profile Picture" className="profile-pic" />
          <h1>Welcome to My Portfolio</h1>
          <p>Hi, I'm Rizki Febriyan, a passionate Software Engineer. Here you can explore my work and projects.</p>
          <Link href="/about" className="btn">Learn More</Link>
        </div>
      </div>

      {/* Projects Section */}
      <div className="section">
        <h2>My Projects</h2>
        <div className="projects">
          <div className="project-card">
            <h3>Project 1</h3>
            <p>Website skripsi online untuk membantu mahasiswa menyusun tugas akhir.</p>
            <Link href="/projects/skripsi-online" className="btn">View</Link>
          </div>
          <div className="project-card">
            <h3>Project 2</h3>
            <p>Aplikasi manajemen tugas berbasis web untuk meningkatkan produktivitas.</p>
            <Link href="/projects/task-manager" className="btn">View</Link>
          </div>
          <div className="project-card">
            <h3>Project 3</h3>
            <p>Website portfolio interaktif untuk pengembang dan desainer.</p>
            <Link href="/projects/portfolio" className="btn">View</Link>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="section">
        <h2>What People Say</h2>
        <p className="testimonial">"Rizki adalah seorang developer yang sangat berbakat dan inovatif dalam setiap proyeknya." - John Doe</p>
        <p className="testimonial">"Aplikasi yang dibuat Rizki sangat membantu dan memiliki desain yang menarik!" - Jane Smith</p>
      </div>

      {/* Contact Section */}
      <div className="section contact">
        <h2>Contact Me</h2>
        <p>Jika tertarik bekerja sama atau ingin berdiskusi, silakan hubungi saya melalui email atau media sosial.</p>
        <Link href="mailto:rizki@example.com" className="btn">Email Me</Link>
      </div>
    </div>
  );
}
