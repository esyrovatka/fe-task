import Image from "next/image";
import "../styles/index.scss";
import logo from "../assets/logo.svg";
import Link from "next/link";

const links = ["Chrome Extension", "Price Comparison", "Blog"];

const Header = () => {
  return (
    <div className="container">
      <div className="header">
        <Image alt="logo" src={logo} />

        <div className="links">
          {links.map((item) => (
            <Link href="#" key={item}>
              {item}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
