import React from 'react';
import './footer.css'
import footerLogo from '../../assets/images/footer_logo.png'
function Footer() {
  return (
    <footer class="footer">
      <div class="footer-column">
        <img src={footerLogo} alt="Company Logo" class="footer-logo"/>
      </div>

      <div class="footer-column">
        <h3>Doormat Navigation</h3>
        <ul class="footer-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#order-online">Order Online</a></li>
          <li><a href="#reservation">Reservation</a></li>
          <li><a href="#login">Login</a></li>
        </ul>
      </div>

      <div class="footer-column">
        <h3>Contacts</h3>
        <ul class="footer-info">
          <li>Lemon street 1</li>
          <li>Phone: +333-456-7890</li>
          <li>Email: info@littlelemon.com</li>
        </ul>
      </div>

      <div class="footer-column">
        <h3>Social Media</h3>
        <ul class="footer-social">
          <li><a href="#facebook">Facebook</a></li>
          <li><a href="#instagram">Instagram</a></li>
        </ul>
      </div>
    </footer>

  );
}

export default Footer;
