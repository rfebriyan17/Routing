import Navbar from "@/components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>My Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" />
      </head>
      <body style={{ margin: 0, fontFamily: "'Poppins', sans-serif", backgroundColor: "#0a192f", color: "#ccd6f6", textAlign: "center" }}>
        <Navbar />
        <div style={{ paddingTop: "80px" }}>{children}</div>
      </body>
    </html>
  );
}
