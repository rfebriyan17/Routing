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
            background: rgba(10, 25, 47, 0.85); /* Transparan sedikit untuk efek kaca */
            border-radius: 15px;
            text-align: center;
            backdrop-filter: blur(10px); /* Blur untuk efek kaca */
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3); /* Bayangan lebih dramatis */
            border: 1px solid rgba(100, 255, 218, 0.2); /* Border halus */
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
            transform: scale(1.05); /* Efek sedikit membesar saat hover */
          }
          .profile-pic { 
            width: 150px; 
            height: 150px; 
            border-radius: 50%; 
            margin-bottom: 20px;
            border: 5px solid #64ffda;
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
          <img src="/riz.jpg" alt="Profile Picture" className="profile-pic" />
          <h1>Welcome to My Portfolio</h1>
          <p>Hi, I'm Rizki Febriyan, a passionate Software Engineer. Here you can explore my work and projects.</p>
          <Link href="/about" className="btn">Learn More</Link>
        </div>
      </div>
    </div>
  );
}
