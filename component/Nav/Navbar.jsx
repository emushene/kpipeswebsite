import Image from "next/image";
import styles from "../../styles/Nav/Nav.module.css";
import { RiContactsLine} from "@react-icons/all-files/fa/RiContactsLine";

import Link from "next/link"

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image
          src="/Images/kpfc_Builders_kpipes_hardware.png"
          alt=""
          width="180"
          height="50"
        />
      </div>
        <div className={styles.icons}>
            <div className="phone">
               <RiContactsLine />
            </div>
        
        </div>

        <div className={styles.menu}>
        <h6>MENU</h6> 
        <div className={styles.hamLines}/>
        <div className={styles.hamLines}/>
        <div className={styles.hamLines}/>
        <ul >
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
  );
};

export default Navbar;
