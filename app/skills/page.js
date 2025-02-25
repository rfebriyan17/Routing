"use client";

import { Code, Palette, Smartphone, Database } from "lucide-react";

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
          .skills-list {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 15px;
            padding: 0;
          }
          .skill-item {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 1.3em;
            color: #ffffff;
            background: rgba(100, 255, 218, 0.1);
            padding: 12px 20px;
            border-radius: 10px;
            width: fit-content;
            transition: transform 0.3s ease, background 0.3s ease;
          }
          .skill-item:hover {
            transform: scale(1.1);
            background: rgba(100, 255, 218, 0.3);
          }
          .skill-icon {
            color: #64ffda;
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
          <h2>My Skills</h2>
          <ul className="skills-list">
            <li className="skill-item">
              <Code className="skill-icon" size={30} />
              JavaScript (React, Next.js)
            </li>
            <li className="skill-item">
              <Palette className="skill-icon" size={30} />
              Tailwind CSS & UI/UX Design
            </li>
            <li className="skill-item">
              <Smartphone className="skill-icon" size={30} />
              Mobile Development (Flutter, React Native)
            </li>
            <li className="skill-item">
              <Database className="skill-icon" size={30} />
              Backend (Node.js, Express, MongoDB)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
