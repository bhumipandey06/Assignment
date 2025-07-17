import React from "react";
import "../styles/components.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-col logo-col">
          <h2 className="logo">IMPERIAL</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            imperdiet elit ut eleifend bibendum.
          </p>
        </div>

        <div className="footer-col links-col">
          <h3>Useful Links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Service</a>
            </li>
            <li>
              <a href="/room">Room</a>
            </li>
          </ul>
        </div>

        <div className="footer-col subscribe-col">
          <h3>Subscribe</h3>
          <p>Subscribe to receive our news, best offers and discounts.</p>
          <form>
            <input type="email" placeholder="Your Email..." />
            <button type="submit">→</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Imperial Grand Hotel. All Rights Reserved.</p>
        <div className="footer-links">
          <a href="/">Privacy Policy</a>
          <a href="/">Terms of Use</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
