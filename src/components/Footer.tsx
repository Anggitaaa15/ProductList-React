const Footer = () => {
  return (
    <footer className="footer" id="about">
      <div className="footer-content">
        <a href="#home" className="logo">
          GetSneakers<span>.</span>
        </a>

        <p>Find your style. Step with confidence.</p>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} GetSneakers. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;