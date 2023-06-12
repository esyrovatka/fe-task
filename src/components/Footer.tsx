import Image from "next/image";
import "../styles/footer.scss";
import logo from "../assets/logo.svg";
import email from "../assets/email-footer.svg";
import Link from "next/link";
import insta from "../assets/instagram.svg";
import face from "../assets/facebook.svg";
import lin from "../assets/linkedin.svg";
import twitter from "../assets/twitter.svg";
import tiktok from "../assets/tiktok.svg";
const Footer = () => {
  return (
    <div className="footer_container">
      <div className="container">
        <div className="footer">
          <div className="info">
            <Image alt="footer_logo" src={logo} />
            <p className="info_text">
              Ratepunk compares hotel room prices across the major online travel
              agencies. When you search for a room, Ratepunk extension scans the
              top booking sites and runs a price comparison, so you can be
              confident in knowing you’re getting the best deal!
            </p>

            <p className="info_copy">
              &#169; 2021 Ratepunk. All Rights Reserved.
            </p>
          </div>
          <div className="quick_links">
            <h6>QUICK LINKS</h6>
            <Link href="#">Price Comparison</Link>
            <Link href="#">Chrome Extension</Link>
            <Link href="#">How It Works</Link>
            <Link href="#">Ratepunk Blog</Link>
            <Link href="#">Privacy Policy</Link>
          </div>
          <div className="contact">
            <h6>contact</h6>

            <div className="email">
              <Image alt="email" src={email} />
              <span>hi@ratepunk.com</span>
            </div>

            <h6>Social</h6>

            <div className="social_links">
              <div className="icons">
                <Image alt="email" src={insta} />
              </div>
              <div className="icons">
                <Image alt="email" src={face} />
              </div>
              <div className="icons">
                <Image alt="email" src={lin} />
              </div>
              <div className="icons">
                <Image alt="email" src={twitter} />
              </div>
              <div className="icons">
                <Image alt="email" src={tiktok} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
