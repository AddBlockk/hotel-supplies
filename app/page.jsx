import Image from "next/image";
import main from "../public/main.png";
import logo from "../public/logo.svg";
import search from "../public/Search.svg";
import Favorite from "../public/Favorite.svg";
import bag from "../public/Bag.png";
import user from "../public/User.png";
import Link from "next/link";
import DescriptionRooms from "./components/DescriptionRooms";
import Beliefs from "./components/Beliefs";
import Catalog from "./components/Catalog";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="max-w-[1920px]">
      <Image src={main} width={1920} className="" alt="" />
      <nav className="flex justify-between h-[80px] items-center">
        <ul className="flex gap-[40px]">
          <li>
            <Link href="#">bedding</Link>
          </li>
          <li>
            <Link href="#">towels</Link>
          </li>
          <li>
            <Link href="#">bathrobes and slippers</Link>
          </li>
        </ul>
        <Link href="./">
          <Image src={logo} width={40} alt="" />
        </Link>
        <div className="flex gap-[40px]">
          <ul className="flex gap-[40px]">
            <li>
              <Link href="#">catalog</Link>
            </li>
            <li>
              <Link href="#">about us</Link>
            </li>
            <li>
              <Link href="#">Contact us</Link>
            </li>
          </ul>
          <ul className="flex gap-[20px]">
            <li>
              <Image src={search} alt="" />
            </li>
            <li>
              <Image src={Favorite} alt="" />
            </li>
            <li>
              <Image src={bag} alt="" />
            </li>
            <li>
              <a href="/signIn">
                <Image src={user} alt="" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <DescriptionRooms />
      <Beliefs />
      <Catalog />
      <Contact />
    </div>
  );
}
