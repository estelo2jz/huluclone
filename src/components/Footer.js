import React from 'react';
import '../styles/Footer.scss';

function Footer() {
  return (
    <div className="footer__container">
      <div className="footer__foot-one">
        <p>BROWSE</p>
        <div className="footer__footer-one">
          <ul>
            <li>Streaming Library</li>
            <li>Live TV</li>
            <li>Live News</li>
            <li>Live Sports</li>
          </ul>
          <ul>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>Originals</li>
            <li>Networks</li>
            <li>Kids</li>
            <li>FX on Hulu</li>
          </ul>
          <ul>
            <li>HBO Max</li>
            <li>Cinemax</li>
            <li>Showtime</li>
            <li>STARZ</li>
          </ul>
          {/* <ul>
            <li>Huku, Disney+, and ESPN+</li>
            <li>Disney bundle with Hulu (No Ads)</li>
            <li>Disney bundle with Hulu + Live TV</li>
            <li>Student Discount</li>
          </ul> */}
        </div>
      </div>
      <div className="footer__foot-one">
        <p>HELP</p>
        <ul>
          <li>Account & Billing</li>
          <li>Plans & Pricing</li>
          <li>Supported Devices</li>
          <li>Accessibility</li>
        </ul>
      </div>
      <div className="footer__foot-one">
        <p>ABOUT US</p>
        <ul>
          <li>Press</li>
          <li>Jobs</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
