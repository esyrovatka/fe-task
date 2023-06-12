import "../styles/UnderFooter.scss";
import Shop from "./Shops";
import chromeShop from "../assets/chrome.svg";
import appleShop from "../assets/apple.svg";

const UnderFooter = () => {
  return (
    <div className="under_footer_container">
      <div className="container">
        <div className="under_footer">
          <Shop
            logo={chromeShop}
            name="chrome web store"
            link="https://chrome.google.com/webstore/detail/ratepunk-same-hotel-way-c/gdaioanblcnghddimngklkhgcbomfdck?utm_source=ratepunk"
          />
          <Shop
            logo={appleShop}
            name="apple app store"
            link="https://apps.apple.com/app/ratepunk/id1607823726"
          />
          <div style={{ color: "#fff" }}>
            &#9733;&#9733;&#9733;&#9733;&#9733;<span>Chrome Store reviews</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnderFooter;
