import styles from "../../styles/Shop/Shop.module.css";
import ShopCarousel from "../webEnhancers/ShopCarousel";
import Image from "next/image";
import quality from "../../public/Images/quality.webp"


const Shop = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topTitle}>
        <h2>PRODUCTS BY CATEGORY</h2>
      </div>
      <div className={styles.prodCategory}>
        <ShopCarousel />
      </div>
      <div className={styles.gridContainer}>
      <div className={styles.div1}>
        <h2>Most Popular Products</h2>
      </div>
      <div className={styles.div2}>
        <Image 
        src={quality}
        alt=""
        responsive
        object-fit="contain"
        height={400}
        border-radius="15px"
        
    

        />
        <h1>Get Quality Building & Plumbing Materials</h1>
       
    
          <button>
            <h5>Get Quote</h5>
          </button>
        
      </div>
      <div className={styles.div3}>
        <div className="buttonDiv">
          {" "}
          <button>
            <h5>Get Quote</h5>
          </button>
        </div>
      </div>
      <div className={styles.div4}>
        {" "}
        <div className="buttonDiv">
          {" "}
          <button>
            <h5>Get Quote</h5>
          </button>
        </div>
      </div>
      <div className={styles.div5}>
        {" "}
        <div className="buttonDiv">
          {" "}
          <button>
            <h5>Get Quote</h5>
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
