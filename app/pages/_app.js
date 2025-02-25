export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <style>
        {`
          * { margin: 0; padding: 0; box-sizing: border-box; scroll-behavior: smooth; }
          body { font-family: 'Poppins', sans-serif; background-color: #0a192f; color: #ccd6f6; text-align: center; padding-top: 80px; }
          nav { background: rgba(10, 25, 47, 0.9); padding: 15px; position: fixed; top: 0; width: 100%; display: flex; justify-content: center; gap: 20px; z-index: 1000; }
          nav a { color: #64ffda; font-size: 18px; text-decoration: none; padding: 10px 15px; transition: 0.3s ease-in-out; }
          nav a:hover { color: #fff; background: #64ffda; border-radius: 5px; }
          .container { max-width: 900px; margin: auto; padding: 20px; }
        `}
      </style>

      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/skills">Skills</a>
        <a href="/services">Services</a>
        <a href="/portfolio">Portfolio</a>
        <a href="/contact">Contact</a>
      </nav>

      <div className="container">
        <Component {...pageProps} />
      </div>
    </>
  );
}
