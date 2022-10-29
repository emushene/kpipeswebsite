import styles from "../../styles/Nav/Toplogo.module.css";
import Link from "next/link";
import * as React from "react";


const Toplogo = () => {
  return (
    <nav className={styles.navTopContainer}>
      <div className={styles.container}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
         <Link href={"/"}>Home</Link>
          </li>
          <li className={styles.listItem}>
          <Link href={"/About"}> About Us</Link>
          </li>
          <li className={styles.listItem}>
          <Link href={"/Services"}>Services</Link>
          </li>
          <li className={styles.listItem}>
         <Link href={"/Blog"}>Blog</Link>
          </li>
          <li className={styles.listItem} style={{display: "none"}}>
          <Link href={"/Investiment"}>Investiment</Link>
          </li>
          <li className={styles.listItem}>
          <Link href={"/Contactus"}> Contact Us</Link>
          </li>
        </ul>
        <div className={styles.wrap}>
          <div className={styles.search}>
            <input
              type="text"
              className={styles.searchTerm}
              placeholder="Search KPFC?"
            />
            <button type="submit" className={styles.searchButton}>
              <i>icon here</i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Toplogo;
