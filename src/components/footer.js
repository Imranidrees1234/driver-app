import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info */}
        <div className="footer-info">
          <h4>Your Company Name</h4>
          <p>&copy; 2025 All Rights Reserved</p>
          <p>1234 Address St, City, Country</p>
          <p>Email: info@yourcompany.com</p>
        </div>

        {/* Social Media Links */}
        <div className="social-links">
          <h4>Follow Us</h4>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </div>

        {/* Quick Links */}
        <div className="quick-links">
          <h4>Quick Links</h4>
          <a href="/privacy-policy" rel="noopener noreferrer">
            Privacy Policy
          </a>
          <a href="/terms-of-service" rel="noopener noreferrer">
            Terms of Service
          </a>
          <a href="/contact" rel="noopener noreferrer">
            Contact Us
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Designed with ❤️ by Your Company</p>
      </div>
    </footer>
  );
};

export default Footer;
