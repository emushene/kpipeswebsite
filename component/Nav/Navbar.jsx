import Image from "next/image";
import styles from "../../styles/Nav/Nav.module.css";
import Toplogo from "./Toplogo";
import { useState } from "react";


import Link from "next/link";

const Navbar = () => {
  const [open, setOpen]  = useState(false)

  return (
    <div className={styles.container}>
      <div className={styles.maindiv}>
      <div className={styles.logo}>
    
  
      </div>
      <div className={styles.icons}>
        <div className={styles.openHours}>
          <h5>Opening Hrs</h5>
        </div>
        <div className={styles.phone}>
          <h3>CALL US</h3>
          <h5>+254 734445456</h5>
        </div>
        <div className={styles.email}>
          <h5>info@kpipes.co.ke</h5>
        </div>
      </div>

      <div className={styles.hambuger} onClick={()=>setOpen(!open)}>
        <h6>MENU</h6> 
        <div className={styles.hamLines}/>
        <div className={styles.hamLines}/>
        <div className={styles.hamLines}/>
        
      <ul onClick={()=>setOpen(false)} className={styles.menu} style={{right : open ? "0px" : "-500vw" }}>
      <li className={styles.menuItem}>
         <Link href={"/"}>Home</Link>
          </li>
          <li className={styles.menuItem}>
          <Link href={"/About"}> About Us</Link>
          </li>
          <li className={styles.menuItem}>
          <Link href={"/Services"}>Services</Link>
          </li>
          <li className={styles.menuItem}>
         <Link href={"/Blog"}>Blog</Link>
          </li>
          <li className={styles.menuItem} style={{display: "none"}}>
          <Link href={"/Investiment"}>Investiment</Link>
          </li>
          <li className={styles.menuItem}>
          <Link href={"/Contactus"}> Contact Us</Link>
          </li>

      </ul>
      </div>
    </div>
    <div className={styles.topBlue}>
      <Toplogo />
      
       </div>
    </div>
  );
};

export default Navbar;
