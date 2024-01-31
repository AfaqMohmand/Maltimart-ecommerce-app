import React from 'react';
import './footer.css';

const Footer = () => (
  <footer className="Footer">
    <div className="Footer-container">
      <div className="Footer-col">
        <h3 className="Footer-col-title">About Us</h3>
        <p className="Footer-col-text">Learn more about our company and mission.</p>
      </div>
      <div className="Footer-col">
        <h3 className="Footer-col-title">Support</h3>
        <p className="Footer-col-text">Get help with using our products and services.</p>
      </div>
      <div className="Footer-col">
        <h3 className="Footer-col-title">Contact</h3>
        <p className="Footer-col-text">Get in touch with us for any inquiries.</p>
      </div>
      <div className="Footer-col">
        <h3 className="Footer-col-title">Follow Us</h3>
        <p className="Footer-col-text">Find us on social media to stay updated.</p>
      </div>
    </div>
    <p className="Footer-copyright">Copyright &copy; 2023</p>
  </footer>
);

export default Footer;
