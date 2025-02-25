"use client";

import { Code, Server, Cloud, BookOpen, GitBranch } from "lucide-react";

export default function Page() {
  return (
    <div>
      <style>
        {`
          .container { 
            max-width: 800px; 
            margin: auto; 
            padding: 40px; 
            background: rgba(10, 25, 47, 0.85); 
            border-radius: 15px;
            text-align: center;
            backdrop-filter: blur(10px);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            border: 1px solid rgba(100, 255, 218, 0.2);
          }
          h2 { 
            font-size: 2.8em; 
            color: #64ffda; 
            margin-bottom: 20px;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          }
          p { 
            font-size: 1.3em; 
            color: #ffffff; 
            margin-bottom: 20px; 
            line-height: 1.6;
          }
          .icon-list {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin-top: 20px;
          }
          .icon {
            display: flex;
            flex-direction: column;
            align-items: center;
            color: #64ffda;
            font-size: 1.2em;
            transition: transform 0.3s ease;
          }
          .icon:hover {
            transform: scale(1.2);
            color: #52e0c4;
          }
          .icon svg {
            width: 40px;
            height: 40px;
            margin-bottom: 5px;
          }
          .background { 
            background-image: url('/path/to/background.jpg'); 
            background-size: cover; 
            background-position: center; 
            padding: 100px 0;
          }
        `}
      </style>

      <div className="background">
        <div className="container">
          <h2>About Me</h2>
          <p>
            Hi, I'm Rizki Febriyan, a passionate Software Engineer specializing in web development.
            With years of experience in building dynamic and high-performing applications, I thrive
            on solving complex problems and turning ideas into reality.
          </p>
          <p>
            My expertise includes modern JavaScript frameworks, backend technologies, and cloud-based
            solutions. I enjoy collaborating with teams and continuously learning new trends in the
            industry to deliver cutting-edge solutions.
          </p>
          <p>
            When I'm not coding, I love exploring new technologies, contributing to open-source projects,
            and sharing knowledge through blog posts and mentorship.
          </p>

          {/* Ikon untuk Menunjukkan Keahlian */}
          <div className="icon-list">
            <div className="icon">
              <Code />
              <span>Web Dev</span>
            </div>
            <div className="icon">
              <Server />
              <span>Backend</span>
            </div>
            <div className="icon">
              <Cloud />
              <span>Cloud</span>
            </div>
            <div className="icon">
              <BookOpen />
              <span>Mentorship</span>
            </div>
            <div className="icon">
              <GitBranch />
              <span>Open Source</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
