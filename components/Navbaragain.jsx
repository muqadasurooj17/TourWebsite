import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
      <Image src="/img/logo.png" alt="" width="160px" height="69px" />
      <div className="Link">
      <Link href="/" className={styles.listItem}>
  <a >Home</a>
  </Link></div>
      </div>
  
      <div className={styles.item}>
        <ul className={styles.list}>
         <div className="Link">
         <Link  href="/Price" className={styles.listItem}>
  <a >Plan</a>
  </Link></div>
  <div className="Link">
  <Link href="/product/[id].jsx" className={styles.listItem}>
  <a >Place</a>
  </Link></div>
  <div className="Link">
  <Link  href="/cart" className={styles.listItem}>
  <a >Cart</a>
  </Link>
        </div>
        </ul>
      </div>


      <div className={styles.item}>
        <div className="Link">
      <Link href="/Login" className={styles.listItem}>
  <a >Login</a>
  </Link></div>


<div className="Link">
  <Link href="/Register" className={styles.listItem}>
  <a >Rejister</a>
  </Link></div>
  <div className="Link">
  <Link href="/Contactagain" className={styles.listItem}>
  <a >Contact</a>
  </Link></div>
      </div>
    </div>
  );
};

export default Navbar;
