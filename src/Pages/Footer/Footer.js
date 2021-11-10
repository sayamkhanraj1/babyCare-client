import React from 'react';
import './Footer.css'
import logo from '../../images/headerLogo.jpg';

const Footer = () => {
         return (
                  <div>
      <div className="footer-container">
        <div>
          <div className="row">
            <div className="col-md-4">
              <div className="d-flex justify-content-center align-items-center">
              <img src={logo} alt="" />
              </div>
              <p className="mt-4">A major key, never panic. Don’t panic, when it gets crazy and rough, don’t panic, stay calm. They will try to close the door on you, just open it. Another one. How’s business? Boomin. They don’t want us to win. Stay focused. Special cloth alert </p>
            </div>
            <div className="col-md-2">
              <div>
                       <h4>QUICK MENU</h4>
                <ul>
                  <li className="footer-menu">Emission And Exhaust</li>
                  <li className="footer-menu">Body And Wipers</li>
                  <li className="footer-menu">Cooling And Heating</li>
                  <li className="footer-menu">Electronics And Navigation</li>
                  <li className="footer-menu">Engines And Ignition</li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <div>
                       <h4>INFORMATION</h4>
                <ul>
                  <li className="footer-menu">About us</li>
                  <li className="footer-menu">Guides And Articles</li>
                  <li className="footer-menu">Custom Services</li>
                  <li className="footer-menu">Coupon Code</li>
                  <li className="footer-menu">Military Discount</li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <div>
                       <h4>OUR COMPANY</h4>
                <ul>
                  <li className="footer-menu">Delivery</li>
                  <li className="footer-menu">Legal Notice</li>
                  <li className="footer-menu">Term And Conditions</li>
                  <li className="footer-menu">Contact us</li>
                  <li className="footer-menu">Stores</li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <div>
                       <h4>MY ACCOUNT</h4>
                <ul>
                  <li className="footer-menu">My Account</li>
                  <li className="footer-menu">Track your order</li>
                  <li className="footer-menu">Custom service</li>
                  <li className="footer-menu">Return/Exchange</li>
                  <li className="footer-menu">FAQS</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
         );
};

export default Footer;