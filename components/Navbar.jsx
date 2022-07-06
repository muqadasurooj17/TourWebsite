import React from "react";

//import "./Navbar.css";
//import { Link } from "react-scroll";
import Link from "next/link";
import Image from "next/image";
const navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
      <div className="n-name" >
      <Image src="/img/logo2.png" alt="" width="160px" height="69px" />
</div>
     
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>

  <Link href="/" spy={true} smooth={true}>   
                Home</Link>
            </li>

            <li>
              <Link href="/Price"  spy={true} smooth={true}>
                Plans
              </Link>
            </li>
            <li>
              <Link href="/product/[id].jsx" spy={true} smooth={true}>
                Place
              </Link>
            </li>
            <li>
              <Link href="/Login" spy={true} smooth={true}>
                Login
              </Link>
            </li>
            <li>
              <Link href="/Register"  spy={true} smooth={true}>
                Rejister
              </Link>
            </li>
          </ul>
        </div>
        <Link href= "/Contactagain"  spy={true} smooth={true}>
        <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default navbar;
