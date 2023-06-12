import Image from "next/image";
import Link from "next/link";

interface ShopType {
  logo: string;
  name: string;
  link: string;
}

const Shop = ({ logo, name, link }: ShopType) => {
  return (
    <Link href={link}>
      <div className="shop">
        <Image alt="shop" src={logo} />

        <div>
          <p>available in the</p>
          <p style={{ fontWeight: 700 }}>{name}</p>
        </div>
      </div>
    </Link>
  );
};

export default Shop;
